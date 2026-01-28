import { House } from "lucide-react";
import { FileText } from "lucide-react";
import { ChartColumn } from "lucide-react";
import { LayoutDashboard } from "lucide-react";
import { Star } from "lucide-react";
import { KeyRound } from "lucide-react";
import { Video } from "lucide-react";
import { ImagePlus } from "lucide-react";
import { BookOpen } from "lucide-react";
import { CircleQuestionMark } from "lucide-react";
import { Sparkles } from "lucide-react";

// sidebar menu content

export const main = [
  {
    title: "Getting Started",
    url: "/",
    icon: House,
  },
  {
    title: "Files",
    url: "/files",
    icon: FileText,
  },
  {
    title: "Analytics",
    url: "/analytics",
    icon: ChartColumn,
  },
];

export const services = [
  {
    title: "Models",
    url: "/models",
    icon: LayoutDashboard,
  },
  {
    title: "Playground",
    url: "/playground",
    icon: Star,
  },

  {
    title: "API Keys",
    url: "/api-keys",
    icon: KeyRound,
  },
];
export const creative = [
  {
    title: "Videos",
    url: "/videos",
    icon: Video,
  },

  {
    title: "Pixelcraft",
    url: "/pixelhome",
    icon: ImagePlus,
  },
];
export const resources = [
  {
    title: "Docs",
    url: "/docs",
    icon: BookOpen,
  },

  {
    title: "Support",
    url: "/support",
    icon: CircleQuestionMark,
  },
  {
    title: "Pricing",
    url: "/pricing",
    icon: Sparkles,
  },
];

// support Providers

export const providers = [
  { name: "DeepSeek", src: "/images/deepseek1.png" },
  { name: "Anthropic", src: "/images/anthropic1.png" },
  { name: "Google", src: "/images/google1.png" },
  { name: "Mistral", src: "/images/mistral3.png" },
  { name: "Qwen", src: "/images/owen1.png" },
  { name: "OpenAI", src: "/images/chatgbt1.png" },
  { name: "Meta AI", src: "/images/meta1.png" },
];

//  code snippet

export const codeSnippets = {
  javascript: `const axios = require('axios');

    // Base URL for all API calls
    const baseUrl = 'https://api.kidjig.com/provider';

    // Example: Chat completion with GPT-3.5
    const response = await axios.post(
    \${baseUrl}/api/v1/openai/chat/gpt-3.5-turbo',
    {
    prompt: "What is the capital of France?",
    stream: false,
    config: {
    temperature: 0.7,
    maxOutputTokens: 4096,
    topP: 1,
    topK: 40
    }
    },
    {
    headers: {
    'X-Api-Key': 'YOUR_API_KEY',
    'Content-Type': 'application/json'
    }
    }
  };

  console.log(response.data);`,

  python: `import requests

  # Base URL for all API calls
  base_url = 'https://api.kidjig.com/provider'

  # Example: Chat completion with GPT-3.5
  response = requests.post(
    f"{base_url}/api/v1/openai/chat/gpt-3.5-turbo",
    json={
    "prompt": "What is the capital of France?",
    "stream": False,
    "config": {
    "temperature": 0.7,
    "maxOutputTokens": 4096,
    "topP": 1,
    "topK": 40
    }
  },
  headers={
      'X-Api-Key': 'YOUR_API_KEY',
      'Content-Type': 'application/json'
  }
  }

  print(response.json());`,

  curl: `curl -X POST 'https://api.kidjig.com/provider' 
    -H 'X-Api-Key: YOUR_API_KEY' 
    -H 'Content-Type: application/json' 
    -d '{
    "prompt": "What is the capital of France?",
    "stream": false,
    "config": {
    "temperature": 0.7,
    "maxOutputTokens": 4096,
    "topP": 1,
    "topK": 40
    }
    }'`,
  };

export const highlightSyntax = (code: string, language: string) => {
  if (language === "javascript") {
    return code
      .replace(/(const|false|$)/g, '<span class="text-[#4e9ad6]">$1</span>')
      .replace(
        /(axios|response|baseUrl|data)/g,
        '<span class="text-[#c2d1d4]">$1</span>',
      )
      .replace(/console/g, '<span class="text-[#45c9b0]">$&</span>')
      .replace(/log|post/g, '<span class="text-[#dcdca5]">$&</span>')
      .replace(/await/g, '<span class="text-[#9867a5]">$&</span>')

      .replace(
        /("What is the capital of France\?")/g,
        '<span class="text-[#c38f78]">$1</span>',
      )
      .replace(/(\/\/.*)/g, '<span class="text-[#c38f78] italic">$1</span>')

      .replace(
        /(\/\/|#) (Base URL for all API calls)/g,
        '<span class="text-[#5f894d]">$1 $2</span>',
      )
      .replace(
        /(\/\/|#) Example: Chat completion with GPT-3\.5/g,
        '<span class="text-[#5f894d]">$&</span>',
      )
      .replace(
        /'https:\/\/api\.kidjig\.com\/provider'/g,
        '<span class="text-[#c38f78]">$&</span>',
      )
      .replace(/'application\/json'/g, '<span class="text-[#c38f78]">$&</span>')
      .replace(/'YOUR_API_KEY'/g, '<span class="text-[#c38f78]">$&</span>')
      .replace(/0.7| 1| 40| 40| 96 /g, '<span class="text-[#a6cea8]">$&</span>')
      .replace(
        /\/api\/v1\/openai\/chat\/gpt-3\.5-turbo/g,
        '<span class="text-[#c38f78]">$&</span>',
      )
      .replace(/{|}|;|,|:/g, '<span class="text-[#c2d1d4]">$&</span>')
      .replace(/():/g, '<span class="text-[#c2d1d4]">$&</span>')
      .replace(/$/g, '<span class="text-[#4e9ad6]">$&</span>')
      .replace(
        /(prompt|stream|config| temperature|maxOutputTokens|topP|topK|headers|'X-Api-Key'|'Content-Type|\?")/g,
        '<span class="text-[#9cdcfe]">$1</span>',
      );
  }

  if (language === "python") {
    return code
      .replace(/(import)/g, '<span class="text-purple-500">$1</span>')
      .replace(/(requests)/g, '<span class="text-blue-400">$1</span>')
      .replace(
        /(prompt|stream|config| temperature|maxOutputTokens|topP|topK|headers|'X-Api-Key'|'Content-Type|\?")/g,
        '<span class="text-[#c38f78]">$1</span>',
      )
      .replace(/(base_url|response)/g, '<span class="text-green-400">$1</span>')
      .replace(/(#.*)/g, '<span class="text-gray-500">$1</span>')
      .replace(/(print)/g, '<span class="text-purple-500">$1</span>')
      .replace(/("https:\/\/[^"]*")/g, '<span class="text-red-400">$1</span>')
      .replace(/(YOUR_API_KEY)/g, '<span class="text-yellow-400">$1</span>')
      .replace(
        /("What is the capital of France\?")/g,
        '<span class="text-red-400">$1</span>',
      );
  }

  if (language === "curl") {
    return code
      .replace(/(curl)/g, '<span class="text-purple-500">$1</span>')
      .replace(/(POST)/g, '<span class="text-blue-400">$1</span>')
      .replace(/(-X|-H|-d)/g, '<span class="text-green-400">$1</span>')
      .replace(/('https:\/\/[^']*')/g, '<span class="text-red-400">$1</span>')
      .replace(/(YOUR_API_KEY)/g, '<span class="text-yellow-400">$1</span>')
      .replace(
        /("What is the capital of France\?")/g,
        '<span class="text-red-400">$1</span>',
      );
  }

  return code;
};
