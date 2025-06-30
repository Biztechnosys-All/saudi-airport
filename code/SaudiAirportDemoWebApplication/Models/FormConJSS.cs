using Sitecore.Data;
using Sitecore.ExperienceForms.Models;
using Sitecore.JavaScriptServices.Forms.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

namespace SaudiAirportDemoWebApplication.Models
{
    public class FormConJSS
    {
        //
        // Summary:
        //     Randomly generated prefix used to disambiguate multiple forms on the same page
        public string HtmlPrefix { get; set; }

        //
        // Summary:
        //     Hidden form field that maintains server-side state on the form (across steps)
        public HtmlFormField FormSessionId { get; set; }
        public string RuquestToken { get; set; }
        //
        // Summary:
        //     Hidden form field required by FXB model binder
        public HtmlFormField FormItemId { get; set; }

        //
        // Summary:
        //     Hidden form field required by FXB model binder
        public HtmlFormField PageItemId { get; set; }

        //
        // Summary:
        //     Hidden form field required for CSRF validation
        public HtmlFormField AntiForgeryToken { get; set; }

        //
        // Summary:
        //     The form's metadata/viewmodel. Top level data about the form and its settings.
        public IViewModel Metadata { get; set; }

        //
        // Summary:
        //     The fields that are on the current page of the form (note: sections contain sub-fields
        //     and can be nested)
        public IEnumerable<FormField> Fields { get; set; }

        //
        // Summary:
        //     Id of an context item
        public ID ContextItemId { get; set; }
        public static explicit operator FormConJSS(Form v)
        {
            if (v == null) return null;

            return new FormConJSS
            {
                HtmlPrefix = v.HtmlPrefix,
                FormSessionId = v.FormSessionId,
                FormItemId = v.FormItemId,
                PageItemId = v.PageItemId,
                AntiForgeryToken = v.AntiForgeryToken,
                Metadata = v.Metadata,
                Fields = v.Fields,
                ContextItemId = v.ContextItemId
            };
        }

    }
}