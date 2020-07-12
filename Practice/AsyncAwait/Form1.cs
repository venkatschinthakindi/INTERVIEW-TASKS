using System;
using System.Collections.Generic;
using System.ComponentModel;
using System.Data;
using System.Drawing;
using System.Linq;
using System.Text;
using System.Threading;
using System.Threading.Tasks;
using System.Windows.Forms;

namespace AsyncAwait
{
    public partial class Form1 : Form
    {
        public Form1()
        {
            InitializeComponent();
        }

        private void Form1_Load(object sender, EventArgs e)
        {
            Counting del = new Counting(callbackMethod);

            DoTask.ToAsync();
            DoTask.RunTask(del);
            label1.Text = "Task St";
            //Console.WriteLine("Task St");
        }
        void callbackMethod(string message)
        {
            //label1.Text = message;
        }        
    }
    public delegate void Counting(string message);
    public class DoTask
    {
        public async static void ToAsync()
        {
            Console.WriteLine("Task Start");
            string a = getValue();
        }
        public static string getValue()
        {
            Thread.Sleep(5000);
            return "yes";
        }

        public static void RunTask(Counting callback)
        {
            callback("Task Started");
            int i = 0;
            var timer = new System.Threading.Timer(o =>
            {
                i += 1;
                callback("Value is:" + i);
            }, null, 0, 1000);
            
            callback("Task Completed");
        }
    }
}
