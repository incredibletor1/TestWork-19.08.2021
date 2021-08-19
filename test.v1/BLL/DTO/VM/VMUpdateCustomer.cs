using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace BLL.DTO.VM
{
    public class VMUpdateCustomer
    {
        public int Id { get; set; }

        public string Position { get; set; }

        public string Email { get; set; }

        public int Age { get; set; }
    }
}
