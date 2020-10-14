using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using COURSEERA.API.Models;

namespace COURSEERA.API.Populator
{
    public class DataProcessor
    {
        public IEnumerable<Course> GetCourses()
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

        public IEnumerable<Author> GetAuthors()
        {
            var authorsList = new List<Author>
            {
                new Author { AuthorName="XX", AuthorPic= new byte[]{ 0x32, 0x00, 0x1E, 0x00 }},
                new Author {  AuthorName="YY", AuthorPic= new byte[]{ 0x32, 0x00, 0x1E, 0x00 }},
                new Author { AuthorName="Robert Kiyosaki", AuthorPic= new byte[]{ 0x32, 0x00, 0x1E, 0x00 }},
                new Author { AuthorName="Ahmed Yaar Khan", AuthorPic= new byte[]{ 0x32, 0x00, 0x1E, 0x00 }},
            };

            return authorsList;

        }

    }
}