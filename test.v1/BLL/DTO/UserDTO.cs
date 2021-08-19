using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace BLL.DTO
{
    public class UserDTO
    {
        [Key]
        public string Id { get; set; }

        public string Name { get; set; }

        public bool TwoFactorEnabled { get; set; }

        public bool EmailConfirmed { get; set; }

        public string UserName { get; set; }

        [Required]
        public string Email { get; set; }

        public string PhoneNumber { get; set; }

        public string Password { get; set; }

    }
}
