using BLL.DTO;
using BLL.DTO.VM;
using BLL.Interfaces;
using BLL.Services;
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
    public class UserController : ControllerBase
    {
        private readonly IUserService _userService;

        public UserController(IUserService userService)
        {
            _userService = userService;
        }

        [AllowAnonymous]
        [HttpPost]
        [Route("Registration")]
        public async Task<IActionResult> AddUser(VMAddUser vMAddUser)
        {
            try
            {
                UserDTO userDTO = AutoMapperService<VMAddUser, UserDTO>.Mapper(vMAddUser);
                await _userService.AddUser(userDTO);
                return Ok("AddUser - Success");
            }
            catch (ValidationException ex)
            {
                return NotFound(ex.Message);
            }
        }

        [AllowAnonymous]
        [HttpPost]
        [Route("Login")]
        public async Task<IActionResult> LoginUser(VMLoginUser vMLoginUser)
        {
            try
            {
                UserDTO userDTO = AutoMapperService<VMLoginUser, UserDTO>.Mapper(vMLoginUser);
                UserDTO resultUserDTO = await _userService.LoginUser(userDTO);
                return Ok(resultUserDTO);
            }
            catch (ValidationException ex)
            {
                return NotFound(ex.Message);
            }
        }
    }
}
