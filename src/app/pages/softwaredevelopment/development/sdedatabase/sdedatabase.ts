
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
  category: 'relational' | 'nosql' | 'cloud-db' | 'aws' | 'azure' | 'gcp' | 'other-cloud';
  colorScheme: 'orange' | 'blue' | 'green' | 'purple' | 'red' | 'indigo' | 'pink' | 'cyan';
  badge?: string;
}

interface Feature {
  title: string;
  description: string;
}

@Component({
  selector: 'app-sdedatabase',
  imports: [CommonModule, ButtonModule, DialogModule, TruncatePipe],
  templateUrl: './sdedatabase.html',
  styleUrl: './sdedatabase.scss'
})
export class Sdedatabase {
  
  // Dialog properties
  displayDialog: boolean = false;
  selectedTechnology: Technology | null = null;

  // Relational Databases
  relationalDatabases: Technology[] = [
    {
      id: 'mysql',
      name: 'MySQL',
      description: 'Popular open-source relational database management system for storing and managing structured data for business applications.',
      svgPath: '/svg/mysql.svg',
      category: 'relational',
      colorScheme: 'orange',
      badge: 'Popular',
      features: [
        {
          title: 'Structured data storage',
          description: 'We will use MySQL to store and manage structured data for your business applications.'
        }
      ]
    },
    {
      id: 'oracle',
      name: 'Oracle',
      description: 'Enterprise-grade relational database system for developing scalable and secure database solutions for business applications.',
      svgPath: '/svg/oracle.svg',
      category: 'relational',
      colorScheme: 'red',
      badge: 'Enterprise',
      features: [
        {
          title: 'Scalable and secure solutions',
          description: 'Our team will utilize Oracle to develop scalable and secure database solutions for your business.'
        }
      ]
    },
    {
      id: 'postgresql',
      name: 'PostgreSQL',
      description: 'Advanced open-source relational database with robust features for storing and managing structured data effectively.',
      svgPath: '/svg/postgresql.svg',
      category: 'relational',
      colorScheme: 'blue',
      badge: 'Advanced',
      features: [
        {
          title: 'Advanced data management',
          description: 'We will use PostgreSQL to store and manage structured data for your business applications.'
        }
      ]
    },
    {
      id: 'sqlserver',
      name: 'Microsoft SQL Server',
      description: 'Microsoft\'s enterprise relational database platform for developing comprehensive database solutions for business needs.',
      svgPath: '/svg/sql-server.svg',
      category: 'relational',
      colorScheme: 'blue',
      badge: 'Microsoft',
      features: [
        {
          title: 'Enterprise database solutions',
          description: 'Our team will work with Microsoft SQL Server to develop database solutions for your business.'
        }
      ]
    }
  ];

  // NoSQL Databases
  nosqlDatabases: Technology[] = [
    {
      id: 'mongodb',
      name: 'MongoDB',
      description: 'Document-oriented NoSQL database for storing and managing unstructured and semi-structured data for modern applications.',
      svgPath: '/svg/mongodb.svg',
      category: 'nosql',
      colorScheme: 'green',
      badge: 'Document',
      features: [
        {
          title: 'Flexible data storage',
          description: 'We will use MongoDB to store and manage unstructured and semi-structured data for your business applications.'
        }
      ]
    },
    {
      id: 'cassandra',
      name: 'Cassandra',
      description: 'Distributed NoSQL database designed for handling large amounts of data across many commodity servers with high availability.',
      svgPath: '/svg/cassandra.svg',
      category: 'nosql',
      colorScheme: 'purple',
      badge: 'Distributed',
      features: [
        {
          title: 'Scalable NoSQL solutions',
          description: 'Our team will utilize Cassandra to develop scalable and secure NoSQL database solutions for your business.'
        }
      ]
    },
    {
      id: 'redis',
      name: 'Redis',
      description: 'In-memory data structure store used as database, cache, and message broker for fast access and high performance applications.',
      svgPath: '/svg/redis.svg',
      category: 'nosql',
      colorScheme: 'red',
      badge: 'In-Memory',
      features: [
        {
          title: 'High-performance caching',
          description: 'We will use Redis to store and manage data in memory for fast access and high performance.'
        }
      ]
    },
    {
      id: 'couchbase',
      name: 'Couchbase',
      description: 'NoSQL cloud database with integrated caching for interactive applications requiring flexible data models and real-time analytics.',
      svgPath: '/svg/couchbase.svg',
      category: 'nosql',
      colorScheme: 'orange',
      badge: 'Cloud',
      features: [
        {
          title: 'Interactive applications',
          description: 'Our team will work with Couchbase to develop NoSQL database solutions for your business.'
        }
      ]
    }
  ];

  // Cloud Databases
  cloudDatabases: Technology[] = [
    {
      id: 'aurora',
      name: 'Amazon Aurora',
      description: 'MySQL and PostgreSQL-compatible relational database built for the cloud with automated scaling and high availability.',
      svgPath: '/svg/aws.svg',
      category: 'cloud-db',
      colorScheme: 'orange',
      badge: 'AWS',
      features: [
        {
          title: 'Scalable cloud database',
          description: 'We will use Amazon Aurora to develop scalable and secure cloud-based database solutions for your business.'
        }
      ]
    },
    {
      id: 'cloud-sql',
      name: 'Google Cloud SQL',
      description: 'Fully-managed relational database service for MySQL, PostgreSQL, and SQL Server with automatic scaling and maintenance.',
      svgPath: '/svg/google-cloud.svg',
      category: 'cloud-db',
      colorScheme: 'blue',
      badge: 'Google',
      features: [
        {
          title: 'Managed cloud databases',
          description: 'Our team will utilize Google Cloud SQL to manage relational databases in the cloud.'
        }
      ]
    },
    {
      id: 'cosmos-db',
      name: 'Azure Cosmos DB',
      description: 'Globally distributed, multi-model database service with guaranteed low latency and elastic scale for modern applications.',
      svgPath: '/svg/azure.svg',
      category: 'cloud-db',
      colorScheme: 'blue',
      badge: 'Global',
      features: [
        {
          title: 'Global distribution',
          description: 'We will use Microsoft Azure Cosmos DB to develop globally distributed, multi-model database solutions for your business.'
        }
      ]
    }
  ];

  // AWS Cloud Services
  awsServices: Technology[] = [
    {
      id: 'ec2',
      name: 'Amazon EC2',
      description: 'Scalable computing capacity in the cloud for developing and deploying secure, resizable compute capacity applications.',
      svgPath: '/svg/aws-ec2.svg',
      category: 'aws',
      colorScheme: 'orange',
      badge: 'Compute',
      features: [
        {
          title: 'Scalable cloud applications',
          description: 'We will use EC2 to develop and deploy scalable and secure cloud-based applications.'
        }
      ]
    },
    {
      id: 's3',
      name: 'Amazon S3',
      description: 'Object storage service offering industry-leading scalability, data availability, security, and performance for any amount of data.',
      svgPath: '/svg/aws-s3.svg',
      category: 'aws',
      colorScheme: 'green',
      badge: 'Storage',
      features: [
        {
          title: 'Scalable data storage',
          description: 'Our team will utilize S3 to store and manage large amounts of data in the cloud.'
        }
      ]
    },
    {
      id: 'lambda',
      name: 'AWS Lambda',
      description: 'Serverless computing service that runs code in response to events and automatically manages computing resources.',
      svgPath: '/svg/aws-lambda.svg',
      category: 'aws',
      colorScheme: 'orange',
      badge: 'Serverless',
      features: [
        {
          title: 'Serverless applications',
          description: 'We will use Lambda to develop serverless applications that scale automatically.'
        }
      ]
    }
  ];

  // Azure Cloud Services
  azureServices: Technology[] = [
    {
      id: 'azure-vm',
      name: 'Azure Virtual Machines',
      description: 'On-demand, scalable computing resources for developing and deploying applications with full control over the operating system.',
      svgPath: '/svg/azure.svg',
      category: 'azure',
      colorScheme: 'blue',
      badge: 'Compute',
      features: [
        {
          title: 'Scalable virtual machines',
          description: 'Our team will utilize Azure Virtual Machines to develop and deploy scalable and secure cloud-based applications.'
        }
      ]
    },
    {
      id: 'azure-blob',
      name: 'Azure Blob Storage',
      description: 'Massively scalable object storage for unstructured data including text, binary data, documents, and media files.',
      svgPath: '/svg/azure.svg',
      category: 'azure',
      colorScheme: 'cyan',
      badge: 'Storage',
      features: [
        {
          title: 'Unstructured data storage',
          description: 'We will use Blob Storage to store and manage large amounts of unstructured data in the cloud.'
        }
      ]
    },
    {
      id: 'azure-functions',
      name: 'Azure Functions',
      description: 'Event-driven serverless compute platform for building and connecting cloud services with automatic scaling.',
      svgPath: '/svg/azure.svg',
      category: 'azure',
      colorScheme: 'purple',
      badge: 'Serverless',
      features: [
        {
          title: 'Event-driven functions',
          description: 'Our team will use Azure Functions to develop serverless applications that scale automatically.'
        }
      ]
    }
  ];

  // Google Cloud Platform Services
  gcpServices: Technology[] = [
    {
      id: 'compute-engine',
      name: 'Compute Engine',
      description: 'Scalable, high-performance virtual machines running in Google\'s innovative data centers and worldwide fiber network.',
      svgPath: '/svg/google-cloud.svg',
      category: 'gcp',
      colorScheme: 'red',
      badge: 'Compute',
      features: [
        {
          title: 'High-performance VMs',
          description: 'We will use Compute Engine to develop and deploy scalable and secure cloud-based applications.'
        }
      ]
    },
    {
      id: 'cloud-storage',
      name: 'Cloud Storage',
      description: 'Unified object storage for developers and enterprises with worldwide edge caching and strong consistency.',
      svgPath: '/svg/google-cloud.svg',
      category: 'gcp',
      colorScheme: 'blue',
      badge: 'Storage',
      features: [
        {
          title: 'Global object storage',
          description: 'Our team will utilize Cloud Storage to store and manage large amounts of data in the cloud.'
        }
      ]
    },
    {
      id: 'cloud-functions',
      name: 'Cloud Functions',
      description: 'Serverless execution environment for building and connecting cloud services with automatic scaling and zero server management.',
      svgPath: '/svg/google-cloud.svg',
      category: 'gcp',
      colorScheme: 'green',
      badge: 'Serverless',
      features: [
        {
          title: 'Serverless microservices',
          description: 'We will use Cloud Functions to develop serverless applications that scale automatically.'
        }
      ]
    }
  ];

  // Other Cloud Platforms
  otherCloudPlatforms: Technology[] = [
    {
      id: 'ibm-cloud',
      name: 'IBM Cloud',
      description: 'Enterprise cloud platform offering IaaS, PaaS, and AI capabilities for building intelligent applications and infrastructure.',
      svgPath: '/svg/ibm.svg',
      category: 'other-cloud',
      colorScheme: 'blue',
      badge: 'Enterprise',
      features: [
        {
          title: 'Infrastructure as a Service',
          description: 'We will use IBM Cloud\'s IaaS to develop and deploy scalable and secure cloud-based infrastructure.'
        },
        {
          title: 'Platform as a Service',
          description: 'Our team will utilize IBM Cloud\'s PaaS to build and deploy cloud-based applications.'
        },
        {
          title: 'Artificial Intelligence',
          description: 'We will leverage IBM Cloud\'s AI capabilities to develop intelligent applications.'
        }
      ]
    },
    {
      id: 'oracle-cloud',
      name: 'Oracle Cloud',
      description: 'Comprehensive cloud computing platform with infrastructure, applications, and autonomous database services.',
      svgPath: '/svg/oracle-1.svg',
      category: 'other-cloud',
      colorScheme: 'red',
      badge: 'Autonomous',
      features: [
        {
          title: 'Cloud Infrastructure',
          description: 'Our team will use Oracle Cloud Infrastructure to develop and deploy scalable and secure cloud-based applications.'
        },
        {
          title: 'Cloud Applications',
          description: 'We will utilize Oracle Cloud Applications to build and deploy cloud-based business applications.'
        },
        {
          title: 'Autonomous Database',
          description: 'We will use Oracle\'s Autonomous Database to manage and analyse large amounts of data.'
        }
      ]
    },
    {
      id: 'digitalocean',
      name: 'DigitalOcean',
      description: 'Developer-friendly cloud platform providing simple, scalable computing solutions with predictable pricing.',
      svgPath: '/svg/digitalocean.svg',
      category: 'other-cloud',
      colorScheme: 'blue',
      badge: 'Developer',
      features: [
        {
          title: 'Simple cloud hosting',
          description: 'We will use DigitalOcean\'s Droplets to develop and deploy scalable and secure cloud-based applications.'
        },
        {
          title: 'Block Storage',
          description: 'Our team will utilize DigitalOcean\'s Block Storage to store and manage large amounts of data.'
        },
        {
          title: 'Load Balancers',
          description: 'We will use DigitalOcean\'s Load Balancers to distribute traffic and ensure high availability.'
        }
      ]
    },
    {
      id: 'heroku',
      name: 'Heroku',
      description: 'Platform-as-a-Service enabling developers to build, run, and operate applications entirely in the cloud.',
      svgPath: '/svg/heroku.svg',
      category: 'other-cloud',
      colorScheme: 'purple',
      features: [
        {
          title: 'Platform as a Service',
          description: 'Our team will use Heroku to develop and deploy cloud-based applications.'
        }
      ]
    },
    {
      id: 'alibaba-cloud',
      name: 'Alibaba Cloud',
      description: 'Comprehensive suite of global cloud computing services to power business growth and digital transformation.',
      svgPath: '/svg/alibaba-cloud.svg',
      category: 'other-cloud',
      colorScheme: 'orange',
      features: [
        {
          title: 'Global cloud services',
          description: 'We will utilize Alibaba Cloud to develop and deploy scalable and secure cloud-based applications.'
        }
      ]
    },
    {
      id: 'linode',
      name: 'Linode',
      description: 'High-performance cloud computing and hosting service with a focus on simplicity and excellent customer support.',
      svgPath: '/svg/linode.svg',
      category: 'other-cloud',
      colorScheme: 'green',
      features: [
        {
          title: 'High-performance hosting',
          description: 'Our team will use Linode to develop and deploy cloud-based applications.'
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

