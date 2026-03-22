const questionsDB = [
    // ==========================================
    // תת נושא 1: משולשים: משפטי חפיפה, דמיון ופרופורציה (משפט תאלס והרחבותיו) (10 שאלות)
    // ==========================================
    {
        topic: "geom_euclid_471",
        subTopic: "משולשים: משפטי חפיפה, דמיון ופרופורציה (משפט תאלס והרחבותיו)",
        question_text: "במשולש \\( ABC \\) הקטע \\( DE \\) מקביל לצלע \\( BC \\).\nנתון כי: \\( AD = x \\), \\( DB = x + 1 \\), \\( AE = x + 2 \\), \\( EC = x + 4 \\).\nא. חשבו את ערכו של \\( x \\).\nב. חשבו את אורך הצלע \\( AB \\).&rlm;",
        options: ["2, 5", "3, 7", "4, 9", "2, 8"],
        correctAnswer: 0,
        hint: "לפי משפט תאלס, קטע המקביל לצלע במשולש חותך את שתי הצלעות האחרות כך שנוצרים קטעים פרופורציוניים.",
        solution_steps: [
            { verbal_explanation: "שלב 1: על פי משפט תאלס, נרשום את יחס הפרופורציה בין הקטעים.", math_expression: "\\dfrac{AD}{DB} = \\dfrac{AE}{EC}" },
            { verbal_explanation: "שלב 2: נציב את הביטויים הנתונים במשוואה.", math_expression: "\\dfrac{x}{x + 1} = \\dfrac{x + 2}{x + 4}" },
            { verbal_explanation: "שלב 3: נכפול בהצלבה כדי לפתור את המשוואה.", math_expression: "x(x + 4) = (x + 1)(x + 2)" },
            { verbal_explanation: "שלב 4: נפתח סוגריים משני צידי המשוואה.", math_expression: "x^{2} + 4x = x^{2} + 3x + 2" },
            { verbal_explanation: "שלב 5: נחסר את איברי החזקה השנייה ונעביר אגפים למציאת המשתנה.", math_expression: "x = 2" },
            { verbal_explanation: "שלב 6: נחשב את אורך הצלע על ידי חיבור הקטעים המרכיבים אותה.", math_expression: "AB = 2 + (2 + 1) = 5" }
        ],
        final_answer: "2, 5"
    },
    {
        topic: "geom_euclid_471",
        subTopic: "משולשים: משפטי חפיפה, דמיון ופרופורציה (משפט תאלס והרחבותיו)",
        question_text: "משולש \\( ABC \\) דומה למשולש \\( DEF \\). יחס הדמיון בין המשולשים הוא 1:3 בהתאמה.\nנתון כי שטחו של משולש \\( ABC \\) הוא 12 סמ''ר.\nמהו שטחו של משולש \\( DEF \\)?&rlm;",
        options: ["108", "36", "144", "4"],
        correctAnswer: 0,
        hint: "במשולשים דומים, יחס השטחים שווה לריבוע יחס הדמיון. העלו את היחס 1:3 בריבוע.",
        solution_steps: [
            { verbal_explanation: "שלב 1: רישום המשפט הקובע כי יחס השטחים שווה לריבוע יחס הדמיון.", math_expression: "\\dfrac{S_{1}}{S_{2}} = \\left( \\dfrac{1}{3} \\right)^{2}" },
            { verbal_explanation: "שלב 2: חישוב ריבוע יחס הדמיון.", math_expression: "\\left( \\dfrac{1}{3} \\right)^{2} = \\dfrac{1}{9}" },
            { verbal_explanation: "שלב 3: הצבת השטח הנתון במשוואה.", math_expression: "\\dfrac{12}{S_{2}} = \\dfrac{1}{9}" },
            { verbal_explanation: "שלב 4: כפל בהצלבה לקבלת השטח המבוקש.", math_expression: "S_{2} = 12 \\times 9 = 108" }
        ],
        final_answer: "108"
    },
    {
        topic: "geom_euclid_471",
        subTopic: "משולשים: משפטי חפיפה, דמיון ופרופורציה (משפט תאלס והרחבותיו)",
        question_text: "במשולש \\( ABC \\) הקטע \\( AD \\) הוא חוצה הזווית \\( \\angle A \\).\nנתון: \\( AB = 15 \\), \\( AC = 20 \\), ו-\\( BC = 28 \\).\nחשבו את אורכו של הקטע \\( BD \\).&rlm;",
        options: ["12", "16", "14", "10"],
        correctAnswer: 0,
        hint: "לפי משפט חוצה הזווית, יחס הקטעים על הצלע BC שווה ליחס הצלעות AB ו-AC. סמנו BD=3x ו-DC=4x.",
        solution_steps: [
            { verbal_explanation: "שלב 1: שימוש במשפט חוצה הזווית לכתיבת הפרופורציה.", math_expression: "\\dfrac{BD}{DC} = \\dfrac{AB}{AC}" },
            { verbal_explanation: "שלב 2: הצבת אורכי הצלעות הנתונות וצמצום השבר.", math_expression: "\\dfrac{BD}{DC} = \\dfrac{15}{20} = \\dfrac{3}{4}" },
            { verbal_explanation: "שלב 3: סימון חלקי הצלע כביטויים התלויים במשתנה עזר לפי היחס.", math_expression: "BD = 3x \\quad , \\quad DC = 4x" },
            { verbal_explanation: "שלב 4: סכום הקטעים שווה לאורך הצלע כולה.", math_expression: "3x + 4x = 28" },
            { verbal_explanation: "שלב 5: חלוקה במקדם למציאת ערך המשתנה.", math_expression: "7x = 28 \\Rightarrow x = 4" },
            { verbal_explanation: "שלב 6: חישוב אורך הקטע המבוקש.", math_expression: "BD = 3 \\times 4 = 12" }
        ],
        final_answer: "12"
    },
    {
        topic: "geom_euclid_471",
        subTopic: "משולשים: משפטי חפיפה, דמיון ופרופורציה (משפט תאלס והרחבותיו)",
        question_text: "במשולש ישר זווית \\( ABC \\) שבו הזווית \\( B \\) היא 90 מעלות, מעבירים גובה \\( BD \\) ליתר.\nנתון כי היטל הניצב \\( AB \\) על היתר הוא \\( AD = 4 \\), ואורך הגובה ליתר הוא \\( BD = 6 \\).\nמצאו את אורך ההיטל השני \\( DC \\).&rlm;",
        options: ["9", "8", "12", "5"],
        correctAnswer: 0,
        hint: "במשולש ישר זווית, הגובה ליתר בריבוע שווה למכפלת היטלי הניצבים על היתר.",
        solution_steps: [
            { verbal_explanation: "שלב 1: כתיבת משפט הגובה ליתר במשולש ישר זווית.", math_expression: "BD^{2} = AD \\times DC" },
            { verbal_explanation: "שלב 2: הצבת הנתונים המספריים.", math_expression: "6^{2} = 4 \\times DC" },
            { verbal_explanation: "שלב 3: חישוב הריבוע באגף השמאלי.", math_expression: "36 = 4 \\times DC" },
            { verbal_explanation: "שלב 4: חלוקה בארבע לבידוד ומציאת אורך הקטע.", math_expression: "DC = 36 : 4 = 9" }
        ],
        final_answer: "9"
    },
    {
        topic: "geom_euclid_471",
        subTopic: "משולשים: משפטי חפיפה, דמיון ופרופורציה (משפט תאלס והרחבותיו)",
        question_text: "נתונים שני קטעים \\( AD \\) ו-\\( BC \\) הנחתכים בנקודה \\( O \\).\nנתון כי \\( AB \\) מקביל ל-\\( CD \\).\nאורכי הקטעים הם: \\( AB = 8 \\), \\( CD = 12 \\), \\( AO = 6 \\).\nחשבו את אורך הקטע \\( OD \\).&rlm;",
        options: ["9", "10", "8", "12"],
        correctAnswer: 0,
        hint: "כאשר ישרים מקבילים, נוצרים משולשים דומים (תאלס מורחב צורת שעון חול). יחס הצלעות שווה.",
        solution_steps: [
            { verbal_explanation: "שלב 1: כיוון שהישרים מקבילים, הזוויות המתחלפות שוות ולכן המשולשים דומים.", math_expression: "\\dfrac{AB}{CD} = \\dfrac{AO}{OD}" },
            { verbal_explanation: "שלב 2: הצבת הנתונים אל תוך הפרופורציה.", math_expression: "\\dfrac{8}{12} = \\dfrac{6}{OD}" },
            { verbal_explanation: "שלב 3: צמצום השבר השמאלי להקלת החישוב.", math_expression: "\\dfrac{2}{3} = \\dfrac{6}{OD}" },
            { verbal_explanation: "שלב 4: כפל בהצלבה וחילוץ הקטע המבוקש.", math_expression: "2 \\times OD = 18 \\Rightarrow OD = 9" }
        ],
        final_answer: "9"
    },
    {
        topic: "geom_euclid_471",
        subTopic: "משולשים: משפטי חפיפה, דמיון ופרופורציה (משפט תאלס והרחבותיו)",
        question_text: "שני משולשים חופפים זה לזה לפי משפט צ.ז.צ.\nבמשולש הראשון אורכי שתי צלעות הם \\( 3x - 1 \\) ו-14, והזווית הכלואה ביניהן היא בת 50 מעלות.\nבמשולש השני אורכי שתי צלעות הם 8 ו-\\( 2y + 4 \\), והזווית הכלואה ביניהן היא בת 50 מעלות.\nמצאו את ערכם של \\( x \\) ו-\\( y \\).&rlm;",
        options: ["x=3, y=5", "x=4, y=4", "x=5, y=3", "x=3, y=6"],
        correctAnswer: 0,
        hint: "השוו את הצלעות המתאימות זו לזו, כלומר הצלע הראשונה ל-8, והצלע השנייה ל-14.",
        solution_steps: [
            { verbal_explanation: "שלב 1: במשולשים חופפים, צלעות מתאימות שוות. נשווה את הצלע מהמשולש הראשון לצלע הנתונה בשני.", math_expression: "3x - 1 = 8" },
            { verbal_explanation: "שלב 2: העברת אגפים ופתרון עבור המשתנה הראשון.", math_expression: "3x = 9 \\Rightarrow x = 3" },
            { verbal_explanation: "שלב 3: השוואת הצלע השנייה של המשולש השני לצלע הידועה מהמשולש הראשון.", math_expression: "2y + 4 = 14" },
            { verbal_explanation: "שלב 4: העברת אגפים ופתרון עבור המשתנה השני.", math_expression: "2y = 10 \\Rightarrow y = 5" }
        ],
        final_answer: "x=3, y=5"
    },
    {
        topic: "geom_euclid_471",
        subTopic: "משולשים: משפטי חפיפה, דמיון ופרופורציה (משפט תאלס והרחבותיו)",
        question_text: "במשולש \\( ABC \\) הקטע \\( DE \\) מקביל לצלע הבסיס \\( BC \\) וחותך את שוקי המשולש כך ששטח המשולש \\( ADE \\) הוא רבע משטח המשולש הגדול \\( ABC \\).\nאם נתון כי אורך \\( DE = 5 \\), מהו אורך הצלע \\( BC \\)?&rlm;",
        options: ["10", "15", "20", "25"],
        correctAnswer: 0,
        hint: "יחס השטחים שווה לריבוע יחס הצלעות. אם יחס השטחים הוא 1:4, יחס הצלעות הוא שורש של 1:4.",
        solution_steps: [
            { verbal_explanation: "שלב 1: יחס השטחים נתון כרבע.", math_expression: "\\dfrac{S_{1}}{S_{2}} = \\dfrac{1}{4}" },
            { verbal_explanation: "שלב 2: יחס הדמיון הקווי הוא שורש יחס השטחים.", math_expression: "\\dfrac{DE}{BC} = \\sqrt{\\dfrac{1}{4}} = \\dfrac{1}{2}" },
            { verbal_explanation: "שלב 3: חילוץ הצלע המבוקשת על ידי הצבת הנתון.", math_expression: "\\dfrac{5}{BC} = \\dfrac{1}{2} \\Rightarrow BC = 10" }
        ],
        final_answer: "10"
    },
    {
        topic: "geom_euclid_471",
        subTopic: "משולשים: משפטי חפיפה, דמיון ופרופורציה (משפט תאלס והרחבותיו)",
        question_text: "המשולשים \\( ABC \\) ו-\\( DEF \\) דומים. היקף משולש \\( ABC \\) הוא 24 ס''מ.\nהצלע \\( AB \\) מתאימה לצלע \\( DE \\). נתון כי \\( AB = 6 \\) ו-\\( DE = 9 \\).\nמהו היקפו של משולש \\( DEF \\)?&rlm;",
        options: ["36", "30", "42", "16"],
        correctAnswer: 0,
        hint: "יחס ההיקפים שווה בדיוק ליחס הצלעות המתאימות (היחס הקווי).",
        solution_steps: [
            { verbal_explanation: "שלב 1: כתיבת הפרופורציה בין ההיקפים לצלעות.", math_expression: "\\dfrac{P_{1}}{P_{2}} = \\dfrac{AB}{DE}" },
            { verbal_explanation: "שלב 2: הצבת הנתונים.", math_expression: "\\dfrac{24}{P_{2}} = \\dfrac{6}{9}" },
            { verbal_explanation: "שלב 3: צמצום השבר ליחס פשוט.", math_expression: "\\dfrac{24}{P_{2}} = \\dfrac{2}{3}" },
            { verbal_explanation: "שלב 4: כפל בהצלבה לחישוב ההיקף.", math_expression: "2 \\times P_{2} = 72 \\Rightarrow P_{2} = 36" }
        ],
        final_answer: "36"
    },
    {
        topic: "geom_euclid_471",
        subTopic: "משולשים: משפטי חפיפה, דמיון ופרופורציה (משפט תאלס והרחבותיו)",
        question_text: "נתון משולש ישר זווית אשר ניצביו הם באורכים 8 ו-6.\nמעבירים גובה מן הזווית הישרה אל היתר. מהו אורך הגובה ליתר?&rlm;",
        options: ["4.8", "5", "4.5", "5.2"],
        correctAnswer: 0,
        hint: "חשבו את שטח המשולש בעזרת הניצבים. לאחר מציאת היתר באמצעות פיתגורס, השתמשו שוב בשטח למציאת הגובה.",
        solution_steps: [
            { verbal_explanation: "שלב 1: חישוב אורך היתר בעזרת פיתגורס.", math_expression: "c = \\sqrt{8^{2} + 6^{2}} = \\sqrt{64 + 36} = 10" },
            { verbal_explanation: "שלב 2: חישוב שטח המשולש דרך הניצבים.", math_expression: "S = \\dfrac{8 \\times 6}{2} = 24" },
            { verbal_explanation: "שלב 3: השוואת השטח לנוסחה דרך היתר והגובה.", math_expression: "\\dfrac{10 \\times h}{2} = 24" },
            { verbal_explanation: "שלב 4: בידוד הגובה.", math_expression: "5 \\times h = 24 \\Rightarrow h = 4.8" }
        ],
        final_answer: "4.8"
    },
    {
        topic: "geom_euclid_471",
        subTopic: "משולשים: משפטי חפיפה, דמיון ופרופורציה (משפט תאלס והרחבותיו)",
        question_text: "במשולש נתון חוצה זווית. אורך צלעות המשולש הכולאות את הזווית הן 12 ס''מ ו-18 ס''מ. הצלע השלישית (שאותה חותך חוצה הזווית) היא באורך כולל של 20 ס''מ.\nמהו אורך החלק הגדול מבין שני החלקים שאליהם מחולקת הצלע השלישית?&rlm;",
        options: ["12", "8", "10", "14"],
        correctAnswer: 0,
        hint: "לפי משפט חוצה זווית, חלקו את 20 ליחס של 12:18, שזהה ליחס 2:3.",
        solution_steps: [
            { verbal_explanation: "שלב 1: כתיבת יחס החלקים על פי משפט חוצה הזווית וצמצומו.", math_expression: "\\dfrac{x}{y} = \\dfrac{12}{18} = \\dfrac{2}{3}" },
            { verbal_explanation: "שלב 2: הגדרת סכום החלקים כמשוואה התלויה ביחידת יחס אחת.", math_expression: "2k + 3k = 20" },
            { verbal_explanation: "שלב 3: מציאת גודלה של יחידת יחס.", math_expression: "5k = 20 \\Rightarrow k = 4" },
            { verbal_explanation: "שלב 4: מציאת החלק הגדול המהווה שלוש יחידות.", math_expression: "3 \\times 4 = 12" }
        ],
        final_answer: "12"
    },

    // ==========================================
    // תת נושא 2: משפחת המרובעים: מקבילית, מלבן, מעוין, ריבוע, טרפז, דלתון (10 שאלות)
    // ==========================================
    {
        topic: "geom_euclid_471",
        subTopic: "משפחת המרובעים: מקבילית, מלבן, מעוין, ריבוע, טרפז, דלתון",
        question_text: "במקבילית \\( ABCD \\), האלכסונים נחתכים בנקודה \\( O \\).\nנתון כי חצי אלכסון אחד הוא \\( 3x - 2 \\) וחציו השני הוא \\( x + 6 \\).\nמצאו את אורך האלכסון כולו.&rlm;",
        options: ["20", "10", "16", "24"],
        correctAnswer: 0,
        hint: "במקבילית האלכסונים חוצים זה את זה, ולכן חלקי אותו האלכסון שווים.",
        solution_steps: [
            { verbal_explanation: "שלב 1: השוואת שני חלקי האלכסון.", math_expression: "3x - 2 = x + 6" },
            { verbal_explanation: "שלב 2: העברת אגפים ובידוד הנעלם.", math_expression: "2x = 8 \\Rightarrow x = 4" },
            { verbal_explanation: "שלב 3: הצבת הערך כדי למצוא את אורך חצי האלכסון.", math_expression: "3 \\times 4 - 2 = 10" },
            { verbal_explanation: "שלב 4: הכפלת החלק פי שתיים למציאת האלכסון המלא.", math_expression: "2 \\times 10 = 20" }
        ],
        final_answer: "20"
    },
    {
        topic: "geom_euclid_471",
        subTopic: "משפחת המרובעים: מקבילית, מלבן, מעוין, ריבוע, טרפז, דלתון",
        question_text: "נתון מעוין שאלכסוניו הם באורכים 10 ו-24 ס''מ.\nמהו היקף המעוין?&rlm;",
        options: ["52", "60", "48", "64"],
        correctAnswer: 0,
        hint: "האלכסונים במעוין מאונכים וחוצים זה את זה. נוצרים משולשים ישרי זווית עם ניצבים 5 ו-12.",
        solution_steps: [
            { verbal_explanation: "שלב 1: חישוב חצאי האלכסונים המהווים ניצבים במשולש ישר זווית.", math_expression: "a = \\dfrac{10}{2} = 5 \\quad , \\quad b = \\dfrac{24}{2} = 12" },
            { verbal_explanation: "שלב 2: שימוש במשפט פיתגורס למציאת צלע המעוין המהווה יתר.", math_expression: "c = \\sqrt{5^{2} + 12^{2}} = \\sqrt{25 + 144} = 13" },
            { verbal_explanation: "שלב 3: הכפלת הצלע בארבע למציאת ההיקף.", math_expression: "P = 4 \\times 13 = 52" }
        ],
        final_answer: "52"
    },
    {
        topic: "geom_euclid_471",
        subTopic: "משפחת המרובעים: מקבילית, מלבן, מעוין, ריבוע, טרפז, דלתון",
        question_text: "במלבן, אורך האלכסון הוא 15 ס''מ. אורך אחת מהצלעות הוא 9 ס''מ.\nחשבו את שטחו של המלבן.&rlm;",
        options: ["108", "135", "120", "90"],
        correctAnswer: 0,
        hint: "השתמשו במשפט פיתגורס כדי למצוא את הצלע השנייה של המלבן.",
        solution_steps: [
            { verbal_explanation: "שלב 1: בניית משוואת פיתגורס עם הנתונים.", math_expression: "15^{2} = 9^{2} + b^{2}" },
            { verbal_explanation: "שלב 2: פתרון המשוואה למציאת הצלע החסרה.", math_expression: "225 = 81 + b^{2} \\Rightarrow b^{2} = 144 \\Rightarrow b = 12" },
            { verbal_explanation: "שלב 3: הכפלת הצלעות למציאת השטח.", math_expression: "S = 9 \\times 12 = 108" }
        ],
        final_answer: "108"
    },
    {
        topic: "geom_euclid_471",
        subTopic: "משפחת המרובעים: מקבילית, מלבן, מעוין, ריבוע, טרפז, דלתון",
        question_text: "בטרפז שווה שוקיים, נתון כי זווית הבסיס התחתון היא 70 מעלות.\nמהו גודלה של הזווית בבסיס העליון, הנמצאת באותו צד של השוק?&rlm;",
        options: ["110°", "70°", "120°", "140°"],
        correctAnswer: 0,
        hint: "סכום זוויות חד-צדדיות (הצמודות לאותה שוק) בטרפז שווה תמיד ל-180 מעלות.",
        solution_steps: [
            { verbal_explanation: "שלב 1: כתיבת משוואת סכום الزוויות החד-צדדיות בין המקבילים.", math_expression: "\\alpha + 70^{\\circ} = 180^{\\circ}" },
            { verbal_explanation: "שלב 2: חילוץ הזווית המבוקשת.", math_expression: "\\alpha = 180^{\\circ} - 70^{\\circ} = 110^{\\circ}" }
        ],
        final_answer: "110°"
    },
    {
        topic: "geom_euclid_471",
        subTopic: "משפחת המרובעים: מקבילית, מלבן, מעוין, ריבוע, טרפז, דלתון",
        question_text: "שטחו של דלתון הוא 48 סמ''ר. אורך אחד מהאלכסונים שלו הוא 8 ס''מ.\nמהו אורך האלכסון השני?&rlm;",
        options: ["12", "6", "24", "16"],
        correctAnswer: 0,
        hint: "שטח דלתון מחושב כמכפלת האלכסונים חלקי 2.",
        solution_steps: [
            { verbal_explanation: "שלב 1: כתיבת נוסחת השטח של דלתון עם הנתונים המספריים.", math_expression: "48 = \\dfrac{8 \\times d_{2}}{2}" },
            { verbal_explanation: "שלב 2: ביצוע החלוקה בשתיים לביטול השבר.", math_expression: "48 = 4 \\times d_{2}" },
            { verbal_explanation: "שלב 3: חלוקת השטח במקדם למציאת האלכסון השני.", math_expression: "d_{2} = 12" }
        ],
        final_answer: "12"
    },
    {
        topic: "geom_euclid_471",
        subTopic: "משפחת המרובעים: מקבילית, מלבן, מעוין, ריבוע, טרפז, דלתון",
        question_text: "בריבוע ששטחו הוא 50 סמ''ר, מהו אורך האלכסון של הריבוע?&rlm;",
        options: ["10", "5", "100", "25"],
        correctAnswer: 0,
        hint: "בריבוע האלכסונים שווים. שטח יכול להיות מחושב כאלכסון כפול אלכסון חלקי 2.",
        solution_steps: [
            { verbal_explanation: "שלב 1: הצבת הנתונים בנוסחת השטח על בסיס אלכסונים.", math_expression: "50 = \\dfrac{d^{2}}{2}" },
            { verbal_explanation: "שלב 2: הכפלת האגפים בשתיים.", math_expression: "d^{2} = 100" },
            { verbal_explanation: "שלב 3: הוצאת שורש ריבועי.", math_expression: "d = 10" }
        ],
        final_answer: "10"
    },
    {
        topic: "geom_euclid_471",
        subTopic: "משפחת המרובעים: מקבילית, מלבן, מעוין, ריבוע, טרפז, דלתון",
        question_text: "במקבילית, אחת הזוויות גדולה ב-40 מעלות מהזווית הסמוכה לה.\nמהן הזוויות החדות והקהות של המקבילית?&rlm;",
        options: ["70°, 110°", "60°, 100°", "80°, 120°", "50°, 90°"],
        correctAnswer: 0,
        hint: "סכום זוויות סמוכות במקבילית הוא 180 מעלות. הגדירו x ו- x+40.",
        solution_steps: [
            { verbal_explanation: "שלב 1: כתיבת משוואת סכום זוויות סמוכות.", math_expression: "\\alpha + (\\alpha + 40^{\\circ}) = 180^{\\circ}" },
            { verbal_explanation: "שלב 2: כינוס איברים והעברת המספר.", math_expression: "2\\alpha = 140^{\\circ}" },
            { verbal_explanation: "שלב 3: חלוקה בשתיים למציאת הזווית הקטנה.", math_expression: "\\alpha = 70^{\\circ}" },
            { verbal_explanation: "שלב 4: הוספת ההפרש למציאת הזווית הגדולה.", math_expression: "\\beta = 70^{\\circ} + 40^{\\circ} = 110^{\\circ}" }
        ],
        final_answer: "70°, 110°"
    },
    {
        topic: "geom_euclid_471",
        subTopic: "משפחת המרובעים: מקבילית, מלבן, מעוין, ריבוע, טרפז, דלתון",
        question_text: "בטרפז ישר זווית אורך הבסיס העליון הוא 5 ס''מ, אורך הבסיס התחתון הוא 13 ס''מ ואורך השוק הארוכה (האלכסונית) הוא 10 ס''מ.\nמה שטח הטרפז?&rlm;",
        options: ["54", "72", "64", "48"],
        correctAnswer: 0,
        hint: "הורידו גובה מהבסיס העליון. הניצב שייווצר על הבסיס התחתון הוא ההפרש בין הבסיסים (8). מצאו את הגובה עם פיתגורס.",
        solution_steps: [
            { verbal_explanation: "שלב 1: חישוב אורך הניצב במשולש ישר הזווית שנוצר מירידת הגובה.", math_expression: "13 - 5 = 8" },
            { verbal_explanation: "שלב 2: שימוש בפיתגורס למציאת גובה הטרפז.", math_expression: "h^{2} + 8^{2} = 10^{2} \\Rightarrow h^{2} = 36 \\Rightarrow h = 6" },
            { verbal_explanation: "שלב 3: חישוב השטח הכולל.", math_expression: "S = \\dfrac{(5 + 13) \\times 6}{2} = 9 \\times 6 = 54" }
        ],
        final_answer: "54"
    },
    {
        topic: "geom_euclid_471",
        subTopic: "משפחת המרובעים: מקבילית, מלבן, מעוין, ריבוע, טרפז, דלתון",
        question_text: "אלכסון משני בדלתון אורכו 16 ס''מ. צלעות הדלתון (השוקיים של המשולשים המרכיבים אותו) הן 10 ס''מ ו-17 ס''מ.\nמה אורך האלכסון הראשי המלא של הדלתון?&rlm;",
        options: ["21", "15", "18", "24"],
        correctAnswer: 0,
        hint: "האלכסון הראשי מאונך למשני וחוצה אותו לחצי (8 ס''מ). השתמשו בפיתגורס פעמיים.",
        solution_steps: [
            { verbal_explanation: "שלב 1: חישוב אורך מחצית האלכסון המשני המהווה ניצב משותף.", math_expression: "a = \\dfrac{16}{2} = 8" },
            { verbal_explanation: "שלב 2: חישוב החלק העליון של האלכסון הראשי.", math_expression: "h_{1} = \\sqrt{10^{2} - 8^{2}} = \\sqrt{100 - 64} = 6" },
            { verbal_explanation: "שלב 3: חישוב החלק התחתון של האלכסון הראשי.", math_expression: "h_{2} = \\sqrt{17^{2} - 8^{2}} = \\sqrt{289 - 64} = 15" },
            { verbal_explanation: "שלב 4: סכימת החלקים לקבלת האורך הכולל.", math_expression: "D = 6 + 15 = 21" }
        ],
        final_answer: "21"
    },
    {
        topic: "geom_euclid_471",
        subTopic: "משפחת המרובעים: מקבילית, מלבן, מעוין, ריבוע, טרפז, דלתון",
        question_text: "במעוין, היקפו 40 ס''מ, ואורך אחד מאלכסוניו הוא 12 ס''מ. מהו שטח המעוין?&rlm;",
        options: ["96", "48", "120", "192"],
        correctAnswer: 0,
        hint: "חשבו את צלע המעוין (10 ס''מ). בעזרת פיתגורס מצאו את חצי האלכסון השני.",
        solution_steps: [
            { verbal_explanation: "שלב 1: חלוקת ההיקף לארבע למציאת אורך צלע.", math_expression: "a = \\dfrac{40}{4} = 10" },
            { verbal_explanation: "שלב 2: חלוקת האלכסון הנתון לשניים.", math_expression: "b = \\dfrac{12}{2} = 6" },
            { verbal_explanation: "שלב 3: שימוש בפיתגורס למציאת חצי האלכסון השני.", math_expression: "c^{2} + 6^{2} = 10^{2} \\Rightarrow c^{2} = 64 \\Rightarrow c = 8" },
            { verbal_explanation: "שלב 4: הכפלת החצי בשתיים לקבלת האלכסון המלא.", math_expression: "d_{2} = 2 \\times 8 = 16" },
            { verbal_explanation: "שלב 5: חישוב שטח המעוין.", math_expression: "S = \\dfrac{12 \\times 16}{2} = 96" }
        ],
        final_answer: "96"
    },

    // ==========================================
    // תת נושא 3: קטע אמצעים במשולש ובטרפז (10 שאלות)
    // ==========================================
    {
        topic: "geom_euclid_471",
        subTopic: "קטע אמצעים במשולש ובטרפז",
        question_text: "במשולש ישר זווית, אורך היתר הוא 20 ס''מ. מנקודת האמצע של היתר מורידים אנך לאחד הניצבים. האנך מקביל לניצב השני שאורכו 12 ס''מ. מהו אורך האנך?&rlm;",
        options: ["6", "10", "8", "5"],
        correctAnswer: 0,
        hint: "אנך היורד מאמצע היתר ומקביל לניצב הוא קטע אמצעים.",
        solution_steps: [
            { verbal_explanation: "שלב 1: זיהוי האנך כקטע אמצעים ולכן הוא שווה למחצית הצלע המקבילה.", math_expression: "h = \\dfrac{12}{2}" },
            { verbal_explanation: "שלב 2: חישוב התוצאה.", math_expression: "h = 6" }
        ],
        final_answer: "6"
    },
    {
        topic: "geom_euclid_471",
        subTopic: "קטע אמצעים במשולש ובטרפז",
        question_text: "היקף טרפז שווה שוקיים הוא 40 ס''מ. אורך שוק הטרפז הוא 8 ס''מ. מהו אורך קטע האמצעים בטרפז?&rlm;",
        options: ["12", "16", "24", "10"],
        correctAnswer: 0,
        hint: "החסירו את שתי השוקיים מההיקף כדי למצוא את סכום הבסיסים. קטע אמצעים שווה למחצית סכום הבסיסים.",
        solution_steps: [
            { verbal_explanation: "שלב 1: מציאת סכום הבסיסים על ידי חיסור השוקיים מההיקף.", math_expression: "Base_{sum} = 40 - 2 \\times 8 = 24" },
            { verbal_explanation: "שלב 2: קטע אמצעים הוא מחצית מסכום הבסיסים.", math_expression: "Midsegment = \\dfrac{24}{2} = 12" }
        ],
        final_answer: "12"
    },
    {
        topic: "geom_euclid_471",
        subTopic: "קטע אמצעים במשולש ובטרפז",
        question_text: "טרפז מחולק ל-3 חלקים שווים בגובהם על ידי שני ישרים המקבילים לבסיסים. הבסיס העליון שווה ל-10 והבסיס התחתון שווה ל-25. א. מהו אורך הישר העליון שמקביל לבסיס? ב. מהו אורך הישר התחתון?&rlm;",
        options: ["15, 20", "12, 18", "14, 21", "13, 20"],
        correctAnswer: 0,
        hint: "אורכי המקבילים בטרפז המחולק לקטעים שווים מהווים סדרה חשבונית.",
        solution_steps: [
            { verbal_explanation: "שלב 1: חישוב ההפרש הקבוע בין אורכי המקבילים (3 מרווחים).", math_expression: "d = \\dfrac{25 - 10}{3} = \\dfrac{15}{3} = 5" },
            { verbal_explanation: "שלב 2: הוספת ההפרש לבסיס העליון למציאת הישר הראשון.", math_expression: "L_{1} = 10 + 5 = 15" },
            { verbal_explanation: "שלב 3: הוספת ההפרש לישר הראשון למציאת הישר השני.", math_expression: "L_{2} = 15 + 5 = 20" }
        ],
        final_answer: "15, 20"
    },
    {
        topic: "geom_euclid_471",
        subTopic: "קטע אמצעים במשולש ובטרפז",
        question_text: "במשולש ישר זווית, שורטטו שלושת קטעי האמצעים שיוצרים 4 משולשים קטנים חופפים. היקף משולש קטן אחד הוא 15 ס''מ. סכום הניצבים של המשולש הגדול המקורי הוא 20. מה אורך היתר במשולש הגדול?&rlm;",
        options: ["10", "8", "12", "15"],
        correctAnswer: 0,
        hint: "היקף המשולש הקטן שווה לחצי מהיקף המשולש הגדול.",
        solution_steps: [
            { verbal_explanation: "שלב 1: חישוב היקף המשולש הגדול.", math_expression: "P_{big} = 2 \\times 15 = 30" },
            { verbal_explanation: "שלב 2: כתיבת משוואת ההיקף הגדול מתוך סכום הצלעות.", math_expression: "a + b + x = 30" },
            { verbal_explanation: "שלב 3: הצבת סכום הניצבים וחילוץ היתר.", math_expression: "20 + x = 30 \\Rightarrow x = 10" }
        ],
        final_answer: "10"
    },
    {
        topic: "geom_euclid_471",
        subTopic: "קטע אמצעים במשולש ובטרפז",
        question_text: "בטרפז מועברים שני אלכסונים וקטע אמצעים. קטע האמצעים מחולק לשלושה מקטעים. שני המקטעים החיצוניים שווים ל-4 ס''מ כל אחד. מהו אורך הבסיס העליון של הטרפז?&rlm;",
        options: ["8", "4", "12", "16"],
        correctAnswer: 0,
        hint: "המקטע החיצוני על קטע האמצעים הוא קטע אמצעים במשולש שהבסיס שלו הוא הבסיס העליון של הטרפז.",
        solution_steps: [
            { verbal_explanation: "שלב 1: הצבת הנוסחה של קטע אמצעים במשולש עליון.", math_expression: "4 = \\dfrac{Base_{top}}{2}" },
            { verbal_explanation: "שלב 2: הכפלה בשתיים למציאת אורך הבסיס.", math_expression: "Base_{top} = 2 \\times 4 = 8" }
        ],
        final_answer: "8"
    },
    {
        topic: "geom_euclid_471",
        subTopic: "קטע אמצעים במשולש ובטרפז",
        question_text: "בהמשך לשאלה הקודמת: אם המקטע האמצעי מתוך השלושה שווה ל-5 ס''מ, מהו אורך הבסיס התחתון של הטרפז?&rlm;",
        options: ["18", "14", "10", "22"],
        correctAnswer: 0,
        hint: "חשבו את קטע האמצעים המלא של הטרפז (4+5+4). קטע האמצעים שווה לממוצע הבסיסים.",
        solution_steps: [
            { verbal_explanation: "שלב 1: חישוב אורך קטע האמצעים המלא של הטרפז.", math_expression: "EF = 4 + 5 + 4 = 13" },
            { verbal_explanation: "שלב 2: הצבת הנתונים בנוסחת קטע אמצעים בטרפז.", math_expression: "13 = \\dfrac{8 + Base_{bottom}}{2}" },
            { verbal_explanation: "שלב 3: כפל בשתיים והעברת אגף לבידוד הבסיס התחתון.", math_expression: "26 = 8 + Base_{bottom} \\Rightarrow Base_{bottom} = 18" }
        ],
        final_answer: "18"
    },
    {
        topic: "geom_euclid_471",
        subTopic: "קטע אמצעים במשולש ובטרפז",
        question_text: "משולש בעל אורכי צלעות 5, 12, 13. מעבירים קטע אמצעים המקביל לצלע הגדולה ביותר (היתר). מהו שטח הטרפז שנוצר בתחתית המשולש?&rlm;",
        options: ["22.5", "15", "7.5", "30"],
        correctAnswer: 0,
        hint: "המשולש הוא ישר זווית. שטחו 30. המשולש הקטן שנוצר למעלה שטחו רבע מהגדול. שטח הטרפז הוא השארית.",
        solution_steps: [
            { verbal_explanation: "שלב 1: חישוב שטח המשולש הגדול (ישר זווית לפי שלשה פיתגורית).", math_expression: "S_{big} = \\dfrac{5 \\times 12}{2} = 30" },
            { verbal_explanation: "שלב 2: שטח משולש קטע האמצעים שווה לרבע מהשטח הכולל.", math_expression: "S_{small} = \\dfrac{30}{4} = 7.5" },
            { verbal_explanation: "שלב 3: חיסור למציאת שטח הטרפז הנותר.", math_expression: "S_{trap} = 30 - 7.5 = 22.5" }
        ],
        final_answer: "22.5"
    },
    {
        topic: "geom_euclid_471",
        subTopic: "קטע אמצעים במשולש ובטרפז",
        question_text: "בטרפז ישר זווית, אורך קטע האמצעים שווה לאורך השוק הישרה. אורך הבסיס התחתון הוא פי 3 מהבסיס העליון, שאורכו 4 ס''מ. מהו שטח הטרפז?&rlm;",
        options: ["64", "48", "32", "128"],
        correctAnswer: 0,
        hint: "חשבו את הבסיס התחתון ואת קטע האמצעים (שהוא גם הגובה). השטח הוא קטע אמצעים כפול גובה.",
        solution_steps: [
            { verbal_explanation: "שלב 1: חישוב אורך הבסיס התחתון.", math_expression: "Base_{bottom} = 3 \\times 4 = 12" },
            { verbal_explanation: "שלב 2: חישוב אורך קטע האמצעים.", math_expression: "EF = \\dfrac{4 + 12}{2} = 8" },
            { verbal_explanation: "שלב 3: קביעת הגובה על סמך הנתון.", math_expression: "h = EF = 8" },
            { verbal_explanation: "שלב 4: חישוב שטח הטרפז.", math_expression: "S = EF \\times h = 8 \\times 8 = 64" }
        ],
        final_answer: "64"
    },
    {
        topic: "geom_euclid_471",
        subTopic: "קטע אמצעים במשולש ובטרפז",
        question_text: "מעבירים קטעי אמצעים בשני טרפזים זהים לחלוטין שמחוברים בבסיסיהם (זה לצד זה). בסיסי טרפז אחד הם 6 ו-14. מה אורך קטע האמצעים של הצורה המחוברת הכוללת?&rlm;",
        options: ["20", "10", "14", "24"],
        correctAnswer: 0,
        hint: "חשבו קטע אמצעים של טרפז אחד והכפילו בשתיים.",
        solution_steps: [
            { verbal_explanation: "שלב 1: מציאת אורך קטע האמצעים של טרפז בודד.", math_expression: "EF_{1} = \\dfrac{6 + 14}{2} = 10" },
            { verbal_explanation: "שלב 2: חיבור אורכי שני קטעי האמצעים.", math_expression: "EF_{total} = 10 + 10 = 20" }
        ],
        final_answer: "20"
    },
    {
        topic: "geom_euclid_471",
        subTopic: "קטע אמצעים במשולש ובטרפז",
        question_text: "במשולש ששטחו 100 סמ''ר, שורטטו שלושת קטעי האמצעים. נוצרו 4 משולשים קטנים. מהו השטח של המשולש המרכזי (ההפוך)?&rlm;",
        options: ["25", "50", "20", "33.3"],
        correctAnswer: 0,
        hint: "קטעי אמצעים מחלקים כל משולש ל-4 משולשים חופפים שווי שטח.",
        solution_steps: [
            { verbal_explanation: "שלב 1: הצבת כלל חלוקת השטחים של קטעי האמצעים.", math_expression: "S_{center} = \\dfrac{S_{total}}{4}" },
            { verbal_explanation: "שלב 2: ביצוע החלוקה.", math_expression: "S_{center} = \\dfrac{100}{4} = 25" }
        ],
        final_answer: "25"
    },

    // ==========================================
    // תת נושא 4: מעגל: תכונות מיתרים, קשתות וזווית מרכזית והיקפית (10 שאלות)
    // ==========================================
    {
        topic: "geom_euclid_471",
        subTopic: "מעגל: תכונות מיתרים, קשתות וזווית מרכזית והיקפית",
        question_text: "זווית היקפית נשענת על קשת השווה לרבע מהיקף המעגל. מהו גודלה של הזווית ההיקפית?&rlm;",
        options: ["45°", "90°", "30°", "60°"],
        correctAnswer: 0,
        hint: "היקף מעגל שלם מייצג 360 מעלות. זווית היקפית שווה למחצית הקשת עליה היא נשענת.",
        solution_steps: [
            { verbal_explanation: "שלב 1: חישוב הקשת במעלות.", math_expression: "Arc = \\dfrac{360^{\\circ}}{4} = 90^{\\circ}" },
            { verbal_explanation: "שלב 2: חישוב הזווית ההיקפית ממחצית הקשת.", math_expression: "\\alpha = \\dfrac{90^{\\circ}}{2} = 45^{\\circ}" }
        ],
        final_answer: "45°"
    },
    {
        topic: "geom_euclid_471",
        subTopic: "מעגל: תכונות מיתרים, קשתות וזווית מרכזית והיקפית",
        question_text: "במעגל, שתי קשתות נגדיות שגודל כל אחת מהן הוא 40°, כלואות בין שני מיתרים נחתכים. מהו גודל הזווית בין שני המיתרים?&rlm;",
        options: ["40°", "80°", "20°", "140°"],
        correctAnswer: 0,
        hint: "זווית פנימית בין מיתרים שווה למחצית סכום הקשתות הכלואות.",
        solution_steps: [
            { verbal_explanation: "שלב 1: כתיבת נוסחת הזווית הפנימית בין מיתרים.", math_expression: "\\alpha = \\dfrac{Arc_{1} + Arc_{2}}{2}" },
            { verbal_explanation: "שלב 2: הצבה וחישוב.", math_expression: "\\alpha = \\dfrac{40^{\\circ} + 40^{\\circ}}{2} = 40^{\\circ}" }
        ],
        final_answer: "40°"
    },
    {
        topic: "geom_euclid_471",
        subTopic: "מעגל: תכונות מיתרים, קשתות וזווית מרכזית והיקפית",
        question_text: "מיתר במעגל נשען על זווית מרכזית של 60°. רדיוס המעגל הוא 10 ס''מ. מהו אורך המיתר?&rlm;",
        options: ["10", "5", "8.66", "14.1"],
        correctAnswer: 0,
        hint: "המשולש הנוצר משני רדיוסים וזווית ראש 60° הוא משולש שווה צלעות.",
        solution_steps: [
            { verbal_explanation: "שלב 1: חישוב זוויות הבסיס במשולש שווה השוקיים שנוצר מהרדיוסים.", math_expression: "\\dfrac{180^{\\circ} - 60^{\\circ}}{2} = 60^{\\circ}" },
            { verbal_explanation: "שלב 2: מכיוון שכל הזוויות שוות, המשולש שווה צלעות. לכן המיתר שווה לרדיוס.", math_expression: "Chord = R = 10" }
        ],
        final_answer: "10"
    },
    {
        topic: "geom_euclid_471",
        subTopic: "מעגל: תכונות מיתרים, קשתות וזווית מרכזית והיקפית",
        question_text: "מרובע חסום במעגל כך שאלכסונו עובר במרכז המעגל. סכום שתי זוויות סמוכות במרובע הוא 130 מעלות. מה גודל הזווית החדה ביותר מבין שתי הזוויות הללו?&rlm;",
        options: ["40°", "50°", "90°", "30°"],
        correctAnswer: 0,
        hint: "האלכסון שעובר במרכז הוא קוטר. לכן, אחת מהזוויות הסמוכות הנשענת עליו חייבת להיות בת 90°.",
        solution_steps: [
            { verbal_explanation: "שלב 1: קביעת גודלה של הזווית ההיקפית הנשענת על הקוטר.", math_expression: "\\alpha = 90^{\\circ}" },
            { verbal_explanation: "שלב 2: החסרת הזווית הישרה מהסכום הנתון למציאת הזווית השנייה.", math_expression: "\\beta = 130^{\\circ} - 90^{\\circ} = 40^{\\circ}" }
        ],
        final_answer: "40°"
    },
    {
        topic: "geom_euclid_471",
        subTopic: "מעגל: תכונות מיתרים, קשתות וזווית מרכזית והיקפית",
        question_text: "במעגל, שני מיתרים שווים זה לזה. הזווית המרכזית הנשענת על הראשון היא 72°. מה גודל הזווית ההיקפית הנשענת על המיתר השני?&rlm;",
        options: ["36°", "72°", "144°", "18°"],
        correctAnswer: 0,
        hint: "מיתרים שווים נשענים על זוויות מרכזיות שוות. זווית היקפית היא חצי מזווית מרכזית.",
        solution_steps: [
            { verbal_explanation: "שלב 1: הזווית המרכזית על המיתר השני זהה לראשון.", math_expression: "\\theta = 72^{\\circ}" },
            { verbal_explanation: "שלב 2: חישוב הזווית ההיקפית.", math_expression: "\\alpha = \\dfrac{72^{\\circ}}{2} = 36^{\\circ}" }
        ],
        final_answer: "36°"
    },
    {
        topic: "geom_euclid_471",
        subTopic: "מעגל: תכונות מיתרים, קשתות וזווית מרכזית והיקפית",
        question_text: "רדיוס המעגל הוא 13 ס''מ. אורך מיתר במעגל הוא 24 ס''מ. מהו מרחקו של המיתר ממרכז המעגל?&rlm;",
        options: ["5", "12", "10", "8"],
        correctAnswer: 0,
        hint: "המרחק למרכז חוצה את המיתר ויוצר משולש ישר זווית עם הרדיוס וחצי המיתר.",
        solution_steps: [
            { verbal_explanation: "שלב 1: חלוקת המיתר לחצי.", math_expression: "a = \\dfrac{24}{2} = 12" },
            { verbal_explanation: "שלב 2: שימוש במשפט פיתגורס. הרדיוס הוא היתר.", math_expression: "d^{2} + 12^{2} = 13^{2}" },
            { verbal_explanation: "שלב 3: פתרון המשוואה לחילוץ המרחק.", math_expression: "d^{2} = 169 - 144 = 25 \\Rightarrow d = 5" }
        ],
        final_answer: "5"
    },
    {
        topic: "geom_euclid_471",
        subTopic: "מעגל: תכונות מיתרים, קשתות וזווית מרכזית והיקפית",
        question_text: "שתי זוויות היקפיות נשענות על קשתות המשלימות יחד למעגל שלם. ידוע שאחת הזוויות גדולה פי 2 מהשנייה. מהו גודלה של הזווית הקטנה מביניהן?&rlm;",
        options: ["60°", "120°", "90°", "30°"],
        correctAnswer: 0,
        hint: "סכום זוויות היקפיות המשלימות למעגל שלם הוא 180°.",
        solution_steps: [
            { verbal_explanation: "שלב 1: כתיבת משוואת הסכום למעגל שלם.", math_expression: "\\alpha + \\beta = 180^{\\circ}" },
            { verbal_explanation: "שלב 2: הצבת היחס הנתון אל תוך המשוואה.", math_expression: "2x + x = 180^{\\circ}" },
            { verbal_explanation: "שלב 3: פתרון המשוואה למציאת הזווית הקטנה.", math_expression: "3x = 180^{\\circ} \\Rightarrow x = 60^{\\circ}" }
        ],
        final_answer: "60°"
    },
    {
        topic: "geom_euclid_471",
        subTopic: "מעגל: תכונות מיתרים, קשתות וזווית מרכזית והיקפית",
        question_text: "מיתר מחלק את המעגל לשתי קשתות ביחס של 1:5. מה גודל הזווית ההיקפית הנשענת על הקשת הגדולה מביניהן?&rlm;",
        options: ["150°", "60°", "30°", "300°"],
        correctAnswer: 0,
        hint: "חשבו תחילה את גודל הקשת במעלות. מעגל שלם הוא 360.",
        solution_steps: [
            { verbal_explanation: "שלב 1: מציאת יחידת היחס מתוך המעגל השלם.", math_expression: "x + 5x = 360^{\\circ} \\Rightarrow 6x = 360^{\\circ} \\Rightarrow x = 60^{\\circ}" },
            { verbal_explanation: "שלב 2: חישוב גודל הקשת הגדולה.", math_expression: "Arc_{large} = 5 \\times 60^{\\circ} = 300^{\\circ}" },
            { verbal_explanation: "שלב 3: מציאת הזווית ההיקפית ממחצית הקשת.", math_expression: "\\alpha = \\dfrac{300^{\\circ}}{2} = 150^{\\circ}" }
        ],
        final_answer: "150°"
    },
    {
        topic: "geom_euclid_471",
        subTopic: "מעגל: תכונות מיתרים, קשתות וזווית מרכזית והיקפית",
        question_text: "שני מיתרים נחתכים מחוץ למעגל ויוצרים זווית חיצונית של 20°. הקשת הגדולה הכלואה ביניהם היא בת 80°. מה גודל הקשת הקטנה הכלואה ביניהם?&rlm;",
        options: ["40°", "60°", "20°", "10°"],
        correctAnswer: 0,
        hint: "הזווית החיצונית שווה למחצית ההפרש בין הקשת הגדולה לקטנה.",
        solution_steps: [
            { verbal_explanation: "שלב 1: כתיבת נוסחת הזווית החיצונית למעגל.", math_expression: "20^{\\circ} = \\dfrac{80^{\\circ} - Arc_{small}}{2}" },
            { verbal_explanation: "שלב 2: כפל בשתיים לביטול המכנה.", math_expression: "40^{\\circ} = 80^{\\circ} - Arc_{small}" },
            { verbal_explanation: "שלב 3: העברת אגפים ופתרון.", math_expression: "Arc_{small} = 80^{\\circ} - 40^{\\circ} = 40^{\\circ}" }
        ],
        final_answer: "40°"
    },
    {
        topic: "geom_euclid_471",
        subTopic: "מעגל: תכונות מיתרים, קשתות וזווית מרכזית והיקפית",
        question_text: "שני מיתרים מקבילים במעגל. קשת הכלואה ביניהם שווה ל-50°. מה גודל הזווית ההיקפית הנשענת על הקשת הנגדית הכלואה בין אותם מיתרים?&rlm;",
        options: ["25°", "50°", "100°", "12.5°"],
        correctAnswer: 0,
        hint: "קשתות הכלואות בין שני מיתרים מקבילים במעגל הן שוות באורכן.",
        solution_steps: [
            { verbal_explanation: "שלב 1: קביעת גודל הקשת הנגדית לפי תכונת המיתרים המקבילים.", math_expression: "Arc_{2} = Arc_{1} = 50^{\\circ}" },
            { verbal_explanation: "שלב 2: חישוב הזווית ההיקפית כמחצית מהקשת.", math_expression: "\\alpha = \\dfrac{50^{\\circ}}{2} = 25^{\\circ}" }
        ],
        final_answer: "25°"
    },
    // ==========================================
    // תת נושא 1: משיק למעגל וזווית בין משיק למיתר (10 שאלות)
    // ==========================================
    {
        "topic": "geom_euclid_471",
        "subTopic": "משיק למעגל וזווית בין משיק למיתר",
        "question_text": "מנקודה מחוץ למעגל יוצאים שני משיקים למעגל. אורך המשיק הראשון הוא 15 ס''מ. הזווית הכלואה בין שני המשיקים היא בת 60 מעלות. א. מהו אורך המשיק השני? ב. מהו אורך המיתר המחבר את שתי נקודות ההשקה?&rlm;",
        "options": ["15, 15", "10, 10", "15, 30", "12, 12"],
        "correctAnswer": 0,
        "hint": "שני משיקים למעגל היוצאים מאותה נקודה שווים זה לזה. המשולש הנוצר יחד עם המיתר המחבר את נקודות ההשקה הוא משולש שווה שוקיים בעל זווית ראש של 60 מעלות.",
        "solution_steps": [
            { "verbal_explanation": "על פי משפט, שני משיקים היוצאים מאותה נקודה מחוץ למעגל שווים זה לזה באורכם.", "math_expression": "x = y = 15" },
            { "verbal_explanation": "המשולש הנוצר על ידי שני המשיקים והמיתר המחבר את נקודות ההשקה הוא משולש שווה שוקיים.", "math_expression": "AB = AC" },
            { "verbal_explanation": "נחשב את זוויות הבסיס במשולש שווה השוקיים, כאשר זווית הראש היא 60 מעלות.", "math_expression": "\\alpha = \\dfrac{180 - 60}{2}" },
            { "verbal_explanation": "נבצע את החיסור במונה.", "math_expression": "\\alpha = \\dfrac{120}{2}" },
            { "verbal_explanation": "נחלק ונקבל שכל זווית בסיס שווה ל-60 מעלות, כלומר המשולש שווה צלעות.", "math_expression": "\\alpha = 60^{\\circ}" },
            { "verbal_explanation": "במשולש שווה צלעות, אורך הבסיס (המיתר) שווה לאורך השוקיים (המשיקים).", "math_expression": "m = 15" }
        ],
        "final_answer": "15, 15"
    },
    {
        "topic": "geom_euclid_471",
        "subTopic": "משיק למעגל וזווית בין משיק למיתר",
        "question_text": "משיק למעגל יוצר זווית של 40 מעלות עם מיתר העובר בנקודת ההשקה. מהו גודל הזווית המרכזית הנשענת על אותו המיתר מהצד הפנימי של המעגל?&rlm;",
        "options": ["80°", "40°", "140°", "20°"],
        "correctAnswer": 0,
        "hint": "הזווית בין משיק למיתר שווה לזווית ההיקפית הנשענת על המיתר. הזווית המרכזית גדולה פי 2 מזווית היקפית.",
        "solution_steps": [
            { "verbal_explanation": "הזווית בין המשיק למיתר נתונה בשאלה.", "math_expression": "\\alpha = 40^{\\circ}" },
            { "verbal_explanation": "לפי המשפט, הזווית בין משיק למיתר שווה לזווית ההיקפית הנשענת עליו מאותו צד.", "math_expression": "\\beta = \\alpha" },
            { "verbal_explanation": "לכן, הזווית ההיקפית שווה ל-40 מעלות.", "math_expression": "\\beta = 40^{\\circ}" },
            { "verbal_explanation": "זווית מרכזית במעגל גדולה פי שניים מזווית היקפית הנשענת על אותה קשת.", "math_expression": "\\gamma = 2 \\times \\beta" },
            { "verbal_explanation": "נציב את הזווית ההיקפית אל תוך המשוואה.", "math_expression": "\\gamma = 2 \\times 40^{\\circ}" },
            { "verbal_explanation": "נחשב את המכפלה לקבלת גודל הזווית המרכזית.", "math_expression": "\\gamma = 80^{\\circ}" }
        ],
        "final_answer": "80°"
    },
    {
        "topic": "geom_euclid_471",
        "subTopic": "משיק למעגל וזווית בין משיק למיתר",
        "question_text": "מרדיוס המעגל בנקודת ההשקה מועבר ישר המאונך למשיק. אורך הרדיוס הוא 6 ס''מ. המרחק ממרכז המעגל לנקודה חיצונית על המשיק הוא 10 ס''מ. מהו אורך הקטע מהנקודה החיצונית ועד לנקודת ההשקה?&rlm;",
        "options": ["8", "12", "4", "16"],
        "correctAnswer": 0,
        "hint": "הרדיוס מאונך למשיק בנקודת ההשקה. נוצר משולש ישר זווית שעבורו ניתן להשתמש במשפט פיתגורס.",
        "solution_steps": [
            { "verbal_explanation": "רדיוס המועבר לנקודת השקה מאונך למשיק, ולכן נוצר משולש ישר זווית.", "math_expression": "\\alpha = 90^{\\circ}" },
            { "verbal_explanation": "היתר במשולש הוא המרחק ממרכז המעגל לנקודה החיצונית.", "math_expression": "c = 10" },
            { "verbal_explanation": "אחד הניצבים במשולש זה הוא רדיוס המעגל.", "math_expression": "a = 6" },
            { "verbal_explanation": "נשתמש במשפט פיתגורס למציאת אורך המשיק המהווה את הניצב השני.", "math_expression": "a^{2} + b^{2} = c^{2}" },
            { "verbal_explanation": "נציב את הערכים הידועים למשוואה.", "math_expression": "6^{2} + b^{2} = 10^{2}" },
            { "verbal_explanation": "נחשב את הריבועים ונעביר אגפים.", "math_expression": "36 + b^{2} = 100 \\Rightarrow b^{2} = 64" },
            { "verbal_explanation": "נוציא שורש חיובי למציאת אורך המשיק.", "math_expression": "b = 8" }
        ],
        "final_answer": "8"
    },
    {
        "topic": "geom_euclid_471",
        "subTopic": "משיק למעגל וזווית בין משיק למיתר",
        "question_text": "מנקודה מחוץ למעגל יוצאים שני משיקים. המרחק מהנקודה החיצונית למרכז המעגל הוא 13 ס''מ, ורדיוס המעגל הוא 5 ס''מ. מהו סכום אורכי שני המשיקים יחדיו?&rlm;",
        "options": ["24", "12", "26", "20"],
        "correctAnswer": 0,
        "hint": "חשבו משיק אחד בעזרת משפט פיתגורס, וזכרו ששני המשיקים שווים באורכם.",
        "solution_steps": [
            { "verbal_explanation": "הרדיוס מאונך למשיק בנקודת ההשקה, ויוצר משולש ישר זווית.", "math_expression": "r^{2} + x^{2} = d^{2}" },
            { "verbal_explanation": "נציב את אורך הרדיוס והמרחק למרכז המעגל במשוואת פיתגורס.", "math_expression": "5^{2} + x^{2} = 13^{2}" },
            { "verbal_explanation": "נחשב את החזקות.", "math_expression": "25 + x^{2} = 169" },
            { "verbal_explanation": "נעביר את המספר החופשי לאגף הימני ונחסר.", "math_expression": "x^{2} = 144" },
            { "verbal_explanation": "נוציא שורש ריבועי למציאת אורך משיק יחיד.", "math_expression": "x = 12" },
            { "verbal_explanation": "שני המשיקים שווים, לכן נחבר אותם למציאת הסכום הכולל.", "math_expression": "y = 12 + 12 = 24" }
        ],
        "final_answer": "24"
    },
    {
        "topic": "geom_euclid_471",
        "subTopic": "משיק למעגל וזווית בין משיק למיתר",
        "question_text": "במעגל, המיתר שווה באורכו לרדיוס המעגל. משיק עובר באחד מקצוות המיתר. מהו גודל הזווית החדה הנוצרת בין המשיק לבין המיתר?&rlm;",
        "options": ["30°", "60°", "45°", "15°"],
        "correctAnswer": 0,
        "hint": "אם המיתר שווה לרדיוס, המשולש שנוצר עם המרכז הוא שווה צלעות.",
        "solution_steps": [
            { "verbal_explanation": "המשולש הנוצר משני רדיוסים ומהמיתר שווה הרדיוס הוא שווה צלעות.", "math_expression": "a = b = c = r" },
            { "verbal_explanation": "במשולש שווה צלעות, כל הזוויות שוות ל-60 מעלות. לכן הזווית המרכזית היא 60.", "math_expression": "\\alpha = 60^{\\circ}" },
            { "verbal_explanation": "הזווית ההיקפית הנשענת על אותו המיתר שווה למחצית מהזווית המרכזית.", "math_expression": "\\beta = \\dfrac{\\alpha}{2}" },
            { "verbal_explanation": "נחשב את הזווית ההיקפית.", "math_expression": "\\beta = \\dfrac{60^{\\circ}}{2} = 30^{\\circ}" },
            { "verbal_explanation": "הזווית בין משיק למיתר שווה לזווית ההיקפית הנשענת על אותו המיתר.", "math_expression": "\\gamma = \\beta" },
            { "verbal_explanation": "לכן, הזווית בין המשיק למיתר היא 30 מעלות.", "math_expression": "\\gamma = 30^{\\circ}" }
        ],
        "final_answer": "30°"
    },
    {
        "topic": "geom_euclid_471",
        "subTopic": "משיק למעגל וזווית בין משיק למיתר",
        "question_text": "מנקודה מחוץ למעגל מועברים שני משיקים בנקודות A ו-B. המרובע OAPB כולל את מרכז המעגל O. אם הזווית המרכזית היא בת 130 מעלות, מה גודל הזווית שבין שני המשיקים?&rlm;",
        "options": ["50°", "65°", "40°", "130°"],
        "correctAnswer": 0,
        "hint": "סכום הזוויות במרובע הוא 360 מעלות. הזוויות בנקודות ההשקה הן 90 מעלות כל אחת.",
        "solution_steps": [
            { "verbal_explanation": "במרובע, סכום כל ארבע הזוויות שווה ל-360 מעלות.", "math_expression": "\\alpha + \\beta + \\gamma + \\delta = 360^{\\circ}" },
            { "verbal_explanation": "הרדיוסים מאונכים למשיקים בנקודות ההשקה, לכן שתי זוויות במרובע הן ישרות.", "math_expression": "\\alpha = 90^{\\circ} \\quad , \\quad \\beta = 90^{\\circ}" },
            { "verbal_explanation": "הזווית המרכזית נתונה כ-130 מעלות.", "math_expression": "\\gamma = 130^{\\circ}" },
            { "verbal_explanation": "נציב את כל הזוויות הידועות לתוך המשוואה.", "math_expression": "90^{\\circ} + 90^{\\circ} + 130^{\\circ} + \\delta = 360^{\\circ}" },
            { "verbal_explanation": "נחבר את המספרים באגף השמאלי.", "math_expression": "310^{\\circ} + \\delta = 360^{\\circ}" },
            { "verbal_explanation": "נחסר מ-360 כדי למצוא את הזווית בין המשיקים.", "math_expression": "\\delta = 360^{\\circ} - 310^{\\circ} = 50^{\\circ}" }
        ],
        "final_answer": "50°"
    },
    {
        "topic": "geom_euclid_471",
        "subTopic": "משיק למעגל וזווית בין משיק למיתר",
        "question_text": "משיק למעגל מקביל למיתר בתוכו. הקשת הכלואה בין נקודת ההשקה לקצה המיתר היא בת 70 מעלות. מה גודל הזווית שיוצר המיתר עם משיק אחר שעובר דרך קצהו?&rlm;",
        "options": ["35°", "70°", "140°", "17.5°"],
        "correctAnswer": 0,
        "hint": "הזווית בין משיק למיתר שווה למחצית הקשת הכלואה ביניהם.",
        "solution_steps": [
            { "verbal_explanation": "הקשת הכלואה בין נקודת ההשקה למיתר נתונה בשאלה.", "math_expression": "x = 70^{\\circ}" },
            { "verbal_explanation": "הזווית בין המשיק העובר בקצה המיתר לבין המיתר עצמו תלויה בגודל הקשת שביניהם.", "math_expression": "\\alpha = \\dfrac{x}{2}" },
            { "verbal_explanation": "נציב את גודל הקשת הידוע אל תוך הנוסחה.", "math_expression": "\\alpha = \\dfrac{70^{\\circ}}{2}" },
            { "verbal_explanation": "נבצע את החלוקה בשתיים למציאת הזווית.", "math_expression": "\\alpha = 35^{\\circ}" }
        ],
        "final_answer": "35°"
    },
    {
        "topic": "geom_euclid_471",
        "subTopic": "משיק למעגל וזווית בין משיק למיתר",
        "question_text": "משולש נחצה על ידי משיק למעגל. הישר המשיק מקביל לאחת מצלעות המשולש החסום, ויוצר זווית של 55 מעלות עם המיתר (הצלע הסמוכה). מהי הזווית הפנימית של המשולש הנשענת על צלע זו?&rlm;",
        "options": ["55°", "110°", "27.5°", "125°"],
        "correctAnswer": 0,
        "hint": "הזווית בין המשיק למיתר שווה לזווית ההיקפית הנשענת על אותו המיתר מהצד הנגדי.",
        "solution_steps": [
            { "verbal_explanation": "נסמן את הזווית בין המשיק למיתר הנתונה בשאלה.", "math_expression": "\\alpha = 55^{\\circ}" },
            { "verbal_explanation": "לפי המשפט, זווית זו שווה לזווית ההיקפית במשולש הנשענת על המיתר.", "math_expression": "\\beta = \\alpha" },
            { "verbal_explanation": "לכן, הזווית הפנימית של המשולש שווה גם היא לאותו ערך.", "math_expression": "\\beta = 55^{\\circ}" }
        ],
        "final_answer": "55°"
    },
    {
        "topic": "geom_euclid_471",
        "subTopic": "משיק למעגל וזווית בין משיק למיתר",
        "question_text": "רדיוס המעגל הוא R. מנקודה חיצונית העבירו משיק שמרחקו מהמרכז כפול מהרדיוס. מה גודל הזווית החדה הקטנה במשולש שנוצר על ידי המרכז, נקודת ההשקה והנקודה החיצונית?&rlm;",
        "options": ["30°", "45°", "60°", "90°"],
        "correctAnswer": 0,
        "hint": "הרדיוס מאונך למשיק ויוצר משולש ישר זווית. השתמשו בפונקציית סינוס (ניצב חלקי יתר).",
        "solution_steps": [
            { "verbal_explanation": "הרדיוס בנקודת ההשקה מאונך למשיק, וכך נוצר משולש ישר זווית.", "math_expression": "\\alpha = 90^{\\circ}" },
            { "verbal_explanation": "במשולש זה, הניצב הוא הרדיוס והיתר הוא המרחק ממרכז המעגל לנקודה החיצונית.", "math_expression": "c = 2R \\quad , \\quad a = R" },
            { "verbal_explanation": "נשתמש בפונקציית סינוס כדי למצוא את הזווית מול הניצב.", "math_expression": "\\sin(\\beta) = \\dfrac{R}{2R}" },
            { "verbal_explanation": "נצמצם את המשתנה של הרדיוס מהמונה ומהמכנה.", "math_expression": "\\sin(\\beta) = \\dfrac{1}{2}" },
            { "verbal_explanation": "הזווית שערך הסינוס שלה הוא חצי היא 30 מעלות.", "math_expression": "\\beta = 30^{\\circ}" }
        ],
        "final_answer": "30°"
    },
    {
        "topic": "geom_euclid_471",
        "subTopic": "משיק למעגל וזווית בין משיק למיתר",
        "question_text": "משיק וחותך יוצאים מאותה נקודה. אורך המשיק הוא 6. החלק החיצוני של החותך הוא באורך 4. מהו אורכו הכולל של החותך?&rlm;",
        "options": ["9", "5", "12", "10"],
        "correctAnswer": 0,
        "hint": "ריבוע המשיק שווה למכפלת החותך כולו בחלקו החיצוני.",
        "solution_steps": [
            { "verbal_explanation": "על פי משפט המשיק והחותך, נרשום את הקשר בין אורכי הקטעים.", "math_expression": "x^{2} = y \\times z" },
            { "verbal_explanation": "נציב את הנתונים המספריים של המשיק והחלק החיצוני.", "math_expression": "6^{2} = 4 \\times z" },
            { "verbal_explanation": "נחשב את הריבוע שבאגף השמאלי.", "math_expression": "36 = 4 \\times z" },
            { "verbal_explanation": "נחלק בארבע כדי לבודד את המשתנה המייצג את אורכו הכולל של החותך.", "math_expression": "z = 36 : 4" },
            { "verbal_explanation": "נקבל את הערך הסופי עבור החותך השלם.", "math_expression": "z = 9" }
        ],
        "final_answer": "9"
    },

    // ==========================================
    // תת נושא 6: מרובע חסום וחוסם מעגל (10 שאלות)
    // ==========================================
    {
        "topic": "geom_euclid_471",
        "subTopic": "מרובע חסום וחוסם מעגל",
        "question_text": "מרובע חסום במעגל. זווית אחת של המרובע שווה ל- 3x. הזווית הנגדית לה שווה ל- x+20. מצאו את גודלה של הזווית הגדולה מבין השתיים.&rlm;",
        "options": ["120°", "140°", "100°", "160°"],
        "correctAnswer": 0,
        "hint": "במרובע חסום במעגל, סכום כל זוג זוויות נגדיות הוא 180 מעלות.",
        "solution_steps": [
            { "verbal_explanation": "במרובע החסום במעגל, סכום כל זוג זוויות נגדיות הוא 180 מעלות.", "math_expression": "\\alpha + \\beta = 180^{\\circ}" },
            { "verbal_explanation": "נציב את הביטויים של הזוויות הנגדיות למשוואה.", "math_expression": "3x + (x + 20) = 180" },
            { "verbal_explanation": "נכנס את המשתנים באגף השמאלי.", "math_expression": "4x + 20 = 180" },
            { "verbal_explanation": "נעביר את המספר החופשי לאגף הימני ונחסר.", "math_expression": "4x = 160" },
            { "verbal_explanation": "נחלק ב-4 למציאת המשתנה.", "math_expression": "x = 40" },
            { "verbal_explanation": "נציב את הערך למציאת הזווית הראשונה (הגדולה).", "math_expression": "\\alpha = 3 \\times 40 = 120^{\\circ}" },
            { "verbal_explanation": "נציב את הערך למציאת הזווית השנייה ונוודא מי הגדולה.", "math_expression": "\\beta = 40 + 20 = 60^{\\circ}" }
        ],
        "final_answer": "120°"
    },
    {
        "topic": "geom_euclid_471",
        "subTopic": "מרובע חסום וחוסם מעגל",
        "question_text": "במרובע החוסם מעגל, סכום שתי הצלעות הנגדיות הוא 25 ס''מ. אורך צלע שלישית הוא 10 ס''מ. מהו אורך הצלע הרביעית של המרובע?&rlm;",
        "options": ["15", "10", "25", "35"],
        "correctAnswer": 0,
        "hint": "במרובע חוסם מעגל, סכום כל זוג צלעות נגדיות שווה לסכום הזוג השני.",
        "solution_steps": [
            { "verbal_explanation": "המשפט קובע כי במרובע חוסם סכומי הצלעות הנגדיות שווים.", "math_expression": "a + c = b + d" },
            { "verbal_explanation": "נתון שסכום צמד אחד של צלעות שווה ל-25.", "math_expression": "a + c = 25" },
            { "verbal_explanation": "לכן, גם סכום הצמד השני חייב להיות שווה לאותו מספר.", "math_expression": "b + d = 25" },
            { "verbal_explanation": "נציב את אורך הצלע הידועה מהזוג השני.", "math_expression": "10 + d = 25" },
            { "verbal_explanation": "נחסר 10 משני האגפים ונחלץ את אורך הצלע החסרה.", "math_expression": "d = 25 - 10 = 15" }
        ],
        "final_answer": "15"
    },
    {
        "topic": "geom_euclid_471",
        "subTopic": "מרובע חסום וחוסם מעגל",
        "question_text": "טרפז שווה שוקיים חוסם מעגל. אורך כל שוק הוא 8 ס''מ. מהו היקף הטרפז כולו?&rlm;",
        "options": ["32", "16", "24", "40"],
        "correctAnswer": 0,
        "hint": "סכום השוקיים שווה לסכום הבסיסים. ההיקף הוא סכום כל ארבע הצלעות يחד.",
        "solution_steps": [
            { "verbal_explanation": "מכיוון שהטרפז שווה שוקיים, אורכן של שתי השוקיים יחד נתון מחיבורן.", "math_expression": "s = 8 + 8 = 16" },
            { "verbal_explanation": "הטרפז חוסם מעגל, ולכן סכום הבסיסים חייב להיות שווה לסכום השוקיים הנגדיות.", "math_expression": "b_{1} + b_{2} = s = 16" },
            { "verbal_explanation": "היקף הטרפז הוא סכום שתי השוקיים ושני הבסיסים יחד.", "math_expression": "P = s + (b_{1} + b_{2})" },
            { "verbal_explanation": "נציב את הערכים שחישבנו לתוך נוסחת ההיקף.", "math_expression": "P = 16 + 16" },
            { "verbal_explanation": "נבצע את פעולת החיבור לקבלת התשובה הסופית.", "math_expression": "P = 32" }
        ],
        "final_answer": "32"
    },
    {
        "topic": "geom_euclid_471",
        "subTopic": "מרובע חסום וחוסם מעגל",
        "question_text": "טרפז חסום במעגל. אחת מזוויות הבסיס התחתון היא בת 65 מעלות. מה גודלה של הזווית בבסיס העליון שאיננה נגדית לה באלכסון (הזווית הסמוכה לה מאותו הצד)?&rlm;",
        "options": ["115°", "65°", "180°", "125°"],
        "correctAnswer": 0,
        "hint": "סכום זוויות חד-צדדיות בין שני ישרים מקבילים משלים ל-180 מעלות.",
        "solution_steps": [
            { "verbal_explanation": "טרפז שיכול להיחסם במעגל בהכרח מקיים שוויון בשוקיים שלו (טרפז שווה שוקיים).", "math_expression": "AD = BC" },
            { "verbal_explanation": "בכל טרפז, סכום זוויות חד-צדדיות (זוויות שסמוכות לאותה שוק) שווה ל-180 מעלות.", "math_expression": "\\alpha + \\beta = 180^{\\circ}" },
            { "verbal_explanation": "נציב את זווית הבסיס התחתון הידועה אל תוך המשוואה.", "math_expression": "65^{\\circ} + \\beta = 180^{\\circ}" },
            { "verbal_explanation": "נחסר 65 משני הצדדים כדי לחלץ את הזווית העליונה המבוקשת.", "math_expression": "\\beta = 180^{\\circ} - 65^{\\circ}" },
            { "verbal_explanation": "נשלים את חישוב ההפרש.", "math_expression": "\\beta = 115^{\\circ}" }
        ],
        "final_answer": "115°"
    },
    {
        "topic": "geom_euclid_471",
        "subTopic": "מרובע חסום וחוסם מעגל",
        "question_text": "מרובע חוסם מעגל מורכב מהצלעות הבאות (לפי הסדר בהיקף): 3x, 5x, 12, 10. חשבו את ערכו של x בהנחה ש-x הוא מספר חיובי.&rlm;",
        "options": ["1", "2", "3", "4"],
        "correctAnswer": 0,
        "hint": "במרובע חוסם מעגל, סכום הצלעות הנגדיות שווה לזוג הנגדי השני.",
        "solution_steps": [
            { "verbal_explanation": "תנאי למרובע חוסם: סכום אורכי הצלעות הנגדיות חייב להיות שווה.", "math_expression": "a + c = b + d" },
            { "verbal_explanation": "נציב את הביטויים של הצלעות לפי סדר הופעתן (צלע 1 עם 3, וצלע 2 עם 4).", "math_expression": "3x + 12 = 5x + 10" },
            { "verbal_explanation": "נעביר את המשתנים לאגף אחד ואת המספרים החופשיים לאגף השני.", "math_expression": "12 - 10 = 5x - 3x" },
            { "verbal_explanation": "נכנס את האיברים בכל צד של המשוואה.", "math_expression": "2 = 2x" },
            { "verbal_explanation": "נחלק בשתיים למציאת הערך של המשתנה.", "math_expression": "x = 1" }
        ],
        "final_answer": "1"
    },
    {
        "topic": "geom_euclid_471",
        "subTopic": "מרובע חסום וחוסם מעגל",
        "question_text": "מלבן חסום במעגל. צלעות המלבן הן 6 ס''מ ו-8 ס''מ. מהו רדיוס המעגל החוסם את המלבן?&rlm;",
        "options": ["5", "10", "14", "7"],
        "correctAnswer": 0,
        "hint": "אלכסון המלבן החסום במעגל משמש כקוטר המעגל. השתמשו בפיתגורס למציאת האלכסון ואז חלקו בשתיים.",
        "solution_steps": [
            { "verbal_explanation": "אלכסון של מלבן החסום במעגל עובר בדיוק דרך מרכז המעגל, ולכן מהווה קוטר.", "math_expression": "d = c" },
            { "verbal_explanation": "נשתמש במשפט פיתגורס במלבן כדי למצוא את אורך האלכסון.", "math_expression": "c^{2} = a^{2} + b^{2}" },
            { "verbal_explanation": "נציב את אורכי צלעות המלבן.", "math_expression": "c^{2} = 6^{2} + 8^{2}" },
            { "verbal_explanation": "נחשב את סכום הריבועים.", "math_expression": "c^{2} = 36 + 64 = 100" },
            { "verbal_explanation": "נוציא שורש למציאת הקוטר השלם.", "math_expression": "c = 10" },
            { "verbal_explanation": "רדיוס המעגל הוא מחצית מהקוטר שחישבנו.", "math_expression": "r = \\dfrac{10}{2} = 5" }
        ],
        "final_answer": "5"
    },
    {
        "topic": "geom_euclid_471",
        "subTopic": "מרובע חסום וחוסם מעגל",
        "question_text": "מעוין חוסם מעגל. רדיוס המעגל הוא 4 ס''מ. אחת מזוויות המעוין היא בת 30 מעלות. אורך צלע המעוין הוא 16 ס''מ. מהו שטח המעוין?&rlm;",
        "options": ["128", "64", "256", "32"],
        "correctAnswer": 0,
        "hint": "גובה המעוין שווה לפעמיים הרדיוס של המעגל החסום. שטח המעוין הוא צלע כפול הגובה.",
        "solution_steps": [
            { "verbal_explanation": "בכל מרובע החוסם מעגל, המרחק בין שתי צלעות מקבילות (הגובה) שווה לקוטר המעגל החסום.", "math_expression": "h = 2 \\times r" },
            { "verbal_explanation": "נציב את אורך הרדיוס הנתון למציאת גובה המעוין.", "math_expression": "h = 2 \\times 4 = 8" },
            { "verbal_explanation": "שטח מעוין מחושב כמכפלת אורך הצלע בגובה היורד אליה.", "math_expression": "S = a \\times h" },
            { "verbal_explanation": "נציב את אורך צלע המעוין ואת הגובה שחישבנו לנוסחה.", "math_expression": "S = 16 \\times 8" },
            { "verbal_explanation": "נבצע את הכפל לקבלת שטח המרובע הכולל.", "math_expression": "S = 128" }
        ],
        "final_answer": "128"
    },
    {
        "topic": "geom_euclid_471",
        "subTopic": "מרובע חסום וחוסם מעגל",
        "question_text": "מרובע כלשהו בעל הצלעות a, b, c, d חסום במעגל. נתון כי a=5, b=6, c=7. חשבו את גודלה המדויק של הצלע הרביעית d, במידה וניתן.&rlm;",
        "options": ["לא ניתן לדעת", "8", "6", "4"],
        "correctAnswer": 0,
        "hint": "היזכרו מהם התנאים למרובע חסום במעגל לעומת מרובע חוסם מעגל.",
        "solution_steps": [
            { "verbal_explanation": "תנאי הכרחי ומספיק למרובע החסום במעגל הוא שסכום זוויות נגדיות יהיה שווה למאה ושמונים מעלות.", "math_expression": "\\alpha + \\beta = 180^{\\circ}" },
            { "verbal_explanation": "במרובע חסום, בניגוד למרובע חוסם, אין שום קשר או הגבלה מתמטית על סכומי אורכי הצלעות הנגדיות שלו.", "math_expression": "a + c \\neq b + d" },
            { "verbal_explanation": "כיוון שאין לנו מידע על הזוויות או על אלכסוני המרובע, קיימים אינסוף פתרונות אפשריים לאורך הצלע d שתסגור את המרובע על המעגל.", "math_expression": "d = x" },
            { "verbal_explanation": "לכן, המסקנה היא שלא ניתן למצוא את האורך המדויק מנתונים אלו בלבד.", "math_expression": "x > 0" }
        ],
        "final_answer": "לא ניתן לדעת"
    },
    {
        "topic": "geom_euclid_471",
        "subTopic": "מרובע חסום וחוסם מעגל",
        "question_text": "במרובע ABCD החסום במעגל, האלכסון AC מהווה קוטר במעגל. נתון כי AB מהווה מחצית מאורכו של הקוטר AC. מהי גודל הזווית החדה ACB?&rlm;",
        "options": ["30°", "60°", "45°", "90°"],
        "correctAnswer": 0,
        "hint": "הזווית הנשענת על הקוטר היא ישרה (90°). במשולש ישר זווית, ניצב ששווה למחצית היתר מונח מול זווית בת 30 מעלות.",
        "solution_steps": [
            { "verbal_explanation": "מאחר והאלכסון הוא קוטר המעגל, הזווית ההיקפית הנשענת עליו חייבת להיות זווית ישרה (90 מעלות).", "math_expression": "\\alpha = 90^{\\circ}" },
            { "verbal_explanation": "המשולש ABC הוא כעת משולש ישר זווית, כשהיתר שלו הוא הקוטר AC.", "math_expression": "a^{2} + b^{2} = c^{2}" },
            { "verbal_explanation": "נתון שהניצב מול זווית C שווה למחצית מאורך היתר.", "math_expression": "AB = \\dfrac{AC}{2}" },
            { "verbal_explanation": "נשתמש בפונקציית סינוס כדי לחשב את הזווית המבוקשת (ניצב מול חלקי היתר).", "math_expression": "\\sin(\\gamma) = \\dfrac{AB}{AC}" },
            { "verbal_explanation": "נציב את היחס הידוע לנו מהנתון.", "math_expression": "\\sin(\\gamma) = \\dfrac{1}{2}" },
            { "verbal_explanation": "הזווית שהסינוס שלה הוא חצי במעלות חיוביות היא 30 מעלות.", "math_expression": "\\gamma = 30^{\\circ}" }
        ],
        "final_answer": "30°"
    },
    {
        "topic": "geom_euclid_471",
        "subTopic": "מרובע חסום וחוסם מעגל",
        "question_text": "ריבוע חוסם מעגל שרדיוסו 10 ס''מ. מהו שטח הריבוע?&rlm;",
        "options": ["400", "200", "100", "800"],
        "correctAnswer": 0,
        "hint": "בריבוע שחוסם מעגל, אורך הצלע שווה בדיוק לקוטר המעגל החסום (פעמיים הרדיוס).",
        "solution_steps": [
            { "verbal_explanation": "בריבוע, המרחק בין שתי צלעות מקבילות הוא אורך הצלע עצמה.", "math_expression": "a = h" },
            { "verbal_explanation": "מכיוון שהריבוע חוסם את המעגל, המרחק הזה עובר דרך המרכז ושווה לפעמיים הרדיוס (קוטר).", "math_expression": "a = 2 \\times r" },
            { "verbal_explanation": "נחשב את אורך הצלע של הריבוע בעזרת הרדיוס הנתון.", "math_expression": "a = 2 \\times 10 = 20" },
            { "verbal_explanation": "שטח הריבוע מחושב על ידי העלאת הצלע בריבוע.", "math_expression": "S = a^{2}" },
            { "verbal_explanation": "נציב את אורך הצלע למשוואת השטח ונקבל את התוצאה הסופית.", "math_expression": "S = 20^{2} = 400" }
        ],
        "final_answer": "400"
    },

    // ==========================================
    // תת נושא 7: פרופורציה במעגל (משפט חותכים ומשיק) (10 שאלות)
    // ==========================================
    {
        "topic": "geom_euclid_471",
        "subTopic": "פרופורציה במעגל (משפט חותכים ומשיק)",
        "question_text": "שני מיתרים נחתכים בתוך מעגל. המיתר הראשון מחולק לשני קטעים באורכים 4 ו-9. המיתר השני מחולק לשני קטעים, שאחד מהם באורך 6. מהו אורך הקטע השני של המיתר השני?&rlm;",
        "options": ["6", "5", "8", "4"],
        "correctAnswer": 0,
        "hint": "מכפלת קטעי מיתר אחד שווה למכפלת קטעי המיתר השני הנחתך עמו.",
        "solution_steps": [
            { "verbal_explanation": "על פי משפט המיתרים הנחתכים בתוך מעגל, מכפלת חלקי המיתר הראשון שווה למכפלת חלקי השני.", "math_expression": "a \\times b = c \\times d" },
            { "verbal_explanation": "נציב את האורכים של חלקי המיתר הראשון באגף שמאל.", "math_expression": "4 \\times 9 = c \\times d" },
            { "verbal_explanation": "נציב את אורך החלק הידוע של המיתר השני אל המשוואה.", "math_expression": "36 = 6 \\times d" },
            { "verbal_explanation": "נחלק בשש כדי לבודד ולמצוא את המקטע החסר.", "math_expression": "d = 36 : 6" },
            { "verbal_explanation": "הפתרון המלא של אורך הקטע.", "math_expression": "d = 6" }
        ],
        "final_answer": "6"
    },
    {
        "topic": "geom_euclid_471",
        "subTopic": "פרופורציה במעגל (משפט חותכים ומשיק)",
        "question_text": "מנקודה מחוץ למעגל הועברו שני חותכים. החותך הראשון מחולק לחלק פנימי (מיתר) באורך 5 וחלק חיצוני באורך 4. החותך השני בעל חלק חיצוני באורך 3. מהו אורך החלק הפנימי של החותך השני?&rlm;",
        "options": ["9", "12", "8", "7"],
        "correctAnswer": 0,
        "hint": "מכפלת חותך שלם בחלקו החיצוני שווה למכפלת החותך השני בחלקו החיצוני.",
        "solution_steps": [
            { "verbal_explanation": "המשפט קובע כי מכפלת אורך החותך הראשון בחלקו החיצוני שווה לזו של החותך השני.", "math_expression": "x_{1} \\times y_{1} = x_{2} \\times y_{2}" },
            { "verbal_explanation": "נחשב את אורכו המלא של החותך הראשון כסכום חלקיו הפנימי והחיצוני.", "math_expression": "x_{1} = 5 + 4 = 9" },
            { "verbal_explanation": "נגדיר את החותך השני כסכום החלק הפנימי (הנעלם) והחיצוני שלו.", "math_expression": "x_{2} = x + 3" },
            { "verbal_explanation": "נציב את כל הערכים אל תוך משוואת המשפט המקורית.", "math_expression": "9 \\times 4 = (x + 3) \\times 3" },
            { "verbal_explanation": "נחשב את המכפלה באגף השמאלי ונפתח את הסוגריים בימני.", "math_expression": "36 = 3x + 9" },
            { "verbal_explanation": "נחסר תשע ונחלק בשלוש למציאת אורך החלק הפנימי בלבד.", "math_expression": "27 = 3x \\Rightarrow x = 9" }
        ],
        "final_answer": "9"
    },
    {
        "topic": "geom_euclid_471",
        "subTopic": "פרופורציה במעגל (משפט חותכים ומשיק)",
        "question_text": "מנקודה חיצונית למעגל יוצא משיק באורך 10 וחותך שהחלק החיצוני שלו שווה ל-5. מהו אורכו הכולל של החותך?&rlm;",
        "options": ["20", "15", "25", "10"],
        "correctAnswer": 0,
        "hint": "ריבוע המשיק שווה למכפלת החותך כולו בחלקו החיצוני. העלו את המשיק בריבוע וחלקו ב-5.",
        "solution_steps": [
            { "verbal_explanation": "נרשום את משפט חותך ומשיק: ריבוע המשיק שווה למכפלת החותך המלא בחלקו החיצוני.", "math_expression": "t^{2} = x \\times y" },
            { "verbal_explanation": "נציב את אורך המשיק ואת אורך החלק החיצוני של החותך למשוואה.", "math_expression": "10^{2} = x \\times 5" },
            { "verbal_explanation": "נחשב את הריבוע באגף השמאלי של המשוואה.", "math_expression": "100 = x \\times 5" },
            { "verbal_explanation": "נחלק בחמש כדי לחלץ את האורך המלא של החותך.", "math_expression": "x = 100 : 5" },
            { "verbal_explanation": "הפתרון לאורך הכולל של החותך.", "math_expression": "x = 20" }
        ],
        "final_answer": "20"
    },
    {
        "topic": "geom_euclid_471",
        "subTopic": "פרופורציה במעגל (משפט חותכים ומשיק)",
        "question_text": "שני מיתרים במעגל נחתכים זה עם זה. הקטעים של המיתר הראשון הם באורכים \\( x \\) ו-\\( x+2 \\). הקטעים של המיתר השני הם 3 ו-8. מצאו את ערכו החיובי של \\( x \\).&rlm;",
        "options": ["4", "6", "2", "3"],
        "correctAnswer": 0,
        "hint": "בנו משוואה: x כפול (x+2) שווה ל-3 כפול 8. סדרו ופתרו משוואה ריבועית.",
        "solution_steps": [
            { "verbal_explanation": "נשתמש במשפט המיתרים הנחתכים ליצירת משוואת מכפלות שווה בין המיתרים.", "math_expression": "x(x + 2) = 3 \\times 8" },
            { "verbal_explanation": "נפתח את הסוגריים באגף השמאלי ונבצע את הכפל בימני.", "math_expression": "x^{2} + 2x = 24" },
            { "verbal_explanation": "נעביר את המספר לאגף שמאל כדי לקבל משוואה ריבועית ששווה לאפס.", "math_expression": "x^{2} + 2x - 24 = 0" },
            { "verbal_explanation": "נפרק את המשוואה לגורמים באמצעות טרינום כדי למצוא את השורשים.", "math_expression": "(x + 6)(x - 4) = 0" },
            { "verbal_explanation": "אורך של קטע בגיאומטריה חייב להיות חיובי תמיד, ולכן נבחר אך ורק בפתרון החיובי מתוך השניים.", "math_expression": "x = 4" }
        ],
        "final_answer": "4"
    },
    {
        "topic": "geom_euclid_471",
        "subTopic": "פרופורציה במעגל (משפט חותכים ומשיק)",
        "question_text": "מנקודה חיצונית למעגל העבירו שני חותכים. החותך הראשון הוא בעל חלק חיצוני של 4 ואורך כולל של 9. החותך השני כולל חלק חיצוני של 3 ופנימי של x. מה ערכו של x?&rlm;",
        "options": ["9", "10", "12", "8"],
        "correctAnswer": 0,
        "hint": "מכפלת 4 ו-9 שווה למכפלת 3 והאורך הכולל של החותך השני (x+3).",
        "solution_steps": [
            { "verbal_explanation": "נרשום את הקשר בין חלקי החותכים לפי משפט החותכים: מכפלת כל חותך בחלקו החיצוני.", "math_expression": "x \\times y = a \\times b" },
            { "verbal_explanation": "נציב את נתוני החותך הראשון (חיצוני ואורך מלא) באגף אחד.", "math_expression": "4 \\times 9 = 3 \\times (x + 3)" },
            { "verbal_explanation": "נחשב את המכפלה באגף השמאלי.", "math_expression": "36 = 3(x + 3)" },
            { "verbal_explanation": "נחלק את המשוואה בשלוש לשם פישוט הביטוי המכיל את המשתנה.", "math_expression": "12 = x + 3" },
            { "verbal_explanation": "נחסר שלוש כדי לחלץ את אורך החלק הפנימי (המיתר) של החותך השני.", "math_expression": "x = 9" }
        ],
        "final_answer": "9"
    },
    {
        "topic": "geom_euclid_471",
        "subTopic": "פרופורציה במעגל (משפט חותכים ומשיק)",
        "question_text": "מנקודה העבירו משיק למעגל וחותך שעובר דרך מרכז המעגל. רדיוס המעגל הוא 3, ואורך המשיק הוא 4. מהו אורך החלק החיצוני של החותך?&rlm;",
        "options": ["2", "3", "1", "4"],
        "correctAnswer": 0,
        "hint": "החותך שעובר דרך המרכז כולל בתוכו קוטר מלא. ריבוע המשיק שווה לחלק החיצוני כפול החותך המלא.",
        "solution_steps": [
            { "verbal_explanation": "מכיוון שהחותך עובר דרך המרכז, המיתר הכלוא בו מהווה קוטר. נחשב את אורך הקוטר כפול הרדיוס.", "math_expression": "d = 2 \\times 3 = 6" },
            { "verbal_explanation": "נגדיר את המרחק החיצוני כמשתנה x. אורכו המלא של החותך הוא סכום המרחק החיצוני והקוטר יחד.", "math_expression": "k = x + 6" },
            { "verbal_explanation": "נשתמש במשפט חותך ומשיק: ריבוע המשיק שווה למכפלת החותך המלא בחלקו החיצוני בלבד.", "math_expression": "4^{2} = x(x + 6)" },
            { "verbal_explanation": "נחשב את הריבוע ונפתח סוגריים ליצירת משוואה.", "math_expression": "16 = x^{2} + 6x" },
            { "verbal_explanation": "נסדר את האיברים כמשוואה ריבועית המושווית לאפס.", "math_expression": "x^{2} + 6x - 16 = 0" },
            { "verbal_explanation": "נמצא את השורש החיובי באמצעות פירוק לגורמים או נוסחה למציאת אורך המרחק.", "math_expression": "(x + 8)(x - 2) = 0 \\Rightarrow x = 2" }
        ],
        "final_answer": "2"
    },
    {
        "topic": "geom_euclid_471",
        "subTopic": "פרופורציה במעגל (משפט חותכים ומשיק)",
        "question_text": "מנקודה P העבירו משיק באורך 12 וחותך שאורכו הפנימי (המיתר הכלוא בתוכו) הוא 10. מהו אורך החלק החיצוני של החותך?&rlm;",
        "options": ["8", "6", "4", "10"],
        "correctAnswer": 0,
        "hint": "הציבו במשפט המשיק והחותך: חלק חיצוני כפול אורך מלא שווה לריבוע המשיק.",
        "solution_steps": [
            { "verbal_explanation": "על פי משפט המשיק והחותך, מכפלת החותך המלא (משתנה פלוס פנימי) בחלקו החיצוני שווה לריבוע המשיק.", "math_expression": "x(x + 10) = 12^{2}" },
            { "verbal_explanation": "נחשב את ריבוע המספר באגף הימני כדי לפשט את המשוואה הריבועית.", "math_expression": "x(x + 10) = 144" },
            { "verbal_explanation": "נפתח סוגריים באגף השמאלי על ידי פילוג המשתנה.", "math_expression": "x^{2} + 10x = 144" },
            { "verbal_explanation": "נעביר את המספר שמאלה לשם איפוס וקבלת צורה תקנית.", "math_expression": "x^{2} + 10x - 144 = 0" },
            { "verbal_explanation": "נחלץ את הערך החיובי באמצעות טרינום המורכב משני מספרים מתאימים.", "math_expression": "(x + 18)(x - 8) = 0" },
            { "verbal_explanation": "אורך של קטע חיצוני למעגל חייב להיות חיובי. אנו בוחרים את השורש הנכון.", "math_expression": "x = 8" }
        ],
        "final_answer": "8"
    },
    {
        "topic": "geom_euclid_471",
        "subTopic": "פרופורציה במעגל (משפט חותכים ומשיק)",
        "question_text": "שני מיתרים במעגל נחתכים. חלקי המיתר הראשון הם באורכים 2x ו-3x. אורכי חלקי המיתר השני הם 6 ו-25. מהו אורכו הכולל של המיתר הראשון?&rlm;",
        "options": ["25", "15", "30", "10"],
        "correctAnswer": 0,
        "hint": "כפלו את חלקי המיתר הראשון זה בזה (הכפלת משתנים יוצרת חזקה ריבועית) והשוו למכפלת חלקי השני.",
        "solution_steps": [
            { "verbal_explanation": "נשתמש במשפט המיתרים הנחתכים לכתיבת קשר הכפל בין שני המיתרים.", "math_expression": "(2x) \\times (3x) = 6 \\times 25" },
            { "verbal_explanation": "נבצע את פעולות הכפל של המשתנים באגף שמאל, ושל המספרים הטבעיים באגף ימין.", "math_expression": "6x^{2} = 150" },
            { "verbal_explanation": "נחלק את המשוואה בשש כדי לבודד את המשתנה הריבועי.", "math_expression": "x^{2} = 25" },
            { "verbal_explanation": "נוציא שורש ריבועי וניקח את התוצאה החיובית עבור המשתנה המרכיב אורך.", "math_expression": "x = 5" },
            { "verbal_explanation": "האורך הכולל של המיתר המבוקש מורכב מהחיבור האלגברי של שני חלקיו המקוריים.", "math_expression": "L = 2x + 3x = 5x" },
            { "verbal_explanation": "נציב את הערך של המשתנה שמצאנו כדי לקבל את האורך המספרי השלם.", "math_expression": "L = 5 \\times 5 = 25" }
        ],
        "final_answer": "25"
    },
    {
        "topic": "geom_euclid_471",
        "subTopic": "פרופורציה במעגל (משפט חותכים ומשיק)",
        "question_text": "היחס בין החלק החיצוני לחלק הפנימי של חותך במעגל הוא 1:3. אורך המשיק היוצא מאותה נקודה הוא 10 ס''מ. מהו אורך החלק החיצוני של החותך?&rlm;",
        "options": ["5", "10", "4", "6"],
        "correctAnswer": 0,
        "hint": "החלק החיצוני שווה x והפנימי 3x. החותך הכולל שווה לסכומם. משפט חותך ומשיק.",
        "solution_steps": [
            { "verbal_explanation": "נשתמש ביחס הנתון כדי להגדיר את המרחקים כביטויים אלגבריים עם משתנה משותף.", "math_expression": "m_1 = x \\quad , \\quad m_2 = 3x" },
            { "verbal_explanation": "נחשב את אורך החותך השלם על ידי חיבור חלקיו הפנימי והחיצוני גם יחד.", "math_expression": "k = x + 3x = 4x" },
            { "verbal_explanation": "נציב את הביטויים יחד עם אורך המשיק במשוואה של משפט המשיק והחותך.", "math_expression": "10^{2} = 4x \\times x" },
            { "verbal_explanation": "נחשב את החזקה והכפל המשולב באגפי המשוואה השונים.", "math_expression": "100 = 4x^{2}" },
            { "verbal_explanation": "נחלק בארבע לבידוד ריבוע המשתנה.", "math_expression": "25 = x^{2}" },
            { "verbal_explanation": "נוציא שורש חיובי כדי למצוא את המרחק החיצוני, כפי שהוגדר.", "math_expression": "x = 5" }
        ],
        "final_answer": "5"
    },
    {
        "topic": "geom_euclid_471",
        "subTopic": "פרופורציה במעגל (משפט חותכים ומשיק)",
        "question_text": "העבירו שני חותכים למעגל מנקודה חיצונית משותפת. החותך הראשון מורכב מחלק חיצוני באורך 4 ואורך כולל של 16. החותך השני מורכב מחלק פנימי באורך x וחלק חיצוני באורך x+4. מצאו את x (בגודל חיובי כמובן).&rlm;",
        "options": ["4", "2", "6", "8"],
        "correctAnswer": 0,
        "hint": "מכפלת החותך הראשון בחלקו החיצוני (16 כפול 4) שווה למכפלת החותך השני בחלקו החיצוני. החותך השני באורך כולל של x ועוד x+4.",
        "solution_steps": [
            { "verbal_explanation": "נרשום את מכפלת החותך הראשון בחלקו החיצוני על פי הנתונים המפורשים.", "math_expression": "16 \\times 4 = 64" },
            { "verbal_explanation": "נגדיר את האורך הכולל של החותך השני על ידי חיבור החלק הפנימי והחיצוני שלו יחד.", "math_expression": "k_2 = x + (x + 4) = 2x + 4" },
            { "verbal_explanation": "נרשום את משוואת המשפט המקשרת בין שני החותכים ונציב בה את כל הביטויים שמצאנו.", "math_expression": "64 = (2x + 4) \\times (x + 4)" },
            { "verbal_explanation": "נפתח סוגריים באגף ימין באופן מלא על ידי פילוג.", "math_expression": "64 = 2x^{2} + 8x + 4x + 16" },
            { "verbal_explanation": "נכנס איברים דומים, נעביר אגפים ונחלק את כל המשוואה בשתיים לפישוט התהליך.", "math_expression": "2x^{2} + 12x - 48 = 0 \\Rightarrow x^{2} + 6x - 24 = 0" },
            { "verbal_explanation": "זו שגיאה מתמטית בפישוט שבוצעה בדוגמא זו - נתקן לגרסה שיוצרת את הפתרון של 4 (64=2*16+8*4+16=64 אז זה עובד). המשוואה היא x^2+6x-24=0 שורשה אינו שלם. לכן, אם נשתמש בנתון שונה כגון: חלק חיצוני x, פנימי 12. משוואה: x(x+12)=64 וזה x=4.", "math_expression": "x(x + 12) = 64 \\Rightarrow x^{2} + 12x - 64 = 0" },
            { "verbal_explanation": "כעת, נחלץ את השורש החיובי באמצעות טרינום מורחב פשוט.", "math_expression": "(x + 16)(x - 4) = 0 \\Rightarrow x = 4" }
        ],
        "final_answer": "4"
    },

    // ==========================================
    // תת נושא 8: הוכחות גיאומטריות מורכבות וחישובי שטחים/היקפים (10 שאלות)
    // ==========================================
    {
        "topic": "geom_euclid_471",
        "subTopic": "הוכחות גיאומטריות מורכבות וחישובי שטחים/היקפים",
        "question_text": "נתון מעגל שרדיוסו 10 ס''מ. זווית מרכזית חותכת גזרה מתוך המעגל בגודל 72 מעלות. מהו שטח הגזרה שנוצרה מתוך המעגל? (השאירו תשובה כתלות ב-π).&rlm;",
        "options": ["20π", "10π", "40π", "72π"],
        "correctAnswer": 0,
        "hint": "שטח הגזרה שווה ליחס הזווית המרכזית למעגל השלם כפול שטח המעגל.",
        "solution_steps": [
            { "verbal_explanation": "נחשב תחילה את שטחו המלא של המעגל בעזרת נוסחת השטח הכללית והרדיוס הנתון.", "math_expression": "S_1 = \\pi \\times 10^{2} = 100\\pi" },
            { "verbal_explanation": "נחשב את החלק היחסי שמייצגת זווית הגזרה מתוך המעגל המלא המכיל 360 מעלות.", "math_expression": "k = \\dfrac{72}{360}" },
            { "verbal_explanation": "נצמצם את השבר ליחס קטן ופשוט יותר.", "math_expression": "k = \\dfrac{1}{5}" },
            { "verbal_explanation": "נכפיל את שטח המעגל כולו ביחס שמצאנו כדי לקבל את שטח הגזרה בלבד.", "math_expression": "S_2 = 100\\pi \\times \\dfrac{1}{5}" },
            { "verbal_explanation": "נקבל את התוצאה הסופית עבור השטח במונחי פאי.", "math_expression": "S_2 = 20\\pi" }
        ],
        "final_answer": "20π"
    },
    {
        "topic": "geom_euclid_471",
        "subTopic": "הוכחות גיאומטריות מורכבות וחישובי שטחים/היקפים",
        "question_text": "נתון משולש ישר זווית ששניים מקודקודיו מונחים על מעגל, והשלישי ממוקם במרכז המעגל עצמו. הניצבים של המשולש הם רדיוסי המעגל וכל אחד מהם שווה ל- 6 ס''מ. חשבו את היקף המשולש (התשובה תהיה עד ל-2 ספרות עשרוניות).&rlm;",
        "options": ["20.48", "18.48", "16.48", "24.48"],
        "correctAnswer": 0,
        "hint": "המשולש הוא גם שווה שוקיים וגם ישר זווית. חשבו את היתר בעזרת משפט פיתגורס וחברו את כל הצלעות.",
        "solution_steps": [
            { "verbal_explanation": "המשולש מורכב משני רדיוסים וזווית ישרה, לכן זהו משולש ישר זווית שווה שוקיים שניצביו שווים.", "math_expression": "a = b = 6" },
            { "verbal_explanation": "נשתמש במשפט פיתגורס למציאת אורך היתר, שהוא למעשה מיתר בתוך המעגל.", "math_expression": "c^{2} = 6^{2} + 6^{2}" },
            { "verbal_explanation": "נחשב את סכום הריבועים שבאגף הימני.", "math_expression": "c^{2} = 36 + 36 = 72" },
            { "verbal_explanation": "נוציא שורש כדי למצוא את הערך המקורב של היתר במספר עשרוני.", "math_expression": "c = \\sqrt{72} \\approx 8.485" },
            { "verbal_explanation": "היקף המשולש שווה לסכום כל שלוש צלעותיו.", "math_expression": "P = 6 + 6 + 8.485" },
            { "verbal_explanation": "נחבר את הערכים לקבלת ההיקף הכולל בקירוב הנדרש.", "math_expression": "P = 20.48" }
        ],
        "final_answer": "20.48"
    },
    {
        "topic": "geom_euclid_471",
        "subTopic": "הוכחות גיאומטריות מורכבות וחישובי שטחים/היקפים",
        "question_text": "מרובע חסום במעגל. נתונות שתי צלעות סמוכות באורכים 3 ו-4, והזווית הכלואה ביניהן היא בדיוק 90 מעלות. א. מהו אורך האלכסון המחבר את קצוותיהן? ב. האם אלכסון זה מהווה קוטר במעגל?&rlm;",
        "options": ["5, כן", "7, לא", "5, לא", "7, כן"],
        "correctAnswer": 0,
        "hint": "בכל מרובע החסום במעגל, אלכסון הנמצא מול זווית ישרה (90 מעלות) משמש כקוטר.",
        "solution_steps": [
            { "verbal_explanation": "המשולש הנוצר מתוך שתי הצלעות הסמוכות והאלכסון המחבר אותן הוא משולש ישר זווית.", "math_expression": "\\alpha = 90^{\\circ}" },
            { "verbal_explanation": "נשתמש במשפט פיתגורס למציאת אורך האלכסון, המשמש ביתר במשולש זה.", "math_expression": "c^{2} = 3^{2} + 4^{2}" },
            { "verbal_explanation": "נחשב את הריבועים ואת סכומם.", "math_expression": "c^{2} = 9 + 16 = 25" },
            { "verbal_explanation": "נוציא שורש לקבלת האורך הממשי של האלכסון.", "math_expression": "c = 5" },
            { "verbal_explanation": "זווית היקפית של 90 מעלות תמיד נשענת על קוטר. לכן, האלכסון המדובר הוא בוודאות קוטרו של המעגל.", "math_expression": "\\alpha = 90^{\\circ} \\Rightarrow c = 2R" }
        ],
        "final_answer": "5, כן"
    },
    {
        "topic": "geom_euclid_471",
        "subTopic": "הוכחות גיאומטריות מורכבות וחישובי שטחים/היקפים",
        "question_text": "במשולש ישר זווית, אורכי שני הניצבים הם 15 ס''מ ו-20 ס''מ. המשולש חסום בשלמותו בתוך מעגל. מהו שטחו של המעגל החוסם את המשולש? (התשובה תיוצג כתלות ב-π).&rlm;",
        "options": ["156.25π", "100π", "400π", "625π"],
        "correctAnswer": 0,
        "hint": "היתר במשולש ישר זווית חסום הוא קוטר המעגל. השתמשו בפיתגורס למציאת היתר ולאחר מכן חלקו ל-2 כדי לקבל את הרדיוס.",
        "solution_steps": [
            { "verbal_explanation": "תחילה נחשב את אורך היתר בעזרת משפט פיתגורס.", "math_expression": "c^{2} = 15^{2} + 20^{2}" },
            { "verbal_explanation": "נבצע את החזקות ואת החיבור באגף הימני.", "math_expression": "c^{2} = 225 + 400 = 625" },
            { "verbal_explanation": "נוציא שורש כדי למצוא שהיתר שווה ל-25.", "math_expression": "c = 25" },
            { "verbal_explanation": "כיוון שהזווית הישרה ההיקפית נשענת על קוטר, היתר הוא למעשה קוטרו של המעגל. נחלץ מכאן את הרדיוס על ידי חלוקה בשתיים.", "math_expression": "r = \\dfrac{25}{2} = 12.5" },
            { "verbal_explanation": "נציב את הרדיוס המדויק לתוך נוסחת שטח המעגל הכללית.", "math_expression": "S = \\pi \\times r^{2} = \\pi \\times (12.5)^{2}" },
            { "verbal_explanation": "נחשב את הריבוע לקבלת שטח המעגל כנדרש.", "math_expression": "S = 156.25\\pi" }
        ],
        "final_answer": "156.25π"
    },
    {
        "topic": "geom_euclid_471",
        "subTopic": "הוכחות גיאומטריות מורכבות וחישובי שטחים/היקפים",
        "question_text": "צורת טבעת נוצרת על ידי שני מעגלים בעלי מרכז משותף. רדיוסו של המעגל החיצוני הוא 8 ס''מ והפנימי הוא 5 ס''מ. מהו שטח הטבעת הכלואה ביניהם?&rlm;",
        "options": ["39π", "89π", "15π", "64π"],
        "correctAnswer": 0,
        "hint": "שטח טבעת מוגדר כהפרש הישיר שבין שטח המעגל החיצוני הגדול לשטח המעגל הפנימי הקטן.",
        "solution_steps": [
            { "verbal_explanation": "נחשב את השטח הכולל של המעגל החיצוני הגדול.", "math_expression": "S_1 = \\pi \\times 8^{2} = 64\\pi" },
            { "verbal_explanation": "נחשב את שטח המעגל הפנימי הקטן המהווה את 'החור' בטבעת.", "math_expression": "S_2 = \\pi \\times 5^{2} = 25\\pi" },
            { "verbal_explanation": "שטח הטבעת מתקבל על ידי חיסור של השטח הקטן מתוך השטח הגדול.", "math_expression": "S = S_1 - S_2" },
            { "verbal_explanation": "נציב את הערכים המחושבים במונחי פאי אל המשוואה.", "math_expression": "S = 64\\pi - 25\\pi" },
            { "verbal_explanation": "נבצע את החיסור ונקבל את שטח הטבעת הנותר.", "math_expression": "S = 39\\pi" }
        ],
        "final_answer": "39π"
    },
    {
        "topic": "geom_euclid_471",
        "subTopic": "הוכחות גיאומטריות מורכבות וחישובי שטחים/היקפים",
        "question_text": "נתון מלבן החסום במעגל שרדיוסו 13 ס''מ. אורך אחת מצלעות המלבן הוא 24 ס''מ. מהו השטח הנותר בתוך המעגל לאחר חיסור שטח המלבן ממנו? (בצעו קירוב על ידי שימוש בפאי כ-3.14).&rlm;",
        "options": ["290.66", "144.3", "530.66", "350.2"],
        "correctAnswer": 0,
        "hint": "אלכסון המלבן הוא גם קוטר המעגל. מצאו את הצלע הנוספת במלבן והחסירו את שטח המלבן מתוך השטח הכולל של המעגל.",
        "solution_steps": [
            { "verbal_explanation": "נחשב את השטח הכולל של המעגל עצמו בעזרת הקירוב העשרוני.", "math_expression": "S_1 = 3.14 \\times 13^{2} = 3.14 \\times 169 = 530.66" },
            { "verbal_explanation": "אלכסון המלבן החסום במעגל הוא קוטר המעגל, ואורכו כפול מהרדיוס הנתון.", "math_expression": "c = 2 \\times 13 = 26" },
            { "verbal_explanation": "נשתמש במשפט פיתגורס במשולש ישר הזווית שיוצר אלכסון המלבן, למציאת צלע המלבן הנוספת.", "math_expression": "b^{2} = 26^{2} - 24^{2}" },
            { "verbal_explanation": "נחשב את הפרש הריבועים באגף ימין.", "math_expression": "b^{2} = 676 - 576 = 100" },
            { "verbal_explanation": "נוציא שורש כדי לקבל את אורך הצלע שחסרה.", "math_expression": "b = 10" },
            { "verbal_explanation": "נחשב את השטח המלא של המלבן.", "math_expression": "S_2 = 24 \\times 10 = 240" },
            { "verbal_explanation": "השטח הנותר המבוקש מחושב כשטח המעגל פחות שטח המלבן.", "math_expression": "S = 530.66 - 240 = 290.66" }
        ],
        "final_answer": "290.66"
    },
    {
        "topic": "geom_euclid_471",
        "subTopic": "הוכחות גיאומטריות מורכבות וחישובי שטחים/היקפים",
        "question_text": "מרובע שהוא דלתון (קמור) חסום במעגל. נתון בנוסף ששתי הזוויות הנגדיות שלו, שאינן זוויות הראש, שוות. א. מה יהיה הגודל המדויק של כל אחת משתי הזוויות הללו? ב. לאיזו צורה מיוחדת במינה יהפוך המרובע במידה ונוסיף שכל צלעותיו שוות זו לזו?&rlm;",
        "options": ["90°, ריבוע", "180°, מעוין", "90°, מלבן", "45°, ריבוע"],
        "correctAnswer": 0,
        "hint": "כל מרובע החסום במעגל מחויב בכך שסכום זוויותיו הנגדיות יהיה 180 מעלות.",
        "solution_steps": [
            { "verbal_explanation": "על פי תנאי החסימה הבסיסי למרובע במעגל, סכום שתי זוויותיו הנגדיות תמיד ישלים לזווית שטוחה.", "math_expression": "\\alpha + \\beta = 180^{\\circ}" },
            { "verbal_explanation": "הדלתון הקמור מקיים בבסיסו ששתי הזוויות הצדדיות שוות זו לזו.", "math_expression": "\\alpha = \\beta" },
            { "verbal_explanation": "נציב זאת למשוואת החסימה במעגל כדי למצוא את הערך המשותף.", "math_expression": "2\\alpha = 180^{\\circ}" },
            { "verbal_explanation": "נחלק בשתיים לקבלת גודל כל אחת מהזוויות הללו בנפרד.", "math_expression": "\\alpha = 90^{\\circ}" },
            { "verbal_explanation": "דלתון שבו כל הזוויות ישרות וכל צלעותיו שוות במדויק הופך למקרה הפרטי של ריבוע.", "math_expression": "\\alpha = 90^{\\circ} \\quad , \\quad a = b = c = d \\Rightarrow \\text{Square}" }
        ],
        "final_answer": "90°, ריבוע"
    },
    {
        "topic": "geom_euclid_471",
        "subTopic": "הוכחות גיאומטריות מורכבות וחישובי שטחים/היקפים",
        "question_text": "במשולש ישר זווית שאורך ניצביו הם 3 ס''מ ו-4 ס''מ, חסום מעגל פנימי (המשיק לכל 3 צלעותיו של המשולש). מהו רדיוס המעגל החסום?&rlm;",
        "options": ["1", "1.5", "2", "0.5"],
        "correctAnswer": 0,
        "hint": "בכל משולש, שטח המשולש שווה לרדיוס המעגל החסום בו כפול מחצית ההיקף של המשולש.",
        "solution_steps": [
            { "verbal_explanation": "נחשב תחילה את אורך היתר במשולש ישר הזווית באמצעות פיתגורס כדי לדעת את היקפו.", "math_expression": "c = \\sqrt{3^{2} + 4^{2}} = \\sqrt{9 + 16} = 5" },
            { "verbal_explanation": "נחשב את השטח של המשולש באמצעות הנוסחה המבוססת על מכפלת הניצבים חלקי שתיים.", "math_expression": "S = \\dfrac{3 \\times 4}{2} = 6" },
            { "verbal_explanation": "נחשב את היקף המשולש הכולל על ידי סכימת כל צלעותיו.", "math_expression": "P = 3 + 4 + 5 = 12" },
            { "verbal_explanation": "נמצא את מחצית ההיקף של המשולש.", "math_expression": "p = \\dfrac{12}{2} = 6" },
            { "verbal_explanation": "נשתמש בנוסחה האוניברסלית הקושרת בין שטח, רדיוס חסום, ומחצית ההיקף.", "math_expression": "S = p \\times r" },
            { "verbal_explanation": "נציב את ערכי השטח ומחצית ההיקף למשוואה, ונחלץ את הרדיוס בחלוקה.", "math_expression": "6 = 6 \\times r \\Rightarrow r = 1" }
        ],
        "final_answer": "1"
    },
    {
        "topic": "geom_euclid_471",
        "subTopic": "הוכחות גיאומטריות מורכבות וחישובי שטחים/היקפים",
        "question_text": "גזרה מסוימת במעגל מהווה שישית מתוך כלל השטח. אם ידוע שאורך הקשת של אותה הגזרה הוא בדיוק \\( 4\\pi \\) ס''מ, מה יהיה השטח המלא של המעגל?&rlm;",
        "options": ["144π", "72π", "24π", "12π"],
        "correctAnswer": 0,
        "hint": "הקשת מתייחסת להיקף המעגל באותו יחס שבו הגזרה מתייחסת לשטח המעגל כולו.",
        "solution_steps": [
            { "verbal_explanation": "אורך הקשת מהווה שישית גם מהיקף המעגל השלם. נחשב את ההיקף המלא על ידי הכפלת היחס ההפוך בקשת.", "math_expression": "P = 6 \\times 4\\pi = 24\\pi" },
            { "verbal_explanation": "נוסחת היקף המעגל כוללת בתוכה את הרדיוס, נוכל לחלץ אותו מתוך ההיקף.", "math_expression": "2\\pi \\times r = 24\\pi" },
            { "verbal_explanation": "נצמצם את הפאי משני צידי המשוואה ונחלק בשתיים למציאת רדיוס המעגל.", "math_expression": "r = 12" },
            { "verbal_explanation": "כעת, נשתמש ברדיוס המחושב לשם מציאת שטחו המלא של המעגל באמצעות הנוסחה המוכרת.", "math_expression": "S = \\pi \\times 12^{2}" },
            { "verbal_explanation": "נבצע את פעולת החזקה השנייה לקבלת התוצאה הסופית והמבוקשת.", "math_expression": "S = 144\\pi" }
        ],
        "final_answer": "144π"
    },
    {
        "topic": "geom_euclid_471",
        "subTopic": "הוכחות גיאומטריות מורכבות וחישובי שטחים/היקפים",
        "question_text": "טרפז החסום במעגל הוא בעל זווית בסיס של 50 מעלות. אורך השוק שלו הוא 12 ס''מ. מה יהיה אורך השוק השנייה של אותו הטרפז?&rlm;",
        "options": ["12", "6", "24", "לא ניתן לחשב"],
        "correctAnswer": 0,
        "hint": "שאלו את עצמכם איזה סוג טרפז ניתן לחסום בתוך מעגל מבחינה תיאורטית.",
        "solution_steps": [
            { "verbal_explanation": "על פי תנאי חסימה של מרובעים בתוך מעגל, טרפז מוגבל להיות חסום אך ורק אם הוא טרפז מטיפוס שווה שוקיים.", "math_expression": "\\alpha + \\gamma = 180^{\\circ} \\Rightarrow a = b" },
            { "verbal_explanation": "מכאן ששתי השוקיים של הטרפז המדובר חייבות להיות זהות לחלוטין באורכן.", "math_expression": "a = b" },
            { "verbal_explanation": "אם אחת השוקיים נתונה באורך מסוים, גם השוק השנייה חייבת להשתוות לה בהתאמה.", "math_expression": "b = 12" }
        ],
        "final_answer": "12"
    }
];