import React, { useState, useRef, useEffect } from 'react';
import { MessageCircle, Send, X, Bot, User, Minimize2, Maximize2, BookOpen, GraduationCap, Calendar, MapPin, Phone, Mail } from 'lucide-react';

interface Message {
  id: string;
  text: string;
  sender: 'user' | 'bot';
  timestamp: Date;
}

export function Chatbot(): JSX.Element {
  const [isOpen, setIsOpen] = useState(false);
  const [isMinimized, setIsMinimized] = useState(false);
  const [messages, setMessages] = useState<Message[]>([
    {
      id: '1',
      text: "Hello Everyone! 🙏 I'm JITS Virtual Assistant. I'm here to help you with admissions, academics, placements, campus facilities, and any other queries about Jayamukhi Institute of Technology & Science. How can I assist you today?",
      sender: 'bot',
      timestamp: new Date()
    }
  ]);
  const [inputMessage, setInputMessage] = useState('');
  const [isTyping, setIsTyping] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  const scrollToBottom = (): void => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  const sendMessage = async (): Promise<void> => {
    if (!inputMessage.trim()) return;

    const userMessage: Message = {
      id: Date.now().toString(),
      text: inputMessage,
      sender: 'user',
      timestamp: new Date()
    };

    setMessages(prev => [...prev, userMessage]);
    setInputMessage('');
    setIsTyping(true);

    // Simulate API call delay
    setTimeout(() => {
      const botMessage: Message = {
        id: (Date.now() + 1).toString(),
        text: getJITSResponse(inputMessage),
        sender: 'bot',
        timestamp: new Date()
      };
      setMessages(prev => [...prev, botMessage]);
      setIsTyping(false);
    }, 1000);
  };

  const getJITSResponse = (message: string): string => {
    const msg = message.toLowerCase();
    
    // Admissions
    if (msg.includes('admission') || msg.includes('apply') || msg.includes('admit')) {
      if (msg.includes('fee') || msg.includes('cost')) {
        return "For B.Tech programs, the approximate annual tuition fee is ₹65,000. For M.Tech, it's ₹50,000 per year. There are additional one-time fees for registration, hostel, and other facilities. For detailed fee structure, please visit our Admissions page or contact the admission cell at 0870-2567890.";
      }
      if (msg.includes('eligibility') || msg.includes('qualification')) {
        return "For B.Tech: 10+2 with MPC and 45% marks, TS EAMCET rank required. For M.Tech: B.Tech in relevant branch with 50% marks, TS PGECET/GATE qualified. For MBA: Any degree with 50% marks, TS ICET rank required.";
      }
      if (msg.includes('deadline') || msg.includes('last date')) {
        return "Admissions for 2026 are open! The last date for application submission is June 30, 2026. TS EAMCET counseling dates will be announced by TSCHE. Keep checking our website for updates.";
      }
      return "JITS offers B.Tech in CSE, ECE, EEE, Mechanical, Civil; M.Tech in various specializations; and MBA. Admissions are through TS EAMCET for B.Tech, TS PGECET for M.Tech, and TS ICET for MBA. Apply online at jits.ac.in or visit our campus.";
    }

    // Academics
    if (msg.includes('course') || msg.includes('program') || msg.includes('branch')) {
      if (msg.includes('b.tech') || msg.includes('btech')) {
        return "B.Tech programs: CSE (AI&ML, Data Science, Cyber Security), ECE, EEE, Mechanical Engineering, Civil Engineering. Duration: 4 years. All programs are AICTE approved and JNTU Hyderabad affiliated.";
      }
      if (msg.includes('m.tech') || msg.includes('mtech')) {
        return "M.Tech specializations: Computer Science, VLSI System Design, Power Electronics, Structural Engineering, Thermal Engineering. Duration: 2 years. GATE qualified candidates get scholarship.";
      }
      if (msg.includes('mba')) {
        return "MBA program with specializations in Marketing, Finance, HR, and Operations. Duration: 2 years. Excellent placement record with 100+ companies visiting campus.";
      }
      return "JITS offers Undergraduate (B.Tech), Postgraduate (M.Tech, MBA) programs across Engineering and Management streams. All programs are approved by AICTE and affiliated to JNTU Hyderabad.";
    }

    // Placements
    if (msg.includes('placement') || msg.includes('job') || msg.includes('company') || msg.includes('recruitment')) {
      if (msg.includes('package') || msg.includes('salary')) {
        return "Highest package: ₹42 LPA (Amazon), Average package: ₹4.5 LPA, Lowest package: ₹3 LPA. 85% of students placed in 2024-25. 150+ companies visited including Amazon, Microsoft, TCS, Infosys, Wipro, Cognizant.";
      }
      if (msg.includes('company') || msg.includes('recruiter')) {
        return "Top recruiters: Amazon, Microsoft, TCS, Infosys, Wipro, Cognizant, Capgemini, Accenture, Tech Mahindra, L&T, IBM, Dell, HP, and many more MNCs and core companies.";
      }
      if (msg.includes('training') || msg.includes('preparation')) {
        return "We provide: Aptitude training, Technical workshops, Mock interviews, GD sessions, Resume building, Soft skills training, Coding competitions from 1st year itself.";
      }
      return "JITS has excellent placement record with 85% placement rate. 150+ companies visited in 2024-25. Dedicated Placement Cell provides training from first year. Highest package: ₹42 LPA, Average: ₹4.5 LPA.";
    }

    // Facilities
    if (msg.includes('hostel') || msg.includes('accommodation') || msg.includes('room')) {
      return "Separate hostels for boys and girls with modern amenities: WiFi, reading room, gym, indoor games, 24/7 security, medical facility, hygienic mess with variety of food options. Hostel fee: ₹60,000 per year.";
    }
    
    if (msg.includes('library') || msg.includes('book')) {
      return "Central library with 50,000+ books, 100+ national/international journals, digital library with 5000+ e-books, online journals, spacious reading hall with 500 capacity. Open from 8 AM to 8 PM.";
    }
    
    if (msg.includes('lab') || msg.includes('laboratory')) {
      return "State-of-the-art labs: Computer labs with 500+ systems, Electronics lab, Communication lab, Electrical machines lab, Mechanical workshop, CAD/CAM lab, Physics & Chemistry labs with modern equipment.";
    }
    
    if (msg.includes('campus') || msg.includes('facility') || msg.includes('infrastructure')) {
      return "50-acre green campus, WiFi enabled, Digital classrooms, Auditorium, Sports complex, Gym, Cafeteria, Medical center, Transportation, Bank ATM, Post office, Shopping complex within campus.";
    }

    // Exams & Results
    if (msg.includes('exam') || msg.includes('semester') || msg.includes('mid') || msg.includes('internal')) {
      if (msg.includes('result') || msg.includes('grade') || msg.includes('mark')) {
        return "Results are published on JNTU portal and college website. Internal exams: 3 per semester, Semester exams: As per JNTU schedule. Minimum 75% attendance required for exam eligibility.";
      }
      if (msg.includes('timetable') || msg.includes('schedule')) {
        return "Exam timetables are displayed on notice boards and college website 15 days before exams. Internal exams are scheduled by respective departments.";
      }
      return "JITS follows JNTU academic calendar. Each semester has 3 internal exams and semester-end exams. Minimum 75% attendance mandatory. Regular classes, tutorials, and practical sessions conducted.";
    }

    // Contact & Location
    if (msg.includes('contact') || msg.includes('phone') || msg.includes('email') || msg.includes('where')) {
      if (msg.includes('principal') || msg.includes('hod')) {
        return "Principal: Dr. M. Srinivas Rao - principal@jits.ac.in | HOD CSE: Dr. K. Rajesh - hodcse@jits.ac.in | HOD ECE: Dr. S. Priya - hodece@jits.ac.in | Admission Cell: 0870-2567890";
      }
      if (msg.includes('address') || msg.includes('location') || msg.includes('map')) {
        return "Jayamukhi Institute of Technology & Science\nMothkur (Vill), Yazali (Mdl)\nNalgonda District, Telangana 508277\n📍 Google Maps: https://maps.app.goo.gl/jits";
      }
      return "📞 Admission: 0870-2567890, 9100345678\n📞 Principal: 0870-2567891\n📧 Email: info@jits.ac.in\n🌐 Website: www.jits.ac.in\n📍 Address: Mothkur, Nalgonda Dist, Telangana";
    }

    // Fees & Scholarships
    if (msg.includes('fee') || msg.includes('scholarship') || msg.includes('loan')) {
      if (msg.includes('scholarship')) {
        return "Scholarships available: Telangana Govt Scholarship, National Scholarship, Merit Scholarship, Fee Reimbursement for SC/ST, AICTE scholarships, JKC, Corporate scholarships for meritorious students.";
      }
      return "B.Tech fee: ₹65,000/year, M.Tech: ₹50,000/year, MBA: ₹55,000/year. Additional: Hostel ₹60,000/year, Bus ₹30,000/year. Multiple scholarship options available for eligible students.";
    }

    // Events & Activities
    if (msg.includes('event') || msg.includes('fest') || msg.includes('workshop') || msg.includes('seminar')) {
      if (msg.includes('technical') || msg.includes('workshop')) {
        return "Technical fest 'TECHNOVATION', Cultural fest 'RHYTHM', Sports meet 'SPORTICA'. Regular workshops on AI, IoT, Robotics, Coding competitions, Hackathons, Guest lectures from industry experts.";
      }
      return "Annual events: TECHNOVATION (Technical fest), RHYTHM (Cultural fest), SPORTICA (Sports meet). Regular workshops, seminars, industrial visits, NSS activities, and cultural events throughout the year.";
    }

    // Departments
    if (msg.includes('cse') || msg.includes('computer')) {
      return "CSE Department offers B.Tech with specializations in AI&ML, Data Science, Cyber Security. Well-equipped labs, experienced faculty, 90% placement record. HOD: Dr. K. Rajesh.";
    }
    
    if (msg.includes('ece') || msg.includes('electronics')) {
      return "ECE Department offers B.Tech in Electronics & Communication Engineering. Labs: Embedded Systems, VLSI, Communication Systems. HOD: Dr. S. Priya.";
    }
    
    if (msg.includes('eee') || msg.includes('electrical')) {
      return "EEE Department offers B.Tech in Electrical & Electronics Engineering. Labs: Power Systems, Control Systems, Electrical Machines. HOD: Dr. R. Kumar.";
    }

    // General
    if (msg.includes('hello') || msg.includes('hi') || msg.includes('namaste')) {
      return "Namaste! 🙏 Welcome to Jayamukhi Institute of Technology & Science. How can I help you with admissions, academics, placements, or campus information?";
    }
    
    if (msg.includes('thank')) {
      return "You're welcome! 😊 Feel free to ask if you have any other questions about JITS. Best wishes for your academic journey!";
    }
    
    if (msg.includes('bye') || msg.includes('tata')) {
      return "Thank you for visiting JITS! 🙏 For more details, visit www.jits.ac.in or call 0870-2567890. Wish you all the best!";
    }

    // Default response
    return "I understand you're asking about: \"" + message + "\". For detailed information about this topic, please visit our website www.jits.ac.in or contact our admission cell at 0870-2567890. You can also ask me about admissions, courses, placements, facilities, or contact information.";
  };

  const handleKeyPress = (e: React.KeyboardEvent): void => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault();
      sendMessage();
    }
  };

  const quickReplies = [
    "Admission process for B.Tech",
    "Placement statistics 2025",
    "Contact department HODs"
  ];

  const handleQuickReply = (reply: string): void => {
    setInputMessage(reply);
    setTimeout(() => {
      sendMessage();
    }, 100);
  };

  if (!isOpen) {
    return (
      <button
        onClick={() => setIsOpen(true)}
        className="fixed bottom-6 right-6 w-14 h-14 bg-red-600 hover:bg-red-700 text-white rounded-full shadow-lg hover:shadow-xl transition-all duration-300 flex items-center justify-center z-50 animate-pulse"
        title="JITS Assistant"
      >
        <MessageCircle className="h-6 w-6" />
      </button>
    );
  }

  return (
    <div className={`fixed bottom-6 right-6 z-50 transition-all duration-300 ${
      isMinimized ? 'w-80 h-16' : 'w-80 h-96'
    }`}>
      <div className="bg-white dark:bg-gray-800 rounded-lg shadow-2xl border border-gray-200 dark:border-gray-700 flex flex-col h-full">
        {/* Header */}
        <div className="bg-gradient-to-r from-red-600 to-red-800 text-white p-4 rounded-t-lg flex items-center justify-between">
          <div className="flex items-center">
            <div className="w-8 h-8 bg-white bg-opacity-20 rounded-full flex items-center justify-center mr-3">
              <GraduationCap className="h-5 w-5" />
            </div>
            <div>
              <div className="font-semibold">JITS Assistant</div>
              <div className="text-xs opacity-90">Online • Ready to help</div>
            </div>
          </div>
          <div className="flex items-center space-x-2">
            <button
              onClick={() => setIsMinimized(!isMinimized)}
              className="text-white hover:bg-white hover:bg-opacity-20 rounded-full p-1 transition-colors"
            >
              {isMinimized ? <Maximize2 className="h-4 w-4" /> : <Minimize2 className="h-4 w-4" />}
            </button>
            <button
              onClick={() => setIsOpen(false)}
              className="text-white hover:bg-white hover:bg-opacity-20 rounded-full p-1 transition-colors"
            >
              <X className="h-4 w-4" />
            </button>
          </div>
        </div>

        {!isMinimized && (
          <>
            {/* Messages */}
            <div className="flex-1 p-4 overflow-y-auto bg-gray-50 dark:bg-gray-700">
              <div className="space-y-4">
                {messages.map((message) => (
                  <div
                    key={message.id}
                    className={`flex ${message.sender === 'user' ? 'justify-end' : 'justify-start'}`}
                  >
                    <div className={`flex items-start max-w-xs ${
                      message.sender === 'user' ? 'flex-row-reverse' : 'flex-row'
                    }`}>
                      <div className={`w-8 h-8 rounded-full flex items-center justify-center ${
                        message.sender === 'user' 
                          ? 'bg-red-600 text-white ml-2' 
                          : 'bg-gray-300 dark:bg-gray-600 text-gray-700 dark:text-gray-300 mr-2'
                      }`}>
                        {message.sender === 'user' ? <User className="h-4 w-4" /> : <Bot className="h-4 w-4" />}
                      </div>
                      <div className={`px-4 py-2 rounded-lg ${
                        message.sender === 'user'
                          ? 'bg-red-600 text-white'
                          : 'bg-white dark:bg-gray-600 text-gray-900 dark:text-white border border-gray-200 dark:border-gray-500'
                      }`}>
                        <p className="text-sm whitespace-pre-line">{message.text}</p>
                        <p className={`text-xs mt-1 ${
                          message.sender === 'user' ? 'text-red-100' : 'text-gray-500 dark:text-gray-400'
                        }`}>
                          {message.timestamp.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}
                        </p>
                      </div>
                    </div>
                  </div>
                ))}
                
                {isTyping && (
                  <div className="flex justify-start">
                    <div className="flex items-start">
                      <div className="w-8 h-8 rounded-full bg-gray-300 dark:bg-gray-600 text-gray-700 dark:text-gray-300 mr-2 flex items-center justify-center">
                        <Bot className="h-4 w-4" />
                      </div>
                      <div className="bg-white dark:bg-gray-600 border border-gray-200 dark:border-gray-500 px-4 py-2 rounded-lg">
                        <div className="flex space-x-1">
                          <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce"></div>
                          <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce" style={{ animationDelay: '0.1s' }}></div>
                          <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce" style={{ animationDelay: '0.2s' }}></div>
                        </div>
                      </div>
                    </div>
                  </div>
                )}
                <div ref={messagesEndRef} />
              </div>
            </div>

            {/* Quick Replies */}
            {messages.length <= 2 && (
              <div className="p-3 border-t border-gray-200 dark:border-gray-600 bg-gray-50 dark:bg-gray-700">
                <div className="text-xs text-gray-600 dark:text-gray-400 mb-2">Quick questions:</div>
                <div className="flex flex-wrap gap-1">
                  {quickReplies.map((reply, index) => (
                    <button
                      key={index}
                      onClick={() => handleQuickReply(reply)}
                      className="text-xs px-2 py-1 bg-red-100 dark:bg-red-900 text-red-700 dark:text-red-300 rounded-full hover:bg-red-200 dark:hover:bg-red-800 transition-colors"
                    >
                      {reply}
                    </button>
                  ))}
                </div>
              </div>
            )}

            {/* Input */}
            <div className="p-4 border-t border-gray-200 dark:border-gray-600">
              <div className="flex space-x-2">
                <input
                  type="text"
                  value={inputMessage}
                  onChange={(e) => setInputMessage(e.target.value)}
                  onKeyPress={handleKeyPress}
                  placeholder="Ask about admissions, courses, placements..."
                  className="flex-1 px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-red-500 focus:border-transparent bg-white dark:bg-gray-700 text-gray-900 dark:text-white text-sm"
                />
                <button
                  onClick={sendMessage}
                  disabled={!inputMessage.trim() || isTyping}
                  className="px-4 py-2 bg-red-600 text-white rounded-lg hover:bg-red-700 transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  <Send className="h-4 w-4" />
                </button>
              </div>
            </div>
          </>
        )}
      </div>
    </div>
  );
}
