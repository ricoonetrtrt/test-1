import {
    Storage
} from "https://cdn.jsdelivr.net/gh/UmarBelloKanwa/webapi@main/library.js";
new Storage('Conversations');

export default class Model extends Conversations {
    constructor(ctrl) {
        super();
        this.ctrl = ctrl;
        this.storeName = new Date().toLocaleDateString('en-US', {
            year: 'numeric',
            month: '2-digit',
            day: '2-digit'
        });
        this.loadChat();
        this.setting = this.getSetting();
        this.translations = {
            bouchra: ['بشرى', 'Bouchra', 'Bouchra', 'Bouchra'],
            chooseLanguage: ['لغة الدردشة', 'Langue de chat', 'Chat Language', 'Yaren hira'],
            chatLanguages: ['العربية', 'Français', 'English', 'Hausa'],
            darkMode: ['الوضع الداكن', 'Mode sombre', 'Dark Mode', 'Yanayin Duhu'],
            chatHistory: ['سجل الدردشة', 'Historique du chat', 'Chat History', 'Tarihin Taɗi'],
            clearMyData: ['مسح بياناتي', 'Effacer mes données', 'Clear My Data', 'Goge Bayanai Na'],
            seeAbout: ['رؤية حول التطبيق', 'Voir À propos de l\'application', 'See About', 'Duba Game da'],
            about: [
                "هذا هو برنامج الدردشة الآلي الذي تم إنشاؤه لصديقتي الجميلة (بشرى) كهدية. احبك كثيرا يا حبي. شكراً جزيلاً",
                "Il s'agit d'un chatbot créé pour ma charmante amie (Bouchra) en cadeau. Je t'aime beaucoup mon amour. Merci beaucoup",
                "This is a chatbot created for my lovely friend (Bouchra) as a gift. I love you so much my dear. Thank you very much",
                "Wannan shine chatbot da aka ƙirƙira don kyakkyawar abokiyata (Bouchra) a matsayin kyauta. Ina son ku sosai ƙaunataccena. Na gode sosai"
            ],
            writeQuestion: ['اكتب سؤالك هنا', 'Écrivez votre question ici', 'Write your question here', 'Rubuta tambayarka anan'],
            introText: [
                'مرحبًا بك في الدردشة، دائمًا متاحة للإجابة على أسئلتك',
                'Bienvenue sur Bouchra chatbot, toujours gratuit et disponible pour répondre à vos questions',
                'Welcome to Bouchra chatbot, always available to answer your questions',
                'Barka da zuwa chatbot na Bouchra, koyaushe ana samunshi don amsa tambayoyinku'
            ],
            notSentMessage: [
                'لم يتم استلام رسالتك، يرجى المحاولة مرة أخرى',
                'Votre message n\'est pas reçu, veuillez réessayer',
                'Your message was not received, please try again',
                'Sakon ku ba a karɓa ba, don Allah a sake gwadawa'
            ],
            searchHistory: ['البحث في السجل حسب التاريخ', 'Rechercher dans l\'historique par date', 'Search history by date', 'Bincika tarihin ta kwanan wata'],
            clearData: ['هل أنت متأكد أنك تريد مسح بياناتك؟', 'Etes-vous sûr de vouloir effacer vos données ?', 'Are you sure you want to clear your data ?', 'Shin kun tabbata kuna son share bayanan ku ?']
        };
        this.darkModeStyles = `
        html, body, header, nav div, article img, header h1, article h1, section, form h5, form,
        [title=alert-box], [title=alert-box] h1, aside, aside div div
        { background-image:var(--dark_mode);
          color:white; 
          text-shadow:none;}
        aside div div
        { background-image:none;
          background-color:transparent;}
        aside div p { text-shadow:none; }
        aside input, aside input::placeholder
        { color:white;
          background-color:transparent;}
        section, header, nav > img:first-child, nav div, article img, article h1, form h5, form,
        [title=alert-box], [title=alert-box] h1, aside div
        { border:1px solid rgba(255, 255, 255, .5); }
        nav > img:first-child { background-color: rgba(150, 55, 5, 1);}
        [title=alert-box] span { text-shadow:none;}`;
    }
    setSetting(data) {
        this.setting = {
            ...this.setting,
            ...data
        }
        localStorage.setItem('setting', JSON.stringify(this.setting));
    }
    getSetting() {
        const setting = localStorage.getItem('setting');
        if (setting) return JSON.parse(setting);
        return {
            language: 'العربية',
            view_mode: 'Light'
        }
    }
    async getMessage(message) {
        let formData = new FormData();
        formData.append('value', message);
        formData.append('type', 'text');
        formData.append('lang', (this.getSetting()['language']));

        if (typeof message !== "string") {
            const audioData = new File([message], 'recorded_audio.wav', {
                type: 'audio/wav'
            });
            formData.append('value', audioData);
            formData.append('type', 'voice');
        }

        try {
            const response = await fetch(
                '/chat', {
                    method: 'POST',
                    mode: 'same-origin',
                    credentials: 'same-origin',
                    headers: {
                        'Accept': 'application/json'
                    },
                    body: formData
                }
            );
            if (!response.ok) {
                throw new Error('Network response was not ok');
            }
            var result = await response.json();
            result = result.message;
        } catch (error) {
            result = this.translations.notSentMessage[Number(this.getLanguageKey())];
            this.ctrl.actions.actions('notify', result);
            console.error(error);
        }

        this.add({
            'user': message,
            'bouchra': result,
            'language': await this.getSetting()['language']
        });
        return result;
    }
    add(data) {
        this.operate('add', this.storeName, data).then(() => void this.loadChat());
    }
    getLanguageKey() {
        let key = this.getSetting();
        key = key['language'];
        if (key == 'العربية') key = 0;
        if (key == 'Français') key = 1;
        if (key == 'English') key = 2;
        if (key == 'Hausa') key = 3;
        return key;
    }
    loadChat() {
        this.operate('display', this.storeName).then(result => {
            this.ctrl.savedMessages(result);
            const histories = Object.values(this.dataBase.objectStoreNames);
            histories.sort();
            histories.reverse();
            this.ctrl.pushChatHistory(histories);
        });
    }
    deleteStore(name) {
        this.openDatabase('delete', name).then(() => {
            console.log(name, 'store was deleted');
            this.loadChat();
        }).catch((e) => {
            console.error(error, 'deleting', name, 'store');
        });
    }
    deleteDatabase(name) {
        this.deleteDb(name).then(() => {
            console.log(name, 'database was deleted');
        }).catch(error => {
            console.log(error);
        });
        localStorage.clear();
    }
}