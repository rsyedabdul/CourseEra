using System;
using System.Collections.Generic;
using System.Linq;
using System.Net;
using System.Net.Http;
using System.Web.Http;
using COURSEERA.API.Populator;
using COURSEERA.API.Models;

namespace COURSEERA.API.Controllers
{
    public class ValuesController : ApiController
    {
        [HttpGet]
        [Route("api/CourseList")]
        public IEnumerable<Course> GetCourseList()
        {
            DataProcessor dataProcessor = new DataProcessor();
            return dataProcessor.GetCourses();
        }

        [HttpGet]
        [Route("api/AuthorsList")]
        public IEnumerable<Author> GetAuthorsList()
        {
            DataProcessor dataProcessor = new DataProcessor();
            return dataProcessor.GetAuthors();
        }
    }
}
