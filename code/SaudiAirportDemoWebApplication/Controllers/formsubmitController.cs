

using SaudiAirportDemoWebApplication.Models;
using Sitecore.Diagnostics;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Net;
using System.Net.Http;
using System.Web;
using System.Web.Http;
using System.Web.Http.Cors;


namespace SaudiAirportDemoWebApplication.Controllers
{
    //[EnableCors(origins: "http://localhost:3001", headers: "*", methods: "*")]
    [RoutePrefix("api/forms")]
    public class formsubmitController : ApiController
    {
        // GET: formsubmit
       
        [HttpPost]
        [Route("submit")] 
        public IHttpActionResult Submit(FormSubmissionModel model)
        {
            if (model == null)
            {
                Log.Error("Form submission failed: model is null", this);
                return BadRequest("Invalid form data.");
            }

            // Process your form data
            Log.Info($"Form submitted: {model.values.firstname} ", this);
            Log.Info($"Form submitted: {model.values.lastname} ", this);

            // You can save data to xDB, database, or call external APIs here

            return Ok(new { message = "Form submitted successfully" });
        }
      

    }
}