using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading;
using System.Threading.Tasks;

namespace Practice
{
    class Program
    {
        static void Main(string[] args)
        {
            Counting del =new Counting(DoTask.callbackMethod);

            DoTask.ToAsync();
            DoTask.RunTask(del);
            
            Console.WriteLine("Task St");
            Console.ReadLine();
        }
    }

    public delegate void Counting(string message);
    public class DoTask
    {
        public async static void ToAsync()
        {
            Console.WriteLine("Task Start");
            string a= getValue();
        }
        public static string getValue()
        {
            Thread.Sleep(5000);
            return "yes";
        }
        public static void callbackMethod(string message)
        {
            Console.WriteLine(message);
        }
        public static void RunTask(Counting callback)
        {
            callback("Task Started");
            //int i = 0;
            //var timer=new System.Threading.Timer(o =>
            //{
            //    i += 1;
            //    callback("Value is:" + i);                
            //}, null, 0, 1000);
            Thread.Sleep(5000);
            callback("Task Completed");
        }
    }
}
