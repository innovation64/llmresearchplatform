import Link from 'next/link';
import { FiGithub, FiMail, FiExternalLink, FiBookOpen } from 'react-icons/fi';

const Footer = () => {
  return (
    <footer className="bg-dark text-white">
      <div className="container mx-auto py-12 px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <h3 className="text-lg font-semibold mb-4">Li Yang Research</h3>
            <p className="text-gray-300 mb-4">
              Exploring brain-inspired memory, multi-agent systems, retrieval-augmented generation (RAG), and reasoning capabilities in large language models.
            </p>
            <div className="flex space-x-4">
              <a
                href="https://github.com/innovation64"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-300 hover:text-white"
                title="GitHub"
              >
                <FiGithub size={20} />
              </a>
              <a
                href="https://scholar.google.com/citations?user=J5CWbnMAAAAJ"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-300 hover:text-white"
                title="Google Scholar"
              >
                <FiBookOpen size={20} />
              </a>
              <a
                href="mailto:innovation64feng@gmail.com"
                className="text-gray-300 hover:text-white"
                title="Email"
              >
                <FiMail size={20} />
              </a>
            </div>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/" className="text-gray-300 hover:text-white">
                  Home
                </Link>
              </li>
              <li>
                <Link href="/research" className="text-gray-300 hover:text-white">
                  Research Areas
                </Link>
              </li>
              <li>
                <Link href="/applications" className="text-gray-300 hover:text-white">
                  Applications
                </Link>
              </li>
              <li>
                <Link href="/collaborate" className="text-gray-300 hover:text-white">
                  Collaborate
                </Link>
              </li>
              <li>
                <Link href="/discuss" className="text-gray-300 hover:text-white">
                  Discuss
                </Link>
              </li>
              <li>
                <Link href="/phd" className="text-gray-300 hover:text-white">
                  PhD Opportunities
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-4">Contact</h3>
            <p className="text-gray-300 mb-2">
              Email: innovation64feng@gmail.com
            </p>
            <p className="text-gray-300 mb-2">
              Phone: +86 13269183099 / +852 54614337
            </p>
            <p className="text-gray-300 mb-4">
              Guangdong Institute of Intelligence Science and Technology (GIIST)
            </p>
            <div className="space-y-2">
              <a
                href="https://innovation64.github.io/"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center text-gray-300 hover:text-white"
              >
                <span className="mr-2">Personal Website</span>
                <FiExternalLink size={16} />
              </a>
              <a
                href="https://scholar.google.com/citations?user=J5CWbnMAAAAJ"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center text-gray-300 hover:text-white"
              >
                <span className="mr-2">Google Scholar</span>
                <FiExternalLink size={16} />
              </a>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-700 mt-8 pt-8 text-center text-gray-300">
          <p>&copy; {new Date().getFullYear()} Li Yang Research Platform. All Rights Reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
