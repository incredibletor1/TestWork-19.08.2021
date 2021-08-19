using BLL.DTO;
using BLL.DTO.VM;
using BLL.Interfaces;
using BLL.Services;
using DAL.Interfaces;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Mvc;
using prod.Filters;
using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using System.Threading.Tasks;

namespace prod.Controllers
{
    [ServiceFilter(typeof(ExceptionFilter))]
    [ApiController]
    [Route("[controller]")]
    public class CustomerController : ControllerBase
    {
        private readonly ICustomerService _customerService;

        public CustomerController(ICustomerService customerService)
        {
            _customerService = customerService;
        }

        [AllowAnonymous]
        [HttpGet]
        [Route("ShowCustomerList")]
        public ActionResult<List<CustomerDTO>> ShowCustomerList()
        {
            try
            {
                return _customerService.ShowCustomerList();
            }
            catch (ValidationException e)
            {
                return NotFound(e.Message);
            }
        }

        [AllowAnonymous]
        [HttpDelete]
        [Route("DeleteCustomer")]
        public ActionResult<Task> DeleteCustomer(int CustomerId)
        {
            try
            {
                _customerService.DeleteCustomer(CustomerId);
                return Ok("Success");
            }
            catch (ValidationException e)
            {
                return NotFound(e.Message);
            }
        }

        [AllowAnonymous]
        [HttpPost]
        [Route("AddCustomer")]
        public ActionResult<Task> AddCustomer(VMAddCustomer vMAddCustomer)
        {
            try
            {
                CustomerDTO someCustomerDTO = AutoMapperService<VMAddCustomer, CustomerDTO>.Mapper(vMAddCustomer);
                _customerService.AddCustomer(someCustomerDTO);
                return Ok("Success");
            }
            catch (ValidationException e)
            {
                return NotFound(e.Message);
            }
        }

        [AllowAnonymous]
        [HttpPut]
        [Route("UpdateCustomer")]
        public ActionResult<Task> UpdateCustomer(VMUpdateCustomer vMUpdateCustomer)
        {
            try
            {
                CustomerDTO someCustomerDTO = AutoMapperService<VMUpdateCustomer, CustomerDTO>.Mapper(vMUpdateCustomer);
                _customerService.UpdateCustomer(someCustomerDTO);
                return Ok("Success");
            }
            catch (ValidationException e)
            {
                return NotFound(e.Message);
            }
        }
    }
}
