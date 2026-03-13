// ========================================================================
// נושא: אנגלית (English)
// קטגוריה: Grammar: Tenses (זמנים בדקדוק)
// תתי נושאים: Present Simple + Present Progressive
// רמה: מתקדמת - חטיבה עליונה והכנה לבגרות (Masterclass)
// ========================================================================

const questionsDB = [

    // ---------------------------------------------------------
    // Subtopic 1: Present Simple (הווה פשוט) - רמה מתקדמת
    // ---------------------------------------------------------

    // Question 1
    {
        topic: "english",
        subTopic: "Present Simple (הווה פשוט)",
        question_text: `<strong>Future Scheduled Events (לוחות זמנים בעתיד):</strong><br>
        השלימו את המשפט הבא המתאר את לוח הזמנים של הרכבת למחר:<br>
        <span dir="ltr" style="font-size: 1.3em; font-weight: bold; color: #1e40af;">Hurry up! The train to London ________ at 08:00 tomorrow morning.</span>`,
        options: [
            "<span dir=\"ltr\">leaves</span>",
            "<span dir=\"ltr\">is leaving</span>",
            "<span dir=\"ltr\">will leave</span>",
            "<span dir=\"ltr\">leave</span>"
        ],
        correctAnswer: 0,
        hint: "מלכודת קלאסית בבגרות! למרות שכתוב 'מחר', פעולות של לוחות זמנים קבועים (רכבות, טיסות, הצגות קולנוע) מקבלות תמיד הווה פשוט (Present Simple).",
        solution: `<strong>הסבר מלא (הווה פשוט עבור עתיד מתוכנן):</strong><br>
        באנגלית, כשאנחנו מדברים על <strong>לוחות זמנים רשמיים וקבועים</strong> (Timetables/Schedules) כמו זמני תחבורה ציבורית, פתיחת חנויות או מועדי שידורים, אנו משתמשים ב-<strong>Present Simple</strong>, גם אם הפעולה תתרחש בעתיד (tomorrow).<br><br>
        הרכבת (The train = It) דורשת תוספת 's' לפועל.<br>
        לכן התשובה הנכונה היא: <span dir="ltr">The train <strong>leaves</strong> at 08:00 tomorrow</span>.<br>
        השימוש ב-will leave כאן נחשב לשגיאה דקדוקית בבחינות הרשמיות.`
    },
    // Question 2
    {
        topic: "english",
        subTopic: "Present Simple (הווה פשוט)",
        question_text: `<strong>Position of Adverbs of Frequency (מיקום מילות תדירות):</strong><br>
        איזה מהמשפטים הבאים כתוב בסדר התחבירי <strong>הנכון</strong>?`,
        options: [
            "<span dir=\"ltr\">He is always late for school.</span>",
            "<span dir=\"ltr\">He always is late for school.</span>",
            "<span dir=\"ltr\">Always he is late for school.</span>",
            "<span dir=\"ltr\">He is late always for school.</span>"
        ],
        correctAnswer: 0,
        hint: "מילות תדירות (always, never, usually) באות *לפני* פועל רגיל, אבל *אחרי* פועל ה-To Be (am/is/are).",
        solution: `<strong>הסבר מלא (חוק המיקום של מילות תדירות):</strong><br>
        מילות תדירות (Adverbs of Frequency) מראות באיזו תדירות אנו מבצעים פעולה (always, often, sometimes, never).<br><br>
        <strong>חוק הברזל התחבירי:</strong><br>
        1. <strong>לפני פועל רגיל:</strong> <span dir="ltr">I <strong>always</strong> eat pizza.</span><br>
        2. <strong>אחרי פועל To Be (am/is/are):</strong> <span dir="ltr">I am <strong>always</strong> happy.</span><br><br>
        מכיוון שהמשפט שלנו מכיל את הפועל <strong>is</strong>, מילת התדירות <strong>always</strong> חייבת לבוא מיד אחריו. התשובה הנכונה היא: <span dir="ltr">He is always late</span>.`
    },
    // Question 3
    {
        topic: "english",
        subTopic: "Present Simple (הווה פשוט)",
        question_text: `<strong>Indefinite Pronouns (כינויי גוף סתמיים - Everybody):</strong><br>
        בחרו את הפועל המתאים להשלמת המשפט:<br>
        <span dir="ltr" style="font-size: 1.3em; font-weight: bold; color: #1e40af;">Everybody in this class ________ to pass the English exam.</span>`,
        options: [
            "<span dir=\"ltr\">wants</span>",
            "<span dir=\"ltr\">want</span>",
            "<span dir=\"ltr\">wanting</span>",
            "<span dir=\"ltr\">are wanting</span>"
        ],
        correctAnswer: 0,
        hint: "המילה 'Everybody' (כולם) מטעה. למרות שהיא נשמעת כמו 'רבים' (קבוצה של אנשים), באנגלית היא מקבלת יחס של יחיד (He/She/It)!",
        solution: `<strong>הסבר מלא (חוק ה-Indefinite Pronouns):</strong><br>
        מילים כמו <span dir="ltr"><strong>Everybody, Everyone, Nobody, Someone, Everything</strong></span> מבלבלות תלמידים בכל העולם. אנחנו מתרגמים אותן לעברית כ"כולם", שזה רבים.<br><br>
        <strong>אבל באנגלית:</strong><br>
        כל המילים שמסתיימות ב-body או -one נחשבות מבחינה דקדוקית ל<strong>גוף שלישי יחיד (Singular)</strong>, בדיוק כמו He או She או It.<br>
        לכן, פועל שבא אחריהן בהווה פשוט חייב לקבל <strong>s</strong>.<br>
        התשובה הנכונה היא: <span dir="ltr">Everybody <strong>wants</strong></span>.`
    },
    // Question 4
    {
        topic: "english",
        subTopic: "Present Simple (הווה פשוט)",
        question_text: `<strong>Stative Verbs (פעלי מצב/רגש):</strong><br>
        איזה מהמשפטים הבאים כתוב <strong>נכון</strong> מבחינה דקדוקית? (זכרו את חוקי פעלי המצב).`,
        options: [
            "<span dir=\"ltr\">I don't understand this math problem.</span>",
            "<span dir=\"ltr\">I am not understanding this math problem.</span>",
            "<span dir=\"ltr\">I doesn't understand this math problem.</span>",
            "<span dir=\"ltr\">I not understand this math problem.</span>"
        ],
        correctAnswer: 0,
        hint: "הפועל Understand (להבין) הוא פועל מחשבתי. אי אפשר לראות מישהו 'מבין' פיזית. פעלים כאלה אוהבים רק את ה-Present Simple.",
        solution: `<strong>הסבר מלא (Stative Verbs):</strong><br>
        פעלים שמתארים רגש (love, hate), מחשבה (think, understand, know) או שייכות (belong, own) נקראים <strong>פעלי מצב (Stative Verbs)</strong>.<br><br>
        החוק הנוקשה קובע שפעלים אלו <strong>אינם יכולים לקבל סיומת ing (הווה ממושך)</strong>, אפילו אם הפעולה קורית ממש עכשיו! לכן, אי אפשר להגיד <span dir="ltr">I am not understanding</span>.<br><br>
        אנו חייבים להשתמש בהווה פשוט: <span dir="ltr"><strong>I don't understand</strong></span>.`
    },
    // Question 5
    {
        topic: "english",
        subTopic: "Present Simple (הווה פשוט)",
        question_text: `<strong>Subject Questions (שאלות נושא עם Who):</strong><br>
        כיצד תשאלו בצורה תקינה: "מי מכין את העוגה כל יום שבת?"`,
        options: [
            "<span dir=\"ltr\">Who makes the cake every Saturday?</span>",
            "<span dir=\"ltr\">Who does make the cake every Saturday?</span>",
            "<span dir=\"ltr\">Who do make the cake every Saturday?</span>",
            "<span dir=\"ltr\">Who make the cake every Saturday?</span>"
        ],
        correctAnswer: 0,
        hint: "כאשר המילה Who (מי) שואלת 'מי עושה את הפעולה' (אין לנו מושג מי הנושא), אנחנו לא משתמשים בפועל עזר (do/does). אנו מתייחסים למילה Who עצמה כגוף שלישי יחיד.",
        solution: `<strong>הסבר מלא (שאלות נושא - Subject Questions):</strong><br>
        זוהי אחת המלכודות הגדולות בבגרות. כשלמדנו שאלות, למדנו שצריך לשים <span dir="ltr">Do / Does</span>. למשל: <span dir="ltr">Where does he live?</span><br><br>
        <strong>החריג: שאלות מִִי (Who)!</strong><br>
        כאשר המילה Who שואלת על <strong>הנושא</strong> (מי מבצע את הפעולה?), לא שמים do או does. פשוט מדביקים את הפועל בתוספת <strong>s/es</strong> מיד אחרי המילה Who, כאילו Who הוא He או She.<br><br>
        <strong>דוגמאות:</strong><br>
        - <span dir="ltr">Who <strong>plays</strong> the guitar?</span> (מי מנגן בגיטרה?)<br>
        - <span dir="ltr">Who <strong>makes</strong> the cake?</span> (מי מכין את העוגה?)<br>
        לכן, אסור להגיד "Who does make".`
    },
    // Question 6
    {
        topic: "english",
        subTopic: "Present Simple (הווה פשוט)",
        question_text: `<strong>Compound Subjects (נושאים מורכבים):</strong><br>
        השלימו את המשפט בעזרת פועל העזר הנכון לשלילה:<br>
        <span dir="ltr" style="font-size: 1.3em; font-weight: bold; color: #1e40af;">My best friend and I ________ go to the same school.</span>`,
        options: [
            "<span dir=\"ltr\">don't</span>",
            "<span dir=\"ltr\">doesn't</span>",
            "<span dir=\"ltr\">aren't</span>",
            "<span dir=\"ltr\">isn't</span>"
        ],
        correctAnswer: 0,
        hint: "תמיד תסתכלו על *כל* מילות הנושא. 'החבר שלי ואני' ביחד הם 'אנחנו' (We). איזו שלילה מתאימה ל-We?",
        solution: `<strong>הסבר מלא (מניעת טעויות נפוצות בנושאים מורכבים):</strong><br>
        העין של התלמיד קוראת את המילה <span dir="ltr"><strong>I</strong></span> ועלולה לנסות לשים "am not", או קוראת "friend" ורוצה לשים "doesn't".<br><br>
        הנושא כאן הוא הקבוצה כולה: <span dir="ltr"><strong>My best friend and I</strong></span>. (החבר שלי ואני).<br>
        בעברית, חבר + אני = <strong>אנחנו (<span dir="ltr">We</span>)</strong>.<br>
        השלילה לכינוי הגוף <span dir="ltr">We</span> בהווה פשוט היא תמיד <span dir="ltr"><strong>don't</strong></span>.<br>
        התשובה: <span dir="ltr">My best friend and I <strong>don't</strong> go...</span>`
    },
    // Question 7
    {
        topic: "english",
        subTopic: "Present Simple (הווה פשוט)",
        question_text: `<strong>Have vs. Has in Questions:</strong><br>
        השלימו את השאלה הבאה כראוי:<br>
        <span dir="ltr" style="font-size: 1.3em; font-weight: bold; color: #1e40af;">________ your father ________ a new car?</span>`,
        options: [
            "<span dir=\"ltr\">Does / have</span>",
            "<span dir=\"ltr\">Do / have</span>",
            "<span dir=\"ltr\">Does / has</span>",
            "<span dir=\"ltr\">Has / have</span>"
        ],
        correctAnswer: 0,
        hint: "אבא שלך (He) פותח את השאלה עם Does. אבל זכרו! Does הוא גנב. הוא מחזיר את הפועל (have/has) לצורת המקור הראשונית שלו.",
        solution: `<strong>הסבר מלא (חוק הגנב עם Have/Has):</strong><br>
        הנושא בשאלה הוא <span dir="ltr"><strong>your father</strong></span> (אבא שלך), שזה <span dir="ltr"><strong>He</strong></span>. לכן, השאלה <u>חייבת</u> להתחיל ב-<span dir="ltr"><strong>Does</strong></span>.<br><br>
        החלק השני הוא החשוב: ברגע שהשתמשנו ב-Does, הפועל שבא אחריו חוזר ל<strong>צורת המקור שלו (Base form/V1)</strong>.<br>
        צורת המקור של הפועל "יש" היא <strong>have</strong> (ולא has!).<br>
        לכן התשובה המושלמת היא: <span dir="ltr"><strong>Does</strong> your father <strong>have</strong> a new car?</span>`
    },
    // Question 8
    {
        topic: "english",
        subTopic: "Present Simple (הווה פשוט)",
        question_text: `<strong>Rare Adverbs (מילות תדירות שליליות):</strong><br>
        המילה <strong>Rarely</strong> (לעיתים נדירות) טומנת בחובה משמעות שלילית. <br>
        איזה מהמשפטים הבאים נכון תחבירית?`,
        options: [
            "<span dir=\"ltr\">She rarely eats fast food.</span>",
            "<span dir=\"ltr\">She doesn't rarely eat fast food.</span>",
            "<span dir=\"ltr\">She rarely doesn't eat fast food.</span>",
            "<span dir=\"ltr\">She rarely eat fast food.</span>"
        ],
        correctAnswer: 0,
        hint: "באנגלית אסור לעשות 'שלילה כפולה'. המילה Rarely מספיק שלילית בעצמה, ולכן לא נוסיף לה doesn't. אך אל תשכחו שזו עדיין פעולה בגוף שלישי יחיד (היא) ולכן הפועל עדיין צריך s.",
        solution: `<strong>הסבר מלא (איסור שלילה כפולה - Double Negative):</strong><br>
        מילים כמו <span dir="ltr"><strong>Never, Rarely, Seldom, Hardly ever</strong></span> מכילות בתוכן את משמעות ה"לא" (שלילה).<br>
        בשפה האנגלית, אסור לשים שתי שלילות באותו משפט! לכן, אם השתמשנו בהן, <strong>אסור להשתמש ב-don't או doesn't</strong>.<br><br>
        אנו מתייחסים למשפט כאל משפט <strong>חיובי</strong> רגיל:<br>
        <span dir="ltr">She (נושא) + rarely (תדירות) + eat<strong>s</strong> (פועל עם s כי זה She).</span><br>
        התשובה התקינה: <span dir="ltr">She <strong>rarely eats</strong> fast food.</span>`
    },
    // Question 9
    {
        topic: "english",
        subTopic: "Present Simple (הווה פשוט)",
        question_text: `<strong>Questions about Frequency (שאלות תדירות):</strong><br>
        אם התשובה היא "I go to the gym <u>twice a week</u>", מה הייתה השאלה?`,
        options: [
            "<span dir=\"ltr\">How often do you go to the gym?</span>",
            "<span dir=\"ltr\">When do you go to the gym?</span>",
            "<span dir=\"ltr\">How long do you go to the gym?</span>",
            "<span dir=\"ltr\">Why do you go to the gym?</span>"
        ],
        correctAnswer: 0,
        hint: "כדי לשאול 'באיזו תדירות' (כמה פעמים בשבוע/בחודש), אנו משתמשים בצמד המילים How often.",
        solution: `<strong>הסבר מלא (How often):</strong><br>
        התשובה מציינת תדירות מדויקת: <strong>twice a week</strong> (פעמיים בשבוע).<br><br>
        מילת השאלה היחידה שנועדה לחלץ תשובות של תדירות (פעם ביום, פעמיים בשבוע, תמיד, אף פעם) היא: <span dir="ltr"><strong>How often</strong></span> (באיזו תדירות).<br>
        <span dir="ltr">"<strong>How often</strong> do you go to the gym?"</span><br><br>
        *הערה: <span dir="ltr">When</span> ישאל על זמן ספציפי (ביום שני בשמונה), ואילו <span dir="ltr">How long</span> שואל על משך זמן (למשך שעתיים).`
    },
    // Question 10
    {
        topic: "english",
        subTopic: "Present Simple (הווה פשוט)",
        question_text: `<strong>The Verb 'To Be' vs. Action Verbs:</strong><br>
        איזה מהמשפטים השליליים הבאים בנוי <strong>לא נכון</strong>?`,
        options: [
            "<span dir=\"ltr\">He doesn't be happy.</span>",
            "<span dir=\"ltr\">He isn't happy.</span>",
            "<span dir=\"ltr\">He doesn't look happy.</span>",
            "<span dir=\"ltr\">He doesn't feel happy.</span>"
        ],
        correctAnswer: 0,
        hint: "פועל ה-To be (am/is/are) הוא 'מלך' הדקדוק. הוא עצמאי וחזק. הוא לעולם לא צריך פועל עזר כמו do או does כדי לעשות שאלה או שלילה.",
        solution: `<strong>הסבר מלא (כוחו של ה-To Be):</strong><br>
        הטעות הנפוצה: <span dir="ltr">He doesn't be happy.</span> (זה משפט שגוי לחלוטין!)<br><br>
        <strong>למה?</strong><br>
        פועל ה-To Be (להיות: am, is, are) הוא פועל חזק ועצמאי. הוא לא צריך את העזרה של הפועלים <span dir="ltr">don't / doesn't</span>. כשהוא רוצה להיות שלילי, הוא פשוט מצמיד לעצמו את המילה <strong>not</strong>.<br><br>
        לכן, הדרך הנכונה להגיד "הוא לא שמח" היא: <span dir="ltr"><strong>He isn't happy</strong></span>.<br>
        (לעומת זאת, הפעלים look ו-feel הם פעלים רגילים וחלשים, ולכן הם <u>כן</u> צריכים את doesn't).`
    },
    // Question 11
    {
        topic: "english",
        subTopic: "Present Simple (הווה פשוט)",
        question_text: `<strong>Collective Nouns (שמות קיבוציים):</strong><br>
        כיצד תתייחסו למילה <strong>Family</strong> במשפט הבא?<br>
        <span dir="ltr" style="font-size: 1.3em; font-weight: bold; color: #1e40af;">My family ________ pizza every Friday night.</span>`,
        options: [
            "<span dir=\"ltr\">eats</span>",
            "<span dir=\"ltr\">eat</span>",
            "<span dir=\"ltr\">eating</span>",
            "<span dir=\"ltr\">are eat</span>"
        ],
        correctAnswer: 0,
        hint: "המילה 'משפחה' מתארת יחידה אחת (קבוצה אחת). למרות שיש בה הרבה אנשים, המילה עצמה היא ביחיד (כמו 'צבא' או 'צוות').",
        solution: `<strong>הסבר מלא (שמות עצם קיבוציים - Collective Nouns):</strong><br>
        מילים כמו <span dir="ltr"><strong>Family</strong> (משפחה), <strong>Team</strong> (צוות), <strong>Class</strong> (כיתה)</span> מתארות קבוצה שמורכבת מהרבה אנשים. <br>
        עם זאת, הכלל באנגלית האמריקאית (והנלמד בישראל) הוא שהקבוצה הזו פועלת כ<strong>יחידה אחת שלמה</strong> (גוף שלישי יחיד - <strong>It</strong>).<br><br>
        לכן, כמו כל <span dir="ltr">He/She/It</span>, הפועל חייב לקבל <strong>s</strong>.<br>
        המשפט הנכון: <span dir="ltr">My family <strong>eats</strong> pizza.</span> (משפחה אחת - אוכלת).`
    },
    // Question 12
    {
        topic: "english",
        subTopic: "Present Simple (הווה פשוט)",
        question_text: `<strong>Spelling Exception (Have -> Has):</strong><br>
        השלימו את המשפט המתאר הרגל של דן:<br>
        <span dir="ltr" style="font-size: 1.3em; font-weight: bold; color: #1e40af;">Dan usually ________ a shower before breakfast.</span>`,
        options: [
            "<span dir=\"ltr\">has</span>",
            "<span dir=\"ltr\">haves</span>",
            "<span dir=\"ltr\">have</span>",
            "<span dir=\"ltr\">is having</span>"
        ],
        correctAnswer: 0,
        hint: "הפועל הוא have (יש/לעשות מקלחת). בגוף שלישי (Dan=He) אנחנו לא מוסיפים לו פשוט s. הפועל הזה מתנהג בצורה מיוחדת לגמרי.",
        solution: `<strong>הסבר מלא (היוצא דופן Have):</strong><br>
        הפועל <span dir="ltr"><strong>have</strong></span> (יש / או מילים שמרכיבות פעולה כמו have a shower) הוא פועל יוצא דופן לחלוטין בהווה פשוט.<br><br>
        כשאנו רוצים להוסיף לו 's' בגלל גוף שלישי יחיד (He, She, It), <strong>אסור לכתוב haves!</strong><br>
        הצורה המיוחדת שלו הופכת אותו למילה שונה: <span dir="ltr"><strong>has</strong></span>.<br><br>
        לכן: <span dir="ltr">Dan usually <strong>has</strong> a shower.</span>`
    },
    // Question 13
    {
        topic: "english",
        subTopic: "Present Simple (הווה פשוט)",
        question_text: `<strong>Nouns that are always Plural (מילים שתמיד ברבים):</strong><br>
        בחרו את הפועל המתאים למילה <strong>Police</strong> (המשטרה):<br>
        <span dir="ltr" style="font-size: 1.3em; font-weight: bold; color: #1e40af;">The police ________ the thieves every day.</span>`,
        options: [
            "<span dir=\"ltr\">catch</span>",
            "<span dir=\"ltr\">catches</span>",
            "<span dir=\"ltr\">catching</span>",
            "<span dir=\"ltr\">is catch</span>"
        ],
        correctAnswer: 0,
        hint: "באנגלית, המילה 'Police' (כמו 'People') מתנהגת תמיד כאילו היא ברבים (הם - They), גם אם אין לה 's' בסוף.",
        solution: `<strong>הסבר מלא (מילים שתמיד ברבים):</strong><br>
        יש מילים באנגלית שאין להן אות 's' ברבים, אך הן <strong>תמיד נחשבות לרבים (They)</strong> ולעולם לא ליחיד.<br>
        המילים המפורסמות ביותר הן:<br>
        - <span dir="ltr"><strong>People</strong></span> (אנשים)<br>
        - <span dir="ltr"><strong>Police</strong></span> (שוטרים / משטרה)<br><br>
        מכיוון ש-<span dir="ltr">The police = They</span> (הם), הפועל נשאר נקי וללא תוספת s/es.<br>
        התשובה הנכונה היא: <span dir="ltr">The police <strong>catch</strong></span>.`
    },
    // Question 14
    {
        topic: "english",
        subTopic: "Present Simple (הווה פשוט)",
        question_text: `<strong>Spelling Rule (Consonant + y):</strong><br>
        איזו מהאפשרויות הבאות מציגה את האיות הנכון של הפועל <strong>fly</strong> (לעוף) בגוף שלישי יחיד?`,
        options: [
            "<span dir=\"ltr\">flies</span>",
            "<span dir=\"ltr\">flys</span>",
            "<span dir=\"ltr\">flyes</span>",
            "<span dir=\"ltr\">fliys</span>"
        ],
        correctAnswer: 0,
        hint: "לפני האות y יש את האות l (שהיא עיצור, לא תנועה). לכן מוחקים את ה-y לגמרי.",
        solution: `<strong>הסבר מלא (חוק ה-Y השלם):</strong><br>
        נזכיר את חוק ה-y בהווה פשוט (הוספת s לפועל בגוף He, She, It):<br>
        אם לפני ה-y יש אות שהיא <strong>עיצור</strong> (Consonant - כל אות שהיא לא a,e,i,o,u):<br>
        אנו <strong>מוחקים</strong> את ה-y, ובמקומה מוסיפים <strong>ies</strong>.<br><br>
        במילה f-<strong>l</strong>-y, לפני ה-y יש את האות <strong>l</strong>.<br>
        לכן התהליך הוא: מוחקים y &rarr; <span dir="ltr">fl<strong>ies</strong></span>.`
    },
    // Question 15
    {
        topic: "english",
        subTopic: "Present Simple (הווה פשוט)",
        question_text: `<strong>General Truths and Fact:</strong><br>
        מדוע המשפט: <span dir="ltr">"Water boils at 100 degrees"</span> נכתב בזמן Present Simple ולא ב-Progressive?`,
        options: [
            "<span dir=\"ltr\">כי הווה פשוט משמש לתיאור עובדות מדעיות, חוקי טבע ואמיתות כלליות שנכונות תמיד, ולא רק 'עכשיו'.</span>",
            "<span dir=\"ltr\">כי המים מתקררים, ופעולות של התקררות תמיד מקבלות הווה פשוט.</span>",
            "<span dir=\"ltr\">זו טעות, המשפט היה צריך להיכתב 'Water is boiling' כי המים תמיד זזים.</span>",
            "<span dir=\"ltr\">כי אין מילת רמז (time expression) במשפט, ובלי מילת רמז כותבים אוטומטית בהווה פשוט.</span>"
        ],
        correctAnswer: 0,
        hint: "עובדות טבע (השמש זורחת, מים קופאים) הן דברים שתמיד נכונים. הזמן היחיד באנגלית שמתאר 'תמידיות' הוא ההווה הפשוט.",
        solution: `<strong>הסבר מלא (שימושי ההווה הפשוט):</strong><br>
        לזמן הווה פשוט יש שני תפקידים עיקריים שחייבים לזכור לבגרות:<br>
        1. <strong>הרגלים (Habits):</strong> דברים שאנו עושים בתדירות קבועה (I play football every week).<br>
        2. <strong>עובדות ואמיתות טבע (General Truths):</strong> דברים שנכונים תמיד, ללא קשר לזמן. <br>
        המשפט "מים רותחים ב-100 מעלות צלזיוס" הוא עובדה מדעית מוחלטת, ולכן לעולם ישתמשו עבורו בהווה פשוט (water=it &rarr; boil<strong>s</strong>).`
    },


    // ---------------------------------------------------------
    // Subtopic 2: Present Progressive (הווה ממושך) - רמה מתקדמת
    // ---------------------------------------------------------

    // Question 16
    {
        topic: "english",
        subTopic: "Present Progressive (הווה ממושך)",
        question_text: `<strong>Future Arrangements (עתיד מתוכנן אישית):</strong><br>
        השלימו את המשפט הבא המתאר תוכנית סגורה למחר בערב:<br>
        <span dir="ltr" style="font-size: 1.3em; font-weight: bold; color: #1e40af;">I ________ my doctor tomorrow at 18:00. We already set the appointment.</span>`,
        options: [
            "<span dir=\"ltr\">am meeting</span>",
            "<span dir=\"ltr\">meet</span>",
            "<span dir=\"ltr\">meets</span>",
            "<span dir=\"ltr\">meeting</span>"
        ],
        correctAnswer: 0,
        hint: "בשונה מלוח זמנים של רכבת (הווה פשוט), כשאדם מתכנן ביומן תוכנית ודאית אישית לעתיד (כמו פגישה שנקבעה), אנו משתמשים בהווה ממושך (am/is/are + ing).",
        solution: `<strong>הסבר מלא (Present Progressive for Future):</strong><br>
        זהו חוק למתקדמים בבגרויות!<br>
        למדנו שהווה ממושך מתאר את "עכשיו". אבל יש לו עוד תפקיד: לתאר <strong>פעולות ודאיות שתוכננו ונקבעו לעתיד הקרוב (Future Arrangements)</strong>.<br><br>
        אם כבר קבעתי פגישה עם הרופא, זה יומן אישי שלי (ולא לוח זמנים של רכבת ציבורית).<br>
        לכן, הדרך הנכונה והשכיחה ביותר באנגלית לתאר זאת היא דווקא בעזרת הווה ממושך:<br>
        <span dir="ltr">I <strong>am meeting</strong> my doctor tomorrow.</span> (אני 'נפגש' עם הרופא מחר).`
    },
    // Question 17
    {
        topic: "english",
        subTopic: "Present Progressive (הווה ממושך)",
        question_text: `<strong>Temporary Situations (מצבים זמניים):</strong><br>
        מדוע במשפט השני משתמשים בהווה ממושך (is working)?<br>
        <span dir="ltr" style="font-size: 1.3em; font-weight: bold; color: #1e40af;">My father usually works in Tel-Aviv, but this week he is working in Haifa.</span>`,
        options: [
            "<span dir=\"ltr\">מכיוון שההווה הממושך (is working) משמש כדי לתאר מצב זמני שמתרחש רק בפרק הזמן הנוכחי (השבוע), בניגוד להווה הפשוט (works) שמתאר את מצב הקבע והשגרה שלו.</span>",
            "<span dir=\"ltr\">מכיוון שהמילה 'Haifa' דורשת הווה ממושך על פי כללי הגיאוגרפיה בשפה האנגלית.</span>",
            "<span dir=\"ltr\">זהו משפט שגוי. אסור להשתמש בשני זמנים שונים (פשוט וממושך) באותו המשפט.</span>",
            "<span dir=\"ltr\">כי העבודה בחיפה נחשבת קשה יותר, והווה ממושך מתאר מאמץ רב.</span>"
        ],
        correctAnswer: 0,
        hint: "הווה ממושך הוא כמו 'מצלמת וידאו' שמצלמת קטע זמני. הווה פשוט הוא כמו 'תעודת זהות' שמראה משהו קבוע.",
        solution: `<strong>הסבר מלא (מצבים זמניים - Temporary Situations):</strong><br>
        שימוש חשוב מאוד ב-Present Progressive הוא תיאור של <strong>מצב זמני שצפוי להסתיים</strong>.<br><br>
        בחלק הראשון של המשפט: <span dir="ltr">He usually <strong>works</strong> in Tel Aviv</span>. (זו השגרה הקבועה והנורמלית שלו - הווה פשוט).<br>
        בחלק השני של המשפט: <span dir="ltr">This week he <strong>is working</strong> in Haifa</span>. (זה מצב חריג, שקורה <u>רק השבוע</u>, ובשבוע הבא כנראה יסתיים - ולכן זה מקבל הווה ממושך, כאילו זה קורה רק 'בסביבת העכשיו').`
    },
    // Question 18
    {
        topic: "english",
        subTopic: "Present Progressive (הווה ממושך)",
        question_text: `<strong>Annoying Habits with 'Always' (הרגלים מעצבנים):</strong><br>
        כיצד תפרשו את המשפט הבא המכיל שילוב נדיר של always עם פועל ing?<br>
        <span dir="ltr" style="font-size: 1.3em; font-weight: bold; color: #1e40af;">My little brother is always taking my things without asking!</span>`,
        options: [
            "<span dir=\"ltr\">הדובר מביע כעס וביקורת. כאשר משתמשים במילה 'always' יחד עם הווה ממושך (am/is/are + ing), הדבר נועד להדגיש שמדובר בהרגל שחוזר על עצמו יותר מדי פעמים ומעצבן מאוד את הדובר.</span>",
            "<span dir=\"ltr\">זוהי שגיאת דקדוק חמורה. המילה always אסורה לשימוש עם הווה ממושך, ויש לפסול את המשפט בבגרות.</span>",
            "<span dir=\"ltr\">הדובר מתאר תוכנית לעתיד. אחיו יקח לו את הדברים מחר.</span>",
            "<span dir=\"ltr\">הדובר מציין שמחה והתרגשות על כך שאחיו משתף איתו דברים.</span>"
        ],
        correctAnswer: 0,
        hint: "בשפה טבעית, חריגה מחוקים מעבירה מסר רגשי. כשמכניסים את 'Always' (ששייך להווה פשוט) לתוך הווה ממושך, זה כדי להתלונן על משהו שממש עולה על העצבים.",
        solution: `<strong>הסבר מלא (תלונות עם Always):</strong><br>
        מורים תמיד מלמדים: <span dir="ltr">Always</span> הולך עם הווה פשוט. <strong>אבל...</strong><br>
        יש חריג מפורסם (רמת בגרות 5 יח"ל): כשאנחנו רוצים <strong>להתלונן ולהביע עצבים</strong> על הרגל גרוע של מישהו, אנחנו "שוברים את החוק" ושמים את המילה Always בתוך ההווה הממושך.<br><br>
        למשל:<br>
        <span dir="ltr">"You <strong>are always losing</strong> your keys!"</span><br>
        (אתה תמיד מאבד את המפתחות שלך! אוף!). זה משדר כעס וחוסר אונים.`
    },
    // Question 19
    {
        topic: "english",
        subTopic: "Present Progressive (הווה ממושך)",
        question_text: `<strong>Actions Happening Around Now (פעולה בסביבת ההווה):</strong><br>
        בחרו את הפועל המתאים לפעולה שמתמשכת בימים אלו, אך לא בהכרח בשנייה זו:<br>
        <span dir="ltr" style="font-size: 1.3em; font-weight: bold; color: #1e40af;">I ________ a really interesting book these days. You should read it.</span>`,
        options: [
            "<span dir=\"ltr\">am reading</span>",
            "<span dir=\"ltr\">read</span>",
            "<span dir=\"ltr\">reads</span>",
            "<span dir=\"ltr\">reading</span>"
        ],
        correctAnswer: 0,
        hint: "הווה ממושך לא חייב לקרות בדיוק בשנייה שאני מדבר. הוא יכול לתאר 'פרויקט מתמשך' שאני עובד עליו לאחרונה (these days).",
        solution: `<strong>הסבר מלא (פעולות ארוכות 'מסביב לעכשיו'):</strong><br>
        זמן Present Progressive לא שמור אך ורק לרגע זה ממש.<br>
        הוא משמש גם לפרויקטים, לימודים, או פעולות שאתם עושים "בתקופה הנוכחית" (This week, These days, This month).<br><br>
        אני יכול לשבת איתך בבית קפה (ולא להחזיק ספר ביד) ולהגיד לך: <br>
        <span dir="ltr">"I <strong>am reading</strong> a great book these days"</span> (אני קורא ספר נהדר בימים אלו). <br>
        מכיוון שזו פעולה מתמשכת שעדיין לא סיימתי את כולה, נשתמש ב-<span dir="ltr"><strong>am reading</strong></span>.`
    },
    // Question 20
    {
        topic: "english",
        subTopic: "Present Progressive (הווה ממושך)",
        question_text: `<strong>Stative Verbs with Dual Meaning (פעלים סטאטיים שמשנים משמעות - Have):</strong><br>
        קראו את שני המשפטים הבאים המשתמשים בפועל Have:<br>
        1. I <u>have</u> a fast car.<br>
        2. I <u>am having</u> lunch right now.<br>
        מדוע במשפט השני מותר היה להוסיף <strong>ing</strong> למרות ש-Have הוא פועל מצב (שייכות)?`,
        options: [
            "<span dir=\"ltr\">כי הפועל have משנה את משמעותו בהתאם להקשר. כשהוא מתאר 'שייכות/רכוש' (יש לי רכב) - הוא סטטי ואסור ב-ing. אבל כשהוא מתאר פעולה אקטיבית כמו 'לאכול', 'להתקלח', או 'ליהנות' (have lunch / have a shower) - הוא הופך לפועל פעיל ומותר לשים לו ing.</span>",
            "<span dir=\"ltr\">מכיוון שהמילה right now מכריחה אותנו תמיד לשים ing, גם אם זה אסור ושובר את חוקי הפעלים הסטטיים.</span>",
            "<span dir=\"ltr\">בשני המשפטים יש שגיאה. הפועל have לעולם לא יכול לקבל ing תחת שום תירוץ בשפה האנגלית.</span>",
            "<span dir=\"ltr\">מכיוון שבמשפט השני מדובר באוכל, ואוכל תמיד מגיע עם הווה ממושך בגלל פעולת הלעיסה.</span>"
        ],
        correctAnswer: 0,
        hint: "כשאתם 'Have lunch' (אוכלים צהריים), אתם מבצעים פעולה פיזית שאפשר לצלם. כשאתם 'Have a car' (יש לכם מכונית), אי אפשר לצלם את הבעלות שלכם בוידאו. מה שאפשר לצלם בפעולה מתמשכת - מקבל ing.",
        solution: `<strong>הסבר מלא ומעמיק (חוק כפול של Stative Verbs):</strong><br>
        יש קבוצת פעלים "מתחזים" (כמו Have, Think, Taste, Look). המשמעות שלהם קובעת את החוק שלהם!<br><br>
        <strong>1. תיאור מצב או שייכות (NO ing):</strong><br>
        <span dir="ltr">I <strong>have</strong> a car.</span> (האוטו רשום על שמי. אי אפשר להוסיף ing כי זה לא פעולה שאני "עושה" עכשיו).<br><br>
        <strong>2. תיאור פעולה פיזית מתמשכת (YES ing):</strong><br>
        <span dir="ltr">I <strong>am having</strong> lunch.</span> (המילה having כאן פירושה "אוכל" - Eating. לאכול זו פעולה פיזית מובהקת, ולכן היא זכאית לקבל הווה ממושך ותוספת ing!).<br>
        עוד דוגמאות שמותרות: <span dir="ltr">having a shower, having a good time</span>.`
    },
    // Question 21
    {
        topic: "english",
        subTopic: "Present Progressive (הווה ממושך)",
        question_text: `<strong>Stative Verbs with Dual Meaning (פעלים סטאטיים שמשנים משמעות - Think):</strong><br>
        איזה מהמשפטים הבאים עם הפועל Think נחשב לתקין לחלוטין ולמה?`,
        options: [
            "<span dir=\"ltr\">'I am thinking about moving to London.' (תקין. כאן הפועל think משמעותו פעולת שקילה/הרהור בראש, ולכן מקבל ing. לעומת זאת, כשהוא מביע דעה נחרצת כמו 'I think it is good', הוא סטטי ואסור ב-ing).</span>",
            "<span dir=\"ltr\">'I am thinking that this movie is boring.' (תקין. הבעת דעה תמיד מתמשכת לאורך הסרט ולכן חייבת ing).</span>",
            "<span dir=\"ltr\">שני המשפטים תקינים כי הפועל Think פטור לחלוטין מחוקי פעלי המצב (Stative verbs).</span>",
            "<span dir=\"ltr\">שניהם שגויים, כי אי אפשר לראות מחשבה, וכל מה שלא רואים בעיניים לעולם לא יקבל ing.</span>"
        ],
        correctAnswer: 0,
        hint: "אם אתה יכול לתרגם את המילה ל'שוקל' או 'מהרהר', זו פעולת מוח אקטיבית. אם אתה יכול לתרגם אותה ל'סבור' (I believe/I think), זה מצב קבוע של דעה.",
        solution: `<strong>הסבר מלא (Think - דעה מול תהליך חשיבה):</strong><br>
        עוד פועל "מתחזה" קלאסי שמופיע בבגרויות הוא <strong>Think</strong>.<br><br>
        <strong>1. הבעת דעה (NO ing):</strong><br>
        כאשר המילה Think פירושה "מאמין/סבור ש...", היא מתארת מצב דעתי.<br>
        נכון: <span dir="ltr">I <strong>think</strong> you are right.</span><br>
        (לא אומרים: I am thinking you are right).<br><br>
        <strong>2. פעולת הרהור / התלבטות (YES ing):</strong><br>
        כאשר המוח עובד ממש עכשיו בניסיון לקבל החלטה (לשקול משהו / להעלות זיכרונות).<br>
        נכון: <span dir="ltr">Shhh... Please be quiet, I <strong>am thinking</strong>.</span> (המוח שלי בפעולה עכשיו).<br>
        נכון: <span dir="ltr">I <strong>am thinking</strong> about moving to London.</span> (אני מהרהר בזה).`
    },
    // Question 22
    {
        topic: "english",
        subTopic: "Present Progressive (הווה ממושך)",
        question_text: `<strong>Spelling Exception (Verbs ending in 'ie'):</strong><br>
        הפועל הוא <strong>lie</strong> (לשקר / לשכב). כיצד נכתוב אותו נכון עם סיומת ing בהווה ממושך?<br>
        <span dir="ltr" style="font-size: 1.3em; font-weight: bold; color: #1e40af;">Look! The dog is ________ on the sofa.</span>`,
        options: [
            "<span dir=\"ltr\">lying</span>",
            "<span dir=\"ltr\">lieing</span>",
            "<span dir=\"ltr\">liing</span>",
            "<span dir=\"ltr\">lyying</span>"
        ],
        correctAnswer: 0,
        hint: "זהו חוק האיות הנדיר ביותר. פעלים קצרים שמסתיימים באותיות ie (כמו die, lie, tie), מוחקים להם את שתי האותיות האלו והופכים אותן לאות y, ואז מוסיפים ing.",
        solution: `<strong>הסבר מלא (חוק ה-ie בפעלים):</strong><br>
        זהו חוק איות מתקדם שמפיל הרבה תלמידים בבחינות הכתיבה (Writing).<br><br>
        פעלים שמסתיימים בצירוף האותיות <strong>ie</strong> לא יכולים לקבל פשוט ing, כי אחרת ייווצר רצף של שלוש אותיות ניקוד (lieing) וזה 'מכוער' וקשה לקריאה באנגלית.<br><br>
        <strong>הפתרון - החלפה:</strong><br>
        זורקים את ה-<strong>ie</strong> לפח, ושמים במקומם את האות <strong>y</strong>, ואז מוסיפים ing.<br>
        - <span dir="ltr">l<strong>ie</strong> (לשכב/לשקר) &rarr; l<strong>y</strong>ing</span><br>
        - <span dir="ltr">d<strong>ie</strong> (למות) &rarr; d<strong>y</strong>ing</span><br>
        - <span dir="ltr">t<strong>ie</strong> (לקשור) &rarr; t<strong>y</strong>ing</span><br>
        ולכן התשובה הנכונה היא <span dir="ltr"><strong>lying</strong></span>.`
    },
    // Question 23
    {
        topic: "english",
        subTopic: "Present Progressive (הווה ממושך)",
        question_text: `<strong>Question Structure with WH (שאלות פתוחות):</strong><br>
        איזה מהמשפטים הבאים בנוי נכון כתחביר של שאלה פתוחה בהווה ממושך?`,
        options: [
            "<span dir=\"ltr\">Why are you crying?</span>",
            "<span dir=\"ltr\">Why you are crying?</span>",
            "<span dir=\"ltr\">Why do you crying?</span>",
            "<span dir=\"ltr\">Why crying are you?</span>"
        ],
        correctAnswer: 0,
        hint: "הנוסחה לשאלות עם מילות WH: קודם מילת השאלה (Why), אחר כך פועל העזר (am/is/are), אחר כך הנושא (you), ורק בסוף הפועל (crying).",
        solution: `<strong>הסבר מלא (מבנה שאלות מורכבות):</strong><br>
        כאשר אנו בונים שאלה פתוחה (שאלת WH) בהווה ממושך, התבנית היא קשיחה ואסור לסטות ממנה:<br><br>
        <strong>[Wh Word] + [Am/Is/Are] + [Subject] + [Verb+ing]</strong><br><br>
        - מילת שאלה: <span dir="ltr"><strong>Why</strong></span><br>
        - פועל עזר To be: <span dir="ltr"><strong>are</strong></span><br>
        - נושא: <span dir="ltr"><strong>you</strong></span><br>
        - פועל עם סיומת: <span dir="ltr"><strong>crying</strong></span><br><br>
        המשפט החוקי היחיד מבין האפשרויות הוא: <span dir="ltr"><strong>Why are you crying?</strong></span>`
    },
    // Question 24
    {
        topic: "english",
        subTopic: "Present Progressive (הווה ממושך)",
        question_text: `<strong>Subject Questions in Progressive (שאלות נושא ממושך):</strong><br>
        אתם שומעים רעש מחדר אחר ורוצים לשאול: "מי עושה את הרעש הזה?". <br>
        כיצד תנסחו זאת נכון באנגלית?`,
        options: [
            "<span dir=\"ltr\">Who is making that noise?</span>",
            "<span dir=\"ltr\">Who making that noise?</span>",
            "<span dir=\"ltr\">Who does making that noise?</span>",
            "<span dir=\"ltr\">Who are make that noise?</span>"
        ],
        correctAnswer: 0,
        hint: "בדיוק כמו שלמדנו בשאלות הנושא בהווה פשוט: מתייחסים למילה Who כאל יחיד (He/She). ולכן נוסיף אחריה Is ומיד את פועל ה-ing.",
        solution: `<strong>הסבר מלא (שאלות נושא עם Who בהווה ממושך):</strong><br>
        כשאנחנו שואלים "מי?", אנחנו לא יודעים מי הוא נושא המשפט. אולי זה חתול, אולי זה אדם, ואולי עשרה אנשים.<br><br>
        החוק באנגלית אומר: התייחסו למילת השאלה <span dir="ltr"><strong>Who</strong></span> כאילו היא הייתה <strong>יחיד (He/She/It)</strong>.<br>
        מכיוון שיחיד לוקח <strong>is</strong> בהווה ממושך, השאלה תיבנה כך:<br>
        <span dir="ltr"><strong>Who + is + Verb(ing)</strong></span><br>
        ולכן: <span dir="ltr">Who <strong>is making</strong> that noise?</span>`
    },
    // Question 25
    {
        topic: "english",
        subTopic: "Present Progressive (הווה ממושך)",
        question_text: `<strong>Choosing the Right Tense Context (ניתוח משמעות מתוך הקשר):</strong><br>
        השלימו את השיחה הבאה בזמנים המדויקים:<br>
        <span dir="ltr" style="font-size: 1.2em; color: #1e40af;">A: What ________ (you/do)?<br>B: Be quiet! I ________ (watch) the news.</span>`,
        options: [
            "<span dir=\"ltr\">are you doing / am watching</span>",
            "<span dir=\"ltr\">do you do / watch</span>",
            "<span dir=\"ltr\">do you do / am watching</span>",
            "<span dir=\"ltr\">are you doing / watch</span>"
        ],
        correctAnswer: 0,
        hint: "הדובר מבקש 'להיות בשקט!' (Be quiet). זה מוכיח שהפעולה מפריעה לו *עכשיו* באותו הרגע ממש. לכן שניהם חייבים להיות בהווה ממושך.",
        solution: `<strong>הסבר מלא (זיהוי ההקשר בשיחה):</strong><br>
        כדי לפתור שאלות עיוורות בבגרות, אנו חייבים לחפש רמזים להקשר.<br>
        הביטוי <span dir="ltr"><strong>!Be quiet</strong></span> (תהיה בשקט!) מבהיר לנו שהסיטואציה מתרחשת ב"חי" עכשיו. אי אפשר לבקש שקט על משהו שקורה 'בדרך כלל'.<br><br>
        ולכן, גם השאלה וגם התשובה חייבות להיות ב-Present Progressive (עכשיו):<br>
        1. שאלת הדובר: <span dir="ltr">What <strong>are you doing</strong>?</span> (מה אתה עושה עכשיו?)<br>
        2. תשובת הדובר: <span dir="ltr">I <strong>am watching</strong> the news.</span> (אני צופה בחדשות).<br>
        השילוב הראשון (are you doing / am watching) הוא התקין.`
    },
    // Question 26
    {
        topic: "english",
        subTopic: "Present Progressive (הווה ממושך)",
        question_text: `<strong>Correct Negative Statement (שלילה נכונה):</strong><br>
        איזה מהמשפטים מתאר נכונה ששני אנשים אינם מגיעים למסיבה הלילה (שימוש כתוכנית עתידית)?`,
        options: [
            "<span dir=\"ltr\">Dan and Yael aren't coming to the party tonight.</span>",
            "<span dir=\"ltr\">Dan and Yael don't coming to the party tonight.</span>",
            "<span dir=\"ltr\">Dan and Yael isn't coming to the party tonight.</span>",
            "<span dir=\"ltr\">Dan and Yael aren't come to the party tonight.</span>"
        ],
        correctAnswer: 0,
        hint: "הנושא הוא שני אנשים (They). שלילה לרבים היא aren't פלוס פועל ing (לתכנית לעתיד הקרוב).",
        solution: `<strong>הסבר מלא (תוכנית שלילית לעתיד):</strong><br>
        ראשית נזהה את הנושא: <span dir="ltr">Dan and Yael</span>. אלו שני אנשים = <strong>They</strong>.<br>
        פועל העזר ל-They הוא <strong>are</strong>. לכן השלילה היא <strong>aren't</strong>.<br><br>
        שנית, מכיוון שזו "תוכנית סגורה להלילה" (Tonight), אנו רשאים להשתמש בהווה ממושך (ing) כדי לבטא עתיד קרוב.<br>
        המשפט המלא והתקין: <span dir="ltr">Dan and Yael <strong>aren't coming</strong></span>.<br>
        למה השאר שגויים? (2) don't לא עובד עם ing. (3) isn't זה ליחיד. (4) aren't come חסר את ה-ing.`
    },
    // Question 27
    {
        topic: "english",
        subTopic: "Present Progressive (הווה ממושך)",
        question_text: `<strong>State Verbs - Smell (פעלים סטאטיים של חושים):</strong><br>
        בחרו את התשובה הנכונה:<br>
        <span dir="ltr" style="font-size: 1.3em; font-weight: bold; color: #1e40af;">This soup ________ delicious! What did you put in it?</span>`,
        options: [
            "<span dir=\"ltr\">smells</span>",
            "<span dir=\"ltr\">is smelling</span>",
            "<span dir=\"ltr\">smell</span>",
            "<span dir=\"ltr\">are smelling</span>"
        ],
        correctAnswer: 0,
        hint: "המרק לא מריח אקטיבית את עצמו (אין לו אף). הוא פשוט מפיץ ריח (מצב פסיבי/חושי). פעלי חושים במובן הפסיבי לא מקבלים ing.",
        solution: `<strong>הסבר מלא (פעלי חושים מתחזים):</strong><br>
        הפועל <span dir="ltr"><strong>Smell</strong></span> (להריח/להפיץ ריח) עובד לפי הכלל הכפול של הסטאטיים:<br><br>
        1. כשמשהו <strong>מפיץ ריח מעצם קיומו</strong> (כמו פרח, בושם או מרק), זהו מצב נתון שלא דורש מאמץ. לכן אסור לשים ing! (המרק הוא יחיד ולכן: <span dir="ltr">The soup <strong>smells</strong></span>).<br><br>
        2. מתי מותר is smelling? רק כשבן אדם לוקח משהו באופן אקטיבי ומקרב לאף שלו בכוונה. למשל: <span dir="ltr">The chef <strong>is smelling</strong> the soup</span> (השף כעת מריח את המרק באופן פעיל).<br>
        בשאלה שלנו המרק מפיץ את הריח, ולכן נבחר ב-<strong>smells</strong> בהווה פשוט.`
    },
    // Question 28
    {
        topic: "english",
        subTopic: "Present Progressive (הווה ממושך)",
        question_text: `<strong>Spelling Distractors (מסיחי איות):</strong><br>
        מהי הדרך התקנית לכתוב את הפועל <strong>run</strong> בממושך?`,
        options: [
            "<span dir=\"ltr\">running</span>",
            "<span dir=\"ltr\">runing</span>",
            "<span dir=\"ltr\">runnung</span>",
            "<span dir=\"ltr\">ruuning</span>"
        ],
        correctAnswer: 0,
        hint: "חוק הכריך (C-V-C): המילה run מסתיימת בעיצור (n), לפניו אות ניקוד (u), ולפניו עיצור (r). חייבים להכפיל את האות האחרונה.",
        solution: `<strong>הסבר מלא (הכפלת עיצור):</strong><br>
        כפי שהזכרנו, חוק ה-C-V-C (Consonant-Vowel-Consonant) חל על המילה <strong>run</strong> (לרוץ).<br>
        כיוון שהיא מילה קצרה, עם תנועה אחת (u) עטופה בשני עיצורים, אנו מכפילים את ה-<strong>n</strong> האחרונה כדי לשמור על צליל קצר.<br>
        לכן התשובה הנכונה היא <span dir="ltr"><strong>running</strong></span> (עם שני n).`
    },
    // Question 29
    {
        topic: "english",
        subTopic: "Present Progressive (הווה ממושך)",
        question_text: `<strong>Mixed Verb Agreement (התאמת פועל לנושא במצבי בלבול):</strong><br>
        השלימו כראוי את המשפט:<br>
        <span dir="ltr" style="font-size: 1.3em; font-weight: bold; color: #1e40af;">Someone ________ knocking on the door. Can you open it?</span>`,
        options: [
            "<span dir=\"ltr\">is</span>",
            "<span dir=\"ltr\">are</span>",
            "<span dir=\"ltr\">am</span>",
            "<span dir=\"ltr\">do</span>"
        ],
        correctAnswer: 0,
        hint: "המילה 'Someone' (מישהו) מצטרפת למועדון המילים המבלבלות (יחד עם Everybody). למרות שאיננו יודעים מי זה, הדקדוק מתייחס אליו כאל יחיד.",
        solution: `<strong>הסבר מלא (Someone כיחיד):</strong><br>
        המילה <span dir="ltr"><strong>Someone / Somebody</strong></span> (מישהו) מתפקדת בדקדוק האנגלי כ<strong>גוף שלישי יחיד (He/She)</strong>.<br>
        ולכן, כשהדופק בדלת דופק עכשיו (הווה ממושך - knocking), עלינו לספק למילה את פועל העזר של היחיד, שהוא <strong>is</strong>.<br>
        המשפט המלא: <span dir="ltr">Someone <strong>is</strong> knocking on the door.</span>`
    },
    // Question 30
    {
        topic: "english",
        subTopic: "Present Progressive (הווה ממושך)",
        question_text: `<strong>Contrast: Simple vs Progressive (הבנת הניגודיות הקלאסית):</strong><br>
        בחרו את הצמד הנכון להשלמת המשפט:<br>
        <span dir="ltr" style="font-size: 1.2em; font-weight: bold; color: #1e40af;">Normally, I ________ coffee in the morning, but today I ________ tea because my stomach hurts.</span>`,
        options: [
            "<span dir=\"ltr\">drink / am drinking</span>",
            "<span dir=\"ltr\">am drinking / drink</span>",
            "<span dir=\"ltr\">drinks / drinking</span>",
            "<span dir=\"ltr\">drink / drinks</span>"
        ],
        correctAnswer: 0,
        hint: "Normally (בדרך כלל) מעיד על שגרה (פשוט). But today (אבל היום) מעיד על שבירת שגרה זמנית (ממושך).",
        solution: `<strong>הסבר מלא (שילוב הזמנים המנצח):</strong><br>
        זהו משפט המבחן האולטימטיבי שמסכם את הבנת ההווה באנגלית.<br><br>
        <strong>חלק 1 (שגרה):</strong> המילה <span dir="ltr"><strong>Normally</strong></span> אומרת שזה הרגל. לכן נשתמש בהווה פשוט. הנושא הוא I ולכן הפועל נשאר נקי: <span dir="ltr"><strong>drink</strong></span>.<br>
        <strong>חלק 2 (זמני חריג):</strong> המילה <span dir="ltr"><strong>but today</strong></span> מצביעה על סטייה מהשגרה. פעולה זמנית דורשת הווה ממושך (ing). הנושא הוא I ולכן: <span dir="ltr"><strong>am drinking</strong></span>.<br><br>
        הזוג הנכון הוא: <span dir="ltr"><strong>drink / am drinking</strong></span>.`
    },// ---------------------------------------------------------
    // Subtopic 3: Past Simple (עבר פשוט) - רמה מתקדמת
    // ---------------------------------------------------------

    // Question 31
    {
        topic: "english",
        subTopic: "Past Simple (עבר פשוט)",
        question_text: `<strong>Irregular Verbs (פעלים יוצאי דופן):</strong><br>
        השלימו את המשפט עם צורת העבר (V2) של הפועל <strong>catch</strong> (לתפוס):<br>
        <span dir="ltr" style="font-size: 1.3em; font-weight: bold; color: #1e40af;">The brave policeman ________ the thief yesterday.</span>`,
        options: [
            "<span dir=\"ltr\">caught</span>",
            "<span dir=\"ltr\">catched</span>",
            "<span dir=\"ltr\">cotch</span>",
            "<span dir=\"ltr\">catch</span>"
        ],
        correctAnswer: 0,
        hint: "באנגלית יש פעלים שלא מסכימים לקבל 'ed' בסוף. הם משנים את כל הצורה שלהם. catch הוא אחד מהם (נחרז עם bought ו-taught).",
        solution: `<strong>הסבר מלא (פעלים יוצאי דופן - Irregular Verbs):</strong><br>
        בזמן עבר פשוט (Past Simple), רוב הפעלים מקבלים את הסיומת <strong>ed</strong> (למשל: played, worked).<br>
        אך קיימת רשימה של פעלים "מורדים" (V2) שחובה ללמוד בעל פה, מכיוון שהם משנים את צורתם לחלוטין.<br><br>
        הפועל <span dir="ltr"><strong>catch</strong></span> (לתפוס) הופך בעבר ל-<span dir="ltr"><strong>caught</strong></span> (תפס).<br>
        (מילים דומות: <span dir="ltr">buy &rarr; bought, teach &rarr; taught</span>).<br>
        המילה <span dir="ltr">catched</span> אינה קיימת בשפה האנגלית!`
    },
    // Question 32
    {
        topic: "english",
        subTopic: "Past Simple (עבר פשוט)",
        question_text: `<strong>Negative Sentences in the Past (שלילה - "הגנב"):</strong><br>
        איזה מהמשפטים הבאים כתוב <strong>נכון</strong> מבחינה דקדוקית?`,
        options: [
            "<span dir=\"ltr\">I didn't go to the party last night.</span>",
            "<span dir=\"ltr\">I didn't went to the party last night.</span>",
            "<span dir=\"ltr\">I don't went to the party last night.</span>",
            "<span dir=\"ltr\">I wasn't go to the party last night.</span>"
        ],
        correctAnswer: 0,
        hint: "המילה Didn't היא פועל עזר שעושה את עבודת העבר בשבילנו (גנב את ה-ed). כשהיא בסביבה, הפועל הראשי חייב לחזור למקור שלו (V1).",
        solution: `<strong>הסבר מלא (חוק הגנב בעבר):</strong><br>
        זוהי ככל הנראה הטעות הנפוצה ביותר של תלמידים בבחינות כתיבה!<br><br>
        כדי ליצור משפט שלילה בעבר, אנו משתמשים בפועל העזר <span dir="ltr"><strong>didn't</strong></span> (did not).<br>
        אבל... ברגע שהמילה <span dir="ltr">didn't</span> מופיעה במשפט, היא לוקחת על עצמה את "תפקיד העבר". לכן, הפועל שבא אחריה <strong>חייב לחזור לצורת המקור (V1)</strong>, ללא ed וללא שינויים.<br><br>
        - <strong>שגוי:</strong> <span dir="ltr">I didn't <strong>went</strong></span> (שגיאה כפולה של עבר).<br>
        - <strong>נכון:</strong> <span dir="ltr">I didn't <strong>go</strong></span>.`
    },
    // Question 33
    {
        topic: "english",
        subTopic: "Past Simple (עבר פשוט)",
        question_text: `<strong>The Verb 'To Be' in the Past (Was / Were):</strong><br>
        בחרו את הפועל המתאים לנושא המורכב:<br>
        <span dir="ltr" style="font-size: 1.3em; font-weight: bold; color: #1e40af;">My friends and I ________ very tired after the long trip.</span>`,
        options: [
            "<span dir=\"ltr\">were</span>",
            "<span dir=\"ltr\">was</span>",
            "<span dir=\"ltr\">are</span>",
            "<span dir=\"ltr\">wasn't</span>"
        ],
        correctAnswer: 0,
        hint: "הנושא הוא 'החברים שלי ואני'. בעברית: 'אנחנו' (We). בעבר, הפועל להיות מתחלק לשניים: was ליחיד ו-were לרבים.",
        solution: `<strong>הסבר מלא (Was מול Were):</strong><br>
        פועל ה-To Be הוא ייחודי. בעבר, הוא מתחלק לשתי מילים בלבד, לפי גוף הנושא:<br>
        <table dir="ltr" style="width:100%; border-collapse: collapse; margin-top:10px; text-align:left;">
            <tr style="background:#e2e8f0;">
                <th style="padding:5px; border:1px solid #cbd5e1;">Pronouns</th>
                <th style="padding:5px; border:1px solid #cbd5e1;">Verb (To Be in Past)</th>
            </tr>
            <tr><td style="padding:5px; border:1px solid #cbd5e1;">I, He, She, It</td><td style="padding:5px; border:1px solid #cbd5e1; font-weight:bold; color:#dc2626;">was</td></tr>
            <tr><td style="padding:5px; border:1px solid #cbd5e1;">We, You, They</td><td style="padding:5px; border:1px solid #cbd5e1; font-weight:bold; color:#2563eb;">were</td></tr>
        </table>
        <br>
        במשפט שלנו, <span dir="ltr"><strong>My friends and I</strong></span> שווה ל-<span dir="ltr"><strong>We</strong></span> (אנחנו).<br>
        לכן התשובה הנכונה היא <span dir="ltr"><strong>were</strong></span>.`
    },
    // Question 34
    {
        topic: "english",
        subTopic: "Past Simple (עבר פשוט)",
        question_text: `<strong>Question Structure (שאלות בעבר - Did):</strong><br>
        כיצד יש להשלים את השאלה הבאה בצורה תקינה?<br>
        <span dir="ltr" style="font-size: 1.3em; font-weight: bold; color: #1e40af;">________ she ________ her room yesterday?</span>`,
        options: [
            "<span dir=\"ltr\">Did / clean</span>",
            "<span dir=\"ltr\">Did / cleaned</span>",
            "<span dir=\"ltr\">Was / clean</span>",
            "<span dir=\"ltr\">Does / cleaned</span>"
        ],
        correctAnswer: 0,
        hint: "בדיוק כמו בשלילה (didn't), גם בשאלה משתמשים בפועל העזר Did. וברגע שיש Did, הוא גונב את העבר, והפועל הראשי חייב להיות נקי (V1).",
        solution: `<strong>הסבר מלא (יצירת שאלות ב-Past Simple):</strong><br>
        כדי לשאול שאלת "האם" בעבר (שאינה כוללת את פועל ה-To be), אנו פותחים את המשפט עם פועל העזר <span dir="ltr"><strong>Did</strong></span>.<br><br>
        <strong>חוק ה-Did:</strong> פועל עזר זה לוקח על עצמו את הזמן (הוא כבר בעבר). לכן, הפועל הראשי במשפט <strong>חוזר לצורת הבסיס (V1)</strong> ללא תוספת ed!<br><br>
        התבנית: <span dir="ltr"><strong>Did</strong> + Subject + <strong>Base Verb</strong> (V1)</span><br>
        המשפט התקין: <span dir="ltr"><strong>Did</strong> she <strong>clean</strong> her room?</span>`
    },
    // Question 35
    {
        topic: "english",
        subTopic: "Past Simple (עבר פשוט)",
        question_text: `<strong>Subject Questions in the Past (שאלות נושא עם Who):</strong><br>
        מישהו שבר את החלון ואנחנו רוצים לדעת "מי עשה את זה?". איזו שאלה בנויה נכון?`,
        options: [
            "<span dir=\"ltr\">Who broke the window?</span>",
            "<span dir=\"ltr\">Who did break the window?</span>",
            "<span dir=\"ltr\">Who breaked the window?</span>",
            "<span dir=\"ltr\">Who was break the window?</span>"
        ],
        correctAnswer: 0,
        hint: "זוכרים את החריג של Who משאלות ההווה? כשהמילה Who היא 'הנושא' (אנחנו לא יודעים מי עשה את הפעולה), לא משתמשים בפועל עזר (Did) בכלל. פשוט הופכים את הפועל שאחריו לעבר.",
        solution: `<strong>הסבר מלא (שאלות מִִי בעבר - ללא Did!):</strong><br>
        ברוב שאלות העבר נשתמש ב-<span dir="ltr">Did</span> (למשל: <span dir="ltr">Where did you go?</span>).<br>
        אך כשאנו שואלים <strong>מי ביצע את הפעולה (Who)</strong>, מילת השאלה מתפקדת כנושא המשפט.<br><br>
        במצב כזה <strong>מדלגים על ה-Did</strong>, ופשוט מצמידים למילה Who את הפועל בצורת העבר (V2).<br>
        V2 של break הוא broke.<br>
        השאלה התקינה: <span dir="ltr"><strong>Who broke</strong> the window?</span> (ולא Who did break).`
    },
    // Question 36
    {
        topic: "english",
        subTopic: "Past Simple (עבר פשוט)",
        question_text: `<strong>Spelling Rules (Consonant + y):</strong><br>
        הפועל הוא <strong>study</strong>. מהי הדרך הנכונה לכתוב אותו בעבר (V2)?<br>
        <span dir="ltr" style="font-size: 1.3em; font-weight: bold; color: #1e40af;">He ________ hard for the exam last week.</span>`,
        options: [
            "<span dir=\"ltr\">studied</span>",
            "<span dir=\"ltr\">studyed</span>",
            "<span dir=\"ltr\">studid</span>",
            "<span dir=\"ltr\">studying</span>"
        ],
        correctAnswer: 0,
        hint: "כמו שלמדנו בהווה פשוט עם 's', גם בעבר עם 'ed': אם לפני ה-y יש אות רגילה (עיצור), ה-y נמחקת ומוחלפת ב-ied.",
        solution: `<strong>הסבר מלא (חוק ה-y בעבר):</strong><br>
        כאשר פועל מסתיים באות <strong>y</strong>, ולפניה יש <strong>עיצור</strong> (כל אות שאינה a,e,i,o,u):<br>
        אנו <strong>מוחקים</strong> את ה-y, ומוסיפים <strong>ied</strong>.<br><br>
        במילה s-t-u-d-<strong>y</strong>, לפני ה-y יש את האות <strong>d</strong> (עיצור).<br>
        לכן: <span dir="ltr">study &rarr; <strong>studied</strong></span>.<br>
        *(לעומת זאת, במילה play יש לפני ה-y את האות a, ולכן היא נשארת כרגיל: played).*`
    },
    // Question 37
    {
        topic: "english",
        subTopic: "Past Simple (עבר פשוט)",
        question_text: `<strong>Tricky Irregular Verb (Read):</strong><br>
        איך נאיית ונבטא את הפועל 'לקרוא' (read) במשפט הבא המתרחש בעבר?<br>
        <span dir="ltr" style="font-size: 1.3em; font-weight: bold; color: #1e40af;">Yesterday, I ________ an amazing book.</span>`,
        options: [
            "<span dir=\"ltr\">read (נכתב אותו הדבר, אך נהגה כמו הצבע 'אדום' - Red)</span>",
            "<span dir=\"ltr\">readed (נכתב עם ed, נהגה 'רידד')</span>",
            "<span dir=\"ltr\">red (נכתב כמו הצבע אדום)</span>",
            "<span dir=\"ltr\">road (נכתב כמו כביש)</span>"
        ],
        correctAnswer: 0,
        hint: "הפועל Read הוא פועל מיוחד במינו. הוא משנה את הקול שלו, אבל לא את הבגדים שלו.",
        solution: `<strong>הסבר מלא (הפועל Read):</strong><br>
        הפועל <strong>read</strong> הוא אחד הפעלים המיוחדים בשפה האנגלית.<br>
        בצורת המקור (V1), כותבים אותו <span dir="ltr">read</span> וקוראים אותו <strong>'ריד'</strong> (עם i ארוכה).<br><br>
        בצורת העבר הפשוט (V2), הכתיב שלו <strong>נשאר זהה לחלוטין (read)</strong>!<br>
        אך ההגייה (הצליל) משתנה, וקוראים אותו בדיוק כמו את הצבע אדום - <strong>'רֶד' (Red)</strong>.<br>
        לכן התשובה הנכונה היא שתכתבו אותו כרגיל (read), ותקראו אותו 'רד'.`
    },
    // Question 38
    {
        topic: "english",
        subTopic: "Past Simple (עבר פשוט)",
        question_text: `<strong>Time Expressions (רמזי זמן):</strong><br>
        איזה ביטוי זמן חסר בסוף המשפט הבא (לציון זמן עבר)?<br>
        <span dir="ltr" style="font-size: 1.3em; font-weight: bold; color: #1e40af;">They moved to New York three years ________.</span>`,
        options: [
            "<span dir=\"ltr\">ago</span>",
            "<span dir=\"ltr\">last</span>",
            "<span dir=\"ltr\">yesterday</span>",
            "<span dir=\"ltr\">past</span>"
        ],
        correctAnswer: 0,
        hint: "המילה 'לפני' (במובן של 'לפני 3 שנים' - Three years _____) מתורגמת לאנגלית למילה קטנה ששמים תמיד *אחרי* פרק הזמן.",
        solution: `<strong>הסבר מלא (המילה Ago):</strong><br>
        המילה <strong>Ago</strong> (לפני...) היא אחת ממילות הרמז החזקות ביותר לזמן Past Simple.<br>
        הייחוד שלה באנגלית הוא שהיא באה <strong>אחרי ציון הזמן</strong>, בניגוד לעברית!<br><br>
        - בעברית: <u>לפני</u> חמש שנים.<br>
        - באנגלית: <span dir="ltr">five years <u>ago</u></span>.<br><br>
        לכן המשפט התקין הוא: <span dir="ltr">...three years <strong>ago</strong>.</span><br>
        (המילה Last תבוא לפני הזמן: <span dir="ltr">Last year</span>).`
    },
    // Question 39
    {
        topic: "english",
        subTopic: "Past Simple (עבר פשוט)",
        question_text: `<strong>Negative of To Be (המלכודת של didn't be):</strong><br>
        כיצד תכתבו את המשפט "הוא לא היה בבית" בצורה תקינה?`,
        options: [
            "<span dir=\"ltr\">He wasn't at home.</span>",
            "<span dir=\"ltr\">He didn't be at home.</span>",
            "<span dir=\"ltr\">He weren't at home.</span>",
            "<span dir=\"ltr\">He not was at home.</span>"
        ],
        correctAnswer: 0,
        hint: "כזכור, פועל ה-To be הוא 'מלך'. הוא מסתדר לבד. גם בעבר (was/were) הוא לא צריך את העזרה של Didn't. פשוט מוסיפים לו not.",
        solution: `<strong>הסבר מלא (שלילה של To Be בעבר):</strong><br>
        תלמידים רבים נוטים בטעות להגיד <span dir="ltr">"didn't be"</span>. זו שגיאה חמורה!<br><br>
        הפעלים <span dir="ltr"><strong>was</strong></span> ו-<span dir="ltr"><strong>were</strong></span> לא צריכים את <span dir="ltr">didn't</span> כדי לעשות שלילה. אנו פשוט מחברים להם את המילה <span dir="ltr"><strong>not</strong></span>.<br>
        - <span dir="ltr">was not &rarr; <strong>wasn't</strong></span><br>
        - <span dir="ltr">were not &rarr; <strong>weren't</strong></span><br><br>
        הנושא הוא <span dir="ltr"><strong>He</strong></span>, ולכן השלילה שלו היא <span dir="ltr"><strong>wasn't</strong></span>.<br>
        המשפט התקין: <span dir="ltr">He <strong>wasn't</strong> at home.</span>`
    },
    // Question 40
    {
        topic: "english",
        subTopic: "Past Simple (עבר פשוט)",
        question_text: `<strong>Irregular Verbs (Buy -> Bought):</strong><br>
        השלימו את המשפט עם העבר של הפועל <strong>buy</strong> (לקנות):<br>
        <span dir="ltr" style="font-size: 1.3em; font-weight: bold; color: #1e40af;">My parents ________ me a new phone for my birthday.</span>`,
        options: [
            "<span dir=\"ltr\">bought</span>",
            "<span dir=\"ltr\">buyed</span>",
            "<span dir=\"ltr\">brought</span>",
            "<span dir=\"ltr\">boat</span>"
        ],
        correctAnswer: 0,
        hint: "buy הוא פועל חריג קלאסי. הוא נחרז עם caught (וגם נכתב דומה עם ough). שימו לב לא להתבלבל עם brought (שהוא העבר של bring - להביא).",
        solution: `<strong>הסבר מלא (בלבול בין Buy ל-Bring):</strong><br>
        שתי מילים שנוטות לבלבל בבגרויות:<br>
        1. הפועל <strong>buy</strong> (לקנות) &rarr; הופך בעבר ל- <strong>bought</strong> (קנה).<br>
        2. הפועל <strong>bring</strong> (להביא) &rarr; הופך בעבר ל- <strong>brought</strong> (הביא) - שימו לב ל-r.<br><br>
        במשפט שלנו ההורים "קנו" טלפון, ולכן נשתמש ב-<span dir="ltr"><strong>bought</strong></span> (ללא r).<br>
        *המילה buyed לא קיימת במילון.`
    },
    // Question 41
    {
        topic: "english",
        subTopic: "Past Simple (עבר פשוט)",
        question_text: `<strong>Spelling Rules (Double Consonant C-V-C):</strong><br>
        כיצד יש לכתוב את הפועל <strong>stop</strong> (לעצור) בעבר?<br>
        <span dir="ltr" style="font-size: 1.3em; font-weight: bold; color: #1e40af;">The car ________ suddenly in the middle of the road.</span>`,
        options: [
            "<span dir=\"ltr\">stopped</span>",
            "<span dir=\"ltr\">stoped</span>",
            "<span dir=\"ltr\">stooped</span>",
            "<span dir=\"ltr\">stopt</span>"
        ],
        correctAnswer: 0,
        hint: "בדיוק כמו בהווה ממושך (ing), גם פה עובד חוק הכריך (עיצור-תנועה-עיצור). המילה קצרה, מסתיימת ב-p, לפניה o ולפניה t. מכפילים את האחרונה!",
        solution: `<strong>הסבר מלא (הכפלת האות האחרונה בעבר):</strong><br>
        חוק ה-C-V-C (Consonant, Vowel, Consonant) תופס גם בהוספת <strong>ed</strong>.<br><br>
        כאשר הפועל קצר ומסתיים ברצף של "עיצור - אות ניקוד - עיצור" (כמו s-t-<strong>o-p</strong>), אנו <strong>מכפילים את העיצור האחרון</strong> ואז מוסיפים ed.<br>
        - <span dir="ltr">stop &rarr; sto<strong>pp</strong>ed</span><br>
        - <span dir="ltr">plan &rarr; pla<strong>nn</strong>ed</span><br>
        - <span dir="ltr">hug &rarr; hu<strong>gg</strong>ed</span><br>
        התשובה הנכונה היא <span dir="ltr"><strong>stopped</strong></span>.`
    },
    // Question 42
    {
        topic: "english",
        subTopic: "Past Simple (עבר פשוט)",
        question_text: `<strong>Answering Questions (תשובות קצרות עם Did):</strong><br>
        מהי התשובה הקצרה התקנית והטבעית לשאלה:<br>
        <span dir="ltr" style="font-size: 1.3em; font-weight: bold; color: #1e40af;">"Did you see the new movie?"</span>`,
        options: [
            "<span dir=\"ltr\">Yes, I did.</span>",
            "<span dir=\"ltr\">Yes, I saw.</span>",
            "<span dir=\"ltr\">Yes, I was.</span>",
            "<span dir=\"ltr\">Yes, I do.</span>"
        ],
        correctAnswer: 0,
        hint: "חוק 'ההד' בתשובות קצרות (Short Answers): תענו עם המילה הראשונה שפתחה את השאלה.",
        solution: `<strong>הסבר מלא (תשובות קצרות ב-Past Simple):</strong><br>
        כלל הברזל באנגלית: "תענה עם המילה שבה שאלו אותך".<br>
        מכיוון שהשאלה נפתחת בפועל העזר <span dir="ltr"><strong>Did</strong></span>, גם התשובה הקצרה (המחליפה את הפעולה כולה) חייבת להסתיים בו.<br><br>
        - שאלה: <span dir="ltr"><strong>Did</strong> you see...?</span><br>
        - תשובה חיובית: <span dir="ltr">Yes, I <strong>did</strong>.</span><br>
        - תשובה שלילית: <span dir="ltr">No, I <strong>didn't</strong>.</span><br><br>
        לעולם אל תענו <span dir="ltr">"Yes, I saw"</span> כקיצור. זו שגיאה של תרגום עיוור מעברית ("כן, ראיתי").`
    },
    // Question 43
    {
        topic: "english",
        subTopic: "Past Simple (עבר פשוט)",
        question_text: `<strong>Irregular Verbs (Fly -> Flew):</strong><br>
        בחרו את הפועל הנכון בעבר:<br>
        <span dir="ltr" style="font-size: 1.3em; font-weight: bold; color: #1e40af;">The birds ________ south for the winter last month.</span>`,
        options: [
            "<span dir=\"ltr\">flew</span>",
            "<span dir=\"ltr\">flied</span>",
            "<span dir=\"ltr\">flown</span>",
            "<span dir=\"ltr\">flow</span>"
        ],
        correctAnswer: 0,
        hint: "הפועל 'לעוף' (fly) אינו מקבל ed. הוא משנה צורה לחלוטין. הוא דומה ל-grow שהופך ל-grew.",
        solution: `<strong>הסבר מלא (צורת העבר של Fly):</strong><br>
        הפועל <span dir="ltr"><strong>fly</strong></span> (לעוף / לטוס) הוא פועל יוצא דופן שמופיע המון בטקסטים.<br>
        הוא אינו מציית לחוקי ה-y (לא אומרים flied).<br><br>
        צורת העבר הפשוט (V2) שלו היא <span dir="ltr"><strong>flew</strong></span> (קרי: "פְלוּ").<br>
        (צורת ה-V3 שלו, עבור הווה מושלם, היא flown - לכן תשובה 3 שגויה כאן כי אנו צריכים V2 בלבד בשל המילה last month).`
    },
    // Question 44
    {
        topic: "english",
        subTopic: "Past Simple (עבר פשוט)",
        question_text: `<strong>Questions with To Be (שאלות בעבר עם Was/Were):</strong><br>
        כיצד תפתחו את השאלה הבאה העוסקת במצב (ולא בפעולה)?<br>
        <span dir="ltr" style="font-size: 1.3em; font-weight: bold; color: #1e40af;">________ the kids happy with their presents?</span>`,
        options: [
            "<span dir=\"ltr\">Were</span>",
            "<span dir=\"ltr\">Was</span>",
            "<span dir=\"ltr\">Did</span>",
            "<span dir=\"ltr\">Are</span>"
        ],
        correctAnswer: 0,
        hint: "המשפט אינו מכיל פועל (אין פה ריצה, קפיצה, אכילה). יש כאן תואר: 'שמחים' (happy). כשאנחנו שואלים על תואר בעבר ('האם הם היו...?'), אנו משתמשים בפועל To be בעבר. הילדים (רבים) = were.",
        solution: `<strong>הסבר מלא (הבדל בין Did ל-Was/Were בשאלות):</strong><br>
        זוהי הבחנה קריטית!<br>
        משתמשים ב-<strong>Did</strong> רק כשיש <u>פועל פעיל</u> במשפט (למשל: Did they <u>play</u>?).<br>
        כאשר אנו שואלים על <strong>תואר, רגש או מיקום</strong> ("האם הילדים היו <u>שמחים</u>?"), חייבים להשתמש ב-<strong>Was או Were</strong>.<br><br>
        מכיוון שהנושא הוא <span dir="ltr"><strong>the kids</strong></span> (הילדים - רבים / They), פועל ה-To be המתאים בעבר הוא <span dir="ltr"><strong>Were</strong></span>.<br>
        השאלה: <span dir="ltr"><strong>Were</strong> the kids happy...?</span>`
    },
    // Question 45
    {
        topic: "english",
        subTopic: "Past Simple (עבר פשוט)",
        question_text: `<strong>Stative Verbs in the Past:</strong><br>
        איזה מהמשפטים הבאים המתאר <strong>העדפה בעבר</strong> בנוי נכון דקדוקית?`,
        options: [
            "<span dir=\"ltr\">When I was young, I preferred chocolate over vanilla.</span>",
            "<span dir=\"ltr\">When I was young, I was preferring chocolate over vanilla.</span>",
            "<span dir=\"ltr\">When I was young, I prefer chocolate over vanilla.</span>",
            "<span dir=\"ltr\">When I was young, I didn't preferred chocolate over vanilla.</span>"
        ],
        correctAnswer: 0,
        hint: "הפועל prefer (להעדיף) הוא פועל מצב פנימי (Stative). למדנו שפעלים כאלו שונאים ing. לכן, כשהם בעבר, הם יהיו רק בעבר פשוט (Past Simple) בתוספת ed.",
        solution: `<strong>הסבר מלא (פעלי מצב בעבר):</strong><br>
        דיברנו בעבר על <strong>Stative Verbs</strong> (כמו love, want, prefer).<br>
        כפי שאסור להשתמש בהם עם ing בהווה, <strong>אסור להשתמש בהם עם ing גם בעבר (Past Progressive)</strong>!<br><br>
        לכן, גם אם העדפתי שוקולד במשך כל ילדותי (זמן ממושך), אי אפשר להגיד <span dir="ltr">"was preferring"</span>.<br>
        הם מופיעים רק כעבר פשוט (V2) - עם הוספת ed.<br>
        המשפט הנכון הוא: <span dir="ltr">I <strong>preferred</strong> chocolate.</span>`
    },

    // ---------------------------------------------------------
    // Subtopic 4: Past Progressive (עבר ממושך) - רמה מתקדמת
    // ---------------------------------------------------------

    // Question 46
    {
        topic: "english",
        subTopic: "Past Progressive (עבר ממושך)",
        question_text: `<strong>Basic Form (Was/Were + ing):</strong><br>
        השלימו את המשפט עם הנוסחה הנכונה לזמן זה:<br>
        <span dir="ltr" style="font-size: 1.3em; font-weight: bold; color: #1e40af;">At 8 o'clock last night, I ________ television.</span>`,
        options: [
            "<span dir=\"ltr\">was watching</span>",
            "<span dir=\"ltr\">were watching</span>",
            "<span dir=\"ltr\">watched</span>",
            "<span dir=\"ltr\">am watching</span>"
        ],
        correctAnswer: 0,
        hint: "כשמציינים שעה מדויקת בעבר ('ב-8 בדיוק אתמול בלילה'), זה אומר שהפעולה הייתה 'באמצע' באותו רגע (הייתי באמצע צפייה). לכן משתמשים בעבר ממושך (was/were + ing).",
        solution: `<strong>הסבר מלא (השימוש המרכזי בעבר ממושך):</strong><br>
        הזמן <strong>Past Progressive</strong> מתאר פעולה שהייתה בתהליך (התרחשה) בנקודת זמן ספציפית בעבר.<br><br>
        <strong>נוסחת הזמן:</strong> <span dir="ltr">Subject + <strong>Was / Were</strong> + Verb+<strong>ing</strong></span>.<br>
        הנושא הוא <span dir="ltr"><strong>I</strong></span> (אני), שלוקח <span dir="ltr"><strong>was</strong></span>.<br>
        ולכן: <span dir="ltr">I <strong>was watching</strong></span> (אני 'הייתי צופה').<br>
        (אם היה כתוב רק 'last night' ללא שעה מדויקת, היה אפשר לכתוב פשוט 'watched' בעבר פשוט).`
    },
    // Question 47
    {
        topic: "english",
        subTopic: "Past Progressive (עבר ממושך)",
        question_text: `<strong>Interrupted Action (When):</strong><br>
        בחרו את הצמד הנכון להשלמת חוק הפעולה הקוטעת (Interrupted Action):<br>
        <span dir="ltr" style="font-size: 1.3em; font-weight: bold; color: #1e40af;">I ________ a shower <u>when</u> the phone suddenly ________.</span>`,
        options: [
            "<span dir=\"ltr\">was taking / rang</span>",
            "<span dir=\"ltr\">took / was ringing</span>",
            "<span dir=\"ltr\">was taking / was ringing</span>",
            "<span dir=\"ltr\">took / rang</span>"
        ],
        correctAnswer: 0,
        hint: "דמיינו את הסצנה בסרט. מהי הפעולה ה'ארוכה' (הרקע) ומהי הפעולה ה'קצרה' שחתכה את הרקע פתאום? הארוכה מקבלת ing, והקצרה מקבלת עבר פשוט. והרמז: המילה 'When' תמיד מגיעה לפני הפעולה הקצרה.",
        solution: `<strong>הסבר מלא (פעולה ארוכה שנחתכה ע"י קצרה):</strong><br>
        זהו חוק הברזל המפורסם ביותר בבגרויות על זמני העבר.<br>
        כשיש שתי פעולות שמתנגשות:<br>
        1. <strong>הפעולה הארוכה (הרקע):</strong> מקבלת <span dir="ltr">Past Progressive (was/were + ing)</span>. הייתי באמצע המקלחת - <span dir="ltr">I <strong>was taking</strong> a shower</span>.<br>
        2. <strong>הפעולה הקצרה והפתאומית:</strong> מקבלת <span dir="ltr">Past Simple (V2)</span>. הטלפון צלצל (שנייה אחת) - <span dir="ltr">the phone <strong>rang</strong></span>.<br><br>
        כלל האצבע המוזהב: המילה <strong>When</strong> (כאשר) תמיד, אבל תמיד, תבוא <u>לפני הפעולה הקצרה (V2)</u>.`
    },
    // Question 48
    {
        topic: "english",
        subTopic: "Past Progressive (עבר ממושך)",
        question_text: `<strong>Parallel Actions (While):</strong><br>
        השלימו את המשפט המתאר שתי פעולות שקורות <u>במקביל</u>:<br>
        <span dir="ltr" style="font-size: 1.3em; font-weight: bold; color: #1e40af;"><u>While</u> Mom ________ a cake, Dad ________ the floor.</span>`,
        options: [
            "<span dir=\"ltr\">was baking / was washing</span>",
            "<span dir=\"ltr\">baked / washed</span>",
            "<span dir=\"ltr\">was baking / washed</span>",
            "<span dir=\"ltr\">baked / was washing</span>"
        ],
        correctAnswer: 0,
        hint: "המילה 'While' (בזמן ש...) מציינת 'רוחב פס'. כלומר, שתי הפעולות ארוכות ומתרחשות באותו הזמן בדיוק בשני חדרים שונים. לכן שתיהן ממושכות.",
        solution: `<strong>הסבר מלא (פעולות מקבילות עם While):</strong><br>
        המילה <span dir="ltr"><strong>While</strong></span> (בזמן ש...) היא חברה טובה של ה-Past Progressive.<br>
        כשיש לנו שתי פעולות ארוכות שקורות בו-זמנית (במקביל, אחת לא מפריעה לשנייה), אנחנו משתמשים בעבר ממושך עבור <strong>שתיהן</strong>.<br><br>
        - אמא אפתה (תהליך ארוך): <span dir="ltr">Mom <strong>was baking</strong></span>.<br>
        - אבא שטף (תהליך ארוך): <span dir="ltr">Dad <strong>was washing</strong></span>.<br>
        השילוב הראשון הוא התשובה המדויקת.`
    },
    // Question 49
    {
        topic: "english",
        subTopic: "Past Progressive (עבר ממושך)",
        question_text: `<strong>While + Short Action (המלכודת של While):</strong><br>
        איזה מהמשפטים הבאים נכון תחבירית כשהפעולה נקטעת?`,
        options: [
            "<span dir=\"ltr\">While we were sleeping, the alarm rang.</span>",
            "<span dir=\"ltr\">When we were sleeping, the alarm rang.</span>",
            "<span dir=\"ltr\">While we slept, the alarm was ringing.</span>",
            "<span dir=\"ltr\">We were sleeping while the alarm was ring.</span>"
        ],
        correctAnswer: 0,
        hint: "הכלל ההפוך מ-When. המילה 'While' אוהבת ארוך! היא חייבת לבוא *לפני* הפעולה הארוכה (ing).",
        solution: `<strong>הסבר מלא (חוק While מול When):</strong><br>
        בשאלה קודמת למדנו ש-When בא לפני הפעולה הקצרה. <br>
        כעת נלמד את הכלל של החברה שלה:<br>
        המילה <span dir="ltr"><strong>While</strong></span> (בזמן ש...) <strong>חייבת</strong> להיות צמודה ל<u>פעולה הארוכה</u> (Past Progressive).<br><br>
        ננתח את הפעולות:<br>
        השינה (ארוך) = <span dir="ltr">were sleeping</span>. (כאן חייב לבוא While).<br>
        האזעקה מצלצלת (קצר/חותך) = <span dir="ltr">rang</span>.<br><br>
        המשפט המנצח: <span dir="ltr"><strong>While</strong> we <strong>were sleeping</strong> (ארוך), the alarm <strong>rang</strong> (קצר).</span>`
    },
    // Question 50
    {
        topic: "english",
        subTopic: "Past Progressive (עבר ממושך)",
        question_text: `<strong>Negative Progressive Form (שלילה):</strong><br>
        השלימו את המשפט הבא בשלילה:<br>
        <span dir="ltr" style="font-size: 1.3em; font-weight: bold; color: #1e40af;">They ________ attention to the teacher during the lesson.</span>`,
        options: [
            "<span dir=\"ltr\">weren't paying</span>",
            "<span dir=\"ltr\">wasn't paying</span>",
            "<span dir=\"ltr\">didn't paying</span>",
            "<span dir=\"ltr\">aren't paying</span>"
        ],
        correctAnswer: 0,
        hint: "הנושא הוא 'They' (הם), כלומר רבים בעבר. כדי לשלול הווה ממושך משתמשים בפועל To Be פלוס Not.",
        solution: `<strong>הסבר מלא (שלילה בעבר ממושך):</strong><br>
        כדי לשלול פעולה ממושכת בעבר, אנחנו לא משתמשים ב-didn't. <br>
        הפועל To be עומד שם ויודע לעשות את העבודה בעצמו: אנו מצרפים <span dir="ltr">not</span> ל- <span dir="ltr">was / were</span>.<br><br>
        - הנושא: <span dir="ltr"><strong>They</strong></span>.<br>
        - הפועל המאשר: <span dir="ltr"><strong>were</strong></span>.<br>
        - שלילה: <span dir="ltr">were not &rarr; <strong>weren't</strong></span>.<br>
        המשפט הנכון: <span dir="ltr">They <strong>weren't paying</strong> attention.</span> (הם לא הקשיבו / לא שמו לב).`
    },
    // Question 51
    {
        topic: "english",
        subTopic: "Past Progressive (עבר ממושך)",
        question_text: `<strong>Questions in Past Progressive (שאלות כן/לא):</strong><br>
        איך מתחילים את השאלה הבאה (שואלים מה הוא עשה כשנכנסתי)?<br>
        <span dir="ltr" style="font-size: 1.3em; font-weight: bold; color: #1e40af;">________ he doing his homework when you came in?</span>`,
        options: [
            "<span dir=\"ltr\">Was</span>",
            "<span dir=\"ltr\">Did</span>",
            "<span dir=\"ltr\">Were</span>",
            "<span dir=\"ltr\">Does</span>"
        ],
        correctAnswer: 0,
        hint: "מכיוון שהפועל הראשי מופיע עם ing (doing), השאלה *חייבת* להתחיל בפועל To be. הנושא הוא He.",
        solution: `<strong>הסבר מלא (מבנה שאלה ממושכת):</strong><br>
        בזמן Past Progressive, אנו יוצרים שאלות פשוט על ידי <strong>היפוך</strong> של פועל ה-To be והנושא.<br><br>
        - משפט חיובי: <span dir="ltr">He <strong>was</strong> doing his homework.</span><br>
        - שאלה: מעבירים את was להתחלה &rarr; <span dir="ltr"><strong>Was</strong> he doing his homework?</span><br><br>
        אסור להשתמש ב-Did בשאלה הזו, כי המילה doing כבר מכילה ing. אם היינו שמים Did, המילה הייתה חייבת להיות do נקי (Did he do?).`
    },
    // Question 52
    {
        topic: "english",
        subTopic: "Past Progressive (עבר ממושך)",
        question_text: `<strong>Subject Questions (Who):</strong><br>
        כיצד נשאל: "מי נהג במכונית בזמן התאונה?"`,
        options: [
            "<span dir=\"ltr\">Who was driving the car?</span>",
            "<span dir=\"ltr\">Who were driving the car?</span>",
            "<span dir=\"ltr\">Who did driving the car?</span>",
            "<span dir=\"ltr\">Who did drive the car?</span>"
        ],
        correctAnswer: 0,
        hint: "זוכרים את חוק ה-Who? מילת השאלה Who נחשבת לגוף שלישי יחיד (He/She). לכן היא דורשת פועל שמתאים ליחיד.",
        solution: `<strong>הסבר מלא (שאלות מי בעבר ממושך):</strong><br>
        כשאנו שואלים "מי" (Who), אנו לא יודעים אם נהג שם אדם אחד או חמישה. <br>
        הכלל הדקדוקי קובע שיש להתייחס למילה <span dir="ltr"><strong>Who</strong></span> כאילו היא <strong>יחיד (Singular)</strong>.<br><br>
        עבור יחיד בעבר משתמשים ב-<strong>was</strong>.<br>
        לכן התבנית היא: <span dir="ltr">Who + was + V-ing</span>.<br>
        השאלה המנצחת: <span dir="ltr"><strong>Who was driving</strong> the car?</span>`
    },
    // Question 53
    {
        topic: "english",
        subTopic: "Past Progressive (עבר ממושך)",
        question_text: `<strong>Background Description in Stories (תיאורי אווירה בסיפור):</strong><br>
        מדוע משתמשים בעבר ממושך בפתיח הבא של סיפור?<br>
        <span dir="ltr" style="font-size: 1.2em; color: #1e40af;">"The sun <u>was shining</u> and the birds <u>were singing</u> when suddenly a loud noise broke the silence."</span>`,
        options: [
            "<span dir=\"ltr\">כי העבר הממושך מצייר את התפאורה ו'הרקע' (Background) של הסצנה לפני שהאקשן המרכזי (עבר פשוט) מתחיל.</span>",
            "<span dir=\"ltr\">כי שמש וציפורים הם איתני טבע שמחייבים זמן ממושך מבחינה לשונית.</span>",
            "<span dir=\"ltr\">זוהי טעות, כל משפט בסיפור חייב להיות בעבר פשוט בלבד.</span>",
            "<span dir=\"ltr\">מכיוון שהפעולות הללו התרחשו בעתיד והמספר נזכר בהן.</span>"
        ],
        correctAnswer: 0,
        hint: "תחשבו על סרט קולנוע: המצלמה עושה זום על הנוף הרגוע והמתמשך (ing), ואז 'בום!', קופץ חייזר (עבר פשוט).",
        solution: `<strong>הסבר מלא (שימוש ציורי ב-Past Progressive):</strong><br>
        מעבר לחוקי ה-When וה-While, לזמן העבר הממושך יש תפקיד "ספרותי" בכתיבת חיבורים (Writing) בבגרות.<br><br>
        אנו משתמשים בו כדי <strong>להגדיר את סצנת הפתיחה (Setting the scene)</strong>. פעולות אלו מספקות אווירה (השמש זרחה, הציפורים צייצו, רוח נשבה). פעולות אלו הן ה"במה" המתמשכת.<br>
        לאחר מכן, קורה "אירוע העלילה המרכזי" – שהוא תמיד פתאומי וחותך (broke the silence), ולכן הוא בא ב<strong>עבר פשוט (V2)</strong>.`
    },
    // Question 54
    {
        topic: "english",
        subTopic: "Past Progressive (עבר ממושך)",
        question_text: `<strong>Sequence of Past Actions (סדרת פעולות קצרות מול ממושך):</strong><br>
        קראו את המשפט הבא: <span dir="ltr">"He entered the room, sat on the chair and ________ a book."</span><br>
        איזה פועל יש להשלים ולמה?`,
        options: [
            "<span dir=\"ltr\">opened (עבר פשוט. מדובר בשרשרת של פעולות קצרות, מהירות ועוקבות שקרו אחת אחרי השנייה. אין כאן פעולה ארוכה שנחתכה).</span>",
            "<span dir=\"ltr\">was opening (עבר ממושך. פתיחת ספר לוקחת הרבה זמן ולכן היא ממושכת).</span>",
            "<span dir=\"ltr\">opening (מוסיפים ing אוטומטית למשפט ארוך).</span>",
            "<span dir=\"ltr\">opens (הווה פשוט, כי ספר קוראים כל יום).</span>"
        ],
        correctAnswer: 0,
        hint: "כשפעולות קורות כמו 'דומינו' אחת אחרי השנייה ברצף (נכנס -> ישב -> פתח), הן נחשבות קצרות ועובדתיות.",
        solution: `<strong>הסבר מלא (שרשרת אירועים כרונולוגית):</strong><br>
        זהו חוק "הרצף הכרונולוגי". אם בסיפור אנו מתארים סדרה של פעולות מהירות שקורות אחת אחרי השנייה ברצף (הוא נכנס לחדר &rarr; התיישב בכיסא &rarr; פתח את הספר), <strong>כל הפעולות הללו יהיו ב-Past Simple (V2)</strong>.<br><br>
        למה לא Past Progressive?<br>
        כי אף פעולה כאן לא התרחשה ברקע "בזמן" שפעולה אחרת קרתה (הן לא קרו במקביל ולא חתכו אחת את השנייה). לכן: <span dir="ltr">entered, sat, <strong>opened</strong></span>.`
    },
    // Question 55
    {
        topic: "english",
        subTopic: "Past Progressive (עבר ממושך)",
        question_text: `<strong>Spelling Trap (Double Consonant vs. Silent e):</strong><br>
        כיצד תכתבו את המשפט "הם חייכו כשהוא נכנס"?<br>
        <span dir="ltr" style="font-size: 1.3em; font-weight: bold; color: #1e40af;">They ________ when he walked in.</span>`,
        options: [
            "<span dir=\"ltr\">were smiling</span>",
            "<span dir=\"ltr\">were smilling</span>",
            "<span dir=\"ltr\">was smiling</span>",
            "<span dir=\"ltr\">were smileing</span>"
        ],
        correctAnswer: 0,
        hint: "הפועל הוא smile. הוא מסתיים באות e שקטה. מה עושים ל-e שקטה לפני ששמים ing?",
        solution: `<strong>הסבר מלא (איות פעלים בעבר ממושך):</strong><br>
        נחזור על כללי האיות, שכן הם זהים לחלוטין לחוקי ההווה הממושך:<br><br>
        1. <strong>זיהוי הנושא:</strong> המילה <span dir="ltr"><strong>They</strong></span> מחייבת את פועל העזר <strong>were</strong> (מה שפוסל את was smiling).<br>
        2. <strong>חוק האיות:</strong> הפועל הוא <span dir="ltr">smil<strong>e</strong></span>. מכיוון שהוא מסתיים באות e שקטה (לא נשמעת), אנו <strong>מוחקים</strong> אותה לחלוטין לפני הוספת ה-ing.<br>
        <span dir="ltr">smile &rarr; smil + ing &rarr; <strong>smiling</strong></span>.<br>
        (אסור להכפיל את ה-l כי אין פה חוק CVC).`
    },
    // Question 56
    {
        topic: "english",
        subTopic: "Past Progressive (עבר ממושך)",
        question_text: `<strong>Choosing the Right Helper (Was vs Were) - Tricky Subject:</strong><br>
        השלימו את המשפט (שימו לב לנושא!):<br>
        <span dir="ltr" style="font-size: 1.3em; font-weight: bold; color: #1e40af;">My brother and his dog ________ running in the yard.</span>`,
        options: [
            "<span dir=\"ltr\">were</span>",
            "<span dir=\"ltr\">was</span>",
            "<span dir=\"ltr\">are</span>",
            "<span dir=\"ltr\">did</span>"
        ],
        correctAnswer: 0,
        hint: "'אח שלי והכלב שלו'. יש פה שני יצורים חיים. ביחד הם קבוצה ('הם').",
        solution: `<strong>הסבר מלא (נושאים מחוברים):</strong><br>
        המוח שלנו רואה את המילה "dog" (כלב אחד - It) ורוצה אוטומטית לסמן "was".<br><br>
        האמת היא שהנושא של המשפט הוא כל החלק שלפני הקו: <span dir="ltr"><strong>My brother and his dog</strong></span> (אח שלי והכלב שלו).<br>
        1 איש + 1 כלב = 2 פרטים. כלומר, מדובר ברבים (<strong>They</strong>).<br>
        פועל העזר לעבר ברבים הוא <strong>were</strong>.<br>
        לכן: <span dir="ltr">My brother and his dog <strong>were</strong> running.</span>`
    },
    // Question 57
    {
        topic: "english",
        subTopic: "Past Progressive (עבר ממושך)",
        question_text: `<strong>Stative Verbs in the Past Context (מלכודת פעלי מצב):</strong><br>
        חבר שואל אותך מה קרה אתמול ב-8 בערב. אתה רוצה לענות: "ב-8 בערב נזקקתי לעזרתך". כיצד תאמר זאת?`,
        options: [
            "<span dir=\"ltr\">At 8 PM, I needed your help.</span>",
            "<span dir=\"ltr\">At 8 PM, I was needing your help.</span>",
            "<span dir=\"ltr\">At 8 PM, I didn't need your help.</span>",
            "<span dir=\"ltr\">At 8 PM, I am needing your help.</span>"
        ],
        correctAnswer: 0,
        hint: "למרות שיש שעה מדויקת (At 8 PM) שבדרך כלל דורשת עבר ממושך (ing), הפועל need (להזדקק/לרצות) הוא פועל מצב פנימי (Stative). הוא חסין לחוקים ודוחה ing תמיד.",
        solution: `<strong>הסבר מלא (חוק הברזל של Stative Verbs):</strong><br>
        אחת המלכודות הכי גדולות באנגלית היא ההתנגשות בין "מילת רמז של ממושך" לבין "פועל סטאטי".<br><br>
        הצירוף <span dir="ltr">"At 8 PM yesterday"</span> צועק לנו לשים Past Progressive (was/were + ing).<br>
        אך הפועל <strong>Need</strong> (להזדקק) מתאר תחושה/מצב פנימי של הדובר. פעלים אלו <strong>לעולם לא מקבלים ing</strong>.<br>
        כשיש התנגשות, פעלי המצב "מנצחים" ויורדים מדרגה אחת למטה - אל עבר ה-<strong>Past Simple (עבר פשוט)</strong>.<br><br>
        לכן, במקום was needing (שגוי לחלוטין), נכתוב עבר פשוט רגיל: <span dir="ltr"><strong>I needed</strong></span>.`
    },
    // Question 58
    {
        topic: "english",
        subTopic: "Past Progressive (עבר ממושך)",
        question_text: `<strong>Annoying Habits in the Past (always + past progressive):</strong><br>
        מה משמעות המשפט הבא?<br>
        <span dir="ltr" style="font-size: 1.2em; color: #1e40af;">"When we lived together, he <u>was always leaving</u> the dishes in the sink."</span>`,
        options: [
            "<span dir=\"ltr\">הדובר מתלונן ומביע תסכול מהרגל מעצבן וקבוע שהיה לשותף שלו בעבר (השארת כלים). שימוש ב-always עם עבר ממושך משדר כעס.</span>",
            "<span dir=\"ltr\">הדובר מתאר עובדת טבע אובייקטיבית ונייטרלית שהתרחשה בעבר, ללא שום רגש.</span>",
            "<span dir=\"ltr\">זהו משפט שגוי דקדוקית כי always שמור רק לעבר פשוט (he always left).</span>",
            "<span dir=\"ltr\">המשפט אומר שהם הדיחו את הכלים ביחד תמיד באותה השעה.</span>"
        ],
        correctAnswer: 0,
        hint: "כמו בהווה ממושך, הכנסת המילה always (תמיד) לתוך פועל ממושך (ing) נועדה 'לקטר' ולבטא תלונות על אדם אחר.",
        solution: `<strong>הסבר מלא (הבעת תסכול בעבר):</strong><br>
        זוהי רמה גבוהה של הבנת הנקרא וספרות (הנלמדת לקראת מודול E ו-G).<br><br>
        אם נגיד <span dir="ltr">"He always <strong>left</strong> the dishes"</span> (עבר פשוט) – זה תיאור עובדתי: "הוא תמיד השאיר את הכלים".<br>
        אבל כשאנחנו דוחפים את ה-always לתוך ה-Past Progressive:<br>
        <span dir="ltr">"He <strong>was always leaving</strong> the dishes"</span><br>
        אנו מוסיפים טון "מתבכיין" או כועס: "הוא <u>כל הזמן היה משאיר</u> את הכלים בכיור! נמאס לי מזה!". התחביר מעביר את הרגש של הדובר.`
    },
    // Question 59
    {
        topic: "english",
        subTopic: "Past Progressive (עבר ממושך)",
        question_text: `<strong>While + Past Simple (שגיאה נפוצה):</strong><br>
        מדוע המשפט הבא נחשב ל<strong>שגוי</strong> במבחן הבגרות?<br>
        <span dir="ltr" style="font-size: 1.3em; font-weight: bold; color: #dc2626;">"While I watched TV, my mom was cooking."</span>`,
        options: [
            "<span dir=\"ltr\">המילה 'While' (בזמן ש...) מיועדת לתאר פעולה ארוכה ומתמשכת, ולכן הפועל שמוצמד אליה חייב להיות במבנה ממושך (was watching) ולא בעבר פשוט (watched).</span>",
            "<span dir=\"ltr\">כי אסור שיהיו שני נושאים שונים במשפט אחד (אני ואמא).</span>",
            "<span dir=\"ltr\">מכיוון שאי אפשר לצפות בטלוויזיה ולבשל באותו הזמן מבחינה הגיונית.</span>",
            "<span dir=\"ltr\">כי המילה While חייבת תמיד לבוא רק באמצע המשפט, ולעולם לא בתחילתו.</span>"
        ],
        correctAnswer: 0,
        hint: "הכלל: While + Long Action (Past Progressive). פעולת הצפייה בטלוויזיה היא פעולה שלוקחת זמן רב.",
        solution: `<strong>הסבר מלא (כלל הברזל של While):</strong><br>
        המילה <strong>While</strong> מתורגמת כ"בזמן ש...", והיא מחייבת אותנו לתאר את משך התהליך.<br><br>
        לכן, מיד אחריה אנחנו מצפים לראות את התבנית של <strong>Past Progressive</strong> (was/were + ing).<br>
        במשפט השגוי כתוב <span dir="ltr">While I <strong>watched</strong></span> (עבר פשוט קצר). זה נשמע באנגלית כאילו "בזמן שהצצתי לשנייה אחת בטלוויזיה...".<br><br>
        התיקון הנכון הוא להאריך את הפעולה הראשונה: <span dir="ltr">While I <strong>was watching</strong> TV, my mom was cooking.</span> (כך יש לנו שתי פעולות ארוכות ומקבילות).`
    },
    // Question 60
    {
        topic: "english",
        subTopic: "Past Progressive (עבר ממושך)",
        question_text: `<strong>Synthesis - Bringing it all together:</strong><br>
        בחרו את הזוג הנכון המשלב עבר פשוט וממושך:<br>
        <span dir="ltr" style="font-size: 1.2em; font-weight: bold; color: #1e40af;">We ________ a movie when the lights suddenly ________ out.</span>`,
        options: [
            "<span dir=\"ltr\">were watching / went</span>",
            "<span dir=\"ltr\">watched / were going</span>",
            "<span dir=\"ltr\">were watching / were going</span>",
            "<span dir=\"ltr\">watched / went</span>"
        ],
        correctAnswer: 0,
        hint: "זהו משפט ההתנגשות הקלאסי. 1. אנחנו היינו באמצע צפייה (ארוך/ממושך). 2. המילה when מכריזה שפתאום משהו קרה: האורות כבו (קצר/חותך - עבר פשוט).",
        solution: `<strong>הסבר מלא (סיכום עבר פשוט מול ממושך):</strong><br>
        לסיכום הפרק, זהו המבנה המושלם שמופיע בכל מבחן אנגלית:<br><br>
        <strong>חלק 1 - רקע (Past Progressive):</strong> "אנחנו צפינו בסרט". זוהי פעולה ארוכה שלוקחת שעות. לכן נבחר ב-<span dir="ltr"><strong>We were watching</strong></span>.<br>
        <strong>חלק 2 - החיתוך (Past Simple):</strong> מופיעה מילת הקסם <span dir="ltr"><strong>when</strong></span> (כאשר) + המילה <strong>suddenly</strong> (לפתע). זהו איתות לפעולה קצרה וחותכת. הפועל "go out" (לכבות) הופך לעבר פשוט חריג (V2) - <span dir="ltr"><strong>went</strong></span>.<br><br>
        המשפט המנצח: <span dir="ltr">We <strong>were watching</strong> a movie when the lights <strong>went</strong> out.</span>`
    },// ---------------------------------------------------------
    // Subtopic 5: Future: Will & Be Going To (שאלות 61-75)
    // ---------------------------------------------------------

    // Question 61
    {
        topic: "english",
        subTopic: "Future: Will & Be Going To (עתיד)",
        question_text: `<strong>Spontaneous Decisions (החלטות של הרגע):</strong><br>
        אתם יושבים במסעדה והמלצר שואל מה תרצו להזמין. כרגע החלטתם. מה תענו לו?`,
        options: [
            "<span dir=\"ltr\">I will have a hamburger, please.</span>",
            "<span dir=\"ltr\">I am going to have a hamburger, please.</span>",
            "<span dir=\"ltr\">I having a hamburger, please.</span>",
            "<span dir=\"ltr\">I will to have a hamburger, please.</span>"
        ],
        correctAnswer: 0,
        hint: "כשמקבלים החלטה ספונטנית באותו רגע (Snap decision), משתמשים תמיד ב-Will. התוכנית לא הייתה מתוכננת מראש מהבית.",
        solution: `<strong>הסבר מלא (Will לעומת Going to):</strong><br>
        ההבדל הכי חשוב בעתיד באנגלית תלוי ב<strong>מתי התקבלה ההחלטה</strong>.<br><br>
        1. <strong>החלטה ספונטנית (Will):</strong> הרגע החלטתי. מישהו דופק בדלת? <span dir="ltr">"I <strong>will</strong> open it"</span> (אני אפתח). המלצר שואל מה בא לכם? <span dir="ltr">"I <strong>will</strong> take the salad"</span>.<br>
        2. <strong>תוכנית מראש (Be going to):</strong> תכננתם את זה מראש. <span dir="ltr">"I <strong>am going to</strong> visit Paris next year"</span>.<br><br>
        במסעדה זוהי החלטה של הרגע, ולכן נשתמש ב-<span dir="ltr"><strong>will</strong></span>. (שימו לב שלא כותבים will to, הפועל אחרי will תמיד נקי לחלוטין).`
    },
    // Question 62
    {
        topic: "english",
        subTopic: "Future: Will & Be Going To (עתיד)",
        question_text: `<strong>Prior Plans and Intentions (תוכניות וכוונות):</strong><br>
        רון חסך כסף במשך חצי שנה. הוא מספר לחברו על התוכנית המאורגנת שלו לשבוע הבא:<br>
        <span dir="ltr" style="font-size: 1.3em; font-weight: bold; color: #1e40af;">"I ________ buy a new computer next week."</span>`,
        options: [
            "<span dir=\"ltr\">am going to</span>",
            "<span dir=\"ltr\">will</span>",
            "<span dir=\"ltr\">is going to</span>",
            "<span dir=\"ltr\">going to</span>"
        ],
        correctAnswer: 0,
        hint: "רון לא החליט עכשיו. הוא תכנן את זה מראש (חסך כסף חצי שנה). לכן נשתמש במבנה התכנון: am/is/are + going to.",
        solution: `<strong>הסבר מלא (כוונה ברורה לעתיד):</strong><br>
        כאשר לאדם יש כוונה (Intention) או תוכנית שכבר הוחלטה מראש (Prior plan), הצורה הנכונה והטבעית ביותר היא <span dir="ltr"><strong>be going to</strong></span>.<br><br>
        <strong>המבנה:</strong> <span dir="ltr">Am/Is/Are + going to + Base Verb</span>.<br>
        הנושא הוא <span dir="ltr">I</span>, לכן פועל ה-To Be הוא <span dir="ltr">am</span>.<br>
        המשפט המושלם: <span dir="ltr">I <strong>am going to</strong> buy</span>.`
    },
    // Question 63
    {
        topic: "english",
        subTopic: "Future: Will & Be Going To (עתיד)",
        question_text: `<strong>Predictions based on Evidence (תחזית מבוססת ראיות):</strong><br>
        אתם מסתכלים לשמיים ורואים עננים שחורים מאוד כבדים. אתם אומרים לחבר:<br>
        <span dir="ltr" style="font-size: 1.3em; font-weight: bold; color: #1e40af;">"Look at those black clouds! It ________ rain."</span>`,
        options: [
            "<span dir=\"ltr\">is going to</span>",
            "<span dir=\"ltr\">will</span>",
            "<span dir=\"ltr\">is</span>",
            "<span dir=\"ltr\">going to</span>"
        ],
        correctAnswer: 0,
        hint: "כשאתם מנבאים משהו שעומד לקרות על בסיס הוכחות שאתם רואים פיזית בעיניים שלכם עכשיו (עננים שחורים), החוק דורש שימוש ב-Going to.",
        solution: `<strong>הסבר מלא (תחזיות - Predictions):</strong><br>
        שני הזמנים משמשים לתחזיות, אבל יש הבדל דק:<br>
        - <span dir="ltr"><strong>Will</strong></span>: תחזית שמבוססת על תחושת בטן, אמונה או תקווה (למשל: I think computers <strong>will</strong> fly in 2050).<br>
        - <span dir="ltr"><strong>Be going to</strong></span>: תחזית שמבוססת על <strong>ראיה מוצקה שקורית עכשיו</strong>! ראיתם עננים שחורים? ראיתם מכונית שנוסעת מהר מדי לקיר? אתם יודעים בוודאות מוחלטת מה הולך לקרות בעוד רגע, ולכן נשתמש ב-<span dir="ltr"><strong>is going to</strong></span>.`
    },
    // Question 64
    {
        topic: "english",
        subTopic: "Future: Will & Be Going To (עתיד)",
        question_text: `<strong>Promises and Offers (הבטחות והצעות עזרה):</strong><br>
        התיק של חבר שלכם כבד מאוד ואתם מציעים לו עזרה:<br>
        <span dir="ltr" style="font-size: 1.3em; font-weight: bold; color: #1e40af;">"Your bag looks heavy. I ________ carry it for you."</span>`,
        options: [
            "<span dir=\"ltr\">will</span>",
            "<span dir=\"ltr\">am going to</span>",
            "<span dir=\"ltr\">am carry</span>",
            "<span dir=\"ltr\">carrying</span>"
        ],
        correctAnswer: 0,
        hint: "הצעת עזרה או הבטחה מקבלות תמיד את המילה Will (כי זו החלטה טובה ומהירה של הרגע).",
        solution: `<strong>הסבר מלא (תפקידים נוספים של Will):</strong><br>
        המילה <span dir="ltr"><strong>Will</strong></span> (שבאה תמיד עם פועל מקור נקי אחריה) משמשת למספר דברים קבועים בבגרות:<br>
        1. <strong>הצעת עזרה:</strong> "אני אעזור לך!" &rarr; <span dir="ltr">I <strong>will</strong> help you!</span><br>
        2. <strong>הבטחות:</strong> "אני לעולם לא אספר לאיש" &rarr; <span dir="ltr">I <strong>will</strong> never tell anyone.</span><br>
        3. <strong>איומים:</strong> "אני אתקשר למשטרה!" &rarr; <span dir="ltr">I <strong>will</strong> call the police!</span>`
    },
    // Question 65
    {
        topic: "english",
        subTopic: "Future: Will & Be Going To (עתיד)",
        question_text: `<strong>Future Time Clauses (פסוקיות זמן - המלכודת הענקית):</strong><br>
        השלימו את המשפט הבא (שימו לב למילה 'When'):<br>
        <span dir="ltr" style="font-size: 1.3em; font-weight: bold; color: #1e40af;">I will call you when I ________ home.</span>`,
        options: [
            "<span dir=\"ltr\">arrive (הווה פשוט)</span>",
            "<span dir=\"ltr\">will arrive (עתיד)</span>",
            "<span dir=\"ltr\">am arriving (הווה ממושך)</span>",
            "<span dir=\"ltr\">arriving</span>"
        ],
        correctAnswer: 0,
        hint: "זוהי מלכודת הבגרות הכי מפורסמת! באנגלית, אחרי מילות זמן (When, Until, As soon as), אסור להשתמש ב-Will, אפילו אם המשמעות היא לעתיד! אנחנו משתמשים בהווה פשוט.",
        solution: `<strong>הסבר מלא (חוק פסוקיות הזמן - Time Clauses):</strong><br>
        זוהי אחת משגיאות התרגום הנפוצות ביותר מעברית.<br>
        בעברית אנחנו אומרים: "אני אתקשר אליך כאשר אני <strong>אגיע</strong> (עתיד) הביתה".<br><br>
        באנגלית החוק מחמיר: <strong>אסור לשים "will" בתוך אותו חצי משפט שמתחיל במילות זמן!</strong><br>
        מילות הזמן הן: <span dir="ltr">When, As soon as, Until, Before, After, If</span>.<br><br>
        מיד אחריהן, אנחנו חייבים להשתמש ב<strong>הווה פשוט (Present Simple)</strong> למרות שהמשמעות עתידית.<br>
        נכון: <span dir="ltr">When I <strong>arrive</strong></span>.<br>
        שגוי לחלוטין: <span dir="ltr">When I <em>will arrive</em></span>.`
    },
    // Question 66
    {
        topic: "english",
        subTopic: "Future: Will & Be Going To (עתיד)",
        question_text: `<strong>Negative of Will (צורת השלילה של Will):</strong><br>
        השלימו את משפט השלילה בעתיד:<br>
        <span dir="ltr" style="font-size: 1.3em; font-weight: bold; color: #1e40af;">She ________ come to the party tomorrow because she is sick.</span>`,
        options: [
            "<span dir=\"ltr\">won't (will not)</span>",
            "<span dir=\"ltr\">doesn't will</span>",
            "<span dir=\"ltr\">willn't</span>",
            "<span dir=\"ltr\">isn't will</span>"
        ],
        correctAnswer: 0,
        hint: "למילה Will יש קיצור מיוחד מאוד (וחריג בכתיב שלו) כשהיא מתחברת למילה not.",
        solution: `<strong>הסבר מלא (שלילת העתיד - Won't):</strong><br>
        כמו פועל ה-To be, גם המילה <span dir="ltr">Will</span> היא חזקה ועצמאית (נקראת Modal verb). היא לא צריכה פועלי עזר אחרים. היא מחברת אליה את מילת השלילה <span dir="ltr">not</span>.<br><br>
        שימו לב לשינוי האיות החריג:<br>
        <span dir="ltr">Will + not &rarr; <strong>won't</strong></span><br><br>
        מילים כמו willn't או doesn't will פשוט אינן קיימות בשפה האנגלית.`
    },
    // Question 67
    {
        topic: "english",
        subTopic: "Future: Will & Be Going To (עתיד)",
        question_text: `<strong>Structure of 'Going to' in Negative (שלילה ב-Going to):</strong><br>
        כיצד תגידו באנגלית "הם לא הולכים לשחק"?`,
        options: [
            "<span dir=\"ltr\">They aren't going to play.</span>",
            "<span dir=\"ltr\">They don't going to play.</span>",
            "<span dir=\"ltr\">They isn't going to play.</span>",
            "<span dir=\"ltr\">They are going not to play.</span>"
        ],
        correctAnswer: 0,
        hint: "המבנה של Going to נשען לחלוטין על פועל ה-To Be. לכן, השלילה תתבצע על פועל העזר: are הופך ל-aren't.",
        solution: `<strong>הסבר מלא (שלילה עם Be going to):</strong><br>
        המבנה של <span dir="ltr">Be going to</span> שואב את כל חוקי הדקדוק שלו מפועל ה-To Be.<br>
        הנושא כאן הוא <span dir="ltr"><strong>They</strong></span>, שדורש את המילה <span dir="ltr"><strong>are</strong></span>.<br>
        כדי להפוך לשלילה, נצמיד את ה-not ל-are ונקבל <span dir="ltr"><strong>aren't</strong></span>.<br><br>
        המשפט המושלם: <span dir="ltr">They <strong>aren't</strong> going to play.</span>`
    },
    // Question 68
    {
        topic: "english",
        subTopic: "Future: Will & Be Going To (עתיד)",
        question_text: `<strong>Question Form with Will (שאלות בעתיד):</strong><br>
        איך מתחילים את השאלה הבאה?<br>
        <span dir="ltr" style="font-size: 1.3em; font-weight: bold; color: #1e40af;">________ you help me with this project next month?</span>`,
        options: [
            "<span dir=\"ltr\">Will</span>",
            "<span dir=\"ltr\">Do</span>",
            "<span dir=\"ltr\">Are</span>",
            "<span dir=\"ltr\">Would</span>"
        ],
        correctAnswer: 0,
        hint: "כדי ליצור שאלה בעתיד פשוט עם Will, המילה Will פשוט קופצת לתחילת המשפט.",
        solution: `<strong>הסבר מלא (יצירת שאלות עם Will):</strong><br>
        זהו הזמן הקל ביותר באנגלית לבניית שאלות, מכיוון שאין צורך להתאים גופים (אין הבדל בין I, He, You או They).<br><br>
        <strong>היפוך פשוט:</strong><br>
        - משפט חיובי: <span dir="ltr">You <strong>will</strong> help me.</span><br>
        - שאלת כן/לא: <span dir="ltr"><strong>Will</strong> you help me?</span><br><br>
        אין פה צורך בפועל עזר (כמו Do), כי Will עושה את העבודה בעצמו.`
    },
    // Question 69
    {
        topic: "english",
        subTopic: "Future: Will & Be Going To (עתיד)",
        question_text: `<strong>Question Form with Going To (שאלות עם Going to):</strong><br>
        כיצד תנסחו נכון שאלת WH על תוכנית עתידית?`,
        options: [
            "<span dir=\"ltr\">What are you going to do tomorrow?</span>",
            "<span dir=\"ltr\">What you are going to do tomorrow?</span>",
            "<span dir=\"ltr\">What do you going to do tomorrow?</span>",
            "<span dir=\"ltr\">What going to do are you tomorrow?</span>"
        ],
        correctAnswer: 0,
        hint: "נוסחת מילות השאלה (WHAS): מילת שאלה (What) -> פועל עזר To be (are) -> נושא (you) -> השאר (going to do).",
        solution: `<strong>הסבר מלא (מבנה שאלה מורכבת):</strong><br>
        כמו בכל שאלת WH עם פועל עזר (To be), התבנית היא קשיחה:<br><br>
        <strong>[Wh Word] + [Am/Is/Are] + [Subject] + [Going to + Verb]</strong><br>
        - מילת שאלה: <span dir="ltr">What</span><br>
        - פועל עזר (לפי You): <span dir="ltr">are</span><br>
        - נושא: <span dir="ltr">you</span><br>
        - המשך המבנה: <span dir="ltr">going to do</span><br><br>
        התוצאה: <span dir="ltr"><strong>What are you going to do?</strong></span>`
    },
    // Question 70
    {
        topic: "english",
        subTopic: "Future: Will & Be Going To (עתיד)",
        question_text: `<strong>Keywords / Time Expressions (רמזי זמן עתיד):</strong><br>
        איזו מהמילים הבאות <strong>אינה</strong> מילת רמז לזמן עתיד?`,
        options: [
            "<span dir=\"ltr\">Yesterday</span>",
            "<span dir=\"ltr\">Tomorrow</span>",
            "<span dir=\"ltr\">Next week</span>",
            "<span dir=\"ltr\">In a few days</span>"
        ],
        correctAnswer: 0,
        hint: "חפשו את המילה שמציינת את 'אתמול' - מילה זו שייכת לעבר בלבד.",
        solution: `<strong>הסבר מלא (מילות רמז לעתיד):</strong><br>
        חשוב לזהות את מילות הרמז שמופיעות בסוף המשפט ו'צועקות' לנו להשתמש בעתיד:<br>
        <ul>
            <li><span dir="ltr"><strong>Tomorrow</strong></span> (מחר)</li>
            <li><span dir="ltr"><strong>Next</strong></span> (הבא - Next week, Next month, Next year)</li>
            <li><span dir="ltr"><strong>In...</strong></span> (בעוד... - In two hours, In a few days)</li>
            <li><span dir="ltr"><strong>Soon</strong></span> (בקרוב)</li>
        </ul>
        המילה <span dir="ltr"><strong>Yesterday</strong></span> (אתמול) שייכת כמובן לעבר הפשוט.`
    },
    // Question 71
    {
        topic: "english",
        subTopic: "Future: Will & Be Going To (עתיד)",
        question_text: `<strong>Advanced: First Conditional Connection (משפט תנאי ראשון):</strong><br>
        חוק עתיד זה קשור למשפטי התנאי (Conditionals) בבגרות. השלימו את החצי השני:<br>
        <span dir="ltr" style="font-size: 1.3em; font-weight: bold; color: #1e40af;">If it rains tomorrow, we ________ at home.</span>`,
        options: [
            "<span dir=\"ltr\">will stay</span>",
            "<span dir=\"ltr\">would stay</span>",
            "<span dir=\"ltr\">stayed</span>",
            "<span dir=\"ltr\">are staying</span>"
        ],
        correctAnswer: 0,
        hint: "זהו תנאי ראשון (First Conditional) - מתאר מצב מציאותי לעתיד. נוסחה: If + הווה פשוט, תוצאה + Will.",
        solution: `<strong>הסבר מלא (Conditionals - First Conditional):</strong><br>
        השימוש הגדול ביותר ב-Will בבגרות הוא בתוך משפטי תנאי.<br><br>
        כשאנו מדברים על תנאי הגיוני שיכול לקרות בעתיד ("אם ירד גשם..."), החוק קובע:<br>
        <strong>חלק התנאי (If):</strong> נכתב ב<strong>הווה פשוט</strong> (If it <strong>rains</strong>).<br>
        <strong>חלק התוצאה:</strong> חייב להיכתב בעזרת <span dir="ltr"><strong>will + Verb</strong></span>.<br><br>
        לכן התוצאה היא: <span dir="ltr">...we <strong>will stay</strong> at home.</span> (אנחנו נישאר בבית).`
    },
    // Question 72
    {
        topic: "english",
        subTopic: "Future: Will & Be Going To (עתיד)",
        question_text: `<strong>Volunteering to do something (התנדבות לעשות משהו):</strong><br>
        חברה שלך אומרת: "אני כל כך צמאה". איך תתנדבי להביא לה מים?`,
        options: [
            "<span dir=\"ltr\">I will get you some water.</span>",
            "<span dir=\"ltr\">I am going to get you some water.</span>",
            "<span dir=\"ltr\">I get you some water.</span>",
            "<span dir=\"ltr\">I getting you some water.</span>"
        ],
        correctAnswer: 0,
        hint: "התנדבות או תגובה מהירה לבעיה של מישהו היא פעולה של ה'רגע' (ללא תכנון מוקדם). לכן היא מחייבת שימוש במילה Will.",
        solution: `<strong>הסבר מלא (תגובות ספונטניות / Volunteering):</strong><br>
        השימוש ב-<span dir="ltr"><strong>Will</strong></span> נועד בדיוק למצבים חברתיים של "תגובה וישועה".<br><br>
        אם מישהו אומר שקר לו, התגובה הטבעית תהיה סגירת החלון על ידך באותו הרגע: <span dir="ltr">"I <strong>will</strong> close the window."</span><br>
        לכן, כשאת שומעת שחברה שלך צמאה עכשיו, ההחלטה שלך להביא לה מים נולדה בשנייה זו, ומחייבת: <span dir="ltr">"I <strong>will</strong> get you..."</span>.`
    },
    // Question 73
    {
        topic: "english",
        subTopic: "Future: Will & Be Going To (עתיד)",
        question_text: `<strong>Will vs. Going to (A thought process match):</strong><br>
        איזה מהמשפטים הבאים מייצג <strong>תוכנית ברורה</strong> שתוכננה מראש, ולא סתם דעה?`,
        options: [
            "<span dir=\"ltr\">I bought the tickets yesterday! We are going to fly to Rome.</span>",
            "<span dir=\"ltr\">I think we will fly to Rome someday.</span>",
            "<span dir=\"ltr\">Maybe we will fly to Rome next year.</span>",
            "<span dir=\"ltr\">I promise I will fly to Rome.</span>"
        ],
        correctAnswer: 0,
        hint: "שימו לב להקשר: 'כבר קניתי את הכרטיסים אתמול!'. כלומר, זו עובדה קיימת. הפעולה ללא ספק הולכת לקרות. מילים כמו Think או Maybe מראות על חוסר ודאות.",
        solution: `<strong>הסבר מלא (ודאות מול חוסר ודאות):</strong><br>
        אנו מבדילים בין הזמנים באמצעות רמת הוודאות בטקסט:<br><br>
        - מילים כמו <span dir="ltr">Think (חושב), Hope (מקווה), Maybe (אולי)</span> – דורשות שימוש ב-<span dir="ltr"><strong>Will</strong></span>, כי הן מביעות חוסר תכנון והשערה קלה.<br>
        - אבל כשיש לנו הוכחות בשטח ("קניתי כרטיסים", "שילמתי מקדמה", "חסכתי כסף") – התוכנית סגורה! במצב כזה אנו מחויבים להשתמש ב-<span dir="ltr"><strong>Be going to</strong></span> כדי להדגיש את רמת הוודאות הגבוהה של הפעולה.`
    },
    // Question 74
    {
        topic: "english",
        subTopic: "Future: Will & Be Going To (עתיד)",
        question_text: `<strong>The verb 'To be' in the Future:</strong><br>
        איך נאמר "הוא יהיה רופא כשהוא יגדל"?`,
        options: [
            "<span dir=\"ltr\">He will be a doctor when he grows up.</span>",
            "<span dir=\"ltr\">He will is a doctor when he grows up.</span>",
            "<span dir=\"ltr\">He going to be a doctor when he grows up.</span>",
            "<span dir=\"ltr\">He will a doctor when he grows up.</span>"
        ],
        correctAnswer: 0,
        hint: "אחרי המילה Will, הפועל חייב לחזור למקור הבסיסי והטהור ביותר שלו. המקור של am, is, are הוא המילה 'be'.",
        solution: `<strong>הסבר מלא (פועל To be בעתיד):</strong><br>
        באנגלית, כשאנחנו רוצים להגיד "אהיה", "תהיה" או "יהיה", אנחנו משלבים את מילת העתיד <span dir="ltr"><strong>Will</strong></span> עם פועל המקור <span dir="ltr"><strong>be</strong></span>.<br><br>
        הטעות הנפוצה היא לנסות להכניס את 'is' (למשל: <span dir="ltr" style="text-decoration: line-through;">He will is</span>). זה אסור!<br>
        המילה Will דורשת שהפועל אחריה יוריד את כל התחפושות שלו ויחזור לשורש. השורש של <span dir="ltr">am/is/are</span> הוא <span dir="ltr"><strong>be</strong></span>.<br>
        לכן התשובה הנכונה היא: <span dir="ltr">He <strong>will be</strong> a doctor.</span>`
    },
    // Question 75
    {
        topic: "english",
        subTopic: "Future: Will & Be Going To (עתיד)",
        question_text: `<strong>Advanced Alternative - "Be about to" (עתיד מיידי):</strong><br>
        איזו משמעות מסתתרת מאחורי הביטוי הקרוב מאוד לעתיד: <span dir="ltr">"Shhh... The movie <strong>is about to</strong> start!"</span>`,
        options: [
            "<span dir=\"ltr\">זה אומר שהפעולה עומדת להתרחש ממש עכשיו, בדקות או בשניות הקרובות (עתיד מיידי / סף התרחשות).</span>",
            "<span dir=\"ltr\">זה אומר שהסרט מדבר על התחלות חדשות (about = אודות).</span>",
            "<span dir=\"ltr\">זה אומר שהסרט כנראה לא יתחיל לעולם.</span>",
            "<span dir=\"ltr\">זה מתאר משהו שהיה אמור לקרות בעבר ובוטל.</span>"
        ],
        correctAnswer: 0,
        hint: "הביטוי 'Be about to' הוא המקבילה האנגלית לביטוי העברי 'עומד ל...'. הוא משמש לפעולות שנמצאות ממש על הקצה.",
        solution: `<strong>הסבר מלא (Be about to - עתיד מיידי):</strong><br>
        בבגרויות או בטקסטים מתקדמים (Modules E-G), לא תמיד נראה את המילה Will. במקומה, נראה ביטויים שמדייקים את כוונת הכותב.<br><br>
        הביטוי <span dir="ltr"><strong>[Am/Is/Are] + about to + Verb</strong></span> מתאר <strong>עתיד המתרחש ממש מעבר לפינה (Imminent Future)</strong>.<br>
        תרגום לעברית: "אני עומד ל..." או "זה בדיוק עומד לקרות".<br>
        <span dir="ltr">"The movie <strong>is about to</strong> start"</span> = הסרט עומד להתחיל (כלומר בעוד רגעים ספורים, שבו בשקט!).`
    },

    // ---------------------------------------------------------
    // Subtopic 6: Present Perfect Simple (הווה מושלם) (שאלות 76-90)
    // ---------------------------------------------------------

    // Question 76
    {
        topic: "english",
        subTopic: "Present Perfect Simple (הווה מושלם)",
        question_text: `<strong>Basic Form and Usage (חיבור עבר והווה):</strong><br>
        בחרו את התשובה הנכונה בזמן ההווה המושלם (Present Perfect):<br>
        <span dir="ltr" style="font-size: 1.3em; font-weight: bold; color: #1e40af;">I ________ London three times in my life.</span>`,
        options: [
            "<span dir=\"ltr\">have visited</span>",
            "<span dir=\"ltr\">has visited</span>",
            "<span dir=\"ltr\">visited</span>",
            "<span dir=\"ltr\">am visiting</span>"
        ],
        correctAnswer: 0,
        hint: "כשמתארים 'חוויות חיים' עד לרגע זה (ולא מציינים תאריך או שנה מדוייקת מתי זה קרה), אנו משתמשים בהווה מושלם (Have/Has + V3). הנושא כאן הוא I.",
        solution: `<strong>הסבר מלא (היכרות עם ה-Present Perfect):</strong><br>
        זמן ה"הווה המושלם" הוא הכאב ראש של ישראלים, כי אין לו תרגום ישיר לעברית.<br>
        <strong>למה הוא משמש?</strong> הוא מגשר בין העבר להווה. אחד משימושיו העיקריים הוא תיאור <strong>"חוויות חיים" (Experiences)</strong> – פעולות שעשינו במהלך חיינו <u>בלי לציין מתי בדיוק עשינו אותן</u> (ההתמקדות היא בעצם הפעולה, לא בזמן).<br><br>
        <strong>הנוסחה:</strong> <span dir="ltr">Subject + <strong>Have / Has</strong> + <strong>V3</strong> (פועל בטור השלישי)</span>.<br>
        עבור I נשתמש ב-have, וה-V3 של visit הוא visited (בפעלים רגילים, V2 ו-V3 זהים).<br>
        התשובה: <span dir="ltr">I <strong>have visited</strong></span>.`
    },
    // Question 77
    {
        topic: "english",
        subTopic: "Present Perfect Simple (הווה מושלם)",
        question_text: `<strong>The Keyword 'Yet' (המילה עדיין/כבר):</strong><br>
        המילה <span dir="ltr"><strong>yet</strong></span> מופיעה אך ורק במיקום מסוים ובסוג מסוים של משפטים. מצאו את המשפט התקין:`,
        options: [
            "<span dir=\"ltr\">I haven't finished my homework yet.</span>",
            "<span dir=\"ltr\">I have yet finished my homework.</span>",
            "<span dir=\"ltr\">I finished my homework yet.</span>",
            "<span dir=\"ltr\">Yet I haven't finished my homework.</span>"
        ],
        correctAnswer: 0,
        hint: "המילה 'yet' תמיד שמורה לסוף המשפט. כמו כן, היא מופיעה אך ורק במשפטי שאלה (?) או שלילה (not).",
        solution: `<strong>הסבר מלא (חוקי המילה YET):</strong><br>
        המילה <span dir="ltr"><strong>yet</strong></span> היא הרמז הגדול ביותר לזמן הווה מושלם. היא מתורגמת כ"עדיין" (בשלילה) או "כבר" (בשאלה).<br><br>
        <strong>שני חוקי ברזל לגבי Yet:</strong><br>
        1. <strong>מיקום:</strong> המילה <u>חייבת</u> להיות המילה האחרונה במשפט! (בסוף).<br>
        2. <strong>סוג משפט:</strong> מותר להשתמש בה רק ב<strong>שלילה</strong> (I haven't...) או ב<strong>שאלה</strong> (Have you...?). אסור להשתמש בה במשפט חיובי רגיל!<br><br>
        לכן, המשפט התקין היחיד הוא משפט השלילה שבו yet בסוף: <span dir="ltr">I haven't finished my homework <strong>yet</strong>.</span>`
    },
    // Question 78
    {
        topic: "english",
        subTopic: "Present Perfect Simple (הווה מושלם)",
        question_text: `<strong>The Keyword 'Just' (בדיוק הרגע):</strong><br>
        השלימו את המשפט בעזרת מיקום נכון של מילות הרמז:<br>
        <span dir="ltr" style="font-size: 1.3em; font-weight: bold; color: #1e40af;">Don't touch the wall! I ________ painted it.</span>`,
        options: [
            "<span dir=\"ltr\">have just</span>",
            "<span dir=\"ltr\">just have</span>",
            "<span dir=\"ltr\">have just been</span>",
            "<span dir=\"ltr\">did just</span>"
        ],
        correctAnswer: 0,
        hint: "המילה just (בדיוק הרגע) נדחפת תמיד *באמצע* - בין פועל העזר (have) לבין הפועל המרכזי (V3).",
        solution: `<strong>הסבר מלא (מיקום המילה Just):</strong><br>
        המילה <span dir="ltr"><strong>Just</strong></span> משמשת לתאר פעולה שהסתיימה ממש לפני שניות או דקות ספורות בעבר, והתוצאה שלה עדיין טרייה בהווה (הקיר עדיין רטוב!).<br><br>
        <strong>המיקום التחבירי (הסנדוויץ'):</strong><br>
        המילה 'just' חייבת להיות כלואה באמצע:<br>
        <span dir="ltr">Have/Has + <strong>just</strong> + V3</span><br>
        לכן המשפט התקין הוא: <span dir="ltr">I <strong>have just</strong> painted it.</span> (אני בדיוק כרגע צבעתי אותו).`
    },
    // Question 79
    {
        topic: "english",
        subTopic: "Present Perfect Simple (הווה מושלם)",
        question_text: `<strong>Since vs. For (נקודת זמן מול פרק זמן):</strong><br>
        איזו מילת רמז נשלב במשפט הבא?<br>
        <span dir="ltr" style="font-size: 1.3em; font-weight: bold; color: #1e40af;">She has lived in Tel Aviv ________ 2015.</span>`,
        options: [
            "<span dir=\"ltr\">since</span>",
            "<span dir=\"ltr\">for</span>",
            "<span dir=\"ltr\">from</span>",
            "<span dir=\"ltr\">in</span>"
        ],
        correctAnswer: 0,
        hint: "כשאנו מציינים 'נקודת התחלה' מדויקת שממנה משהו התחיל (כמו שנת 2015, או 'יום שני'), משתמשים במילה Since (מאז).",
        solution: `<strong>הסבר מלא (הקרב הגדול: Since מול For):</strong><br>
        זהו נושא שחוזר בכל בחינה. מתי משתמשים ב-Since ומתי ב-For?<br><br>
        - <span dir="ltr"><strong>Since (מאז):</strong></span> מציין את <strong>נקודת ההתחלה המדויקת</strong> של הפעולה. תאריך, יום, שעה, שנה, או מאורע בחיים. (דוגמאות: Since 2015, Since Monday, Since I was a child).<br>
        - <span dir="ltr"><strong>For (במשך):</strong></span> מציין את <strong>משך הזמן (כמות הזמן)</strong> שהפעולה לוקחת. סופרים בו שניות, ימים, חודשים, שנים. (דוגמאות: For 3 years, For 2 weeks, For an hour).<br><br>
        כיוון ש-2015 היא שנת התחלה ספציפית, נבחר ב-<span dir="ltr"><strong>Since</strong></span>.`
    },
    // Question 80
    {
        topic: "english",
        subTopic: "Present Perfect Simple (הווה מושלם)",
        question_text: `<strong>Since vs. For (פרק זמן):</strong><br>
        איזו מילה מתאימה להשלמת המשפט הבא?<br>
        <span dir="ltr" style="font-size: 1.3em; font-weight: bold; color: #1e40af;">We haven't seen each other ________ three months!</span>`,
        options: [
            "<span dir=\"ltr\">for</span>",
            "<span dir=\"ltr\">since</span>",
            "<span dir=\"ltr\">in</span>",
            "<span dir=\"ltr\">during</span>"
        ],
        correctAnswer: 0,
        hint: "האם '3 חודשים' זה תאריך ספציפי או שזו 'כמות זמן' שספרנו? עבור כמות זמן (משך) משתמשים ב-For.",
        solution: `<strong>הסבר מלא:</strong><br>
        נשתמש בחוק שלמדנו למעלה:<br>
        הביטוי <span dir="ltr">"three months"</span> (שלושה חודשים) מתאר <strong>אורך של זמן (Duration)</strong>. זוהי כמות זמן שספרנו (חודש ועוד חודש ועוד חודש).<br>
        הוא לא מציין חודש מדויק (כמו 'מאז מרץ' - Since March).<br><br>
        לכן, אנו חייבים להשתמש במילה <span dir="ltr"><strong>For</strong></span> (במשך).<br>
        המשפט: <span dir="ltr">We haven't seen each other <strong>for</strong> three months.</span>`
    },
    // Question 81
    {
        topic: "english",
        subTopic: "Present Perfect Simple (הווה מושלם)",
        question_text: `<strong>Present Perfect vs. Past Simple (זיהוי הבדל קריטי):</strong><br>
        קראו את המשפט: "I ________ to Paris last year."<br>
        למה המשפט הזה <strong>חייב</strong> להיכתב בעבר פשוט (Past Simple: went) ואסור לכתוב אותו בהווה מושלם (Have gone)?`,
        options: [
            "<span dir=\"ltr\">מכיוון שמופיע במשפט ציון זמן עבר מפורש ומדויק ('last year'). הווה מושלם 'שונא' תאריכים מדוייקים שנגמרו בעבר. ברגע שיש תאריך, חובה לרדת לעבר פשוט (V2).</span>",
            "<span dir=\"ltr\">מכיוון שפריז היא מקום רחוק, והווה מושלם מיועד רק לפעולות שמתרחשות בבית.</span>",
            "<span dir=\"ltr\">זה שגוי. מותר לכתוב 'I have gone to Paris last year' וזה תקין לחלוטין.</span>",
            "<span dir=\"ltr\">מכיוון שהפועל go לא קיים בטור השלישי (V3), ולכן הוא חייב להישאר בעבר פשוט.</span>"
        ],
        correctAnswer: 0,
        hint: "שאלת המיליון דולר בבגרות: ההבדל תלוי ב'טיימר'. אם הטיימר של הפעולה הסתיים (מצוין במדויק מתי זה קרה - אתמול, לפני שנה, בשנת 2010), אז זה עבר פשוט.",
        solution: `<strong>הסבר מלא ומעמיק (Past Simple מול Present Perfect):</strong><br>
        החוק המפריד בין שני הזמנים תלוי כולו ב<strong>זמן ההתרחשות</strong>:<br><br>
        - <strong>הווה מושלם (Present Perfect):</strong> מתמקד בפעולה עצמה. <u>לא אומרים מתי זה קרה</u>! (I have visited Paris). הזמן לא חשוב, אלא הניסיון חיים.<br>
        - <strong>עבר פשוט (Past Simple):</strong> ממוקד ב<strong>מתי</strong> הפעולה קרתה. ברגע שהמשפט מכיל ציון זמן ברור שהסתיים (yesterday, last year, in 2010, two days ago) – <strong>הווה מושלם נפסל מיד!</strong> אתם חייבים להשתמש בעבר פשוט (V2).<br>
        לכן, בגלל המילה <span dir="ltr"><strong>last year</strong></span>, החוק מכריח אותנו להשתמש ב-<span dir="ltr"><strong>went</strong></span>.`
    },
    // Question 82
    {
        topic: "english",
        subTopic: "Present Perfect Simple (הווה מושלם)",
        question_text: `<strong>Irregular Verbs in V3 (פעלים חריגים בטור שלישי):</strong><br>
        מהי הצורה התקינה (V3) של הפועל <strong>write</strong> (לכתוב) בהווה מושלם?<br>
        <span dir="ltr" style="font-size: 1.3em; font-weight: bold; color: #1e40af;">She has ________ three emails today.</span>`,
        options: [
            "<span dir=\"ltr\">written</span>",
            "<span dir=\"ltr\">wrote</span>",
            "<span dir=\"ltr\">writed</span>",
            "<span dir=\"ltr\">writing</span>"
        ],
        correctAnswer: 0,
        hint: "זכרו את שלושת הטורים לפועל הזה: 1. write (הווה), 2. wrote (עבר), 3. ______ (סביל/הווה מושלם - מקבל n בסוף והכפלה של t).",
        solution: `<strong>הסבר מלא (צורות ה-V3):</strong><br>
        כדי להצליח בהווה מושלם, חייבים לשלוט ב"טור השלישי" של הפעלים החריגים (Past Participle).<br><br>
        הפועל <span dir="ltr">write</span> משתנה כך:<br>
        - <strong>V1 (Base):</strong> write<br>
        - <strong>V2 (Past Simple):</strong> wrote<br>
        - <strong>V3 (Present Perfect/Passive):</strong> <span dir="ltr"><strong>written</strong></span> (שימו לב לכפילות האות t).<br><br>
        התשובה הנכונה היא <span dir="ltr"><strong>written</strong></span>.`
    },
    // Question 83
    {
        topic: "english",
        subTopic: "Present Perfect Simple (הווה מושלם)",
        question_text: `<strong>The Keyword 'Ever' (האם אי פעם):</strong><br>
        איך מתרגמים נכון לאנגלית את השאלה: "האם אי פעם אכלת סושי?"`,
        options: [
            "<span dir=\"ltr\">Have you ever eaten sushi?</span>",
            "<span dir=\"ltr\">Did you ever eat sushi?</span>",
            "<span dir=\"ltr\">Do you ever ate sushi?</span>",
            "<span dir=\"ltr\">Are you ever eaten sushi?</span>"
        ],
        correctAnswer: 0,
        hint: "כששואלים על ניסיון חיים מלידה ועד רגע זה ('האם אי פעם...'), משתמשים אך ורק ב-Present Perfect. המילה Ever (אי פעם) נכנסת כאן.",
        solution: `<strong>הסבר מלא (שאלות 'אי פעם' - Ever):</strong><br>
        המילה <span dir="ltr"><strong>Ever</strong></span> (אי פעם) היא סימן ההיכר הגדול של שאלות על חוויות חיים בהווה מושלם.<br><br>
        היא שואלת: "מהרגע שנולדת ועד היום, האם התנסית בדבר הזה?".<br>
        המבנה הנכון תמיד יהיה:<br>
        <span dir="ltr"><strong>Have / Has + Subject + Ever + V3</strong></span><br>
        ולכן: <span dir="ltr"><strong>Have you ever eaten</strong> sushi?</span><br><br>
        (אמריקאים לפעמים שואלים בסלנג "Did you ever", אבל במבחני בגרות דקדוקיים התשובה המחייבת והנכונה היא הווה מושלם בלבד).`
    },
    // Question 84
    {
        topic: "english",
        subTopic: "Present Perfect Simple (הווה מושלם)",
        question_text: `<strong>Has vs Have (התאמת נושא):</strong><br>
        השלימו את המשפט הבא בצורה הנכונה:<br>
        <span dir="ltr" style="font-size: 1.3em; font-weight: bold; color: #1e40af;">My family ________ lived in this house for ten years.</span>`,
        options: [
            "<span dir=\"ltr\">has</span>",
            "<span dir=\"ltr\">have</span>",
            "<span dir=\"ltr\">are</span>",
            "<span dir=\"ltr\">is</span>"
        ],
        correctAnswer: 0,
        hint: "המילה family (משפחה) היא 'שם קיבוצי' (Collective noun). דקדוקית, מתייחסים למשפחה כיחידה אחת (It). מה מתאים ליחיד?",
        solution: `<strong>הסבר מלא (שמות קיבוציים - חזרה חשובה):</strong><br>
        בדיוק כפי שלמדנו בהווה פשוט, המילה <span dir="ltr"><strong>family</strong></span> היא גוף שלישי יחיד (It). כל המשפחה מתפקדת כגוף אחד.<br><br>
        על פי חוקי ההווה המושלם:<br>
        - <span dir="ltr">I, You, We, They</span> מקבלים <strong>have</strong>.<br>
        - <span dir="ltr">He, She, <strong>It</strong></span> מקבלים <strong>has</strong>.<br><br>
        לכן התשובה היא: <span dir="ltr">My family <strong>has lived</strong>...</span>`
    },
    // Question 85
    {
        topic: "english",
        subTopic: "Present Perfect Simple (הווה מושלם)",
        question_text: `<strong>Negative with 'Never' (מעולם לא):</strong><br>
        איזה מהמשפטים הבאים שמבטא שלילה באמצעות המילה <strong>Never</strong> כתוב <strong>נכון</strong>?`,
        options: [
            "<span dir=\"ltr\">I have never seen that movie.</span>",
            "<span dir=\"ltr\">I haven't never seen that movie.</span>",
            "<span dir=\"ltr\">I never have seen that movie.</span>",
            "<span dir=\"ltr\">I have seen never that movie.</span>"
        ],
        correctAnswer: 0,
        hint: "המילה Never היא שלילה בעצמה. כמו שלמדנו, באנגלית אסור לעשות 'שלילה כפולה' (אסור haven't + never). שמים אותה באמצע כמו just.",
        solution: `<strong>הסבר מלא (שלילה עם Never):</strong><br>
        המילה <span dir="ltr"><strong>Never</strong></span> (אף פעם / מעולם לא) מבטאת חוסר ניסיון חיים מוחלט עד היום.<br>
        כיוון שהיא בעצמה מילת שלילה, אנחנו נשתמש איתה ב<strong>פועל חיובי (have)</strong> ולא בשלילה (haven't).<br><br>
        <strong>מיקום הסנדוויץ':</strong> כמו המילה just, גם never נדחפת בדיוק באמצע:<br>
        <span dir="ltr">Subject + <strong>Have/Has</strong> + <strong>never</strong> + <strong>V3</strong></span>.<br>
        המשפט המנצח: <span dir="ltr">I <strong>have never seen</strong> that movie.</span>`
    },
    // Question 86
    {
        topic: "english",
        subTopic: "Present Perfect Simple (הווה מושלם)",
        question_text: `<strong>Gone to vs. Been to (הבדל במשמעות תנועה):</strong><br>
        מה ההבדל במשמעות בין שני המשפטים הבאים?<br>
        1. Dan <u>has gone</u> to London.<br>
        2. Dan <u>has been</u> to London.`,
        options: [
            "<span dir=\"ltr\">משפט 1 (gone) אומר שדן נסע ללונדון והוא עדיין שם עכשיו (הוא לא חזר). משפט 2 (been) אומר שדן ביקר בלונדון בעבר (כחוויה בחיים) וכבר חזר ממנה והוא פה.</span>",
            "<span dir=\"ltr\">אין שום הבדל. שני המשפטים אומרים שהוא טס ללונדון בשבוע שעבר.</span>",
            "<span dir=\"ltr\">משפט 1 הוא בעבר, ומשפט 2 מתאר תוכנית לעתיד (הוא יהיה בלונדון).</span>",
            "<span dir=\"ltr\">משפט 1 מתאר טיסה במטוס, ומשפט 2 מתאר נסיעה ברכבת.</span>"
        ],
        correctAnswer: 0,
        hint: "תזכרו: Gone = הלך (ועדיין שם). Been = היה (ביקר ב... וחזר).",
        solution: `<strong>הסבר מלא ומעמיק (Been לעומת Gone):</strong><br>
        זהו חוק עדין ויפהפה של ה-Present Perfect!<br><br>
        - <span dir="ltr"><strong>Has gone to</strong></span>: פעולת ההליכה לא הסתיימה. דן לקח מזוודה, טס ללונדון, וכעת הוא נמצא בלונדון (או בדרך אליה). אם תחפשו אותו בבית – הוא איננו.<br>
        - <span dir="ltr"><strong>Has been to</strong></span>: פעולה כ"חוויית חיים". דן "היה" בלונדון מתישהו בעבר. הוא טס, ביקר, נהנה, ו<strong>חזר הביתה</strong>. כעת הוא איתנו ומספר לנו חוויות.`
    },
    // Question 87
    {
        topic: "english",
        subTopic: "Present Perfect Simple (הווה מושלם)",
        question_text: `<strong>Lately / Recently (לאחרונה):</strong><br>
        השלימו את המשפט בעזרת הזמן הנכון, בהסתמך על מילת הרמז שבסוף:<br>
        <span dir="ltr" style="font-size: 1.3em; font-weight: bold; color: #1e40af;">She ________ very tired <u>lately</u>.</span>`,
        options: [
            "<span dir=\"ltr\">has felt</span>",
            "<span dir=\"ltr\">feels</span>",
            "<span dir=\"ltr\">felt</span>",
            "<span dir=\"ltr\">is feeling</span>"
        ],
        correctAnswer: 0,
        hint: "המילים lately (לאחרונה) ו-recently מתארות תקופת זמן שהתחילה בעבר הקרוב ו*נמשכת עד עכשיו*. זמן שמחבר עבר להווה הוא ההווה המושלם.",
        solution: `<strong>הסבר מלא (מילות זמן מחברות):</strong><br>
        מילים כמו <span dir="ltr"><strong>Lately</strong></span> או <span dir="ltr"><strong>Recently</strong></span> (לאחרונה) הן מילות רמז מובהקות ל-Present Perfect.<br><br>
        הן אינן מציינות נקודת זמן שהסתיימה לגמרי (כמו yesterday), אלא מספרות לנו על "רצף" או מגמה שהתחילה לפני כמה ימים/שבועות ועדיין מורגשת היום.<br>
        הנושא הוא <span dir="ltr">She</span>, לכן נשתמש ב-<span dir="ltr">has</span> + V3.<br>
        הפועל feel הופך ב-V3 ל-felt.<br>
        המשפט: <span dir="ltr">She <strong>has felt</strong> very tired lately.</span>`
    },
    // Question 88
    {
        topic: "english",
        subTopic: "Present Perfect Simple (הווה מושלם)",
        question_text: `<strong>Tricky Subjects (Nobody/None):</strong><br>
        השלימו את המשפט הבא עם הפועל התקין:<br>
        <span dir="ltr" style="font-size: 1.3em; font-weight: bold; color: #1e40af;">Nobody ________ finished the test yet.</span>`,
        options: [
            "<span dir=\"ltr\">has</span>",
            "<span dir=\"ltr\">have</span>",
            "<span dir=\"ltr\">are</span>",
            "<span dir=\"ltr\">is</span>"
        ],
        correctAnswer: 0,
        hint: "בדיוק כמו המילה Everybody, המילה Nobody (אף אחד) היא כינוי גוף סתמי שנחשב לדקדוק כגוף שלישי יחיד (He/She).",
        solution: `<strong>הסבר מלא (חוק היחיד למילים סתמיות):</strong><br>
        זהו חוק עקבי שרץ איתנו לאורך כל הזמנים באנגלית.<br>
        המילה <span dir="ltr"><strong>Nobody</strong></span> (אף אחד) מתנהגת כאילו היא אדם אחד יחיד (He / She / It).<br>
        ולכן, גם בהווה מושלם, היא מקבלת את פועל העזר של היחיד: <span dir="ltr"><strong>has</strong></span>.<br><br>
        המשפט: <span dir="ltr">Nobody <strong>has</strong> finished...</span><br>
        *(שימו לב שאסור להגיד 'Nobody hasn't', כי Nobody כבר מביע שלילה בעצמו, אז פועל העזר נשאר חיובי).*`
    },
    // Question 89
    {
        topic: "english",
        subTopic: "Present Perfect Simple (הווה מושלם)",
        question_text: `<strong>Result in the Present (תוצאה ניכרת בהווה):</strong><br>
        קראו את המשפט: "I can't open the door because I ________ my keys."<br>
        למה חייבים להשתמש כאן בהווה מושלם (have lost) ולא בעבר פשוט (lost)?`,
        options: [
            "<span dir=\"ltr\">מכיוון שהפעולה של איבוד המפתחות התרחשה בעבר, אבל התוצאה וההשלכה שלה רלוונטית ומורגשת ממש עכשיו (אני לא יכול להיכנס הביתה בהווה). זהו התפקיד הקלאסי של הזמן המושלם.</span>",
            "<span dir=\"ltr\">מכיוון שהמשפט מכיל את המילה because, ולאחר מילה זו חובה להשתמש תמיד בהווה מושלם.</span>",
            "<span dir=\"ltr\">זו טעות. הווה מושלם אינו נכון כאן, מכיוון שאיבוד המפתחות זו פעולה מהירה וקצרה.</span>",
            "<span dir=\"ltr\">מכיוון שמפתחות הם מילה ברבים (keys), ולכן היא דורשת פועל עם have.</span>"
        ],
        correctAnswer: 0,
        hint: "הווה מושלם הוא הגשר בין עבר לעכשיו. אם קרה משהו אתמול, והיום אתה סובל או נהנה מהתוצאה שלו (העבר פולש אל תוך ההווה) - זו הקרקע המדויקת להווה מושלם.",
        solution: `<strong>הסבר מלא (פעולת עבר עם השלכה על ההווה):</strong><br>
        זהו השימוש הפילוסופי והיפה ביותר של ה-Present Perfect באנגלית!<br><br>
        אם אני אומר: <span dir="ltr">"I <strong>lost</strong> my keys yesterday"</span> (עבר פשוט), זה אומר שאיבדתי אותם, אבל יכול להיות שכבר מצאתי אותם מאז, או שהחלפתי מנעול. הפעולה מתה בעבר ונותקה מהיום.<br><br>
        אבל כשאני אומר <span dir="ltr">"I <strong>have lost</strong> my keys"</span> (הווה מושלם), המשמעות הסמויה היא: "איבדתי אותם בעבר, <u>ועד רגע זה לא מצאתי אותם</u> ולכן יש לי בעיה עכשיו!". הפעולה של העבר ממשיכה "לחיות" ולייצר תוצאה בהווה (אני תקוע מחוץ לדלת).`
    },
    // Question 90
    {
        topic: "english",
        subTopic: "Present Perfect Simple (הווה מושלם)",
        question_text: `<strong>Synthesis Translation (תרגום נכון לעברית):</strong><br>
        כיצד יש לתרגם ולפרש נכונה את המשפט הבא לעברית (מבחינת משמעות הזמן)?<br>
        <span dir="ltr" style="font-size: 1.2em; font-weight: bold; color: #1e40af;">"I have worked here for five years."</span>`,
        options: [
            "<span dir=\"ltr\">'אני עובד כאן כבר 5 שנים.' (המשמעות היא: התחלתי בעבר, ואני <u>עדיין עובד כאן</u> גם היום. הפעולה לא הסתיימה).</span>",
            "<span dir=\"ltr\">'אני עבדתי כאן למשך 5 שנים.' (המשמעות היא: עבדתי בעבר, אבל עזבתי את העבודה ואני כבר לא שם היום).</span>",
            "<span dir=\"ltr\">'אני אעבוד כאן ב-5 השנים הבאות.' (משמעות של עתיד).</span>",
            "<span dir=\"ltr\">'העבודה שלי תיקח עוד 5 שנים מתחילתה.'</span>"
        ],
        correctAnswer: 0,
        hint: "כשההווה המושלם בא יחד עם מילות משך (For או Since), הוא מתאר פעולה שהתחילה בעבר ולא נקטעה. כלומר, היא ממשיכה להתרחש אפילו עכשיו.",
        solution: `<strong>הסבר מלא (פעולה מתמשכת שלא הסתיימה):</strong><br>
        באנגלית אין לנו את הפינוק של השפה העברית שאומרת "אני עובד פה כבר..." בהווה רגיל.<br><br>
        כשאנו רוצים לתאר מצב שהתחיל בעבר (למשל ב-2019) וממשיך להיות נכון עד היום (2024), <strong>זהו התפקיד המובהק של ההווה המושלם עם For או Since</strong>.<br><br>
        - <span dir="ltr">I <strong>worked</strong> here for 5 years</span> (עבר פשוט) = עבדתי פה בעבר, סיימתי, התפטרתי, ואני לא עובד פה היום.<br>
        - <span dir="ltr">I <strong>have worked</strong> here for 5 years</span> (הווה מושלם) = התחלתי לפני 5 שנים, <strong>ואני עדיין שכיר בחברה הזו היום!</strong>`
    },// ---------------------------------------------------------
    // Subtopic 7: Present Perfect Progressive (שאלות 91-105)
    // ---------------------------------------------------------

    // Question 91
    {
        topic: "english",
        subTopic: "Present Perfect Progressive",
        question_text: `<strong>Basic Form (The Formula):</strong><br>
        איזה מהמשפטים הבאים בנוי נכון בזמן Present Perfect Progressive?`,
        options: [
            "<span dir=\"ltr\">I have been waiting for you for two hours!</span>",
            "<span dir=\"ltr\">I has been waiting for you for two hours!</span>",
            "<span dir=\"ltr\">I have waiting for you for two hours!</span>",
            "<span dir=\"ltr\">I been waiting for you for two hours!</span>"
        ],
        correctAnswer: 0,
        hint: "הנוסחה לזמן הזה כוללת 3 חלקים: Have/Has + המילה been + פועל עם ing.",
        solution: `<strong>הסבר מלא (מבנה ההווה המושלם הממושך):</strong><br>
        הזמן הזה משמש לתיאור פעולה שהתחילה בעבר, נמשכה ברצף עד עכשיו, וכנראה עדיין ממשיכה.<br><br>
        <strong>הנוסחה הקבועה היא:</strong><br>
        <span dir="ltr">Subject + <strong>have / has</strong> + <strong>been</strong> + <strong>V-ing</strong></span><br><br>
        הנושא הוא <span dir="ltr">I</span> ולכן נשתמש ב-<span dir="ltr">have</span>. אחריו נוסיף <span dir="ltr">been</span>, ואז את הפועל עם ing (<span dir="ltr">waiting</span>).<br>
        המשפט הנכון: <span dir="ltr">I <strong>have been waiting</strong></span> (אני מחכה לך כבר שעתיים!).`
    },
    // Question 92
    {
        topic: "english",
        subTopic: "Present Perfect Progressive",
        question_text: `<strong>Action with Visible Results (תוצאה נראית לעין בהווה):</strong><br>
        השלימו את המשפט: <br>
        <span dir="ltr" style="font-size: 1.3em; font-weight: bold; color: #1e40af;">You look exhausted! ________ you ________ all day?</span>`,
        options: [
            "<span dir=\"ltr\">Have / been working</span>",
            "<span dir=\"ltr\">Did / work</span>",
            "<span dir=\"ltr\">Are / working</span>",
            "<span dir=\"ltr\">Have / worked</span>"
        ],
        correctAnswer: 0,
        hint: "כשרואים תוצאה פיזית עכשיו (הוא נראה מותש/מזיע/מלוכלך), שואלים על ה'תהליך' הארוך שגרם לזה עד הרגע. התהליך מתואר ע\"י have been + ing.",
        solution: `<strong>הסבר מלא (שימוש בתוצאות נראות לעין):</strong><br>
        אחד השימושים הקלאסיים של Present Perfect Progressive הוא תיאור פעולה שאולי הסתיימה ממש הרגע, אבל <strong>התוצאות הפיזיות שלה זועקות לעין בהווה</strong>.<br><br>
        אתה נראה מותש עכשיו. למה? כי התהליך של העבודה 'שאב' אותך עד הרגע הזה.<br>
        השאלה תהיה: <span dir="ltr"><strong>Have</strong> you <strong>been working</strong> all day?</span> (האם עבדת כל היום?).<br>
        הזמן הממושך מדגיש את המאמץ ואת <u>משך הפעולה</u> (All day).`
    },
    // Question 93
    {
        topic: "english",
        subTopic: "Present Perfect Progressive",
        question_text: `<strong>Stative Verbs Trap (מלכודת פעלי המצב):</strong><br>
        איזה מהמשפטים הבאים <strong>שגוי</strong> לחלוטין למרות שהוא מתאר פעולה ארוכה שהחלה בעבר?`,
        options: [
            "<span dir=\"ltr\">I have been knowing him since 2010.</span>",
            "<span dir=\"ltr\">I have been living here since 2010.</span>",
            "<span dir=\"ltr\">I have been studying English for five years.</span>",
            "<span dir=\"ltr\">I have been playing the piano all morning.</span>"
        ],
        correctAnswer: 0,
        hint: "הפועל 'know' (לדעת/להכיר) הוא פועל מצב. הוא שונא ing בכל הזמנים, גם בזמן הזה!",
        solution: `<strong>הסבר מלא (פעלי מצב מנצחים הכל):</strong><br>
        זוהי שאלת בגרות מכשילה קלאסית. <br>
        כשאנחנו רוצים להגיד "אני מכיר אותו משנת 2010", אנחנו חושבים על תהליך ארוך, ומנסים לכתוב: <span dir="ltr" style="text-decoration:line-through">I have been knowing him</span>.<br><br>
        <strong>אבל... חוק פעלי המצב (Stative Verbs) אוסר על הוספת ing לפעלים של רגש וידיעה (know, like, want, need)!</strong><br>
        לכן, פעלים אלו "נופלים" שלב אחד אחורה אל ההווה המושלם הפשוט.<br>
        המשפט התקין חייב להיות: <span dir="ltr">I <strong>have known</strong> him since 2010.</span>`
    },
    // Question 94
    {
        topic: "english",
        subTopic: "Present Perfect Progressive",
        question_text: `<strong>How Long...? (שאלות 'כמה זמן'):</strong><br>
        באיזה זמן נשתמש כדי להשלים את השאלה המבררת את <u>משך הזמן</u> של פעולה שעדיין נמשכת?<br>
        <span dir="ltr" style="font-size: 1.3em; font-weight: bold; color: #1e40af;">How long ________ it ________? The streets are flooded.</span>`,
        options: [
            "<span dir=\"ltr\">has / been raining</span>",
            "<span dir=\"ltr\">is / raining</span>",
            "<span dir=\"ltr\">did / rain</span>",
            "<span dir=\"ltr\">does / rain</span>"
        ],
        correctAnswer: 0,
        hint: "השאלה 'How long' מתאימה כמו כפפה ליד לזמן Present Perfect Progressive כשמדובר במשהו שהתחיל בעבר ועדיין ממשיך (הגשם עדיין יורד או שהרחובות מוצפים ממה שקרה עד עכשיו).",
        solution: `<strong>הסבר מלא (שאלות How long):</strong><br>
        כשאנו שואלים <span dir="ltr"><strong>How long</strong></span> (כמה זמן) על אירוע שעדיין מתרחש או שתוצאותיו ניכרות כעת, אנו נשתמש בהווה מושלם ממושך.<br><br>
        הנושא הוא <span dir="ltr">it</span> (הגשם), ולכן פועל העזר יהיה <span dir="ltr">has</span>.<br>
        הנוסחה: <span dir="ltr">How long + <strong>has</strong> + it + <strong>been raining</strong>?</span><br>
        (כמה זמן יורד פה גשם?)`
    },
    // Question 95
    {
        topic: "english",
        subTopic: "Present Perfect Progressive",
        question_text: `<strong>Duration vs Result (הבדל דק מול הווה מושלם פשוט):</strong><br>
        קראו את שני המשפטים. איזה משפט מדגיש את <strong>התהליך (הדרך)</strong> ואיזה מדגיש את <strong>התוצאה (הסיום)</strong>?<br>
        1. I have been painting my room.<br>
        2. I have painted my room.`,
        options: [
            "<span dir=\"ltr\">משפט 1 מדגיש את התהליך (הייתי עסוק בלצבוע, ואולי עוד לא סיימתי). משפט 2 מדגיש את התוצאה (החדר צבוע, הפעולה הסתיימה).</span>",
            "<span dir=\"ltr\">משפט 1 אומר שסיימתי לצבוע, ומשפט 2 אומר שרק התחלתי.</span>",
            "<span dir=\"ltr\">אין שום הבדל במשמעות. שני המשפטים אומרים שהצביעה הסתיימה לחלוטין.</span>",
            "<span dir=\"ltr\">משפט 1 מתאר פעולה של מישהו אחר, ומשפט 2 פעולה שלי.</span>"
        ],
        correctAnswer: 0,
        hint: "הסיומת ing תמיד מצלמת 'תהליך' תוך כדי תנועה. אם אני 'have been painting', יש לי עדיין צבע על הידיים.",
        solution: `<strong>הסבר מלא (תהליך לעומת תוצאה):</strong><br>
        זהו ההבדל המרכזי בין שני סוגי ה-Present Perfect:<br><br>
        - <strong>Progressive (have been painting):</strong> הפוקוס הוא על <u>הפעילות עצמה</u> ועל משך הזמן שלה. לא אכפת לנו אם החדר מוכן או לא. (אולי צבעתי רק קיר אחד, אבל אני עייף מזה).<br>
        - <strong>Simple (have painted):</strong> הפוקוס הוא על <u>התוצאה המוגמרת</u>. עבדתי, סיימתי, וכעת החדר נראה חדש. הפעולה הושלמה לחלוטין.`
    },
    // Question 96
    {
        topic: "english",
        subTopic: "Present Perfect Progressive",
        question_text: `<strong>Keywords 'All day / All morning':</strong><br>
        השלימו את המשפט בעזרת מילת הרמז 'All day' (כל היום):<br>
        <span dir="ltr" style="font-size: 1.3em; font-weight: bold; color: #1e40af;">She is very tired because she ________ hard all day.</span>`,
        options: [
            "<span dir=\"ltr\">has been studying</span>",
            "<span dir=\"ltr\">have been studying</span>",
            "<span dir=\"ltr\">is studying</span>",
            "<span dir=\"ltr\">studies</span>"
        ],
        correctAnswer: 0,
        hint: "הביטוי 'כל היום' מראה שזה התחיל בבוקר ונמשך עד עכשיו ברצף. הנושא הוא She, לכן נשתמש ב-has.",
        solution: `<strong>הסבר מלא (מילות רמז להווה מושלם ממושך):</strong><br>
        ביטויים כמו <span dir="ltr"><strong>All day, All night, All morning</strong></span> הם רמזים חזקים מאוד ל-Present Perfect Progressive, כי הם זועקים <strong>"המשכיות"</strong> מהעבר אל ההווה.<br><br>
        היא עייפה עכשיו בהווה, בגלל תהליך ארוך שנמשך כל היום.<br>
        הנושא הוא <span dir="ltr">She</span> &rarr; <span dir="ltr">has</span> &rarr; <span dir="ltr">been</span> &rarr; <span dir="ltr">studying</span>.<br>
        תשובה: <span dir="ltr">She <strong>has been studying</strong></span>.`
    },
    // Question 97
    {
        topic: "english",
        subTopic: "Present Perfect Progressive",
        question_text: `<strong>Negative Form:</strong><br>
        איך נאמר "הוא לא הרגיש טוב לאחרונה"?<br>
        <span dir="ltr" style="font-size: 1.3em; font-weight: bold; color: #1e40af;">He ________ well lately.</span>`,
        options: [
            "<span dir=\"ltr\">hasn't been feeling</span>",
            "<span dir=\"ltr\">hasn't feeling</span>",
            "<span dir=\"ltr\">doesn't been feeling</span>",
            "<span dir=\"ltr\">haven't been feeling</span>"
        ],
        correctAnswer: 0,
        hint: "השלילה תמיד מתלבשת על פועל העזר הראשון (has). אז מוסיפים לו not, ואת השאר משאירים כרגיל.",
        solution: `<strong>הסבר מלא (שלילה ב-Present Perfect Progressive):</strong><br>
        כדי ליצור שלילה, אנו מוסיפים <span dir="ltr"><strong>not</strong></span> ל-have או has, והופכים אותם ל-<span dir="ltr">haven't / hasn't</span>. <br>
        המילה <span dir="ltr">been</span> והפועל עם ה-<span dir="ltr">ing</span> נשארים ללא שינוי במקומם!<br><br>
        הנושא: <span dir="ltr">He</span>.<br>
        פועל העזר לשלילה: <span dir="ltr">hasn't</span>.<br>
        המשפט התקין: <span dir="ltr">He <strong>hasn't been feeling</strong> well lately.</span>`
    },
    // Question 98
    {
        topic: "english",
        subTopic: "Present Perfect Progressive",
        question_text: `<strong>Since and For with Progressive:</strong><br>
        השלימו את המשפט:<br>
        <span dir="ltr" style="font-size: 1.3em; font-weight: bold; color: #1e40af;">We have been driving ________ three hours. Let's take a break.</span>`,
        options: [
            "<span dir=\"ltr\">for</span>",
            "<span dir=\"ltr\">since</span>",
            "<span dir=\"ltr\">in</span>",
            "<span dir=\"ltr\">from</span>"
        ],
        correctAnswer: 0,
        hint: "'שלוש שעות' זו כמות זמן שספרנו (משך). עבור כמות זמן, משתמשים תמיד ב-For.",
        solution: `<strong>הסבר מלא (For לעומת Since):</strong><br>
        בדיוק כמו בהווה מושלם פשוט, גם בגרסה הממושכת אנו משתמשים רבות ב-Since ו-For.<br><br>
        - <span dir="ltr"><strong>For:</strong></span> מודד כמות זמן / אורך זמן (3 שעות, שנתיים, 5 ימים).<br>
        - <span dir="ltr"><strong>Since:</strong></span> מודד נקודת התחלה מדוייקת בשעון או בלוח השנה (מאז שעה 3:00, מאז יום שני).<br><br>
        כיוון ש-"three hours" היא כמות זמן, התשובה היא <span dir="ltr"><strong>for</strong></span>.`
    },
    // Question 99
    {
        topic: "english",
        subTopic: "Present Perfect Progressive",
        question_text: `<strong>Subject 'It' with Weather:</strong><br>
        איך נתאר בצורה הנכונה מצב שבו השלג יורד ברציפות מאז הבוקר ועד עכשיו?<br>
        <span dir="ltr" style="font-size: 1.3em; font-weight: bold; color: #1e40af;">It ________ since this morning.</span>`,
        options: [
            "<span dir=\"ltr\">has been snowing</span>",
            "<span dir=\"ltr\">is snowing</span>",
            "<span dir=\"ltr\">have been snowing</span>",
            "<span dir=\"ltr\">snowed</span>"
        ],
        correctAnswer: 0,
        hint: "מכיוון שזה התחיל בעבר (הבוקר) וממשיך עד עכשיו (since), זה חייב להיות Present Perfect Progressive. מזג אוויר מקבל It.",
        solution: `<strong>הסבר מלא (תיאורי מזג אוויר מתמשכים):</strong><br>
        אם נגיד <span dir="ltr">"It is snowing"</span> (הווה ממושך), זה אומר ששלג יורד בדיוק עכשיו, אבל לא אומר לנו כלום על כמה זמן זה כבר קורה.<br><br>
        ברגע שהוספנו את המילה <span dir="ltr"><strong>since this morning</strong></span> (מאז הבוקר), מתחנו קו מהעבר אל ההווה. לכן חובה להשתמש ב-Present Perfect Progressive.<br>
        הנושא <span dir="ltr">It</span> מקבל <span dir="ltr">has</span>.<br>
        המשפט הנכון: <span dir="ltr">It <strong>has been snowing</strong> since this morning.</span>`
    },
    // Question 100
    {
        topic: "english",
        subTopic: "Present Perfect Progressive",
        question_text: `<strong>Answering a Progressive Question:</strong><br>
        כיצד תענו נכונה על השאלה: <span dir="ltr">"Have they been practicing?"</span>`,
        options: [
            "<span dir=\"ltr\">Yes, they have.</span>",
            "<span dir=\"ltr\">Yes, they have been.</span>",
            "<span dir=\"ltr\">Yes, they are.</span>",
            "<span dir=\"ltr\">Yes, they did.</span>"
        ],
        correctAnswer: 0,
        hint: "חוק 'ההד' בתשובות קצרות: השאלה התחילה במילה Have? התשובה הקצרה תסתיים במילה Have (ולא מוסיפים את ה-been).",
        solution: `<strong>הסבר מלא (תשובות קצרות):</strong><br>
        בתשובות קצרות באנגלית (Short Answers), אנו משתמשים אך ורק ב<strong>פועל העזר הראשון</strong> שפתח את השאלה.<br><br>
        - שאלה: <span dir="ltr"><strong>Have</strong> they been practicing?</span><br>
        - תשובה חיובית: <span dir="ltr">Yes, they <strong>have</strong>.</span><br>
        - תשובה שלילית: <span dir="ltr">No, they <strong>haven't</strong>.</span><br><br>
        אין צורך, ואף שגוי, להוסיף את המילה been בתשובה הקצרה.`
    },
    // Question 101
    {
        topic: "english",
        subTopic: "Present Perfect Progressive",
        question_text: `<strong>Spelling Rule (Double Consonant):</strong><br>
        השלימו את המשפט עם איות נכון של הפועל run:<br>
        <span dir="ltr" style="font-size: 1.3em; font-weight: bold; color: #1e40af;">He is out of breath because he has been ________.</span>`,
        options: [
            "<span dir=\"ltr\">running</span>",
            "<span dir=\"ltr\">runing</span>",
            "<span dir=\"ltr\">raning</span>",
            "<span dir=\"ltr\">run</span>"
        ],
        correctAnswer: 0,
        hint: "גם כאן תקף חוק הכריך (CVC). לפני שמוסיפים ing לפועל קצר כמו run, מכפילים את ה-n.",
        solution: `<strong>הסבר מלא (כללי איות של ING):</strong><br>
        החדשות הטובות הן שכללי האיות של ה-ing בהווה מושלם ממושך, <strong>זהים לחלוטין</strong> לאלו שלמדנו בהווה ממושך רגיל!<br><br>
        המילה <span dir="ltr">run</span> קצרה ומסתיימת בעיצור-תנועה-עיצור.<br>
        לכן מכפילים את ה-n &rarr; <span dir="ltr"><strong>running</strong></span>.<br>
        (אם היינו מקבלים פועל כמו make, היינו מורידים את ה-e וכותבים making).`
    },
    // Question 102
    {
        topic: "english",
        subTopic: "Present Perfect Progressive",
        question_text: `<strong>Progressive vs. Simple (How much vs How long):</strong><br>
        איזה מהמשפטים הבאים חייב להיות בזמן <strong>הווה מושלם פשוט</strong> (ולא ממושך), כי הוא מציין כמות/הישג?`,
        options: [
            "<span dir=\"ltr\">I have drunk three cups of coffee today.</span>",
            "<span dir=\"ltr\">I have been drinking coffee all morning.</span>",
            "<span dir=\"ltr\">He has been reading the book for hours.</span>",
            "<span dir=\"ltr\">They have been playing football since 10 AM.</span>"
        ],
        correctAnswer: 0,
        hint: "ברגע שאנחנו סופרים הישגים או כמויות (למשל: שתיתי 3 כוסות, קראתי 50 עמודים, כתבתי 5 מכתבים), אנחנו מתמקדים ב'תוצאה' ולא בתהליך. תוצאות נמדדות בהווה מושלם *פשוט*.",
        solution: `<strong>הסבר מלא (כמות לעומת משך זמן):</strong><br>
        זהו חוק הבדלה מצוין:<br><br>
        - כשאנחנו שואלים או מתארים <strong>כמה זמן</strong> (How long) לקח התהליך, נשתמש בממושך: <span dir="ltr">I <strong>have been reading</strong> for hours</span>.<br>
        - כשאנחנו מונים <strong>כמה (How much/How many)</strong> דברים השגנו, הפעולה לאותו פריט הסתיימה! אי אפשר להגיד "אני בתהליך של לשתות 3 כוסות קפה". כוס אחת נשתתה, השנייה נשתתה. זהו הישג.<br>
        לכן, הישגים וכמויות (3 כוסות) דורשים הווה מושלם פשוט: <span dir="ltr">I <strong>have drunk</strong> 3 cups</span>.`
    },
    // Question 103
    {
        topic: "english",
        subTopic: "Present Perfect Progressive",
        question_text: `<strong>Who Question (שאלת נושא):</strong><br>
        אתם רואים פירורים במטבח ושואלים בכעס: "מי אכל מהעוגה שלי?!" (ונראה שהוא התעסק בזה לאחרונה).<br>
        איזו שאלה בנויה נכון?`,
        options: [
            "<span dir=\"ltr\">Who has been eating my cake?</span>",
            "<span dir=\"ltr\">Who have been eating my cake?</span>",
            "<span dir=\"ltr\">Who has eating my cake?</span>",
            "<span dir=\"ltr\">Who have eating my cake?</span>"
        ],
        correctAnswer: 0,
        hint: "כמו תמיד, המילה Who נחשבת כיחיד. יחיד מקבל Has. ואל תשכחו את ה-been לפני הפועל.",
        solution: `<strong>הסבר מלא (שאלות Who):</strong><br>
        המילה <span dir="ltr"><strong>Who</strong></span> מתפקדת כגוף שלישי יחיד (He/She).<br>
        לכן היא דורשת את פועל העזר <span dir="ltr"><strong>has</strong></span>.<br>
        הנוסחה לשאלת נושא ממושכת: <span dir="ltr"><strong>Who + has + been + V-ing</strong></span>.<br><br>
        השאלה הנכונה: <span dir="ltr">Who <strong>has been eating</strong> my cake?</span>`
    },
    // Question 104
    {
        topic: "english",
        subTopic: "Present Perfect Progressive",
        question_text: `<strong>Recently / Lately (לאחרונה):</strong><br>
        השלימו את המשפט בעזרת מילת הזמן המתאימה לתהליך של התקופה האחרונה:<br>
        <span dir="ltr" style="font-size: 1.3em; font-weight: bold; color: #1e40af;">My car has been making weird noises ________.</span>`,
        options: [
            "<span dir=\"ltr\">lately</span>",
            "<span dir=\"ltr\">yesterday</span>",
            "<span dir=\"ltr\">tomorrow</span>",
            "<span dir=\"ltr\">usually</span>"
        ],
        correctAnswer: 0,
        hint: "מכיוון שהזמן הוא הווה מושלם ממושך (has been making), אנו צריכים מילה שמתארת את 'התקופה האחרונה'.",
        solution: `<strong>הסבר מלא:</strong><br>
        המילה <span dir="ltr"><strong>lately</strong></span> (או <strong>recently</strong>) מתורגמת כ"לאחרונה".<br>
        זוהי מילת הרמז הקלאסית ביותר לזמני המושלם (Perfect), מכיוון שהיא לוקחת פרק זמן שהתחיל קצת בעבר, ונמתח ממש עד להווה (התקופה האחרונה).<br><br>
        המשפט מתאר: "הרכב שלי עושה רעשים מוזרים לאחרונה" (כלומר, הבעיה התחילה לפני כמה ימים ועדיין קורית היום).`
    },
    // Question 105
    {
        topic: "english",
        subTopic: "Present Perfect Progressive",
        question_text: `<strong>Contextual Understanding (הבנת הקשר):</strong><br>
        דן אומר: <span dir="ltr">"I have been working at this company for 5 years."</span><br>
        מה אנחנו יודעים בוודאות על דן כעת?`,
        options: [
            "<span dir=\"ltr\">שהוא עדיין עובד בחברה הזו גם היום.</span>",
            "<span dir=\"ltr\">שהוא התפטר לפני 5 שנים.</span>",
            "<span dir=\"ltr\">שהוא התחיל לעבוד שם היום ויסיים בעוד 5 שנים.</span>",
            "<span dir=\"ltr\">שהוא פוטר אתמול.</span>"
        ],
        correctAnswer: 0,
        hint: "זמן Present Perfect Progressive מתאר פעולה שעדיין נמצאת בתהליך בהווה. היא לא נקטעה.",
        solution: `<strong>הסבר מלא (משמעות ההמשכיות):</strong><br>
        הכוח של הזמן הזה הוא ביכולת שלו לתאר <strong>המשכיות רציפה</strong>.<br>
        כאשר דן משתמש ב-<span dir="ltr">have been working</span>, הוא אומר למעשה: "התחלתי לפני 5 שנים, עבדתי שם ברצף מאז, <strong>ואני עובד שם בדיוק גם ברגע זה.</strong>"<br><br>
        אם הוא היה אומר <span dir="ltr">"I worked here for 5 years"</span> (בעבר פשוט), זה היה אומר שהעבודה הסתיימה והוא כבר לא עובד שם היום.`
    },


    // ---------------------------------------------------------
    // Subtopic 8: Past Perfect Simple (עבר מושלם) (שאלות 106-120)
    // ---------------------------------------------------------

    // Question 106
    {
        topic: "english",
        subTopic: "Past Perfect Simple (עבר מושלם)",
        question_text: `<strong>The Concept of "Past of the Past" (העבר של העבר):</strong><br>
        מתי אנו משתמשים בזמן <strong>Past Perfect Simple</strong>?`,
        options: [
            "<span dir=\"ltr\">כאשר אנו רוצים לתאר פעולה שהתרחשה והסתיימה *לפני* פעולה אחרת בעבר. (הפעולה הישנה יותר מקבלת את העבר המושלם).</span>",
            "<span dir=\"ltr\">כאשר אנו רוצים לתאר משהו שיקרה בעתיד הרחוק מאוד.</span>",
            "<span dir=\"ltr\">כאשר שתי פעולות מתרחשות במקביל באותו הרגע בדיוק.</span>",
            "<span dir=\"ltr\">כאשר אנו מתארים הרגל קבוע בילדות.</span>"
        ],
        correctAnswer: 0,
        hint: "זהו זמן 'ההתנגשות הכרונולוגית'. אם שתי פעולות קרו אתמול, אבל אחת קדמה לשנייה, אנחנו משתמשים בזמן הזה כדי לסמן לקורא 'מי הייתה ראשונה'.",
        solution: `<strong>הסבר מלא (המהות של עבר מושלם):</strong><br>
        כדי להבין את ה-Past Perfect, דמיינו ציר זמן של עבר.<br>
        קרו שני דברים אתמול:<br>
        1. בשעה 18:00 - הרכבת עזבה את התחנה.<br>
        2. בשעה 18:15 - אני הגעתי לתחנה.<br><br>
        כדי לתאר את הרצף הזה באנגלית מבלי להתבלבל, הפעולה הקרובה יותר (הגעתי) נכתבת ב<strong>עבר פשוט</strong> (I arrived).<br>
        אבל הפעולה שקרתה <strong>לפני כן</strong> (הרכבת עזבה) מקבלת את ה<strong>עבר המושלם</strong> (The train had left).<br>
        כך אנו מסמנים לקורא מהו "העבר של העבר".`
    },
    // Question 107
    {
        topic: "english",
        subTopic: "Past Perfect Simple (עבר מושלם)",
        question_text: `<strong>Basic Form (The Formula):</strong><br>
        השלימו את המשפט בעזרת הנוסחה הנכונה לזמן זה:<br>
        <span dir="ltr" style="font-size: 1.3em; font-weight: bold; color: #1e40af;">When I arrived at the cinema, the movie ________ already ________.</span>`,
        options: [
            "<span dir=\"ltr\">had / started</span>",
            "<span dir=\"ltr\">have / started</span>",
            "<span dir=\"ltr\">was / starting</span>",
            "<span dir=\"ltr\">did / start</span>"
        ],
        correctAnswer: 0,
        hint: "הנוסחה ל-Past Perfect פשוטה מאוד לכל הגופים: המילה had + פועל בטור השלישי (V3).",
        solution: `<strong>הסבר מלא (מבנה העבר המושלם):</strong><br>
        הזמן הזה נבנה בעזרת הנוסחה:<br>
        <span dir="ltr">Subject + <strong>had</strong> + <strong>V3</strong> (Past Participle)</span>.<br><br>
        היופי בזמן הזה הוא שאין הבדל בין הגופים! כולם (I, He, She, They, We) מקבלים תמיד <span dir="ltr"><strong>had</strong></span>.<br>
        הפועל start ב-V3 הוא started.<br>
        לכן: <span dir="ltr">the movie <strong>had</strong> already <strong>started</strong></span>. (הסרט כבר התחיל - פעולה שקרתה *לפני* שהגעתי לקולנוע).`
    },
    // Question 108
    {
        topic: "english",
        subTopic: "Past Perfect Simple (עבר מושלם)",
        question_text: `<strong>'By the time' (עד ש...):</strong><br>
        ביטוי הזמן המפורסם ביותר לבגרויות בזמן זה הוא 'By the time'. השלימו את המשפט:<br>
        <span dir="ltr" style="font-size: 1.3em; font-weight: bold; color: #1e40af;">By the time the police arrived, the thief ________.</span>`,
        options: [
            "<span dir=\"ltr\">had escaped</span>",
            "<span dir=\"ltr\">has escaped</span>",
            "<span dir=\"ltr\">was escaping</span>",
            "<span dir=\"ltr\">escapes</span>"
        ],
        correctAnswer: 0,
        hint: "עד שהמשטרה הגיעה (עבר פשוט), הגנב כבר ברח. איזו פעולה קרתה ראשונה? הבריחה! לכן היא מקבלת had + V3.",
        solution: `<strong>הסבר מלא (חוק By the time):</strong><br>
        הביטוי <span dir="ltr"><strong>By the time</strong></span> פירושו "עד ש... / בזמן ש...".<br>
        כשהוא מופיע במשפט, הוא מפעיל <strong>"כלל נדנדה"</strong> בין שני משפטים:<br>
        1. החצי של By the time יקבל <strong>עבר פשוט</strong>: <span dir="ltr">By the time the police <strong>arrived</strong></span>.<br>
        2. החצי השני, שמתאר את מה שכבר קרה לפני כן, יקבל <strong>עבר מושלם</strong>: <span dir="ltr">the thief <strong>had escaped</strong></span>.<br>
        המילה had (במקום has של הווה) מציינת שכל הסיפור מתרחש עמוק בעבר.`
    },
    // Question 109
    {
        topic: "english",
        subTopic: "Past Perfect Simple (עבר מושלם)",
        question_text: `<strong>After vs Before (אחרי ולפני):</strong><br>
        קראו את המשפט הבא: <span dir="ltr">"<u>After</u> she had finished her homework, she went to play."</span><br>
        אם נרצה להפוך את המשפט ולהשתמש במילה <span dir="ltr"><strong>Before</strong></span>, איך הוא ייכתב נכון?`,
        options: [
            "<span dir=\"ltr\">Before she went to play, she had finished her homework.</span>",
            "<span dir=\"ltr\">Before she had gone to play, she finished her homework.</span>",
            "<span dir=\"ltr\">Before she finished her homework, she had gone to play.</span>",
            "<span dir=\"ltr\">She had played before she went to finish her homework.</span>"
        ],
        correctAnswer: 0,
        hint: "הכלל: המילה After נדבקת לפעולה הראשונה שקרתה (had+V3). המילה Before נדבקת לפעולה השנייה שקרתה (V2).",
        solution: `<strong>הסבר מלא (After ו-Before בעבר מושלם):</strong><br>
        שתי הפעולות הן: (1) סיימה שיעורים (קרה קודם &rarr; <span dir="ltr">had finished</span>). (2) הלכה לשחק (קרה אחר כך &rarr; <span dir="ltr">went</span>).<br><br>
        <strong>חוק המגנט:</strong><br>
        - המילה <span dir="ltr"><strong>After</strong></span> (אחרי) "ממגנטת" אליה את הפעולה הישנה יותר (Past Perfect). <br>
        "אחרי שהיא <strong>סיימה (had finished)</strong>, היא הלכה לשחק".<br><br>
        - המילה <span dir="ltr"><strong>Before</strong></span> (לפני) "ממגנטת" אליה את הפעולה המאוחרת יותר (Past Simple).<br>
        "לפני שהיא <strong>הלכה לשחק (went)</strong>, היא סיימה את השיעורים (had finished)".<br>
        לכן התשובה הראשונה היא ההגיונית והתקינה תחבירית.`
    },
    // Question 110
    {
        topic: "english",
        subTopic: "Past Perfect Simple (עבר מושלם)",
        question_text: `<strong>Negative Form (השלילה):</strong><br>
        השלימו את המשפט הבא בשלילה:<br>
        <span dir="ltr" style="font-size: 1.3em; font-weight: bold; color: #1e40af;">He was hungry because he ________ anything all day.</span>`,
        options: [
            "<span dir=\"ltr\">hadn't eaten</span>",
            "<span dir=\"ltr\">hasn't eaten</span>",
            "<span dir=\"ltr\">didn't ate</span>",
            "<span dir=\"ltr\">didn't eaten</span>"
        ],
        correctAnswer: 0,
        hint: "הוא היה רעב (was - עבר פשוט). למה? כי *לפני כן* הוא לא אכל כלום. נשלול את ה-Past Perfect על ידי חיבור של had ו-not.",
        solution: `<strong>הסבר מלא (שלילה ב-Past Perfect):</strong><br>
        כדי ליצור שלילה, הפועל <span dir="ltr">had</span> מחבק אליו את המילה <span dir="ltr">not</span> והופך ל-<span dir="ltr"><strong>hadn't</strong></span>.<br>
        הפועל הראשי נשאר בטור השלישי (V3).<br><br>
        הקשר המשפט: הוא היה רעב בעבר (<span dir="ltr">was hungry</span>), בגלל שפעולה מסוימת <strong>לא קרתה לפני כן</strong>. לכן نשתמש בעבר מושלם: <span dir="ltr">He <strong>hadn't eaten</strong></span> (הוא לא אכל).<br>
        *לא נבחר ב-hasn't כי hasn't זה הווה, וכל הסיפור פה התרחש בעבר.*`
    },
    // Question 111
    {
        topic: "english",
        subTopic: "Past Perfect Simple (עבר מושלם)",
        question_text: `<strong>Questions (שאלות בעבר מושלם):</strong><br>
        כיצד תשאלו את השאלה: "האם אי פעם ראית שלג לפני שטסת לשוויץ?"`,
        options: [
            "<span dir=\"ltr\">Had you ever seen snow before you flew to Switzerland?</span>",
            "<span dir=\"ltr\">Did you ever see snow before you flew to Switzerland?</span>",
            "<span dir=\"ltr\">Have you ever seen snow before you flew to Switzerland?</span>",
            "<span dir=\"ltr\">Had you ever saw snow before you flew to Switzerland?</span>"
        ],
        correctAnswer: 0,
        hint: "כמו בכל שאלות Perfect, פועל העזר קופץ להתחלה. כאן זה Had. והפועל 'לראות' צריך להיות ב-V3 (seen).",
        solution: `<strong>הסבר מלא (מבנה שאלות Had):</strong><br>
        לבניית שאלה בעבר מושלם, פועל העזר <span dir="ltr"><strong>Had</strong></span> קופץ לראש המשפט, והפועל המרכזי נשאר ב-V3.<br><br>
        - שאלה בהווה מושלם: <span dir="ltr"><strong>Have</strong> you ever <strong>seen</strong>...?</span> (האם עד היום בחייך ראית?).<br>
        - שאלה בעבר מושלם: <span dir="ltr"><strong>Had</strong> you ever <strong>seen</strong>...?</span> (האם באותה נקודה בעבר, למשל לפני הטיסה, יצא לך לראות?).<br><br>
        צורת ה-V3 של see היא <span dir="ltr"><strong>seen</strong></span> (ולא saw שהוא V2). לכן המשפט הראשון מדויק.`
    },
    // Question 112
    {
        topic: "english",
        subTopic: "Past Perfect Simple (עבר מושלם)",
        question_text: `<strong>The Double "Had" (had had):</strong><br>
        איזה מהמשפטים הבאים תקין לחלוטין באנגלית למרות שהוא נראה מוזר לעין?`,
        options: [
            "<span dir=\"ltr\">I was full because I had had a big lunch.</span>",
            "<span dir=\"ltr\">I was full because I had have a big lunch.</span>",
            "<span dir=\"ltr\">I was full because I have had a big lunch.</span>",
            "<span dir=\"ltr\">I was full because I did had a big lunch.</span>"
        ],
        correctAnswer: 0,
        hint: "בנוסחת העבר המושלם, מילת העזר היא Had. בנוסף, מילת הפועל (לאכול/יש) היא Have, שה-V3 שלה הוא גם... had. לכן נוצרת כפילות חוקית.",
        solution: `<strong>הסבר מלא (כפילות ה-had had):</strong><br>
        זוהי אחת ה"זרויות" האהובות על מורים לאנגלית בבחינות.<br>
        משפט כמו <span dir="ltr">"I <strong>had had</strong> a big lunch"</span> הוא 100% תקין דקדוקית!<br><br>
        <strong>איך זה קורה?</strong><br>
        1. ה-<strong>had</strong> הראשון הוא רק "פועל עזר" קבוע בנוסחה (כמו החצי הראשון של have done).<br>
        2. ה-<strong>had</strong> השני הוא <u>הפועל הראשי</u> בטור השלישי (V3). הפועל המקורי הוא "have lunch" (לאכול צהריים). צורת ה-V3 של have היא <strong>had</strong>.<br>
        לכן: הייתי מלא (עבר פשוט), כי <u>לפני כן</u> אכלתי צהריים &rarr; <span dir="ltr">I <strong>had had</strong></span>.`
    },
    // Question 113
    {
        topic: "english",
        subTopic: "Past Perfect Simple (עבר מושלם)",
        question_text: `<strong>Because / Cause and Effect (סיבה ותוצאה בעבר):</strong><br>
        השלימו את המשפט המראה סיבה שקדמה לתוצאה:<br>
        <span dir="ltr" style="font-size: 1.3em; font-weight: bold; color: #1e40af;">She couldn't open the door because she ________ her keys.</span>`,
        options: [
            "<span dir=\"ltr\">had lost</span>",
            "<span dir=\"ltr\">has lost</span>",
            "<span dir=\"ltr\">was losing</span>",
            "<span dir=\"ltr\">lost</span>"
        ],
        correctAnswer: 0,
        hint: "היא לא יכלה לפתוח (couldn't = עבר). למה היא לא יכלה אתמול לפתוח? כי פעולה אחרת קרתה *לפני כן* (איבדה את המפתחות).",
        solution: `<strong>הסבר מלא (המילה Because בעבר):</strong><br>
        כאשר אנו מתארים תוצאה בעבר, הסיבה שגרמה לה בהכרח קרתה לפניה.<br>
        - התוצאה: <span dir="ltr">She couldn't open</span> (אתמול היא לא הצליחה לפתוח).<br>
        - הסיבה שקרתה עוד קודם: איבוד המפתחות.<br><br>
        כל פעולה שקרתה <strong>לפני עבר אחר</strong> חייבת להיות מנוסחת ב-Past Perfect. לכן נבחר ב-<span dir="ltr"><strong>had lost</strong></span>.<br>
        *(אם המשפט היה "היא לא יכולה לפתוח עכשיו", היינו משתמשים בהווה מושלם: has lost).*`
    },
    // Question 114
    {
        topic: "english",
        subTopic: "Past Perfect Simple (עבר מושלם)",
        question_text: `<strong>Reported Speech connection (דיבור עקיף):</strong><br>
        במעבר מדיבור ישיר לדיבור עקיף בבגרות, אם מישהו אמר אתמול "I <u>bought</u> a car" (עבר פשוט), איך נדווח על כך (He said that he...)?`,
        options: [
            "<span dir=\"ltr\">He said that he had bought a car.</span>",
            "<span dir=\"ltr\">He said that he bought a car.</span>",
            "<span dir=\"ltr\">He said that he has bought a car.</span>",
            "<span dir=\"ltr\">He said that he was buying a car.</span>"
        ],
        correctAnswer: 0,
        hint: "בדיבור עקיף (Reported Speech), הכלל הוא 'ללכת צעד אחד אחורה בזמן'. מהו העבר של העבר הפשוט?",
        solution: `<strong>הסבר מלא (תפקיד ה-Past Perfect בדיבור עקיף):</strong><br>
        עבר מושלם הוא כלי קריטי בפרק הדיבור העקיף (Reported Speech).<br>
        החוק בדיבור עקיף הוא לקחת את המשפט המקורי ולהזיז אותו <strong>זמן אחד אחורה לעבר</strong> (One step back in time).<br><br>
        אם המשפט המקורי היה בעבר פשוט (<span dir="ltr">bought</span>), לאן אפשר ללכת אחורה מהעבר? אל "העבר של העבר"!<br>
        הזמן שלוקח אותנו לעבר של העבר הוא ה-<strong>Past Perfect</strong>.<br>
        לכן, <span dir="ltr">bought</span> הופך ל-<span dir="ltr"><strong>had bought</strong></span>.`
    },
    // Question 115
    {
        topic: "english",
        subTopic: "Past Perfect Simple (עבר מושלם)",
        question_text: `<strong>Already / Just in the Past (כבר / בדיוק הרגע):</strong><br>
        השלימו את המשפט בעזרת מיקום המילה "already" (כבר):<br>
        <span dir="ltr" style="font-size: 1.3em; font-weight: bold; color: #1e40af;">When we got to the station, the train ________.</span>`,
        options: [
            "<span dir=\"ltr\">had already left</span>",
            "<span dir=\"ltr\">already had left</span>",
            "<span dir=\"ltr\">had left already</span>",
            "<span dir=\"ltr\">has already left</span>"
        ],
        correctAnswer: 0,
        hint: "מילות התדירות והזמן (just, already, never) אוהבות להיות 'סנדוויץ''. הן נכנסות באמצע בין פועל העזר (had) לבין הפועל הראשי (left).",
        solution: `<strong>הסבר מלא (מיקום מילות רמז ב-Perfect):</strong><br>
        בדיוק כמו בהווה מושלם, מילים כמו <span dir="ltr"><strong>already</strong></span> (כבר) או <span dir="ltr"><strong>just</strong></span> (בדיוק הרגע) חייבות להיכנס באמצע התבנית, כחלק מסנדוויץ'.<br><br>
        <strong>הנוסחה:</strong> <span dir="ltr">Subject + <strong>had</strong> + <strong>already</strong> + <strong>V3</strong></span>.<br>
        לכן המשפט התקין הוא: <span dir="ltr">The train <strong>had already left</strong></span>. (הרכבת כבר עזבה - לפני שהגענו).`
    },
    // Question 116
    {
        topic: "english",
        subTopic: "Past Perfect Simple (עבר מושלם)",
        question_text: `<strong>Irregular Verbs (Fly -> Flown):</strong><br>
        השלימו את המשפט עם הטור השלישי (V3) של הפועל <strong>fly</strong> (לטוס):<br>
        <span dir="ltr" style="font-size: 1.3em; font-weight: bold; color: #1e40af;">He was nervous because he had never ________ in an airplane before.</span>`,
        options: [
            "<span dir=\"ltr\">flown</span>",
            "<span dir=\"ltr\">flew</span>",
            "<span dir=\"ltr\">flyed</span>",
            "<span dir=\"ltr\">flying</span>"
        ],
        correctAnswer: 0,
        hint: "כפי שלמדנו, flew זה הטור השני (עבר פשוט). הטור השלישי (V3) שמשמש לזמני Perfect הוא flown.",
        solution: `<strong>הסבר מלא (שליטה ב-V3):</strong><br>
        ההצלחה ב-Past Perfect תלויה בידיעת הטור השלישי של הפעלים החריגים.<br>
        צורות הפועל "לטוס / לעוף" (Fly):<br>
        - V1 (הווה): <strong>fly</strong><br>
        - V2 (עבר פשוט): <strong>flew</strong><br>
        - V3 (פרפקט / סביל): <strong>flown</strong><br><br>
        מכיוון שיש לנו כאן את המילה <span dir="ltr">had</span>, חייבים לשים אחריה V3. התשובה היא <span dir="ltr"><strong>flown</strong></span>.`
    },
    // Question 117
    {
        topic: "english",
        subTopic: "Past Perfect Simple (עבר מושלם)",
        question_text: `<strong>Third Conditional Connection (תנאי שלישי):</strong><br>
        במשפטי תנאי מתקדמים (Third Conditional) שמביעים חרטה על העבר, אנו משתמשים בזמן Past Perfect. השלימו את המשפט:<br>
        <span dir="ltr" style="font-size: 1.2em; color: #1e40af;">If I ________ hard, I would have passed the test. (But I didn't).</span>`,
        options: [
            "<span dir=\"ltr\">had studied</span>",
            "<span dir=\"ltr\">studied</span>",
            "<span dir=\"ltr\">have studied</span>",
            "<span dir=\"ltr\">study</span>"
        ],
        correctAnswer: 0,
        hint: "חוק תנאי שלישי: חלק ה-If מקבל Past Perfect (had + V3), וחלק התוצאה מקבל would have + V3.",
        solution: `<strong>הסבר מלא (Conditionals - Third Conditional):</strong><br>
        השימוש הגבוה ביותר בעבר מושלם בבגרות הוא ב<strong>תנאי שלישי</strong> - משפט המתאר חרטה או מצב היפותטי בעבר שלא קרה ולעולם לא יקרה.<br><br>
        <strong>הנוסחה:</strong><br>
        <span dir="ltr">If + Subject + <strong>Past Perfect (had + V3)</strong>, Subject + <strong>would have + V3</strong></span>.<br>
        לכן, חלק התנאי ייראה כך: <span dir="ltr">If I <strong>had studied</strong></span> (אילו רק הייתי לומד...).`
    },
    // Question 118
    {
        topic: "english",
        subTopic: "Past Perfect Simple (עבר מושלם)",
        question_text: `<strong>By + Time in the Past (עד נקודה בעבר):</strong><br>
        איזה מהמשפטים הבאים מתאר פעולה שהושלמה <u>לפני תאריך מסוים</u> בעבר?`,
        options: [
            "<span dir=\"ltr\">By 2020, he had built his own company.</span>",
            "<span dir=\"ltr\">By 2020, he built his own company.</span>",
            "<span dir=\"ltr\">In 2020, he had built his own company.</span>",
            "<span dir=\"ltr\">He has built his company by 2020.</span>"
        ],
        correctAnswer: 0,
        hint: "המילה 'By' (עד...) לפני תאריך בעבר, מחייבת שימוש בעבר מושלם (had + V3). כי היא אומרת שעד שהגיעה השנה הזו - הפעולה כבר הייתה גמורה לחלוטין.",
        solution: `<strong>הסבר מלא (המילה By והעבר המושלם):</strong><br>
        המילה <span dir="ltr"><strong>By</strong></span> (שמשמעותה 'עד לאותו הזמן') היא רמז חזק מאוד.<br>
        - אם נאמר <span dir="ltr">"<strong>In</strong> 2020"</span> (בשנת 2020), הפעולה קורית בתוך השנה. זהו עבר פשוט (built).<br>
        - אם נאמר <span dir="ltr">"<strong>By</strong> 2020"</span> (עד שנת 2020), המשמעות היא שהפעולה <strong>הסתיימה עוד לפני כן</strong>. זה מצב קלאסי של "עבר של העבר". הפעולה הושלמה לפני נקודת הציון בעבר, ולכן חובה להשתמש ב-Past Perfect: <span dir="ltr"><strong>had built</strong></span>.`
    },
    // Question 119
    {
        topic: "english",
        subTopic: "Past Perfect Simple (עבר מושלם)",
        question_text: `<strong>Sentence Correction (זיהוי טעויות תחביר):</strong><br>
        מהי השגיאה במשפט: <span dir="ltr">"She didn't ate because she had already eaten."</span>`,
        options: [
            "<span dir=\"ltr\">בחצי הראשון (עבר פשוט) כתוב didn't ate במקום didn't eat. (שגיאה של חוק הגנב).</span>",
            "<span dir=\"ltr\">בחצי השני (עבר מושלם) המילה eaten שגויה.</span>",
            "<span dir=\"ltr\">אסור להשתמש ב-already בעבר.</span>",
            "<span dir=\"ltr\">המשפט תקין לחלוטין.</span>"
        ],
        correctAnswer: 0,
        hint: "החצי של ה-Past Perfect (had already eaten) תקין לחלוטין. הטעות מסתתרת בחצי הראשון של העבר הפשוט.",
        solution: `<strong>הסבר מלא (חזרה ובדיקת טעויות):</strong><br>
        המשפט בנוי מסיבה ותוצאה (עם Because). הזמנים בו נבחרו נכון: הסיבה קרתה קודם ולכן היא עבר מושלם (<span dir="ltr">had eaten</span>), והתוצאה אחר כך ולכן היא עבר פשוט (<span dir="ltr">didn't...</span>).<br><br>
        השגיאה היא <strong>תחבירית</strong> בחלק של העבר הפשוט: <span dir="ltr">"didn't <strong>ate</strong>"</span>. <br>
        כזכור, המילה <span dir="ltr">didn't</span> גונבת את העבר, ולכן הפועל אחריה חייב להיות <span dir="ltr"><strong>eat</strong></span> (בצורת המקור, V1).`
    },
    // Question 120
    {
        topic: "english",
        subTopic: "Past Perfect Simple (עבר מושלם)",
        question_text: `<strong>Synthesis - Mixed Past Tenses:</strong><br>
        בחרו את הזוג המדויק להשלמת המשפט הכולל את שני הזמנים:<br>
        <span dir="ltr" style="font-size: 1.2em; font-weight: bold; color: #1e40af;">When we ________ at the theater, we realized that we ________ the tickets at home.</span>`,
        options: [
            "<span dir=\"ltr\">arrived / had left</span>",
            "<span dir=\"ltr\">had arrived / left</span>",
            "<span dir=\"ltr\">arrive / had left</span>",
            "<span dir=\"ltr\">arrived / have left</span>"
        ],
        correctAnswer: 0,
        hint: "מה קרה קודם מבחינה כרונולוגית? להשאיר את הכרטיסים בבית קרה מזמן. להגיע לקולנוע ולהבין - קרה אחר כך.",
        solution: `<strong>הסבר מלא (סיכום העבר המושלם):</strong><br>
        בבגרויות (ובחיים) אנחנו צריכים לנתח את ה<strong>סדר הכרונולוגי</strong> של הפעולות.<br><br>
        1. קודם כל ולפני הכל: הם שכחו את הכרטיסים בבית (זו הפעולה הישנה ביותר). לכן היא תקבל Past Perfect: <span dir="ltr"><strong>had left</strong></span>.<br>
        2. אחר כך: הם הגיעו (arrived) לקולנוע והבינו (realized) את הטעות שלהם. פעולות אלו מאוחרות יותר, ולכן יקבלו Past Simple: <span dir="ltr"><strong>arrived</strong></span>.<br><br>
        הזוג המנצח: <span dir="ltr"><strong>arrived / had left</strong></span>.`
    },


    // ---------------------------------------------------------
    // Subtopic 9: Mixed Tenses Review (חזרה מעורבת) (שאלות 121-135)
    // ---------------------------------------------------------

    // Question 121
    {
        topic: "english",
        subTopic: "Mixed Tenses Review (חזרה מעורבת)",
        question_text: `<strong>Present Simple vs Present Progressive:</strong><br>
        באיזה צמד פעלים תשתמשו כדי להשלים את המשפט הבא?<br>
        <span dir="ltr" style="font-size: 1.2em; font-weight: bold; color: #1e40af;">Quiet please! I ________ for my test. I always ________ better when it's silent.</span>`,
        options: [
            "<span dir=\"ltr\">am studying / study</span>",
            "<span dir=\"ltr\">study / am studying</span>",
            "<span dir=\"ltr\">am studying / am studying</span>",
            "<span dir=\"ltr\">study / study</span>"
        ],
        correctAnswer: 0,
        hint: "חלק ראשון: 'שקט בבקשה!' מראה שהפעולה קורית בדיוק עכשיו. חלק שני: המילה 'always' מראה על מנהג/הרגל קבוע.",
        solution: `<strong>הסבר מלא (מבחן זמני ההווה):</strong><br>
        1. <strong>חלק ראשון:</strong> הביטוי <span dir="ltr">"Quiet please!"</span> מתאר התרחשות חיה באותו רגע. המוח שלנו נמצא ב'כאן ועכשיו', ולכן נשתמש ב-Present Progressive: <span dir="ltr"><strong>am studying</strong></span>.<br>
        2. <strong>חלק שני:</strong> המילה <span dir="ltr">"always"</span> מעידה על הרגל או תכונה קבועה (אני תמיד לומד טוב יותר בשקט). הרגלים דורשים Present Simple: <span dir="ltr"><strong>study</strong></span>.<br>
        התשובה הנכונה: <span dir="ltr"><strong>am studying / study</strong></span>.`
    },
    // Question 122
    {
        topic: "english",
        subTopic: "Mixed Tenses Review (חזרה מעורבת)",
        question_text: `<strong>Past Simple vs Past Progressive:</strong><br>
        השלימו את ההתנגשות הבאה בעבר:<br>
        <span dir="ltr" style="font-size: 1.3em; font-weight: bold; color: #1e40af;">While they ________, it suddenly started to rain.</span>`,
        options: [
            "<span dir=\"ltr\">were playing</span>",
            "<span dir=\"ltr\">played</span>",
            "<span dir=\"ltr\">have played</span>",
            "<span dir=\"ltr\">are playing</span>"
        ],
        correctAnswer: 0,
        hint: "המילה While (בזמן ש...) דורשת מיד אחריה פעולה ארוכה ומתמשכת בזמן עבר (was/were + ing).",
        solution: `<strong>הסבר מלא (מבחן זמני העבר):</strong><br>
        מילת המפתח היא <span dir="ltr"><strong>While</strong></span> (בזמן ש...).<br>
        מילה זו מקדימה <strong>פעולות רקע מתמשכות</strong> בסיפור.<br>
        מכיוון שהחצי השני של המשפט הוא בעבר פשוט (started - התחיל פתאום), החצי הראשון חייב להיות בעבר ממושך (Past Progressive).<br>
        הנושא <span dir="ltr">They</span> לוקח <span dir="ltr">were</span>. התשובה היא <span dir="ltr"><strong>were playing</strong></span>.`
    },
    // Question 123
    {
        topic: "english",
        subTopic: "Mixed Tenses Review (חזרה מעורבת)",
        question_text: `<strong>Present Perfect vs Past Simple:</strong><br>
        איזה מהמשפטים הבאים נכון מבחינה דקדוקית? (שימו לב למילות הזמן!).`,
        options: [
            "<span dir=\"ltr\">I saw that movie last week.</span>",
            "<span dir=\"ltr\">I have seen that movie last week.</span>",
            "<span dir=\"ltr\">I see that movie yesterday.</span>",
            "<span dir=\"ltr\">I have saw that movie.</span>"
        ],
        correctAnswer: 0,
        hint: "ברגע שיש ציון זמן עבר מדוייק וסגור (last week, yesterday), אסור להשתמש ב-have/has (הווה מושלם). חובה להשתמש בעבר פשוט (V2).",
        solution: `<strong>הסבר מלא (ההבדל הדק מכולם):</strong><br>
        זהו האתגר הגדול ביותר ללומדי אנגלית בישראל!<br>
        המילה <span dir="ltr"><strong>last week</strong></span> (בשבוע שעבר) 'נועלת' את הפעולה בעבר. הטיימר נגמר.<br>
        - כאשר הטיימר נגמר, <strong>אסור להשתמש ב-Present Perfect (have/has)</strong>. חובה להשתמש ב-Past Simple (V2).<br>
        ה-V2 של see הוא <span dir="ltr"><strong>saw</strong></span>.<br>
        לכן התשובה הנכונה היא: <span dir="ltr">I <strong>saw</strong> that movie last week</span>.`
    },
    // Question 124
    {
        topic: "english",
        subTopic: "Mixed Tenses Review (חזרה מעורבת)",
        question_text: `<strong>Future Time Clauses (המלכודת של When בעתיד):</strong><br>
        השלימו את המשפט הבא המתייחס למחר:<br>
        <span dir="ltr" style="font-size: 1.3em; font-weight: bold; color: #1e40af;">I will text you as soon as I ________ at the hotel.</span>`,
        options: [
            "<span dir=\"ltr\">arrive (הווה פשוט)</span>",
            "<span dir=\"ltr\">will arrive (עתיד)</span>",
            "<span dir=\"ltr\">am arriving (הווה ממושך)</span>",
            "<span dir=\"ltr\">arrived (עבר)</span>"
        ],
        correctAnswer: 0,
        hint: "אסור לשים Will אחרי מילות זמן כמו 'as soon as' (ברגע ש...) או 'when'. אחרי מילות זמן שמים תמיד הווה פשוט (Present Simple).",
        solution: `<strong>הסבר מלא (Time Clauses Review):</strong><br>
        נזכיר את הכלל שמופיע בכל בגרות באנגלית (מודול E כתיבה).<br>
        במשפטים המורכבים משני חלקים המדברים על העתיד:<br>
        החלק הראשי מקבל עתיד: <span dir="ltr">I <strong>will text</strong> you</span>.<br>
        החלק שמתחיל במילות הזמן (<span dir="ltr">when, as soon as, before, until</span>) <strong>מקבל הווה פשוט!</strong><br>
        לכן: <span dir="ltr">...as soon as I <strong>arrive</strong></span> (ולא will arrive).`
    },
    // Question 125
    {
        topic: "english",
        subTopic: "Mixed Tenses Review (חזרה מעורבת)",
        question_text: `<strong>Past Perfect vs Past Simple:</strong><br>
        מה קרה קודם לפי המשפט הבא?<br>
        <span dir="ltr" style="font-size: 1.2em; font-weight: bold; color: #1e40af;">"When I turned on the TV, the game had already ended."</span>`,
        options: [
            "<span dir=\"ltr\">המשחק הסתיים קודם, ואז אני הדלקתי את הטלוויזיה.</span>",
            "<span dir=\"ltr\">אני הדלקתי את הטלוויזיה קודם, ואז המשחק הסתיים.</span>",
            "<span dir=\"ltr\">שתי הפעולות קרו בדיוק באותה השנייה.</span>",
            "<span dir=\"ltr\">אף אחת מהפעולות לא קרתה באמת, זהו רק תכנון לעתיד.</span>"
        ],
        correctAnswer: 0,
        hint: "הפעולה שיש בה 'had + V3' (עבר מושלם) היא תמיד, אבל תמיד, הפעולה שקרתה ראשונה בציר הזמן (העבר של העבר).",
        solution: `<strong>הסבר מלא (הבנת הנקרא וסדר כרונולוגי):</strong><br>
        הזמן <strong>Past Perfect (had + V3)</strong> משמש כ"מכונת זמן" שלוקחת אותנו לנקודה הכי רחוקה בסיפור.<br>
        הפעולה <span dir="ltr">the game <strong>had</strong> already <strong>ended</strong></span> נמצאת בעבר מושלם, ולכן היא <u>הראשונה שקרתה</u> (המשחק נגמר).<br>
        הפעולה <span dir="ltr">I <strong>turned on</strong></span> נמצאת בעבר פשוט (V2), ולכן היא קרתה אחר כך (הדלקתי).<br>
        מסקנה: פספסתי את המשחק לחלוטין כי הוא נגמר לפני שהדלקתי את המסך.`
    },
    // Question 126
    {
        topic: "english",
        subTopic: "Mixed Tenses Review (חזרה מעורבת)",
        question_text: `<strong>Stative Verbs (זיהוי שגיאה):</strong><br>
        איזה מהמשפטים הבאים <strong>שגוי</strong> מבחינה דקדוקית בגלל שימוש לא נכון בפועל מצב?`,
        options: [
            "<span dir=\"ltr\">I am needing a vacation right now!</span>",
            "<span dir=\"ltr\">I need a vacation right now!</span>",
            "<span dir=\"ltr\">She loves reading books.</span>",
            "<span dir=\"ltr\">They have a big house.</span>"
        ],
        correctAnswer: 0,
        hint: "המילה 'צריך' (need) מתארת מצב פנימי שאי אפשר 'לצלם בוידאו'. ולכן, היא לעולם לא מקבלת סיומת ing, אפילו אם יש 'right now' בסוף.",
        solution: `<strong>הסבר מלא (פעלי מצב שוב ושוב):</strong><br>
        מבחנים אוהבים לבלבל תלמידים עם המילה <span dir="ltr"><strong>right now</strong></span>.<br>
        תלמיד שרואה right now, אוטומטית שם ing.<br>
        אך כשהפועל הוא פועל מצב פנימי או חושי (need, want, know, understand, believe, love), חוק הסטאטיים מנצח! <strong>אסור להוסיף להם ing בשום מצב.</strong><br>
        לכן המשפט <span dir="ltr" style="text-decoration:line-through">I am needing</span> הוא שגיאה צורמת. החלופה הנכונה היא <span dir="ltr">I <strong>need</strong></span>.`
    },
    // Question 127
    {
        topic: "english",
        subTopic: "Mixed Tenses Review (חזרה מעורבת)",
        question_text: `<strong>Since vs For (Mixed with Perfect):</strong><br>
        השלימו את המשפט הבא:<br>
        <span dir="ltr" style="font-size: 1.3em; font-weight: bold; color: #1e40af;">She has been working as a manager ________ she graduated from university.</span>`,
        options: [
            "<span dir=\"ltr\">since</span>",
            "<span dir=\"ltr\">for</span>",
            "<span dir=\"ltr\">ago</span>",
            "<span dir=\"ltr\">in</span>"
        ],
        correctAnswer: 0,
        hint: "האם 'סיום האוניברסיטה' זו כמות של זמן (שעות/שנים) או שזו נקודת התחלה היסטורית שממנה הכל התחיל? לנקודת התחלה משתמשים ב-Since.",
        solution: `<strong>הסבר מלא (מילות רמז בפרפקט):</strong><br>
        - המילה <span dir="ltr"><strong>For</strong></span> דורשת כמות מספרית או אורך זמן (for 3 years, for a long time).<br>
        - המילה <span dir="ltr"><strong>Since</strong></span> דורשת אירוע נקודתי, תאריך או נקודת ציון בעבר שממנה התחיל 'הטיימר' לפעול (Since 2010, Since Monday, Since she graduated).<br><br>
        כיוון שסיום הלימודים (<span dir="ltr">she graduated</span>) הוא אירוע נקודתי בהיסטוריה שלה, נשתמש ב-<span dir="ltr"><strong>since</strong></span> (מאז).`
    },
    // Question 128
    {
        topic: "english",
        subTopic: "Mixed Tenses Review (חזרה מעורבת)",
        question_text: `<strong>Will vs Going to (ניבויים - Predictions):</strong><br>
        אתם רואים רכב נוסע במהירות מופרזת לתוך עמוד, בלי סיכוי לעצור. אתם צועקים לחבר:<br>
        <span dir="ltr" style="font-size: 1.3em; font-weight: bold; color: #1e40af;">"Watch out! The car ________ crash!"</span>`,
        options: [
            "<span dir=\"ltr\">is going to</span>",
            "<span dir=\"ltr\">will</span>",
            "<span dir=\"ltr\">is crashing</span>",
            "<span dir=\"ltr\">crashes</span>"
        ],
        correctAnswer: 0,
        hint: "כשיש הוכחה חותכת מול העיניים שמשהו עומד לקרות (מכונית שדוהרת לעמוד), העתיד הוודאי ביותר באנגלית הוא be going to.",
        solution: `<strong>הסבר מלא (תחזית מבוססת הוכחות):</strong><br>
        בזמן עתיד, כשאתם חוזים משהו על בסיס <strong>ראייה פיזית שמתרחשת עכשיו מול עיניכם</strong> (עננים שחורים, נהג שיכור, מגדל שמתנדנד), החוק דורש שימוש ב-<span dir="ltr"><strong>Be going to</strong></span>.<br><br>
        המילה <span dir="ltr">Will</span> משמשת לתחזיות שהן יותר "דעות" או מחשבות עתידיות ללא הוכחה פיזית מוחשית ברגע זה.<br>
        לכן: <span dir="ltr">The car <strong>is going to</strong> crash!</span>`
    },
    // Question 129
    {
        topic: "english",
        subTopic: "Mixed Tenses Review (חזרה מעורבת)",
        question_text: `<strong>Have vs Has got (שאלות ב-Present Simple):</strong><br>
        השלימו את השאלה כראוי:<br>
        <span dir="ltr" style="font-size: 1.3em; font-weight: bold; color: #1e40af;">________ your friends ________ a lot of free time?</span>`,
        options: [
            "<span dir=\"ltr\">Do / have</span>",
            "<span dir=\"ltr\">Does / have</span>",
            "<span dir=\"ltr\">Have / got</span>",
            "<span dir=\"ltr\">תשובות 1 ו-3 שתיהן נכונות דקדוקית!</span>"
        ],
        correctAnswer: 3,
        hint: "השאלה היא 'האם לחברים שלך יש...'. אפשר לשאול את זה עם Do/Does, ואפשר לשאול את זה עם מבנה ה-Have got הבריטי. שתי הדרכים חוקיות לחלוטין באנגלית המודרנית.",
        solution: `<strong>הסבר מלא (שתי הדרכים לשאול על שייכות):</strong><br>
        באנגלית יש לנו שתי מערכות לשאול "האם יש ל...":<br>
        1. <strong>מערכת ה-Present Simple הרגילה:</strong> משתמשים בפועל עזר Do/Does. <br>
        <span dir="ltr"><strong>Do</strong> your friends <strong>have</strong>...?</span> (חברים זה רבים ולכן Do).<br>
        2. <strong>מערכת ה-Have got (הבריטית/יסודי):</strong> פועל השייכות Have קופץ להתחלה.<br>
        <span dir="ltr"><strong>Have</strong> your friends <strong>got</strong>...?</span><br><br>
        שתי התשובות מצוינות, חוקיות, ונפוצות מאוד. (אך שימו לב שתשובה 2 שגויה כי חברים הם רבים, ולכן אסור לשים Does).`
    },
    // Question 130
    {
        topic: "english",
        subTopic: "Mixed Tenses Review (חזרה מעורבת)",
        question_text: `<strong>Mixed Conditionals (First Conditional):</strong><br>
        איזה מהמשפטים הבאים מתאר תנאי אפשרי לעתיד בצורה התחבירית הנכונה?`,
        options: [
            "<span dir=\"ltr\">If you study hard, you will pass the exam.</span>",
            "<span dir=\"ltr\">If you will study hard, you will pass the exam.</span>",
            "<span dir=\"ltr\">If you study hard, you pass the exam.</span>",
            "<span dir=\"ltr\">If you studied hard, you will pass the exam.</span>"
        ],
        correctAnswer: 0,
        hint: "תנאי ראשון (מציאותי): צד אחד תנאי הווה פשוט (If you study), צד שני תוצאה עתיד (will pass). וכמובן - אסור לשים will אחרי if!",
        solution: `<strong>הסבר מלא (תנאי ראשון - First Conditional):</strong><br>
        זהו חוק ברזל שמופיע בכל בחינות האנגלית.<br>
        המשפט מורכב משני חלקים:<br>
        1. <strong>משפט התנאי (If clause):</strong> מנוסח תמיד ב<strong>הווה פשוט</strong>. אסור לשים בו will! <br>
        (&rarr; <span dir="ltr">If you <strong>study</strong> hard</span>).<br>
        2. <strong>משפט התוצאה (Main clause):</strong> מנוסח תמיד ב<strong>עתיד פשוט</strong> (Will / Can / May). <br>
        (&rarr; <span dir="ltr">you <strong>will pass</strong> the exam</span>).<br><br>
        זהו התחביר החוקי היחיד לתאר תנאי ותוצאה הגיוניים לעתיד הקרוב.`
    },
    // Question 131
    {
        topic: "english",
        subTopic: "Mixed Tenses Review (חזרה מעורבת)",
        question_text: `<strong>Action vs State Verbs in Context:</strong><br>
        מדוע המשפט "I am seeing the doctor tomorrow" נחשב ל<strong>נכון</strong>, למרות ש-See הוא פועל של חושים (סטאטי)?`,
        options: [
            "<span dir=\"ltr\">מכיוון שכאן משמעות המילה 'seeing' היא 'נפגש עם', שזו פעולה פיזית (פגישה מתוכננת) ולא פעולת חוש הראייה.</span>",
            "<span dir=\"ltr\">כי פעולת הראייה עם העיניים דורשת מאמץ רב, ולכן היא נחשבת לפעולה אקטיבית המקבלת ing.</span>",
            "<span dir=\"ltr\">המשפט שגוי. אסור לכתוב 'am seeing' אף פעם, והמשפט תקין רק כך: 'I see the doctor tomorrow'.</span>",
            "<span dir=\"ltr\">בגלל המילה tomorrow, שמבטלת את כל חוקי פעלי המצב (Stative verbs).</span>"
        ],
        correctAnswer: 0,
        hint: "לפועל See יש שתי משמעויות: 1. לראות בעיניים (חוש - אסור ing). 2. להיפגש עם מישהו (Meet - מותר ing).",
        solution: `<strong>הסבר מלא (פעלים כפולי-משמעות):</strong><br>
        זהו עוד פועל שמככב במבחנים, בדיוק כמו Have ו-Think.<br><br>
        - <strong>ראייה פיזית (NO ing):</strong> כשאני רואה משהו בעזרת העיניים שלי, זה חוש ולא פעולה נשלטת. <br>
        נכון: <span dir="ltr">I <strong>see</strong> a bird in the sky.</span> (שגוי: I am seeing a bird).<br><br>
        - <strong>מפגש (YES ing):</strong> כשאני מתכנן פגישה (למשל עם רופא, או בן זוג - "אני יוצא איתה"), המשמעות משתנה ל"Meeting". זו פעולה גופנית מתוכננת לכל דבר ועניין!<br>
        נכון לחלוטין: <span dir="ltr">I <strong>am seeing</strong> the doctor tomorrow.</span> (קבעתי פגישה איתו מחר).`
    },
    // Question 132
    {
        topic: "english",
        subTopic: "Mixed Tenses Review (חזרה מעורבת)",
        question_text: `<strong>Past vs. Present Perfect (Recent past):</strong><br>
        באיזה זמן יש להשתמש אם הפעולה קרתה <u>ממש לפני רגע קט</u>, אך לא מצוין זמן מדויק? <br>
        למשל: "הוא בדיוק יצא מהמשרד".`,
        options: [
            "<span dir=\"ltr\">Present Perfect (He has just left the office) - מכיוון שהפעולה קרתה עכשיו, אין טיימר מדוייק, והתוצאה רלוונטית להווה (הוא לא פה).</span>",
            "<span dir=\"ltr\">Past Simple (He just left the office) - מכיוון שעזיבה היא פעולה קצרה שקורית בעבר.</span>",
            "<span dir=\"ltr\">Present Progressive (He is just leaving) - כי זה קורה עכשיו.</span>",
            "<span dir=\"ltr\">Future (He will just leave) - כי הוא יחזור בעתיד.</span>"
        ],
        correctAnswer: 0,
        hint: "המילה just (בדיוק הרגע) היא מילת רמז השמורה ל-Present Perfect בגלל החיבור המיידי שלה להווה.",
        solution: `<strong>הסבר מלא (תפקיד ה-Present Perfect למצבים טריים):</strong><br>
        בדיוק עבור מצבים כאלו הומצא ה-Present Perfect!<br>
        כשמשהו קרה בעבר הממש-ממש קרוב (לפני שניות או דקות ספורות), והוא משפיע על ההווה (הוא איננו פה עכשיו, אל תחפש אותו), אנחנו משתמשים בזמן הזה.<br><br>
        המילה <span dir="ltr"><strong>just</strong></span> תמיד תבוא בסנדוויץ':<br>
        <span dir="ltr">He <strong>has just left</strong> the office.</span><br>
        *(באמריקה נהוג לפעמים להגיד "He just left" עם עבר פשוט, אך באנגלית הדקדוקית התקנית של הבגרות, just מחייב Present Perfect).*`
    },
    // Question 133
    {
        topic: "english",
        subTopic: "Mixed Tenses Review (חזרה מעורבת)",
        question_text: `<strong>Forming questions (Do/Does/Did/Am/Is/Are):</strong><br>
        השלימו את תחילת השאלה (שימו לב לפועל במשפט!):<br>
        <span dir="ltr" style="font-size: 1.3em; font-weight: bold; color: #1e40af;">________ she usually ________ to music while studying?</span>`,
        options: [
            "<span dir=\"ltr\">Does / listen</span>",
            "<span dir=\"ltr\">Is / listening</span>",
            "<span dir=\"ltr\">Do / listen</span>",
            "<span dir=\"ltr\">Does / listens</span>"
        ],
        correctAnswer: 0,
        hint: "המילה usually (בדרך כלל) מזהירה אותנו: הווה פשוט! הנושא הוא She. פועל עזר ליחיד הוא Does.",
        solution: `<strong>הסבר מלא (זיהוי זמנים מתוך רמזים ובניית שאלות):</strong><br>
        1. <strong>זיהוי הזמן:</strong> המילה <span dir="ltr"><strong>usually</strong></span> אומרת לנו שמדובר בשגרה ובהרגל. הזמן הוא <strong>Present Simple</strong>.<br>
        2. <strong>פועל העזר:</strong> הנושא הוא <span dir="ltr"><strong>she</strong></span> (יחיד), ולכן נפתח את השאלה ב-<span dir="ltr"><strong>Does</strong></span> (ולא Do, ולא Is).<br>
        3. <strong>חוק הגנב:</strong> מכיוון שהשתמשנו ב-Does, הפועל הראשי נשאר <strong>בלי S</strong> (<span dir="ltr">listen</span>).<br><br>
        השאלה המלאה: <span dir="ltr"><strong>Does</strong> she usually <strong>listen</strong> to music...?</span>`
    },
    // Question 134
    {
        topic: "english",
        subTopic: "Mixed Tenses Review (חזרה מעורבת)",
        question_text: `<strong>Mixed - Negative tags (שאלות תגית - Tag Questions):</strong><br>
        נושא העשרה לבגרויות: איך נהפוך את המשפט הבא לשאלת תגית (לאישור)?<br>
        <span dir="ltr" style="font-size: 1.2em; font-weight: bold; color: #1e40af;">"You went to the party yesterday, ________?"</span>`,
        options: [
            "<span dir=\"ltr\">didn't you</span>",
            "<span dir=\"ltr\">don't you</span>",
            "<span dir=\"ltr\">weren't you</span>",
            "<span dir=\"ltr\">haven't you</span>"
        ],
        correctAnswer: 0,
        hint: "Tag Questions הן שאלות 'נכון?' בסוף משפט. הן תמיד הפוכות למשפט המקורי: משפט חיובי מקבל תגית שלילית עם אותו פועל עזר של הזמן.",
        solution: `<strong>הסבר מלא (Tag Questions):</strong><br>
        שאלות תגית (כמו בעברית "הלכת למסיבה, <u>נכון?</u>") עובדות באנגלית לפי חוק הניגוד:<br>
        אם המשפט חיובי &rarr; התגית תהיה שלילה. (ולהיפך).<br><br>
        <strong>איך מוצאים את המילה לתגית?</strong><br>
        מסתכלים על הזמן של המשפט. <br>
        המשפט שלנו: <span dir="ltr">"You <strong>went</strong>"</span>. הזמן הוא <strong>עבר פשוט</strong> חיובי.<br>
        איזה פועל עזר יוצר שלילה בעבר פשוט? <span dir="ltr"><strong>didn't</strong></span>!<br>
        לכן התגית תהיה: <span dir="ltr">...<strong>didn't you?</strong></span>.`
    },
    // Question 135
    {
        topic: "english",
        subTopic: "Mixed Tenses Review (חזרה מעורבת)",
        question_text: `<strong>The Ultimate Tense Challenge (התאמה למשמעות הרחבה):</strong><br>
        קראו את המשפט: "I <u>was walking</u> home when I <u>saw</u> an accident. I <u>have never seen</u> anything like it in my life."<br>
        כמה זמני דקדוק שונים משולבים במשפט המורכב הזה שמספר סיפור מושלם?`,
        options: [
            "<span dir=\"ltr\">שלושה זמנים שונים: עבר ממושך (was walking) כרקע, עבר פשוט (saw) כפעולה חותכת, והווה מושלם פשוט (have never seen) לתיאור ניסיון חיים כולל עד רגע הדיבור.</span>",
            "<span dir=\"ltr\">שני זמנים: עבר פשוט והווה מושלם בלבד.</span>",
            "<span dir=\"ltr\">שלושה זמנים: הווה ממושך, עתיד פשוט, ועבר מושלם.</span>",
            "<span dir=\"ltr\">ארבעה זמנים שונים, הכוללים גם הווה פשוט נסתר בתוך המילה never.</span>"
        ],
        correctAnswer: 0,
        hint: "נתחו כל פועל: was+ing (ממושך עבר), V2 (עבר פשוט), Have+V3 (הווה מושלם).",
        solution: `<strong>הסבר מלא (השליטה האולטימטיבית באנגלית):</strong><br>
        המשפט הזה הוא דוגמה מושלמת לשליטה בשפה האנגלית בבגרות (Module G). הוא מחבר את כל חלקי הדקדוק יחד:<br><br>
        1. <strong>Past Progressive:</strong> <span dir="ltr">I <strong>was walking</strong></span>. מספק את הרקע לסיפור (מה עשיתי באותו זמן).<br>
        2. <strong>Past Simple:</strong> <span dir="ltr">when I <strong>saw</strong></span>. הפעולה הפתאומית והקצרה שקטעה את הרקע.<br>
        3. <strong>Present Perfect Simple:</strong> <span dir="ltr">I <strong>have never seen</strong></span>. סיום הסיפור עם מחשבה שמחברת את העבר להווה - תיאור "ניסיון החיים" של הדובר מיום היוולדו ועד עכשיו.<br><br>
        כל הכבוד! סיימתם בהצלחה את מאגר הזמנים הדקדוקיים המקיף.`
    }
];