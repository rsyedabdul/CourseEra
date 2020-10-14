using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;
using System.Linq;
using System.Web;

namespace COURSEERA.API.Models
{
    public class Course
    {
        [Key]
        public int CourseId { get; set; }
        public string CourseTitle { get; set; }
        public string CourseDesc { get; set; }
        [ForeignKey("AuthorId")]
        public Author author { get; set; }
        public int AuthorId { get; set; }
    }
}