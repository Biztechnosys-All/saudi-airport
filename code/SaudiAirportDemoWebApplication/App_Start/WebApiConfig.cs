﻿using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.Http;
namespace SaudiAirportDemoWebApplication.App_Start
{
    public class WebApiConfig
    {

        public static void Register(HttpConfiguration config)
        {
            config.EnableCors();  
           config.MapHttpAttributeRoutes();
        }
    }
}