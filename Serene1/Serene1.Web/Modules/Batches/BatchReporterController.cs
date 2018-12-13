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

        public ActionResult BatchReportViewer()
        {
            return View(MVC.Views.Batches.BatchReportViewer);
        }

        [HttpGet]
        public ActionResult GetBatchID()
        {
            return null;
        }
        public ActionResult GetProductAmount()
        {
            return null;
        }
        public ActionResult GetSpeed()
        {
            return null;
        }
        public ActionResult GetProduced()
        {
            return null;
        }
        public ActionResult GetAccepted()
        {
            return null;
        }
        public ActionResult GetUnacceptable()
        {
            return null;
        }
        public new ActionResult GetType()
        {
            return null;
        }
    }
}