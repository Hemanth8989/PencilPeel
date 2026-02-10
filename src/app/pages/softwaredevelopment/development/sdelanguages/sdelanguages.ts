
import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { ButtonModule } from 'primeng/button';
import { DialogModule } from 'primeng/dialog';
import { TruncatePipe } from "../../../../pipes/truncate-pipe";

interface Technology {
  id: string;
  name: string;
  description: string;
  svgPath: string;
  features: Feature[];
  category: 'primary' | 'secondary';
  colorScheme: 'orange' | 'blue' | 'green' | 'purple' | 'red' | 'indigo' | 'pink' | 'cyan';
  badge?: string;
}

interface Feature {
  title: string;
  description: string;
}

@Component({
  selector: 'app-sdelanguages',
  imports: [CommonModule, ButtonModule, DialogModule, TruncatePipe],
  templateUrl: './sdelanguages.html',
  styleUrl: './sdelanguages.scss'
})
export class Sdelanguages{
  
  // Dialog properties
  displayDialog: boolean = false;
  selectedTechnology: Technology | null = null;

  // Primary programming languages with detailed features
  primaryTechnologies: Technology[] = [
    {
      id: 'java',
      name: 'Java',
      description: 'Robust and scalable programming language ideal for enterprise-level systems and Android apps with object-oriented paradigm and large community support.',
      svgPath: '/svg/java.svg',
      category: 'primary',
      colorScheme: 'orange',
      badge: 'Enterprise',
      features: [
        {
          title: 'Robust and scalable',
          description: 'We will use Java to develop robust and scalable software applications, including Android apps and enterprise-level systems.'
        },
        {
          title: 'Object-oriented',
          description: 'Java\'s object-oriented programming paradigm allows for modular and reusable code.'
        },
        {
          title: 'Large community',
          description: 'Java has a large and active community, ensuring that there are many resources available for learning and troubleshooting.'
        }
      ]
    },
    {
      id: 'python',
      name: 'Python',
      description: 'Versatile language perfect for data analysis, machine learning, and web development with simple syntax and extensive libraries including NumPy, pandas, and scikit-learn.',
      svgPath: '/svg/python.svg',
      category: 'primary',
      colorScheme: 'blue',
      badge: 'AI/ML',
      features: [
        {
          title: 'Easy to learn',
          description: 'Python\'s simple and intuitive syntax makes it easy for our team to learn and use, reducing the time and effort required to develop complex solutions.'
        },
        {
          title: 'Extensive libraries',
          description: 'Python\'s vast collection of libraries and frameworks, including NumPy, pandas, and scikit-learn, provide our team with the tools needed to efficiently analyse data, build machine learning models, and develop web applications.'
        },
        {
          title: 'Data analysis',
          description: 'We will use Python\'s data analysis libraries to extract insights from complex data sets, identify patterns, and make informed decisions.'
        },
        {
          title: 'Machine learning',
          description: 'Our team will leverage Python\'s machine learning libraries to build predictive models that can learn from data and improve over time.'
        },
        {
          title: 'Web development',
          description: 'We will use Python\'s web development frameworks to build scalable and efficient web applications that meet the needs of our clients.'
        }
      ]
    },
    {
      id: 'javascript',
      name: 'JavaScript',
      description: 'Dynamic language for creating interactive and dynamic web applications, including front-end development and server-side programming with Node.js.',
      svgPath: '/svg/javascript.svg',
      category: 'primary',
      colorScheme: 'green',
      badge: 'Full-Stack',
      features: [
        {
          title: 'Interactive and dynamic web applications',
          description: 'We will use JavaScript to create interactive and dynamic web applications, including front-end development and server-side programming with Node.js.'
        },
        {
          title: 'Client-side scripting',
          description: 'JavaScript\'s client-side scripting capabilities allow for dynamic and interactive web pages.'
        },
        {
          title: 'Server-side programming',
          description: 'Node.js allows for server-side programming with JavaScript, enabling fast and scalable server-side development.'
        }
      ]
    },
    {
      id: 'cpp',
      name: 'C++',
      description: 'High-performance language ideal for games, system software, and performance-critical applications with low-level memory management capabilities.',
      svgPath: '/svg/c-plusplus.svg',
      category: 'primary',
      colorScheme: 'purple',
      badge: 'Performance',
      features: [
        {
          title: 'High-performance software applications',
          description: 'Our team will use C++ to develop high-performance software applications, including games, system software, and high-performance computing.'
        },
        {
          title: 'Low-level memory management',
          description: 'C++\'s low-level memory management capabilities allow for fine-grained control over system resources.'
        },
        {
          title: 'Performance-critical applications',
          description: 'C++ is ideal for performance-critical applications, including games, scientific simulations, and high-performance computing.'
        }
      ]
    }
  ];

  // Secondary programming languages
  secondaryTechnologies: Technology[] = [
    {
      id: 'html-css',
      name: 'HTML/CSS',
      description: 'Essential web technologies for creating visually appealing and user-friendly web applications, leveraging structuring and styling capabilities.',
      svgPath: '/svg/html5.svg',
      category: 'secondary',
      colorScheme: 'red',
      features: [
        {
          title: 'Web structure and styling',
          description: 'We will use HTML/CSS to create visually appealing and user-friendly web applications, leveraging its essential role in structuring and styling web pages.'
        }
      ]
    },
    {
      id: 'php',
      name: 'PHP',
      description: 'Server-side scripting language for developing dynamic web applications with robust backend capabilities.',
      svgPath: '/svg/php.svg',
      category: 'secondary',
      colorScheme: 'indigo',
      features: [
        {
          title: 'Dynamic web applications',
          description: 'We will utilize PHP to develop dynamic web applications, leveraging its server-side scripting capabilities.'
        }
      ]
    },
    {
      id: 'csharp',
      name: 'C#',
      description: 'Versatile language for developing robust and scalable web applications with .NET framework integration.',
      svgPath: '/svg/csharp.svg',
      category: 'secondary',
      colorScheme: 'purple',
      features: [
        {
          title: 'Robust and scalable applications',
          description: 'We will use C# to develop robust and scalable web applications, leveraging its versatility and .NET framework integration.'
        }
      ]
    },
    {
      id: 'ruby',
      name: 'Ruby',
      description: 'Elegant language for rapid web application development with Ruby on Rails framework and expressive syntax.',
      svgPath: '/svg/ruby.svg',
      category: 'secondary',
      colorScheme: 'red',
      features: [
        {
          title: 'Rapid development',
          description: 'We will utilize Ruby to develop web applications quickly and efficiently, leveraging its elegant syntax and Ruby on Rails framework.'
        }
      ]
    },
    {
      id: 'go',
      name: 'Go',
      description: 'Modern language for high-performance web applications with excellent concurrency features and modern design.',
      svgPath: '/svg/golang.svg',
      category: 'secondary',
      colorScheme: 'cyan',
      features: [
        {
          title: 'High-performance applications',
          description: 'We will use Go to develop high-performance web applications, leveraging its modern design and concurrency features.'
        }
      ]
    },
    {
      id: 'sql',
      name: 'SQL',
      description: 'Database query language for developing database-driven web applications with powerful data management capabilities.',
      svgPath: '/svg/sql-server.svg',
      category: 'secondary',
      colorScheme: 'blue',
      features: [
        {
          title: 'Database management',
          description: 'We will utilize SQL to develop database-driven web applications, leveraging its ability to manage and query databases.'
        }
      ]
    },
    {
      id: 'typescript',
      name: 'TypeScript',
      description: 'Statically typed JavaScript superset for developing complex and scalable web applications with enhanced development experience.',
      svgPath: '/svg/typescript.svg',
      category: 'secondary',
      colorScheme: 'blue',
      features: [
        {
          title: 'Complex and scalable applications',
          description: 'We will use TypeScript to develop complex and scalable web applications, leveraging its static typing and compatibility with JavaScript.'
        }
      ]
    },
    {
      id: 'swift',
      name: 'Swift',
      description: 'Modern language for iOS and Apple device application development with excellent performance capabilities.',
      svgPath: '/svg/swift.svg',
      category: 'secondary',
      colorScheme: 'orange',
      features: [
        {
          title: 'Apple device applications',
          description: 'We will utilize Swift to develop web applications for Apple devices, leveraging its modern design and performance capabilities.'
        }
      ]
    },
    {
      id: 'kotlin',
      name: 'Kotlin',
      description: 'Modern language for Android development with Java interoperability and contemporary design features.',
      svgPath: '/svg/kotlin.svg',
      category: 'secondary',
      colorScheme: 'purple',
      features: [
        {
          title: 'Android development',
          description: 'We will use Kotlin to develop Android apps and web applications, leveraging its modern design and interoperability with Java.'
        }
      ]
    }
  ];

  // Show dialog method
  showTechnologyDetails(technology: Technology): void {
    this.selectedTechnology = technology;
    this.displayDialog = true;
  }

  // Hide dialog method
  hideDialog(): void {
    this.displayDialog = false;
    this.selectedTechnology = null;
  }

  getColorClasses(colorScheme: string) {
    const colorMap = {
      orange: {
        bg: 'from-orange-400 to-orange-600',
        border: 'border-orange-200',
        text: 'text-orange-600',
        hover: 'hover:border-orange-300',
        shadow: 'hover:shadow-orange-500/20',
        badge: 'bg-orange-500'
      },
      blue: {
        bg: 'from-blue-400 to-blue-600',
        border: 'border-blue-200',
        text: 'text-blue-600',
        hover: 'hover:border-blue-300',
        shadow: 'hover:shadow-blue-500/20',
        badge: 'bg-blue-500'
      },
      green: {
        bg: 'from-green-400 to-green-600',
        border: 'border-green-200',
        text: 'text-green-600',
        hover: 'hover:border-green-300',
        shadow: 'hover:shadow-green-500/20',
        badge: 'bg-green-500'
      },
      purple: {
        bg: 'from-purple-400 to-purple-600',
        border: 'border-purple-200',
        text: 'text-purple-600',
        hover: 'hover:border-purple-300',
        shadow: 'hover:shadow-purple-500/20',
        badge: 'bg-purple-500'
      },
      red: {
        bg: 'from-red-400 to-red-600',
        border: 'border-red-200',
        text: 'text-red-600',
        hover: 'hover:border-red-300',
        shadow: 'hover:shadow-red-500/20',
        badge: 'bg-red-500'
      },
      indigo: {
        bg: 'from-indigo-400 to-indigo-600',
        border: 'border-indigo-200',
        text: 'text-indigo-600',
        hover: 'hover:border-indigo-300',
        shadow: 'hover:shadow-indigo-500/20',
        badge: 'bg-indigo-500'
      },
      pink: {
        bg: 'from-pink-400 to-pink-600',
        border: 'border-pink-200',
        text: 'text-pink-600',
        hover: 'hover:border-pink-300',
        shadow: 'hover:shadow-pink-500/20',
        badge: 'bg-pink-500'
      },
      cyan: {
        bg: 'from-cyan-400 to-cyan-600',
        border: 'border-cyan-200',
        text: 'text-cyan-600',
        hover: 'hover:border-cyan-300',
        shadow: 'hover:shadow-cyan-500/20',
        badge: 'bg-cyan-500'
      }
    };
    return colorMap[colorScheme as keyof typeof colorMap] || colorMap.orange;
  }
}



