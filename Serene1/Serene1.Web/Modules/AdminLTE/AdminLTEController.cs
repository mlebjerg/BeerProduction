
using System;
using System.Threading.Tasks;
using BeerProduction.OPC;
using WebApplication1.Models;

namespace Serene1.AdminLTE
{
    using Serenity.Web;
    using System.Web.Mvc;
    using BeerProduction.OPC;

    [Authorize, RoutePrefix("Dashboard"), Route("{action=index}")]
    public class AdminLTEController : Controller
    {
        
        [Authorize, HttpGet, Route("~/")]
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
                return Json(new { success = true,/* produced = Opc.Instance.UaApp1.ProgramCubeAdminProdProcessedCount,*/ responseText = "success" },
                    JsonRequestBehavior.AllowGet);
            }
            catch (Exception)
            {
                return Json(new { success = false, responseText = "Getting TimeRegs Failed" },
                    JsonRequestBehavior.AllowGet);
            }
        }



        public ActionResult GetUnacceptableAmountProduced()
        {
            try
            {

                return Json(new { success = true, unacceptableAmountProduced = Opc.Instance.UaApp1.ProgramCubeStatusStateCurrent, responseText = "success" },
                    JsonRequestBehavior.AllowGet);
            }
            catch (Exception )
            {
                return Json(new { success = false, responseText = "Getting TimeRegs Failed" },
                    JsonRequestBehavior.AllowGet);
            }
        }

        public async Task<ActionResult> ActionBtnClick(int data)
        {
            try
            {
                await Opc.Instance.UaApp1.ButtonClick(data);
                return Json(new { success = true, responseText = "success" },
                    JsonRequestBehavior.AllowGet);
            }
            catch (Exception )
            {
                return Json(new { success = false, responseText = "Getting TimeRegs Failed" },
                    JsonRequestBehavior.AllowGet);
            }
        }

    }
 }
