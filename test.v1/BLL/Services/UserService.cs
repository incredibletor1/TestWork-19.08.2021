using BLL.DTO;
using BLL.Interfaces;
using DAL.Entities;
using Microsoft.AspNetCore.Identity;
using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace BLL.Services
{
    public class UserService : IUserService
    {
        private readonly UserManager<User> _userManager;
        private readonly SignInManager<User> _signInManager;

        public UserService(UserManager<User> userManager, SignInManager<User> signInManager)
        {
            _userManager = userManager;
            _signInManager = signInManager;
        }

        public async Task AddUser(UserDTO userDTO)
        {
            User user = AutoMapperService<UserDTO, User>.Mapper(userDTO);
            user.Id = Guid.NewGuid().ToString();
            var result = await _userManager.CreateAsync(user, userDTO.Password);
            if (!result.Succeeded)
            {
                List<IdentityError> errorList = result.Errors.ToList();
                string errors = "";
                foreach(var error in errorList)
                {
                    errors += $"ERROR : {error.Description}\n";
                }
                throw (new Exception(errors));
            }
        }

        public async Task<UserDTO> LoginUser(UserDTO userDTO)
        {
            var result = await _signInManager.PasswordSignInAsync(userDTO.UserName, userDTO.Password, true, false);
            if (!result.Succeeded)
            {
                throw (new Exception($"ERROR : {result}\n"));
            }
            User user = await _userManager.FindByNameAsync(userDTO.UserName);
            UserDTO resultUserDTO = AutoMapperService<User, UserDTO>.Mapper(user);
            if (resultUserDTO != null)
            {
                return resultUserDTO;
            }
            else throw (new Exception("ERROR : No user"));
        }
    }
}

