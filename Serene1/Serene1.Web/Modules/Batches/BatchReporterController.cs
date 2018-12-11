using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.Mvc;

namespace Serene1.Modules.Batches
{
    [Authorize, RoutePrefix("BatchReporter"), Route("{action=index}")]
    public class BatchReporterController : Controller
    {
        [Authorize, HttpGet, Route("~/BatchReporter")]
        public ActionResult BatchReporter()
        {
            return View(MVC.Views.Batches.BatchReporter);
        }
    }
}