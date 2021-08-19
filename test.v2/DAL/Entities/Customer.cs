using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace DAL.Entities
{
    public class Customer
    {
        public int Id { get; set; }

        public string Position { get; set; }

        public string Email { get; set; }

        public string Name { get; set; }

        public int Age { get; set; }
    }
}
