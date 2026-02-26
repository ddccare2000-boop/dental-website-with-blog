// ===== DENTAL CHATBOT CONFIGURATION =====

const chatbotConfig = {
    clinicName: "Deeksha Dental Care",
    welcomeMessage: "👋 Welcome to Deeksha Dental Care! How can I help you today?",
    phoneNumber: "+919376585486",
    email: "ddccare2000@gmail.com",
    address: "Near Eid Gah Bari, Bikaner"
};

// Chatbot knowledge base
const knowledgeBase = {
    "rct": {
        keywords: ["rct", "root canal", "nerve treatment"],
        answer: "🦷 Root Canal Treatment (RCT) is used to save infected teeth. It costs ₹5000 for all teeth (anterior/premolar/molar). Crown extra: PMF ₹2000, Zirconia ₹6000."
    },
    "implant": {
        keywords: ["implant", "dental implant", "artificial tooth"],
        answer: "🦷 Dental implants start from ₹25,000 per tooth. Full mouth implants (All-on-4) from ₹1,80,000 per arch. Free consultation available!"
    },
    "braces": {
        keywords: ["braces", "aligners", "teeth straightening", "orthodontic"],
        answer: "😁 Braces options:\n• Metal: ₹30,000-60,000\n• Ceramic: ₹50,000-80,000\n• Clear Aligners: ₹70,000-2,50,000\n• Mini/Self-ligating: ₹60,000-90,000"
    },
    "denture": {
        keywords: ["denture", "false teeth", "removable teeth"],
        answer: "🦷 Denture prices:\n• Partial (per tooth): ₹1,000\n• Complete (both jaws): ₹16,000\n• Flexible (both jaws): ₹18,000"
    },
    "postcore": {
        keywords: ["post", "core", "post core", "post and core"],
        answer: "🦷 Post & Core treatment strengthens weak teeth before crown. Price: ₹3,000 per tooth."
    },
    "extraction": {
        keywords: ["extraction", "tooth removal", "pull out", "wisdom tooth"],
        answer: "🦷 Extraction prices:\n• Simple: ₹500 per tooth\n• Surgical: ₹1,500-3,000\n• Wisdom tooth: ₹2,000-4,000"
    },
    "scaling": {
        keywords: ["scaling", "cleaning", "teeth cleaning", "polish", "tartar removal"],
        answer: "🪥 Professional scaling: ₹1,500-2,500 (complete mouth). Polish + Fluoride: ₹500-1,000 extra. Recommended every 6 months!"
    },
    "composite": {
        keywords: ["composite", "filling", "cavity filling", "tooth color filling"],
        answer: "🦷 Composite (tooth-colored) filling: ₹2,000 per tooth. Natural look, single visit, mercury-free!"
    },
    "price": {
        keywords: ["price", "cost", "fee", "charges", "rate"],
        answer: "💰 Our treatments:\n• RCT: ₹5000\n• Implant: ₹25,000+\n• Braces: ₹30,000+\n• Denture: ₹1,000/tooth\n• Post & Core: ₹3,000\n• Extraction: ₹500+\n• Scaling: ₹1,500+\n• Composite: ₹2,000/tooth"
    },
    "timing": {
        keywords: ["timing", "time", "hours", "open", "close", "opening"],
        answer: "⏰ Clinic Hours:\nMonday-Saturday: 10:00 AM - 8:00 PM\nSunday: Closed (Emergency cases only - please call)"
    },
    "appointment": {
        keywords: ["appointment", "book", "consultation", "visit", "meet"],
        answer: "📅 To book appointment:\n• Call: 9376585486\n• WhatsApp: +919376585486\n• Email: ddccare2000@gmail.com\nOr use the form on our Home page!"
    },
    "location": {
        keywords: ["location", "address", "reach", "map", "direction", "come"],
        answer: "📍 Our Address: Near Eid Gah Bari, Bikaner, Rajasthan\n📌 Google Map link available on Home page!"
    },
    "payment": {
        keywords: ["payment", "card", "cash", "emi", "installment"],
        answer: "💳 Payment options:\n• Cash\n• Credit/Debit Card\n• UPI (Google Pay, PhonePe, Paytm)\n• EMI options available for major treatments (implants/braces)"
    },
    "emergency": {
        keywords: ["emergency", "urgent", "pain", "toothache", "swelling"],
        answer: "🚨 For dental emergencies (severe pain, swelling, accident):\nCall immediately: 9376585486\nWe have emergency slots daily!"
    },
    "thanks": {
        keywords: ["thanks", "thank you", "thank"],
        answer: "🙏 You're welcome! Feel free to ask if you have more questions. Have a great day!"
    },
    "bye": {
        keywords: ["bye", "goodbye", "see you", "exit"],
        answer: "👋 Thank you for visiting Deeksha Dental Care! For any help, we're here 24/7 on WhatsApp. Take care!"
    },
    "hello": {
        keywords: ["hello", "hi", "hey", "good morning", "good evening"],
        answer: "👋 Hello! Welcome to Deeksha Dental Care. How can I assist you with your dental needs today?"
    }
};

// Function to find best match
function findBestMatch(userInput) {
    userInput = userInput.toLowerCase();
    
    // Check for exact matches first
    for (let key in knowledgeBase) {
        for (let keyword of knowledgeBase[key].keywords) {
            if (userInput.includes(keyword)) {
                return knowledgeBase[key].answer;
            }
        }
    }
    
    // Default response
    return "🤔 I'm not sure about that. Please call us at 9376585486 or WhatsApp for specific queries. You can also ask about:\n• RCT\n• Implants\n• Braces\n• Dentures\n• Extraction\n• Scaling\n• Composite Fillings\n• Prices\n• Appointment";
}

// ===== CHATBOT UI FUNCTIONS =====
function toggleChatbot() {
    const chatbot = document.getElementById('chatbotContainer');
    const button = document.querySelector('.chatbot-button');
    
    if (chatbot.style.display === 'none' || chatbot.style.display === '') {
        chatbot.style.display = 'flex';
        button.style.display = 'none';
    } else {
        chatbot.style.display = 'none';
        button.style.display = 'flex';
    }
}

function closeChatbot() {
    document.getElementById('chatbotContainer').style.display = 'none';
    document.querySelector('.chatbot-button').style.display = 'flex';
}

function sendMessage() {
    const input = document.getElementById('chatbotInput');
    const message = input.value.trim();
    
    if (message === '') return;
    
    // Add user message
    addMessage(message, 'user');
    input.value = '';
    
    // Show typing indicator
    showTypingIndicator();
    
    // Simulate AI thinking
    setTimeout(() => {
        hideTypingIndicator();
        
        // Get bot response
        const response = findBestMatch(message);
        
        // Add multiple messages for better UX
        if (response.includes('\n')) {
            const lines = response.split('\n');
            lines.forEach((line, index) => {
                if (line.trim() !== '') {
                    setTimeout(() => {
                        addMessage(line.trim(), 'bot', index === 0);
                    }, index * 300);
                }
            });
        } else {
            addMessage(response, 'bot');
        }
    }, 1000);
}

function addMessage(text, sender, isFirst = true) {
    const messages = document.getElementById('chatbotMessages');
    const messageDiv = document.createElement('div');
    messageDiv.className = `chat-message ${sender}-message`;
    
    // Add icon for bot messages
    if (sender === 'bot' && isFirst) {
        messageDiv.innerHTML = `<i class="fas fa-tooth" style="margin-right: 8px; color: #0a7ea4;"></i>${text}`;
    } else {
        messageDiv.textContent = text;
    }
    
    messages.appendChild(messageDiv);
    messages.scrollTop = messages.scrollHeight;
}

function showTypingIndicator() {
    const messages = document.getElementById('chatbotMessages');
    const typingDiv = document.createElement('div');
    typingDiv.className = 'chat-message bot-message typing-indicator';
    typingDiv.id = 'typingIndicator';
    typingDiv.innerHTML = '<span>.</span><span>.</span><span>.</span>';
    messages.appendChild(typingDiv);
    messages.scrollTop = messages.scrollHeight;
}

function hideTypingIndicator() {
    const typing = document.getElementById('typingIndicator');
    if (typing) typing.remove();
}

// Enter key to send
function handleKeyPress(event) {
    if (event.key === 'Enter') {
        sendMessage();
    }
}
