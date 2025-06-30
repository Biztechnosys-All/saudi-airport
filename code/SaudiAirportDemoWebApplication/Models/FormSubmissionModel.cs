using Newtonsoft.Json.Linq;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

namespace SaudiAirportDemoWebApplication.Models
{

    public class FormSubmissionModel
    {
        public string formId { get; set; }
        public Values values { get; set; }
    }
    public class Values
    {
        public string firstname { get; set; }
        public string lastname { get; set; }
        public string Email { get; set; }
    }
}