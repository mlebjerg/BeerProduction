
using System;
using BeerProduction.OPC;

namespace Serene1.AdminLTE
{
    using Serenity.Web;
    using System.Web.Mvc;
    using BeerProduction.OPC;

    [Authorize, RoutePrefix("AdminLTE"), Route("{action=index}")]
    public class AdminLTEController : Controller
    {
        private OpcStart opc;
        
        public ActionResult DashboardV2()
        {
            return View(MVC.Views.AdminLTE.DashboardV2);
        }
        public ActionResult BatchStarter()
        {
            return View(MVC.Views.AdminLTE.BatchStarter);
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
                return Json(new { success = true, produced = OpcStart.prodProc, responseText = "success" },
                    JsonRequestBehavior.AllowGet);
            }
            catch (Exception e)
            {
                return Json(new { success = false, responseText = "Getting TimeRegs Failed" },
                    JsonRequestBehavior.AllowGet);
            }
        }

        public ActionResult ActionBtnClick(int data)
        {
            try
            {
                OpcStart.Instance.SetCntrlCmd(data);
                return Json(new { success = true, responseText = "success" },
                    JsonRequestBehavior.AllowGet);
            }
            catch (Exception e)
            {
                return Json(new { success = false, responseText = "Getting TimeRegs Failed" },
                    JsonRequestBehavior.AllowGet);
            }
        }

        public ActionResult SendBtnClick(int amt, int beerType, int batchID)
        {
            try
            {
                OpcStart.Instance.SetBatchAmount(amt);
                OpcStart.Instance.SetBeerTypeID(beerType);
                OpcStart.Instance.SetBatchID(batchID);
                return Json(new { success = true, responseText = "success" },
                    JsonRequestBehavior.AllowGet);
            }
            catch (Exception e)
            {
                Console.WriteLine(e);
                throw;
            }
        }
    }
 }
