
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

        public ActionResult GetNextBatchID()
        {
            try
            {
                return Json(new { success = true, nextBatchID = OpcStart.nextBatchID, responseText = "success" },
                    JsonRequestBehavior.AllowGet);
            }
            catch (Exception e)
            {
                return Json(new { success = false, responseText = "Getting TimeRegs Failed" },
                    JsonRequestBehavior.AllowGet);
            }
        }

        public ActionResult GetNextProductID()
        {
            try
            {
                return Json(new { success = true, nextProductID = OpcStart.nextProductID, responseText = "success" },
                    JsonRequestBehavior.AllowGet);
            }
            catch (Exception e)
            {
                return Json(new { success = false, responseText = "Getting TimeRegs Failed" },
                    JsonRequestBehavior.AllowGet);
            }
        }

        public ActionResult GetNextProductAmount()
        {
            try
            {
                return Json(new { success = true, nextProductAmount = OpcStart.nextProductAmount, responseText = "success" },
                    JsonRequestBehavior.AllowGet);
            }
            catch (Exception e)
            {
                return Json(new { success = false, responseText = "Getting TimeRegs Failed" },
                    JsonRequestBehavior.AllowGet);
            }
        }

        public ActionResult GetHumidity()
        {
            try
            {
                return Json(new { success = true, humidity = OpcStart.humidity, responseText = "success" },
                    JsonRequestBehavior.AllowGet);
            }
            catch (Exception e)
            {
                return Json(new { success = false, responseText = "Getting TimeRegs Failed" },
                    JsonRequestBehavior.AllowGet);
            }
        }

        public ActionResult GetTemperature()
        {
            try
            {
                return Json(new { success = true, temperature = OpcStart.temperature, responseText = "success" },
                    JsonRequestBehavior.AllowGet);
            }
            catch (Exception e)
            {
                return Json(new { success = false, responseText = "Getting TimeRegs Failed" },
                    JsonRequestBehavior.AllowGet);
            }
        }

        public ActionResult GetVibration()
        {
            try
            {
                return Json(new { success = true, vibration = OpcStart.vibration, responseText = "success" },
                    JsonRequestBehavior.AllowGet);
            }
            catch (Exception e)
            {
                return Json(new { success = false, responseText = "Getting TimeRegs Failed" },
                    JsonRequestBehavior.AllowGet);
            }
        }

        public ActionResult GetMachinespeed()
        {
            try
            {
                return Json(new { success = true, machinespeed = OpcStart.machinespeed, responseText = "success" },
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
    }
 }
