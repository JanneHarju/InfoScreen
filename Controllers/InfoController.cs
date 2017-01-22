
using Microsoft.AspNetCore.Mvc;
using Newtonsoft.Json;
using InfoScreen.Models;

namespace InfoScreen.Controllers
{
    [Produces("application/json")]
    [Route("api/infos")]
    public class InfoController : Controller
    {
        Info info = new Info();
        private string filePath = @"./info.json";
        public InfoController()
         : base()
        {
            info = GetInfosFromFile();
        }



        // GET api/values
        [ResponseCache(Location = ResponseCacheLocation.None, NoStore = true)]
        [HttpGet]
        public Info Get()
        {
            return info;
        }

        // PUT api/values/5
        [HttpPut("{id}")]
        public void Put(int id, [FromBody]Info value)
        {
            info.label_left_down = value.label_left_down;
            SaveToFIle(info);
        }

        private void SaveToFIle(Info info)
        {
            string json = JsonConvert.SerializeObject(info, Formatting.Indented);

            //write string to file
            System.IO.File.WriteAllText(filePath, json);
        }
        private Info GetInfosFromFile()
        {
            //List<Hero> heroesFromFile = new List<Hero>();
            string heroString = System.IO.File.ReadAllText(filePath);
            return JsonConvert.DeserializeObject<Info>(heroString);
        }
    }
}
