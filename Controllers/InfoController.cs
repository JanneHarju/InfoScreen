
using Microsoft.AspNetCore.Mvc;
using Newtonsoft.Json;
using InfoScreen.Models;
using System.Collections.Generic;
using System.Linq;

namespace InfoScreen.Controllers
{
    [Produces("application/json")]
    [Route("api/infos")]
    public class InfoController : Controller
    {
        List<Info> infos = new List<Info>();
        private string filePath = @"./info.json";
        public InfoController()
         : base()
        {
            infos = GetInfosFromFile();
        }



        // GET api/values
        [ResponseCache(Location = ResponseCacheLocation.None, NoStore = true)]
        [HttpGet]
        public List<Info> Get()
        {
            return infos;
        }
        // GET api/values/5
        [HttpGet("{id}")]
        public Info Get(int id)
        {
            return infos.Find(x=>x.id == id);
        }

        // PUT api/values/5
        [HttpPut("{id}")]
        public void Put(int id, [FromBody]Info value)
        {
            Info updateInfo = infos.Find(item => item.id == id);
            //updateInfo = value;
            updateInfo.label_up_1 = value.label_up_1;
            updateInfo.label_up_2 = value.label_up_2;
            updateInfo.label_up_3 = value.label_up_3;
            updateInfo.label_up_4 = value.label_up_4;
            updateInfo.label_up_5 = value.label_up_5;
            updateInfo.label_up_6 = value.label_up_6;
            updateInfo.label_down_1 = value.label_down_1;
            updateInfo.label_down_2 = value.label_down_2;
            updateInfo.label_down_3 = value.label_down_3;
            updateInfo.label_down_4 = value.label_down_4;
            updateInfo.label_down_5 = value.label_down_5;
            updateInfo.label_down_6 = value.label_down_6;
            updateInfo.value_up_1 = value.value_up_1;
            updateInfo.value_up_2 = value.value_up_2;
            updateInfo.value_up_3 = value.value_up_3;
            updateInfo.value_up_4 = value.value_up_4;
            updateInfo.value_up_5 = value.value_up_5;
            updateInfo.value_up_6 = value.value_up_6;
            updateInfo.value_down_1 = value.value_down_1;
            updateInfo.value_down_2 = value.value_down_2;
            updateInfo.value_down_3 = value.value_down_3;
            updateInfo.value_down_4 = value.value_down_4;
            updateInfo.value_down_5 = value.value_down_5;
            updateInfo.value_down_6 = value.value_down_6;
            updateInfo.label_right_down_1 = value.label_right_down_1;
            updateInfo.label_right_down_2 = value.label_right_down_2;
            updateInfo.value_right_down_1 = value.value_right_down_1;
            updateInfo.value_right_down_2 = value.value_right_down_2;
            updateInfo.update_info = value.update_info;
            SaveToFIle(infos);
        }
        // POST api/values
        [HttpPost]
        public void Post([FromBody]Info value)
        {
            Info lastInfo = infos.OrderByDescending(x => x.id).First();
            value.id = lastInfo.id + 1;
            infos.Add(value);
            SaveToFIle(infos);
        }
        private void SaveToFIle(List<Info> info)
        {
            string json = JsonConvert.SerializeObject(info, Formatting.Indented);

            //write string to file
            System.IO.File.WriteAllText(filePath, json);
        }
        private List<Info> GetInfosFromFile()
        {
            //List<Hero> heroesFromFile = new List<Hero>();
            string heroString = System.IO.File.ReadAllText(filePath);
            return JsonConvert.DeserializeObject<List<Info>>(heroString);
        }
    }
}
