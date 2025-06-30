using Sitecore.Data;
using Sitecore.Data.Items;
using Sitecore.SecurityModel;
using System.Collections.Generic;
using System.Linq;
using System.Web.Http;
using System.Web.Http.Cors;

namespace SaudiAirportDemoWebApplication.Controllers
{
    //[EnableCors(origins: "http://localhost:3001", headers: "*", methods: "*")]
    [RoutePrefix("api/forms")]
    public class FormsApiController : ApiController
    {
        [HttpGet]
        [Route("get/{formId}")]
        public IHttpActionResult GetForm(string formId)
        {
            if (!ID.IsID(formId))
                return BadRequest("Invalid Form ID");

            var db = Sitecore.Context.Database ?? Sitecore.Configuration.Factory.GetDatabase("master");

            using (new SecurityDisabler())
            {
                var formItem = db.GetItem(ID.Parse(formId));
                if (formItem == null)
                    return NotFound();

                var fields = new List<object>();

                // Pages
                var pages = formItem.Children.Where(c => c.TemplateName == "Page");
                foreach (var page in pages)
                {
                    // Sections
                    var sections = page.Children.Where(c => c.TemplateName == "Section");
                    foreach (var section in sections)
                    {
                        // Fields (all field templates)
                        var formFields = section.Children.Where(f =>
                            f.TemplateName == "Input" ||
                            f.TemplateName == "Email" ||
                            f.TemplateName == "Number" ||
                            f.TemplateName == "Checkbox" ||
                            f.TemplateName == "Dropdown List" ||
                            f.TemplateName == "Multiple-Line Text" ||
                            f.TemplateName == "Button" ||
                            f.TemplateName == "Date" ||
                            f.TemplateName == "List" ||
                            f.TemplateName == "Password" ||
                            f.TemplateName == "Password Confirmation" ||
                            f.TemplateName == "Text" ||
                            f.TemplateName == "Section"

                        // add other field templates as needed
                        );

                        foreach (var field in formFields)
                        {
                            fields.Add(new
                            {
                                Id = field.ID.Guid,
                                Name = field.Name,
                                Title = field["Title"],
                                Placeholder = field["Placeholder text"],
                                IsRequired = field["Is Required"], // may need conversion
                                Template = field.TemplateName
                            });
                        }
                    }
                }

                return Ok(new
                {
                    Id = formItem.ID.Guid,
                    Name = formItem.Name,
                    Fields = fields
                });
            }
        }
    }

}