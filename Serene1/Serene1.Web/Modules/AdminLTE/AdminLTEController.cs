
using System;
using BeerProduction.OPC;

namespace Serene1.AdminLTE
{
    using Serenity.Web;
    using System.Web.Mvc;

    [Authorize, RoutePrefix("AdminLTE"), Route("{action=index}")]
    public class AdminLTEController : Controller
    {
        public ActionResult DashboardV2()
        {
            return View(MVC.Views.AdminLTE.DashboardV2);
        }

        public ActionResult Widgets()
        {
            return View(MVC.Views.AdminLTE.Widgets);
        }

        public ActionResult Calendar()
        {
            return View(MVC.Views.AdminLTE.Calendar);
        }

        [HttpGet]
        public ActionResult GetProduced()
        {
            try
            {
                MainViewModel main = new MainViewModel();
                return Json(new { success = true/*, produced = main.ProgramCubeAdminProdProcessedCount*/, responseText = "success" },
                    JsonRequestBehavior.AllowGet);
            }
            catch (Exception e)
            {
                return Json(new { success = false, responseText = "Getting TimeRegs Failed" },
                    JsonRequestBehavior.AllowGet);
            }
        }
    }
}