using Microsoft.Extensions.Logging;
using test.v2.Logger;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;



namespace test.v2.Logger
{
    public static class FileLoggerExtensions
    {

        public static ILoggerFactory AddFile(this ILoggerFactory factory,
                                           string filePath)
        {

            factory.AddProvider(new FileLoggerProvider(filePath));
            return factory;

        }

    }

}
