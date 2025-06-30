using SaudiAirportDemoWebApplication.Models;
using Sitecore.Data;
using Sitecore.Diagnostics;
using Sitecore.ExperienceForms.Mvc;
using Sitecore.ExperienceForms.Mvc.Extensions;
using Sitecore.JavaScriptServices.Forms;
using Sitecore.JavaScriptServices.Forms.Models;
using Sitecore.LayoutService.Configuration;
using Sitecore.LayoutService.ItemRendering.ContentsResolvers;
using Sitecore.Mvc.Presentation;




namespace SaudiAirportDemoWebApplication.ContentResolvers
{
    public class SitecoreFormResolver : RenderingContentsResolver
    {
        private readonly IJsonFormService _jsonFormService;
        private readonly IFormRenderingContext _formRenderingContext;
        //FormsRenderingContentsResolver 
        public SitecoreFormResolver(IJsonFormService jsonFormService, IFormRenderingContext formRenderingContext)
        {
            Assert.ArgumentNotNull(jsonFormService, "jsonFormService");
            Assert.ArgumentNotNull(formRenderingContext, "formRenderingContext");
            _jsonFormService = jsonFormService;
            _formRenderingContext = formRenderingContext;
        }

        public override object ResolveContents(Rendering rendering, IRenderingConfiguration renderingConfig)
        {
            if (rendering.RenderingItem == null || string.IsNullOrWhiteSpace(rendering.DataSource))
            {
                return base.ResolveContents(rendering, renderingConfig);
            }

            _formRenderingContext.SessionId = ID.NewID.ToClientIdString();
            FormConJSS form = (FormConJSS) _jsonFormService.GetForm(rendering.DataSource);
            if (rendering.Model is RenderingModel { PageItem: not null } renderingModel)
            {
                form.ContextItemId = renderingModel.PageItem.ID;
            }
            form.RuquestToken = PageContext.Current.RequestContext.HttpContext.Request.Cookies["__RequestVerificationToken"].Value;
            return form;
        }
    }
  
}