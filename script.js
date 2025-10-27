// Interview booking logic
const interviewLinks = {
    'Mandarin': 'https://outlook.office.com/book/Chinese@teleperformance.onmicrosoft.com/s/7lYQUtBQp0O-ps7TnPavzA2?ismsaljsauthenabled',
    'Cantonese': 'https://outlook.office.com/book/Chinese@teleperformance.onmicrosoft.com/s/MV4FDjJs7EeuSYmAOiz6zQ2?ismsaljsauthenabled',
    'Korean': 'https://outlook.office.com/book/TeleperformanceMalaysiaThailandinterviews@teleperformance.onmicrosoft.com/s/VOKIhr5rN0CbMRcvzrUyIw2?ismsaljsauthenabled',
    'Japanese': 'https://outlook.office.com/book/TeleperformanceMalaysiaThailandinterviews@teleperformance.onmicrosoft.com/s/G_rYtA5Pg0ebNjlKhHtTGg2?ismsaljsauthenabled',
    'English': 'https://outlook.office.com/book/EnglishMalay@teleperformance.onmicrosoft.com/s/1VrPYr8cmESlwvf5rfq-Og2?ismsaljsauthenabled',
    'Malay': 'https://outlook.office.com/book/EnglishMalay@teleperformance.onmicrosoft.com/s/1VrPYr8cmESlwvf5rfq-Og2?ismsaljsauthenabled',
    'Thai': 'https://outlook.office.com/book/TeleperformanceMalaysiaSupportHiring@teleperformance.onmicrosoft.com/s/8uzkPuNYJEWfdPhpfRoQag2?ismsaljsauthenabled'
};

const agentJobKeywords = ['customer service', 'content mod', 'content moderator', 'agent', 'support', 'representative', 'specialist', 'associate', 'advisor', 'care'];

function isAgentPosition(jobType) {
    if (!jobType) return false;
    return agentJobKeywords.some(keyword => jobType.toLowerCase().includes(keyword));
}

function getInterviewLink(languageOption) {
    return interviewLinks[languageOption] || interviewLinks['English'];
}

document.addEventListener('DOMContentLoaded', function() {
    // Set current year in footer
    document.getElementById('current-year').textContent = new Date().getFullYear();

    // Language translation functionality
    const languages = {
        en: {
            about_us: "About Us",
            careers: "Careers",
            hot_jobMY: "Hot Job MALAYSIA🔥",
            hot_jobTH: "Hot Job THAILAND🔥",
            opportunities: "Job Opportunities 🌟",
            refer_friend: "Refer A Friend🌟",
            stay_connected: "Stay Connected",
            contact_us: "Contact Us",
            language: "Language",
            hot_job_content: "Hot Job Of The Week!",
            hot_job_description: "Check out our <strong>\"Hot Job of the Week\"</strong> and join our award-winning team! This role offers fantastic growth opportunities, competitive benefits, and the chance to work with cutting-edge AI technology. Apply now and be part of our journey to excellence!",
            apply_now: "Apply Now!",
            find_job: "Find your perfect job!",
            choose_language: "Choose your language",
            choose_location: "Choose your location",
            choose_job_type: "Choose your job type",
            generate_qr: "Generate QR Code & Apply Now!",
            intro_text: "We are on the hunt for the <span class='highlight'>One</span>",
            team_response: "Our team will respond within <span class='highlighted-word'>48 hours!</span>",
            share_via: "Share Via",
            preferred_language: "Preferred Language",
            scan_to_apply: "Scan to Apply",
            select_all_options: "Please select all options",
            no_job_found: "No matching job found",
            step_one: "Submit Your Application",
            step_one_desc: "Click the link below or scan the QR code to apply for this position",
            apply_online: "Apply Online Now",
            or_scan: "Or scan QR code:",
            step_two: "Book Your Interview",
            step_two_desc: "After submitting your application, schedule your interview at your convenience",
            book_interview: "Schedule Interview Now",
            share_opportunity: "Share This Opportunity"
        },
        zh: {
            about_us: "关于我们",
            careers: "职业机会",
            hot_jobMY: "热门职位 马来西亚🔥",
            hot_jobTH: "热门职位 泰国🔥",
            opportunities: "机会 🌟",
            refer_friend: "介绍个朋友🌟",
            stay_connected: "保持联系",
            contact_us: "联系我们",
            language: "语言",
            hot_job_content: "本周热门职位!",
            hot_job_description: "查看我们的<strong>\"本周热门职位\"</strong>,加入我们屡获殊荣的团队吧!这个职位提供了绝佳的成长机会、具有竞争力的福利待遇,以及与尖端AI技术合作的机会。立即申请,成为我们追求卓越之旅的一部分!",
            apply_now: "立即申请!",
            find_job: "找到你的理想工作!",
            choose_language: "选择语言",
            choose_location: "选择地点",
            choose_job_type: "选择工作类型",
            generate_qr: "生成二维码并立即申请!",
            intro_text: "我们正在寻找<span class='highlight'>合适的人选</span>",
            team_response: "我们的团队将在<span class='highlighted-word'>48小时内</span>回复!",
            share_via: "分享方式",
            preferred_language: "首选语言",
            scan_to_apply: "扫描申请",
            select_all_options: "请选择所有选项",
            no_job_found: "未找到匹配的工作",
            step_one: "提交您的申请",
            step_one_desc: "点击下方链接或扫描二维码申请此职位",
            apply_online: "立即在线申请",
            or_scan: "或扫描二维码:",
            step_two: "预约面试",
            step_two_desc: "提交申请后,请按您的方便时间安排面试",
            book_interview: "立即预约面试",
            share_opportunity: "分享此机会"
        },
        jp: {
            about_us: "会社概要",
            careers: "採用情報",
            hot_jobMY: "ホットジョブ マレーシア🔥",
            hot_jobTH: "ホットジョブ タイ🔥",
            opportunities: "求人情報 🌟",
            refer_friend: "友人を紹介🌟",
            stay_connected: "つながりを保つ",
            contact_us: "お問い合わせ",
            language: "言語",
            hot_job_content: "今週のホットジョブ!",
            hot_job_description: "私たちの<strong>「今週のホットジョブ」</strong>をチェックして、受賞歴のあるチームに参加してください!この役割は、素晴らしい成長の機会、競争力のある福利厚生、最先端のAI技術を使用する機会を提供します。今すぐ応募して、卓越性への旅の一部になりましょう!",
            apply_now: "今すぐ応募!",
            find_job: "あなたにぴったりの仕事を見つけましょう!",
            choose_language: "言語を選択",
            choose_location: "場所を選択",
            choose_job_type: "仕事の種類を選択",
            generate_qr: "QRコードを生成して今すぐ申し込む!",
            intro_text: "私たちは<span class='highlight'>適任者</span>を探しています",
            team_response: "私たちのチームは<span class='highlighted-word'>48時間以内</span>に返信します!",
            share_via: "共有",
            preferred_language: "希望言語",
            scan_to_apply: "スキャンして応募",
            select_all_options: "すべてのオプションを選択してください",
            no_job_found: "一致する仕事が見つかりません",
            step_one: "応募書類を提出",
            step_one_desc: "下のリンクをクリックするか、QRコードをスキャンしてこのポジションに応募してください",
            apply_online: "今すぐオンラインで応募",
            or_scan: "またはQRをスキャン:",
            step_two: "面接を予約",
            step_two_desc: "応募後、ご都合の良い時間に面接を予約してください",
            book_interview: "今すぐ面接を予約",
            share_opportunity: "この機会を共有"
        },
        kr: {
            about_us: "회사 소개",
            careers: "채용",
            hot_jobMY: "핫한 직업 말레이시아🔥",
            hot_jobTH: "핫한 직업 태국🔥",
            opportunities: "기회 🌟",
            refer_friend: "친구 추천🌟",
            stay_connected: "연결 유지",
            contact_us: "문의하기",
            language: "언어",
            hot_job_content: "이번 주 핫한 직업!",
            hot_job_description: "<strong>\"이번 주 핫한 직업\"</strong>을 확인하고 수상 경력이 있는 팀에 합류하세요! 이 역할은 환상적인 성장 기회, 경쟁력 있는 혜택, 최첨단 AI 기술을 사용할 기회를 제공합니다. 지금 지원하고 우수성을 향한 여정의 일부가 되세요!",
            apply_now: "지금 지원!",
            find_job: "완벽한 직업을 찾으세요!",
            choose_language: "언어 선택",
            choose_location: "위치 선택",
            choose_job_type: "직무 유형 선택",
            generate_qr: "QR 코드 생성 및 지금 지원!",
            intro_text: "우리는 <span class='highlight'>적임자</span>를 찾고 있습니다",
            team_response: "우리 팀은 <span class='highlighted-word'>48시간</span> 이내에 답변드립니다!",
            share_via: "공유하기",
            preferred_language: "선호 언어",
            scan_to_apply: "스캔하여 지원",
            select_all_options: "모든 옵션을 선택하세요",
            no_job_found: "일치하는 직업을 찾을 수 없음",
            step_one: "지원서 제출",
            step_one_desc: "아래 링크를 클릭하거나 QR 코드를 스캔하여 이 포지션에 지원하세요",
            apply_online: "지금 온라인으로 지원",
            or_scan: "또는 QR 스캔:",
            step_two: "면접 예약",
            step_two_desc: "지원서를 제출한 후 편리한 시간에 면접을 예약하세요",
            book_interview: "지금 면접 예약",
            share_opportunity: "이 기회를 공유"
        },
        my: {
            about_us: "Tentang Kami",
            careers: "Kerjaya",
            hot_jobMY: "Kerja Popular MALAYSIA🔥",
            hot_jobTH: "Kerja Popular THAILAND🔥",
            opportunities: "Peluang Pekerjaan 🌟",
            refer_friend: "Rujuk Rakan🌟",
            stay_connected: "Kekal Berhubung",
            contact_us: "Hubungi Kami",
            language: "Bahasa",
            hot_job_content: "Kerja Popular Minggu Ini!",
            hot_job_description: "Lihat <strong>\"Kerja Popular Minggu Ini\"</strong> kami dan sertai pasukan kami yang memenangi anugerah! Peranan ini menawarkan peluang pertumbuhan yang hebat, faedah yang kompetitif, dan peluang untuk bekerja dengan teknologi AI termaju. Mohon sekarang dan jadilah sebahagian daripada perjalanan kami ke arah kecemerlangan!",
            apply_now: "Mohon Sekarang!",
            find_job: "Cari pekerjaan sempurna anda!",
            choose_language: "Pilih bahasa anda",
            choose_location: "Pilih lokasi anda",
            choose_job_type: "Pilih jenis pekerjaan anda",
            generate_qr: "Jana Kod QR & Mohon Sekarang!",
            intro_text: "Kami sedang mencari <span class='highlight'>Satu</span>",
            team_response: "Pasukan kami akan membalas dalam masa <span class='highlighted-word'>48 jam!</span>",
            share_via: "Kongsi Melalui",
            preferred_language: "Bahasa Pilihan",
            scan_to_apply: "Imbas untuk Mohon",
            select_all_options: "Sila pilih semua pilihan",
            no_job_found: "Tiada pekerjaan yang sepadan dijumpai",
            step_one: "Hantar Permohonan Anda",
            step_one_desc: "Klik pautan di bawah atau imbas kod QR untuk memohon jawatan ini",
            apply_online: "Mohon Dalam Talian Sekarang",
            or_scan: "Atau imbas QR:",
            step_two: "Tempah Temu Duga Anda",
            step_two_desc: "Selepas menghantar permohonan anda, jadualkan temu duga anda mengikut kemudahan anda",
            book_interview: "Jadualkan Temu Duga Sekarang",
            share_opportunity: "Kongsi Peluang Ini"
        },
        th: {
            about_us: "เกี่ยวกับเรา",
            careers: "อาชีพ",
            hot_jobMY: "งานยอดนิยม มาเลเซีย🔥",
            hot_jobTH: "งานยอดนิยม ไทย🔥",
            opportunities: "โอกาสงาน 🌟",
            refer_friend: "แนะนำเพื่อน🌟",
            stay_connected: "ติดต่อกัน",
            contact_us: "ติดต่อเรา",
            language: "ภาษา",
            hot_job_content: "งานยอดนิยมประจำสัปดาห์!",
            hot_job_description: "ดู<strong>\"งานยอดนิยมประจำสัปดาห์\"</strong>ของเราและเข้าร่วมทีมที่ได้รับรางวัลของเรา! บทบาทนี้นำเสนอโอกาสในการเติบโตที่ยอดเยี่ยม ผลประโยชน์ที่แข่งขันได้ และโอกาสในการทำงานกับเทคโนโลยี AI ที่ทันสมัย สมัครเลยตอนนี้และเป็นส่วนหนึ่งของการเดินทางสู่ความเป็นเลิศของเรา!",
            apply_now: "สมัครเลย!",
            find_job: "ค้นหางานที่สมบูรณ์แบบของคุณ!",
            choose_language: "เลือกภาษาของคุณ",
            choose_location: "เลือกสถานที่ของคุณ",
            choose_job_type: "เลือกประเภทงานของคุณ",
            generate_qr: "สร้างคิวอาร์โค้ดและสมัครเลย!",
            intro_text: "เรากำลังมองหา<span class='highlight'>คนเดียว</span>",
            team_response: "ทีมของเราจะตอบกลับภายใน <span class='highlighted-word'>48 ชั่วโมง!</span>",
            share_via: "แชร์ผ่าน",
            preferred_language: "ภาษาที่ต้องการ",
            scan_to_apply: "สแกนเพื่อสมัคร",
            select_all_options: "กรุณาเลือกตัวเลือกทั้งหมด",
            no_job_found: "ไม่พบงานที่ตรงกัน",
            step_one: "ส่งใบสมัครของคุณ",
            step_one_desc: "คลิกลิงก์ด้านล่างหรือสแกนคิวอาร์โค้ดเพื่อสมัครตำแหน่งนี้",
            apply_online: "สมัครออนไลน์ทันที",
            or_scan: "หรือสแกน QR:",
            step_two: "จองการสัมภาษณ์ของคุณ",
            step_two_desc: "หลังจากส่งใบสมัครของคุณแล้ว กำหนดเวลาสัมภาษณ์ตามความสะดวกของคุณ",
            book_interview: "กำหนดเวลาสัมภาษณ์ทันที",
            share_opportunity: "แชร์โอกาสนี้"
        }
    };

    // Sample job data - Replace with your actual data source
    const jsonData = [
        {
            Language: "English",
            Location: "Malaysia",
            Positions: "Customer Service Agent",
            "Evergreen link": "https://example.com/jobs/english-malaysia-agent"
        },
        {
            Language: "Mandarin",
            Location: "Malaysia",
            Positions: "Sales Specialist",
            "Evergreen link": "https://example.com/jobs/mandarin-malaysia-sales"
        }
        // Add more job data as needed
    ];

    // Get DOM elements
    const languageSelect = document.getElementById('language-select');
    const locationSelect = document.getElementById('location-select');
    const jobTypeSelect = document.getElementById('job-type-select');
    const generateBtn = document.getElementById('generate-btn');
    const applyBtn = document.getElementById('apply-btn');
    const urlParams = new URLSearchParams(window.location.search);

    // Get language from URL or default to English
    function getLanguageFromUrl() {
        return urlParams.get('lang') || 'en';
    }

    // Update content based on selected language
    function updateContent(lang) {
        const translations = languages[lang] || languages.en;
        
        document.querySelectorAll('[data-translate]').forEach(element => {
            const key = element.getAttribute('data-translate');
            if (translations[key]) {
                element.innerHTML = translations[key];
            }
        });
    }

    // Populate dropdowns
    function populateInitialDropdowns() {
        // Populate languages
        const uniqueLanguages = [...new Set(jsonData.map(item => item.Language))];
        languageSelect.innerHTML = '<option value="">-- Select Language --</option>';
        uniqueLanguages.forEach(lang => {
            const option = document.createElement('option');
            option.value = lang;
            option.textContent = lang;
            languageSelect.appendChild(option);
        });
    }

    function updateLocations() {
        const selectedLanguage = languageSelect.value;
        const locations = [...new Set(jsonData
            .filter(item => item.Language === selectedLanguage)
            .map(item => item.Location))];
        
        locationSelect.innerHTML = '<option value="">-- Select Location --</option>';
        locations.forEach(loc => {
            const option = document.createElement('option');
            option.value = loc;
            option.textContent = loc;
            locationSelect.appendChild(option);
        });
        
        jobTypeSelect.innerHTML = '<option value="">-- Select Job Type --</option>';
    }

    function updateLanguages() {
        const selectedLocation = locationSelect.value;
        const jobTypes = [...new Set(jsonData
            .filter(item => item.Language === languageSelect.value && item.Location === selectedLocation)
            .map(item => item.Positions))];
        
        jobTypeSelect.innerHTML = '<option value="">-- Select Job Type --</option>';
        jobTypes.forEach(job => {
            const option = document.createElement('option');
            option.value = job;
            option.textContent = job;
            jobTypeSelect.appendChild(option);
        });
    }

    // Load job data (replace with actual API call if needed)
    function loadJobData() {
        populateInitialDropdowns();
    }

    // Generate final URL with UTM parameters
    function generateFinalURL(baseURL, source, medium) {
        if (!baseURL) return '';
        
        const finalURL = new URL(baseURL);
        let iisValue = "";
        let iisnValue = "";

        switch (medium) {
            case 'LandingPage':
                iisValue = "Landing Page";
                iisnValue = encodeURIComponent(source).replace(/%2B/g, '+');
                break;
            case 'WhatsApp':
                iisValue = "WhatsApp Broadcast";
                iisnValue = encodeURIComponent(source).replace(/%2B/g, '+');
                break;
            case 'WeChat':
                iisValue = "WeChat";
                iisnValue = encodeURIComponent(source).replace(/%2B/g, '+');
                break;
            case 'LINE':
                iisValue = "LINE";
                iisnValue = encodeURIComponent(source).replace(/%2B/g, '+');
                break;
            case 'Telegram':
                iisValue = "Telegram";
                iisnValue = encodeURIComponent(source).replace(/%2B/g, '+');
                break;
            case 'facebook':
                iisValue = "Facebook";
                iisnValue = encodeURIComponent(source).replace(/%2B/g, '+');
                break;
            case 'instagram':
                iisValue = "Instagram";
                iisnValue = encodeURIComponent(source).replace(/%2B/g, '+');
                break;
            case 'xiaohongshu':
                iisValue = "Xiaohongshu";
                iisnValue = encodeURIComponent(source).replace(/%2B/g, '+');
                break;
            case 'Email':
                iisValue = "Email Blast";
                iisnValue = encodeURIComponent(source).replace(/%2B/g, '+');
                break;
            case 'public':
                iisValue = "Public Stands";
                iisnValue = encodeURIComponent(source).replace(/%2B/g, '+');
                break;
            case 'grab':
                iisValue = "Grab";
                iisnValue = encodeURIComponent(source).replace(/%2B/g, '+');
                break;            
            case 'linkedin':
                iisValue = "LinkedIn Recruiter";
                iisnValue = encodeURIComponent(source).replace(/%2B/g, '+');
                break;
            case 'Broadcast':
                iisValue = "Broadcast Comms";
                iisnValue = encodeURIComponent(source).replace(/%2B/g, '+');
                break;
            default:
                console.error("Unknown utm_medium");
                return baseURL;
        }

        finalURL.searchParams.set('mode', 'job');
        finalURL.searchParams.set('iis', encodeURIComponent(iisValue).replace(/%20/g, '+'));
        finalURL.searchParams.set('iisn', encodeURIComponent(iisnValue).replace(/%2B/g, '+'));

        return decodeURIComponent(finalURL.toString());
    }

    // Generate QR code and show modal with expand functionality
    function openQrModal(url, selectedLanguage, selectedJob) {
        const qr = new QRious({
            element: document.getElementById('qr-code'),
            value: url,
            size: 200,
            background: 'white',
            foreground: 'black'
        });
        
        const jobUrlElement = document.getElementById('job-url');
        jobUrlElement.href = url;
        jobUrlElement.textContent = url;
        
        // Check if this is an agent position and show/hide interview step
        const interviewStep = document.getElementById('interview-step');
        if (isAgentPosition(selectedJob)) {
            interviewStep.style.display = 'block';
            const interviewUrl = getInterviewLink(selectedLanguage);
            const interviewUrlElement = document.getElementById('interview-url');
            interviewUrlElement.href = interviewUrl;
        } else {
            interviewStep.style.display = 'none';
        }
        
        const qrModal = new bootstrap.Modal(document.getElementById('qrModal'));
        qrModal.show();

        // Add QR expand functionality
        setupQRExpand(url);
    }

    // Setup QR expand functionality
    function setupQRExpand(url) {
        const qrCanvas = document.getElementById('qr-code');
        const expandBtn = document.getElementById('expand-qr-btn');
        
        const expandQR = () => {
            const expandedQR = new QRious({
                element: document.getElementById('qr-code-expanded'),
                value: url,
                size: 400,
                background: 'white',
                foreground: 'black'
            });
            
            const expandModal = new bootstrap.Modal(document.getElementById('qrExpandedModal'));
            expandModal.show();
        };

        // Add click handlers
        qrCanvas.onclick = expandQR;
        expandBtn.onclick = expandQR;
    }

    // Set hot job based on language
    function setHotJob(lang) {
        const hotJobs = {
            en: jsonData.find(job => job.Language === "English"),
            zh: jsonData.find(job => job.Language === "Mandarin"),
            jp: jsonData.find(job => job.Language === "Japanese"),
            kr: jsonData.find(job => job.Language === "Korean"),
            my: jsonData.find(job => job.Language === "Malay"),
            th: jsonData.find(job => job.Language === "Thai")
        };
        
        const hotJob = hotJobs[lang] || jsonData[0];
        
        if (hotJob && applyBtn) {
            applyBtn.onclick = function(e) {
                e.preventDefault();
                const urlParams = new URLSearchParams(window.location.search);
                const sourceParam = urlParams.get('utm_source') || '';
                const mediumParam = urlParams.get('utm_medium') || '';
                const finalLink = generateFinalURL(hotJob['Evergreen link'], sourceParam, mediumParam);
                window.open(finalLink, '_blank');
            };
        }
    }

    // Initialize event listeners
    function initEventListeners() {
        // Language dropdown change
        languageSelect.addEventListener('change', function() {
            updateLocations();
        });

        // Location dropdown change
        locationSelect.addEventListener('change', updateLanguages);

        // Generate QR button click
        if (generateBtn) {
            generateBtn.addEventListener('click', function() {
                const selectedLanguage = languageSelect.value;
                const selectedLocation = locationSelect.value;
                const selectedJob = jobTypeSelect.value;
                const currentPageLang = getLanguageFromUrl();
                
                if (!selectedLanguage || !selectedLocation || !selectedJob) {
                    alert(languages[currentPageLang]?.select_all_options || 'Please select all options');
                    return;
                }
                
                const jobData = jsonData.find(item => 
                    item.Language === selectedLanguage && 
                    item.Location === selectedLocation && 
                    item.Positions === selectedJob
                );
                
                if (jobData) {
                    const urlParams = new URLSearchParams(window.location.search);
                    const sourceParam = urlParams.get('utm_source') || '';
                    const mediumParam = urlParams.get('utm_medium') || '';
                    const finalLink = generateFinalURL(jobData["Evergreen link"], sourceParam, mediumParam);
                    openQrModal(finalLink, selectedLanguage, selectedJob);
                } else {
                    alert(languages[currentPageLang]?.no_job_found || 'No matching job found');
                }
            });
        }

        // Language selector dropdown items (for PAGE language)
        document.querySelectorAll('.dropdown-item[data-lang]').forEach(item => {
            item.addEventListener('click', function(e) {
                e.preventDefault();
                const selectedLanguage = this.getAttribute('data-lang');
                updateContent(selectedLanguage);
                
                urlParams.set('lang', selectedLanguage);
                window.history.replaceState(null, '', `${window.location.pathname}?${urlParams.toString()}`);
                
                setHotJob(selectedLanguage);
                populateInitialDropdowns();
            });
        });

        // Share buttons
        document.getElementById('share-button-whatsapp')?.addEventListener('click', function() {
            const url = encodeURIComponent(document.getElementById('job-url').href);
            const text = encodeURIComponent("Check out this job opportunity at TP!");
            window.open(`https://wa.me/?text=${text}%20${url}`, '_blank');
        });

        document.getElementById('share-button-line')?.addEventListener('click', function() {
            const url = encodeURIComponent(document.getElementById('job-url').href);
            const text = encodeURIComponent("Check out this job opportunity at TP!");
            window.open(`https://line.me/R/msg/text/?${text}%0A%0A${url}`, '_blank');
        });
    }

    // Initialize everything
    function init() {
        updateContent(getLanguageFromUrl());
        loadJobData();
        initEventListeners();
    }

    init();
});
