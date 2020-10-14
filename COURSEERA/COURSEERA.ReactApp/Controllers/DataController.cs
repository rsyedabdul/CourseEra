using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations.Schema;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;

namespace COURSEERA.ReactApp.Controllers
{
    [Route("api/[controller]")]
    public class DataController : Controller
    {
        [HttpGet("[action]")]
        [Route("api/Course/Index")]
        public IEnumerable<Course> CoursesList()
        {
            var coursesList = new List<Course>
            {
                new Course { CourseTitle = "ReadWorks", CourseId=1, AuthorId=1, CourseDesc="3rd graders workbook" },
                new Course { CourseTitle = "ThinkCentral", CourseId=2, AuthorId=4, CourseDesc="eBook used for online learning" },
                new Course { CourseTitle = "Rich Dad and Poor Dad", CourseId=3, AuthorId=2, CourseDesc="Teaches how to become Entrepreneur" },
                new Course { CourseTitle = "The Obliteration of Falsehood", CourseId=4, AuthorId=3, CourseDesc="English transalation of Ja al Haq" },
            };

            return coursesList;
        }


        [HttpPost("[action]")]
        [Route("api/Course/Create")]
        public int Create(Course course)
        {
            return 0;
        }
    }
}
