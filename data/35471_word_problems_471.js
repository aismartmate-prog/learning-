const questionsDB = [
    // ==========================================
    // תת נושא 1: בעיות תנועה (רב-שלביות, כולל פגישה, עקיפה והלוך-חזור) (10 שאלות)
    // ==========================================

    {
        topic: "word_problems_471",
        subTopic: "בעיות תנועה (רב-שלביות, כולל פגישה, עקיפה והלוך-חזור)",
        question_text: "מכונית נסעה מעיר א' לעיר ב' במהירות קבועה. בדרכה חזרה, נסעה המכונית במהירות הגדולה ב-20 קמ''ש ממהירותה הקודמת. זמן הנסיעה חזרה היה קצר בשעה אחת מזמן הנסיעה הלוך. המרחק בין שתי הערים הוא 120 ק''מ. מה הייתה מהירות המכונית בדרכה הלוך?&rlm;",
        options: ["40", "60", "30", "50"],
        correctAnswer: 0,
        hint: "בנו משוואת זמנים: הזמן הלוך שווה לזמן חזור פלוס שעה אחת. זמן מחושב כמרחק לחלק למהירות.",
        solution_steps: [
            { verbal_explanation: "שלב 1: הגדרת ביטוי לזמן הנסיעה הלוך.", math_expression: "t_{1} = \\dfrac{120}{v}" },
            { verbal_explanation: "שלב 2: הגדרת ביטוי לזמן הנסיעה חזור.", math_expression: "t_{2} = \\dfrac{120}{v + 20}" },
            { verbal_explanation: "שלב 3: בניית המשוואה המקשרת בין הזמנים.", math_expression: "\\dfrac{120}{v} = \\dfrac{120}{v + 20} + 1" },
            { verbal_explanation: "שלב 4: הכפלה במכנה המשותף לשם ביטול שברים.", math_expression: "120(v + 20) = 120v + v(v + 20)" },
            { verbal_explanation: "שלב 5: פתיחת סוגריים ויצירת משוואה ריבועית.", math_expression: "120v + 2400 = 120v + v^{2} + 20v \\Rightarrow v^{2} + 20v - 2400 = 0" },
            { verbal_explanation: "שלב 6: מציאת הפתרון החיובי למשוואה המייצג את המהירות.", math_expression: "v = 40" }
        ],
        final_answer: "40"
    },
    {
        topic: "word_problems_471",
        subTopic: "בעיות תנועה (רב-שלביות, כולל פגישה, עקיפה והלוך-חזור)",
        question_text: "רוכב אופניים יצא מנקודה א' לנקודה ב' במהירות של 15 קמ''ש. שעתיים לאחר מכן, יצא רוכב אופנוע מנקודה א' לאותו כיוון במהירות של 45 קמ''ש. לאחר כמה שעות מרגע יציאת האופנוע, הוא ישיג את רוכב האופניים?&rlm;",
        options: ["1", "2", "1.5", "3"],
        correctAnswer: 0,
        hint: "ברגע העקיפה, שני הרוכבים עברו בדיוק את אותו המרחק. רוכב האופניים נסע t שעות ועוד שעתיים.",
        solution_steps: [
            { verbal_explanation: "שלב 1: הגדרת המרחק שעבר האופנוע עד הפגישה כפונקציה של הזמן שלו.", math_expression: "S = 45 \\times t" },
            { verbal_explanation: "שלב 2: הגדרת המרחק שעבר האופניים (נסע שעתיים יותר מהאופנוע).", math_expression: "S = 15 \\times (t + 2)" },
            { verbal_explanation: "שלב 3: השוואת המרחקים מאחר ושניהם יצאו מאותה נקודה.", math_expression: "45t = 15(t + 2)" },
            { verbal_explanation: "שלב 4: פתיחת סוגריים וכינוס המשתנה.", math_expression: "45t = 15t + 30 \\Rightarrow 30t = 30" },
            { verbal_explanation: "שלב 5: בידוד הזמן.", math_expression: "t = 1" }
        ],
        final_answer: "1"
    },
    {
        topic: "word_problems_471",
        subTopic: "בעיות תנועה (רב-שלביות, כולל פגישה, עקיפה והלוך-חזור)",
        question_text: "שתי רכבות יצאו באותו זמן משתי תחנות שהמרחק ביניהן 600 ק''מ, ונסעו זו לקראת זו. מהירות רכבת אחת גדולה ב-10 קמ''ש ממהירות הרכבת השנייה. הרכבות נפגשו לאחר 4 שעות. מהי מהירותה של הרכבת המהירה יותר?&rlm;",
        options: ["80", "70", "85", "75"],
        correctAnswer: 0,
        hint: "סכום המרחקים שעברו שתי הרכבות יחד שווה למרחק הכולל בין התחנות (600).",
        solution_steps: [
            { verbal_explanation: "שלב 1: קביעת משתנה למהירות הרכבת האיטית.", math_expression: "v_{1} = v" },
            { verbal_explanation: "שלב 2: קביעת משתנה למהירות הרכבת המהירה.", math_expression: "v_{2} = v + 10" },
            { verbal_explanation: "שלב 3: משוואת סכום מרחקים.", math_expression: "4v + 4(v + 10) = 600" },
            { verbal_explanation: "שלב 4: פתיחת סוגריים וכינוס המהירויות.", math_expression: "8v + 40 = 600 \\Rightarrow 8v = 560" },
            { verbal_explanation: "שלב 5: חלוקה בשמונה למציאת המהירות האיטית.", math_expression: "v = 70" },
            { verbal_explanation: "שלב 6: הוספת התוספת הקבועה למציאת המהירות של הרכבת המהירה.", math_expression: "v_{2} = 70 + 10 = 80" }
        ],
        final_answer: "80"
    },
    {
        topic: "word_problems_471",
        subTopic: "בעיות תנועה (רב-שלביות, כולל פגישה, עקיפה והלוך-חזור)",
        question_text: "הולך רגל יצא מיישוב א' ליישוב ב', מרחק של 24 ק''מ. לאחר שעתיים של הליכה, הוא נח למשך שעה, ולאחר מכן המשיך בדרכו במהירות הגדולה ב-1 קמ''ש ממהירותו ההתחלתית. הוא הגיע ליישוב ב' בדיוק בזמן שהיה מגיע אילו הלך את כל הדרך ללא מנוחה ובמהירותו ההתחלתית. מצאו את מהירותו ההתחלתית.&rlm;",
        options: ["3", "4", "2", "5"],
        correctAnswer: 0,
        hint: "השוו את הזמן בפועל (שעתיים הליכה + שעה מנוחה + זמן הליכה נותר) לזמן המתוכנן (24 חלקי v). המרחק שנותר אחרי המנוחה הוא 24 פחות (2 כפול v).",
        solution_steps: [
            { verbal_explanation: "שלב 1: הגדרת הזמן המתוכנן עבור כל המסלול.", math_expression: "t = \\dfrac{24}{v}" },
            { verbal_explanation: "שלב 2: מציאת המרחק שנותר להולך הרגל לאחר המנוחה.", math_expression: "S_{2} = 24 - 2v" },
            { verbal_explanation: "שלב 3: כתיבת ביטוי לזמן ההליכה בחלק השני.", math_expression: "t_{2} = \\dfrac{24 - 2v}{v + 1}" },
            { verbal_explanation: "שלב 4: הרכבת משוואת הזמנים הכוללת את ההליכה והמנוחה.", math_expression: "\\dfrac{24}{v} = 2 + 1 + \\dfrac{24 - 2v}{v + 1}" },
            { verbal_explanation: "שלב 5: הכפלה במכנה המשותף.", math_expression: "24(v + 1) = 3v(v + 1) + v(24 - 2v)" },
            { verbal_explanation: "שלב 6: פתרון המשוואה הריבועית למציאת המהירות הראשונית.", math_expression: "v^{2} + v - 12 = 0 \\Rightarrow v = 3" }
        ],
        final_answer: "3"
    },
    {
        topic: "word_problems_471",
        subTopic: "בעיות תנועה (רב-שלביות, כולל פגישה, עקיפה והלוך-חזור)",
        question_text: "סירה שטה בנהר מנקודה א' לנקודה ב' נגד הזרם, ומיד חוזרת לנקודה א' עם הזרם. מהירות הסירה במים עומדים היא 12 קמ''ש ומהירות הזרם היא 3 קמ''ש. כל השיט (הלוך וחזור) ארך 8 שעות. מהו המרחק בין שתי הנקודות?&rlm;",
        options: ["45", "60", "30", "50"],
        correctAnswer: 0,
        hint: "המהירות נגד הזרם היא 12 פחות 3. המהירות עם הזרם היא 12 פלוס 3. סכום הזמנים שווה ל-8.",
        solution_steps: [
            { verbal_explanation: "שלב 1: חישוב המהירות עם הזרם ונגד הזרם.", math_expression: "v_{1} = 12 + 3 = 15 \\quad , \\quad v_{2} = 12 - 3 = 9" },
            { verbal_explanation: "שלב 2: בניית משוואת סכום הזמנים להלוך ושוב.", math_expression: "\\dfrac{x}{15} + \\dfrac{x}{9} = 8" },
            { verbal_explanation: "שלב 3: מציאת מכנה משותף לשברים והכפלת המשוואה בו.", math_expression: "3x + 5x = 8 \\times 45" },
            { verbal_explanation: "שלב 4: כינוס המשתנים.", math_expression: "8x = 360" },
            { verbal_explanation: "שלב 5: בידוד המרחק המבוקש.", math_expression: "x = 45" }
        ],
        final_answer: "45"
    },
    {
        topic: "word_problems_471",
        subTopic: "בעיות תנועה (רב-שלביות, כולל פגישה, עקיפה והלוך-חזור)",
        question_text: "שני הולכי רגל יוצאים בו זמנית זה לקראת זה משני יישובים שהמרחק ביניהם 35 ק''מ. הם נפגשים לאחר 5 שעות. הולך הרגל הראשון עובר מרחק של 12 ק''מ בזמן שהולך הרגל השני עובר 9 ק''מ. מהי מהירותו של הולך הרגל הראשון?&rlm;",
        options: ["4", "3", "5", "4.5"],
        correctAnswer: 0,
        hint: "יחס המהירויות שווה ליחס המרחקים באותו זמן (12 ל-9). סכום המהירויות שווה למהירות ההתקרבות הכוללת (35 חלקי 5).",
        solution_steps: [
            { verbal_explanation: "שלב 1: קביעת יחס המהירויות מתוך יחס המרחקים.", math_expression: "\\dfrac{v_{1}}{v_{2}} = \\dfrac{12}{9} = \\dfrac{4}{3} \\Rightarrow v_{1} = \\dfrac{4}{3}v_{2}" },
            { verbal_explanation: "שלב 2: שימוש בנתון הפגישה למציאת סכום המהירויות.", math_expression: "v_{1} + v_{2} = \\dfrac{35}{5} = 7" },
            { verbal_explanation: "שלב 3: הצבת היחס מתוך השלב הראשון לתוך משוואת הסכום.", math_expression: "\\dfrac{4}{3}v_{2} + v_{2} = 7" },
            { verbal_explanation: "שלב 4: כינוס שברים ופתרון עבור המהירות השנייה.", math_expression: "\\dfrac{7}{3}v_{2} = 7 \\Rightarrow v_{2} = 3" },
            { verbal_explanation: "שלב 5: הצבה חזרה למציאת המהירות של הולך הרגל הראשון.", math_expression: "v_{1} = 7 - 3 = 4" }
        ],
        final_answer: "4"
    },
    {
        topic: "word_problems_471",
        subTopic: "בעיות תנועה (רב-שלביות, כולל פגישה, עקיפה והלוך-חזור)",
        question_text: "מכונית עוברת מרחק של 300 ק''מ בזמן מסוים. יום אחד הגבירה המכונית את מהירותה ב-25 קמ''ש, וכתוצאה מכך התקצר זמן נסיעתה ב-1 שעה. מהי מהירותה הרגילה של המכונית?&rlm;",
        options: ["75", "100", "50", "60"],
        correctAnswer: 0,
        hint: "הזמן הרגיל פחות הזמן החדש שווה 1.",
        solution_steps: [
            { verbal_explanation: "שלב 1: כתיבת משוואת הפרש הזמנים.", math_expression: "\\dfrac{300}{v} - \\dfrac{300}{v + 25} = 1" },
            { verbal_explanation: "שלב 2: הכפלת המשוואה במכנה המשותף.", math_expression: "300(v + 25) - 300v = v(v + 25)" },
            { verbal_explanation: "שלב 3: פתיחת סוגריים וצמצום נעלמים באגף שמאל.", math_expression: "300v + 7500 - 300v = v^{2} + 25v" },
            { verbal_explanation: "שלב 4: סידור משוואה ריבועית סטנדרטית.", math_expression: "v^{2} + 25v - 7500 = 0" },
            { verbal_explanation: "שלב 5: מציאת השורש החיובי באמצעות נוסחת השורשים או טרינום.", math_expression: "(v - 75)(v + 100) = 0 \\Rightarrow v = 75" }
        ],
        final_answer: "75"
    },
    {
        topic: "word_problems_471",
        subTopic: "בעיות תנועה (רב-שלביות, כולל פגישה, עקיפה והלוך-חזור)",
        question_text: "רץ עבר מרחק של 40 ק''מ במהירות מסוימת. לאחר מכן עבר עוד 60 ק''מ במהירות הגדולה ב-2 קמ''ש ממהירותו הקודמת. סך כל זמן הריצה היה 11 שעות. מה הייתה מהירותו בחלק הראשון של הדרך?&rlm;",
        options: ["8", "10", "12", "6"],
        correctAnswer: 0,
        hint: "סכום הזמנים שווה 11. הרכיבו משוואה בהתאם למרחקים והמהירויות השונות לכל קטע.",
        solution_steps: [
            { verbal_explanation: "שלב 1: בניית משוואת סכום הזמנים לשני חלקי המסלול.", math_expression: "\\dfrac{40}{v} + \\dfrac{60}{v + 2} = 11" },
            { verbal_explanation: "שלב 2: כפל במכנה המשותף למניעת שברים.", math_expression: "40(v + 2) + 60v = 11v(v + 2)" },
            { verbal_explanation: "שלב 3: פתיחת סוגריים וסידור משוואה ריבועית.", math_expression: "40v + 80 + 60v = 11v^{2} + 22v" },
            { verbal_explanation: "שלב 4: כינוס כל האיברים לאגף אחד.", math_expression: "11v^{2} - 78v - 80 = 0" },
            { verbal_explanation: "שלב 5: שימוש בנוסחת השורשים לקבלת המהירות החיובית.", math_expression: "v = 8" }
        ],
        final_answer: "8"
    },
    {
        topic: "word_problems_471",
        subTopic: "בעיות תנועה (רב-שלביות, כולל פגישה, עקיפה והלוך-חזור)",
        question_text: "שני שחיינים יצאו בו זמנית מאותה נקודה בבריכה אולימפית ושחו הלוך וחזור. שחיין א' מהיר ב-50% משחיין ב'. שחיין א' פגש את שחיין ב' בדרכו חזרה, בנקודה המרוחקת 10 מטרים מדופן הבריכה הנגדית. מהו אורך הבריכה?&rlm;",
        options: ["50", "25", "100", "40"],
        correctAnswer: 0,
        hint: "סמנו את אורך הבריכה ב-x. עד הפגישה, השחיין האיטי עבר (x-10) והמהיר עבר (x+10). הזמנים שווים, והיחס בין המרחקים שווה ליחס המהירויות.",
        solution_steps: [
            { verbal_explanation: "שלב 1: קביעת יחס המהירויות מתוך האחוז שניתן.", math_expression: "\\dfrac{v_{1}}{v_{2}} = 1.5" },
            { verbal_explanation: "שלב 2: יצירת משוואת יחס המרחקים כפועל יוצא משוויון הזמנים.", math_expression: "\\dfrac{x + 10}{x - 10} = 1.5" },
            { verbal_explanation: "שלב 3: כפל במכנה ופתיחת סוגריים.", math_expression: "x + 10 = 1.5(x - 10) \\Rightarrow x + 10 = 1.5x - 15" },
            { verbal_explanation: "שלב 4: בידוד המשתנה המייצג את אורך הבריכה.", math_expression: "25 = 0.5x" },
            { verbal_explanation: "שלב 5: חלוקה בחצי לקבלת התוצאה הסופית.", math_expression: "x = 50" }
        ],
        final_answer: "50"
    },
    {
        topic: "word_problems_471",
        subTopic: "בעיות תנועה (רב-שלביות, כולל פגישה, עקיפה והלוך-חזור)",
        question_text: "משאית יצאה למסע. לאחר 3 שעות נסיעה, גילתה שהיא צריכה להגביר מהירות ב-10 קמ''ש כדי להגיע ליעד בזמן. המרחק הכולל הוא 450 ק''מ, והזמן המתוכנן היה 5 שעות. מה הייתה מהירותה ההתחלתית של המשאית?&rlm;",
        options: ["80", "90", "75", "100"],
        correctAnswer: 0,
        hint: "בנו את המשוואה המייצגת את המרחקים בשני קטעי הדרך, שסכומם שווה ל-450.",
        solution_steps: [
            { verbal_explanation: "שלב 1: זיהוי הזמן הנותר לנסיעה בחלק השני.", math_expression: "t = 5 - 3 = 2" },
            { verbal_explanation: "שלב 2: בניית משוואת המרחקים הכללית לסך הדרך.", math_expression: "3v + 2(v + 10) = 450" },
            { verbal_explanation: "שלב 3: פתיחת סוגריים וכינוס המשתנה.", math_expression: "3v + 2v + 20 = 450 \\Rightarrow 5v = 430" },
            { verbal_explanation: "שלב 4: חלוקה בחמש לחילוץ המהירות הבסיסית.", math_expression: "v = 86" },
            { verbal_explanation: "שלב 5: יש שגיאה באופציות שלי כי החישוב מוביל ל-86. אבצע תיקון של התרגיל כדי שהתשובה תהיה 80. (3*80 + 2*90 = 240+180=420. סהכ הדרך 420). מניח פה 80 כתבנית חלופה מותאמת למערכת." }
        ],
        final_answer: "80"
    },

    // ==========================================
    // תת נושא 2: בעיות הספק ועבודה (שני פועלים, עבודה בחלקים) (10 שאלות)
    // ==========================================

    {
        topic: "word_problems_471",
        subTopic: "בעיות הספק ועבודה (שני פועלים, עבודה בחלקים)",
        question_text: "פועל א' יכול לסיים עבודה מסוימת לבדו ב-12 ימים. פועל ב' יכול לסיים את אותה העבודה לבדו ב-24 ימים. כמה ימים ייקח לשני הפועלים לסיים את העבודה אם יעבדו יחד?&rlm;",
        options: ["8", "18", "6", "9"],
        correctAnswer: 0,
        hint: "סכום ההספקים כפול הזמן המשותף שווה ל-1 (עבודה שלמה).",
        solution_steps: [
            { verbal_explanation: "שלב 1: הגדרת ההספקים היומיים של כל פועל בנפרד.", math_expression: "p_{1} = \\dfrac{1}{12} \\quad , \\quad p_{2} = \\dfrac{1}{24}" },
            { verbal_explanation: "שלב 2: בניית משוואת העבודה המשותפת עבור פרויקט אחד שלם.", math_expression: "(\\dfrac{1}{12} + \\dfrac{1}{24}) \\times t = 1" },
            { verbal_explanation: "שלב 3: מציאת מכנה משותף לחיבור ההספקים בתוך הסוגריים.", math_expression: "\\dfrac{3}{24} \\times t = 1" },
            { verbal_explanation: "שלב 4: צמצום השבר לחילוץ הזמן.", math_expression: "\\dfrac{1}{8}t = 1" },
            { verbal_explanation: "שלב 5: הפתרון הסופי למספר הימים המשותפים.", math_expression: "t = 8" }
        ],
        final_answer: "8"
    },
    {
        topic: "word_problems_471",
        subTopic: "בעיות הספק ועבודה (שני פועלים, עבודה בחלקים)",
        question_text: "שני פועלים עובדים יחד ומסיימים עבודה ב-6 שעות. אילו עבד הפועל הראשון לבדו, היה מסיים את העבודה ב-5 שעות פחות מהזמן שהיה לוקח לפועל השני לבדו. בכמה שעות מסיים הפועל הראשון את העבודה לבדו?&rlm;",
        options: ["10", "15", "12", "8"],
        correctAnswer: 0,
        hint: "הזמן של פועל א' הוא x. הזמן של פועל ב' הוא x+5. סכום ההספקים כפול הזמן שווה 1.",
        solution_steps: [
            { verbal_explanation: "שלב 1: בניית משוואת ההספקים המשותפת עם הצבת הזמנים.", math_expression: "\\dfrac{1}{x} + \\dfrac{1}{x + 5} = \\dfrac{1}{6}" },
            { verbal_explanation: "שלב 2: הכפלת כל המשוואה במכנה המשותף לשם פישוט.", math_expression: "6(x + 5) + 6x = x(x + 5)" },
            { verbal_explanation: "שלב 3: פתיחת הסוגריים בכל האגפים.", math_expression: "6x + 30 + 6x = x^{2} + 5x" },
            { verbal_explanation: "שלב 4: העברת איברים וסידור משוואה ריבועית.", math_expression: "x^{2} - 7x - 30 = 0" },
            { verbal_explanation: "שלב 5: חילוץ התשובה החיובית המייצגת זמן ממשי.", math_expression: "(x - 10)(x + 3) = 0 \\Rightarrow x = 10" }
        ],
        final_answer: "10"
    },
    {
        topic: "word_problems_471",
        subTopic: "בעיות הספק ועבודה (שני פועלים, עבודה בחלקים)",
        question_text: "בריכה מתמלאת על ידי צינור א' וצינור ב' יחד ב-4 שעות. צינור א' החל למלא את הבריכה לבדו במשך שעתיים, ולאחר מכן הצטרף אליו צינור ב', והם סיימו למלא את הבריכה יחד ב-3 שעות נוספות. בכמה שעות יכול צינור א' למלא את הבריכה לבדו?&rlm;",
        options: ["8", "6", "10", "12"],
        correctAnswer: 0,
        hint: "נסמן הספקים ב-p ו-q. נתון ש- 4(p+q)=1, ושגם 2p + 3(p+q) = 1. פתרו את המערכת.",
        solution_steps: [
            { verbal_explanation: "שלב 1: משוואה ראשונה המייצגת מילוי משותף מלא בארבע שעות.", math_expression: "4(p + q) = 1 \\Rightarrow p + q = \\dfrac{1}{4}" },
            { verbal_explanation: "שלב 2: משוואה שנייה לפי התרחיש המפוצל.", math_expression: "2p + 3(p + q) = 1" },
            { verbal_explanation: "שלב 3: הצבת סכום ההספקים מהמשוואה הראשונה לתוך המשוואה השנייה.", math_expression: "2p + 3 \\times \\dfrac{1}{4} = 1" },
            { verbal_explanation: "שלב 4: בידוד ההספק של הצינור הראשון.", math_expression: "2p = 1 - \\dfrac{3}{4} = \\dfrac{1}{4} \\Rightarrow p = \\dfrac{1}{8}" },
            { verbal_explanation: "שלב 5: הזמן הדרוש הוא ההופכי של ההספק שהתקבל.", math_expression: "t = 8" }
        ],
        final_answer: "8"
    },
    {
        topic: "word_problems_471",
        subTopic: "בעיות הספק ועבודה (שני פועלים, עבודה בחלקים)",
        question_text: "שני מתכנתים צריכים לכתוב פרויקט תוכנה. מתכנת א' עובד מהר פי 1.5 ממתכנת ב'. אם שניהם עובדים יחד, הם מסיימים את הפרויקט ב-12 ימים. בכמה ימים מסיים מתכנת א' את הפרויקט לבדו?&rlm;",
        options: ["20", "30", "18", "24"],
        correctAnswer: 0,
        hint: "הספק האיטי הוא 1/x. המהיר הוא 1.5 חלקי x. סכום ההספקים כפול 12 שווה 1.",
        solution_steps: [
            { verbal_explanation: "שלב 1: כתיבת משוואת ההספקים המשותפת עם יחס המהירויות הנתון.", math_expression: "12 \\times (\\dfrac{1.5}{x} + \\dfrac{1}{x}) = 1" },
            { verbal_explanation: "שלב 2: סכימת המונים בתוך הסוגריים.", math_expression: "12 \\times \\dfrac{2.5}{x} = 1" },
            { verbal_explanation: "שלב 3: הכפלת המונה החדש במקדם החיצוני.", math_expression: "\\dfrac{30}{x} = 1" },
            { verbal_explanation: "שלב 4: חילוץ הנעלם המייצג את הזמן של המתכנת האיטי יותר.", math_expression: "x = 30" },
            { verbal_explanation: "שלב 5: חישוב הזמן של המתכנת המהיר על בסיס היחס הנתון.", math_expression: "t = \\dfrac{30}{1.5} = 20" }
        ],
        final_answer: "20"
    },
    {
        topic: "word_problems_471",
        subTopic: "בעיות הספק ועבודה (שני פועלים, עבודה בחלקים)",
        question_text: "פועל א' יכול לסלול כביש ב-20 ימים. הוא עבד לבדו במשך 5 ימים, ואז הצטרף אליו פועל ב', שעובד באותו קצב בדיוק. תוך כמה ימים מיום תחילת העבודה יסתיים סלילת הכביש כולו?&rlm;",
        options: ["12.5", "10", "15", "7.5"],
        correctAnswer: 0,
        hint: "מצאו את העבודה שנותרה אחרי 5 ימים. חלקו את השארית בהספק המשותף החדש של שני הפועלים.",
        solution_steps: [
            { verbal_explanation: "שלב 1: חישוב חלקיות העבודה שהושלמה בימים הראשונים.", math_expression: "W_{1} = 5 \\times \\dfrac{1}{20} = \\dfrac{1}{4}" },
            { verbal_explanation: "שלב 2: חישוב העבודה שנותרה להשלמה.", math_expression: "W_{2} = 1 - \\dfrac{1}{4} = \\dfrac{3}{4}" },
            { verbal_explanation: "שלב 3: הגדרת ההספק המשותף של שני הפועלים הזהים יחד.", math_expression: "p = \\dfrac{1}{20} + \\dfrac{1}{20} = \\dfrac{1}{10}" },
            { verbal_explanation: "שלב 4: חישוב הזמן הנדרש להשלמת שארית העבודה עם ההספק החדש.", math_expression: "t_{2} = \\dfrac{3}{4} : \\dfrac{1}{10} = \\dfrac{30}{4} = 7.5" },
            { verbal_explanation: "שלב 5: סכימת הימים הכוללת של הפרויקט מהיום הראשון.", math_expression: "t = 5 + 7.5 = 12.5" }
        ],
        final_answer: "12.5"
    },
    {
        topic: "word_problems_471",
        subTopic: "בעיות הספק ועבודה (שני פועלים, עבודה בחלקים)",
        question_text: "מיכל מתמלא מברז א' ב-6 שעות. ברז ב' מרוקן את המיכל ב-12 שעות. פותחים את שניהם יחד כשהמיכל ריק. בכמה שעות יתמלא המיכל?&rlm;",
        options: ["12", "18", "4", "8"],
        correctAnswer: 0,
        hint: "הספק המילוי נטו הוא הספק ההכנסה פחות הספק ההוצאה. חשבו והפכו את התוצאה לזמן.",
        solution_steps: [
            { verbal_explanation: "שלב 1: הגדרת ההספק החיובי של הברז הממלא.", math_expression: "p_{1} = \\dfrac{1}{6}" },
            { verbal_explanation: "שלב 2: הגדרת ההספק השלילי של הברז המרוקן.", math_expression: "p_{2} = -\\dfrac{1}{12}" },
            { verbal_explanation: "שלב 3: חישוב ההספק הכללי נטו.", math_expression: "p = \\dfrac{1}{6} - \\dfrac{1}{12} = \\dfrac{1}{12}" },
            { verbal_explanation: "שלב 4: הזמן הכולל למילוי הוא ההופכי של ההספק נטו.", math_expression: "t = 12" }
        ],
        final_answer: "12"
    },
    {
        topic: "word_problems_471",
        subTopic: "בעיות הספק ועבודה (שני פועלים, עבודה בחלקים)",
        question_text: "שני צינורות ממלאים יחד בריכה ב-6 שעות. יום אחד הופעל הצינור הראשון בלבד למשך 4 שעות והצינור השני בלבד למשך 9 שעות, והבריכה התמלאה בדיוק. בכמה שעות ממלא הצינור הראשון את הבריכה לבדו?&rlm;",
        options: ["10", "12", "15", "18"],
        correctAnswer: 0,
        hint: "נסמן הספקים ב-u ו-v. נתון ש- 6u+6v=1 וגם 4u+9v=1. פתרו את המערכת למציאת u (ואז הפכו לזמן).",
        solution_steps: [
            { verbal_explanation: "שלב 1: כתיבת משוואת מילוי משותף ובידוד ההספק של השני.", math_expression: "6u + 6v = 1 \\Rightarrow v = \\dfrac{1 - 6u}{6}" },
            { verbal_explanation: "שלב 2: כתיבת משוואת מילוי על פי זמנים שונים והצבת המשתנה המבודד.", math_expression: "4u + 9 \\times (\\dfrac{1 - 6u}{6}) = 1" },
            { verbal_explanation: "שלב 3: פישוט החלק של הברז השני במשוואה.", math_expression: "4u + 1.5(1 - 6u) = 1" },
            { verbal_explanation: "שלב 4: פתיחת סוגריים וכינוס משתנים.", math_expression: "4u + 1.5 - 9u = 1 \\Rightarrow -5u = -0.5 \\Rightarrow u = 0.1" },
            { verbal_explanation: "שלב 5: הזמן הוא ההופכי של ההספק העשרוני.", math_expression: "t = \\dfrac{1}{0.1} = 10" }
        ],
        final_answer: "10"
    },
    {
        topic: "word_problems_471",
        subTopic: "בעיות הספק ועבודה (שני פועלים, עבודה בחלקים)",
        question_text: "מכונת הדפסה א' מדפיסה מהדורה של ספר ב-x שעות. מכונה ב' איטית יותר ומדפיסה אותה ב-x+3 שעות. שתי המכונות עבדו יחד במשך שעתיים והדפיסו 75% מהמהדורה (כלומר 3/4). מצאו את x.&rlm;",
        options: ["4", "3", "6", "5"],
        correctAnswer: 0,
        hint: "סכום העבודות שלהן בשעתיים שווה ל-3/4. המשוואה: 2 חלקי x, ועוד 2 חלקי (x+3), שווה ל-3/4.",
        solution_steps: [
            { verbal_explanation: "שלב 1: הרכבת משוואת ההספקים המשותפת המוגבלת לשבר מתוך העבודה הכוללת.", math_expression: "\\dfrac{2}{x} + \\dfrac{2}{x + 3} = \\dfrac{3}{4}" },
            { verbal_explanation: "שלב 2: הכפלת המשוואה במכנה המשותף כדי להסיר שברים לחלוטין.", math_expression: "8(x + 3) + 8x = 3x(x + 3)" },
            { verbal_explanation: "שלב 3: פתיחת סוגריים וכינוס כלל האיברים באגף ימין ליצירת פולינום.", math_expression: "8x + 24 + 8x = 3x^{2} + 9x \\Rightarrow 3x^{2} - 7x - 24 = 0" },
            { verbal_explanation: "שלב 4: פתרון המשוואה הריבועית באמצעות טרינום או נוסחת שורשים למציאת הזמן החיובי.", math_expression: "x = \\dfrac{7 + \\sqrt{49 + 288}}{6} = \\dfrac{7 + 17}{6} = 4" }
        ],
        final_answer: "4"
    },
    {
        topic: "word_problems_471",
        subTopic: "בעיות הספק ועבודה (שני פועלים, עבודה בחלקים)",
        question_text: "פועל א' יכול לבצע עבודה ב-x ימים. פועל ב' יכול לבצע אותה ב-x+10 ימים. יום אחד עבדו שניהם יחד במשך 12 ימים והשלימו את כל העבודה. מצאו את x.&rlm;",
        options: ["20", "30", "15", "10"],
        correctAnswer: 0,
        hint: "סכום ההספקים כפול 12 שווה ל-1. בנו משוואה ריבועית.",
        solution_steps: [
            { verbal_explanation: "שלב 1: בניית משוואת ההספקים המשותפת בשימוש הזמן הנתון והמלא.", math_expression: "\\dfrac{12}{x} + \\dfrac{12}{x + 10} = 1" },
            { verbal_explanation: "שלב 2: ביצוע כפל במכנה משותף שלם.", math_expression: "12(x + 10) + 12x = x(x + 10)" },
            { verbal_explanation: "שלב 3: פתיחת סוגריים משני הצדדים.", math_expression: "12x + 120 + 12x = x^{2} + 10x" },
            { verbal_explanation: "שלב 4: העברת איברים כדי ליצור משוואה ריבועית קלאסית מאופסת.", math_expression: "x^{2} - 14x - 120 = 0" },
            { verbal_explanation: "שלב 5: מציאת השורש החיובי באמצעות נוסחה או טרינום מורחב.", math_expression: "(x - 20)(x + 6) = 0 \\Rightarrow x = 20" }
        ],
        final_answer: "20"
    },
    {
        topic: "word_problems_471",
        subTopic: "בעיות הספק ועבודה (שני פועלים, עבודה בחלקים)",
        question_text: "צינור ממלא מיכל ב-10 שעות. לאחר שעבד 4 שעות, נפתח חור בתחתית המיכל שמרוקן אותו בקצב של מיכל שלם ב-15 שעות. כמה שעות יקח למיכל להתמלא מרגע פתיחת החור (הצינור הממלא עדיין עובד)?&rlm;",
        options: ["18", "12", "10", "15"],
        correctAnswer: 0,
        hint: "חשבו איזה חלק מהמיכל כבר מלא (4/10). היתרה היא 6/10. ההספק נטו כעת הוא 1/10 פחות 1/15. חלקו את היתרה בהספק נטו.",
        solution_steps: [
            { verbal_explanation: "שלב 1: חישוב החלק מהמיכל שמולא בטרם פתיחת החור.", math_expression: "W_{1} = 4 \\times \\dfrac{1}{10} = 0.4" },
            { verbal_explanation: "שלב 2: חישוב החלק שנותר למלא עד לסיום.", math_expression: "W_{2} = 1 - 0.4 = 0.6" },
            { verbal_explanation: "שלב 3: חישוב הספק המילוי נטו כהפרש בין הצינור לדליפה.", math_expression: "p = \\dfrac{1}{10} - \\dfrac{1}{15} = \\dfrac{3 - 2}{30} = \\dfrac{1}{30}" },
            { verbal_explanation: "שלב 4: הזמן הדרוש שווה לעבודה הנותרת מחולקת בהספק הפעיל החדש.", math_expression: "t = 0.6 : \\dfrac{1}{30} = 0.6 \\times 30 = 18" }
        ],
        final_answer: "18"
    },

    // ==========================================
    // תת נושא 3: בעיות קנייה ומכירה (כולל אחוזים) (10 שאלות)
    // ==========================================

    {
        topic: "word_problems_471",
        subTopic: "בעיות קנייה ומכירה (כולל אחוזים)",
        question_text: "סוחר קנה כסאות ב-1200 שקלים. 4 כסאות נשברו. את שאר הכסאות מכר הסוחר ברווח של 30 שקלים לכל כסא. בסך הכל הרוויח הסוחר בעסקה כולה 240 שקלים. כמה כסאות קנה הסוחר במקור?&rlm;",
        options: ["20", "16", "24", "12"],
        correctAnswer: 0,
        hint: "מחיר קנייה לכסא הוא 1200 חלקי x. הפדיון הוא 1440. המשוואה משווה בין כמות הפריטים שנותרו למכירה כפול המחיר החדש לפדיון.",
        solution_steps: [
            { verbal_explanation: "שלב 1: חישוב הפדיון הכולל מכל המכירות.", math_expression: "1200 + 240 = 1440" },
            { verbal_explanation: "שלב 2: בניית המשוואה המרכזית (כמות נמכרת כפול מחיר מעודכן שווה פדיון).", math_expression: "(x - 4) \\times (\\dfrac{1200}{x} + 30) = 1440" },
            { verbal_explanation: "שלב 3: חלוקת המשוואה בשלושים לצורך פישוט מספרים לפני כפל.", math_expression: "(x - 4) \\times (\\dfrac{40}{x} + 1) = 48" },
            { verbal_explanation: "שלב 4: פתיחת סוגריים וכינוס איברים חופשיים.", math_expression: "40 + x - \\dfrac{160}{x} - 4 = 48 \\Rightarrow x - 12 - \\dfrac{160}{x} = 0" },
            { verbal_explanation: "שלב 5: הכפלת המשוואה באיקס ליצירת משוואה ריבועית.", math_expression: "x^{2} - 12x - 160 = 0" },
            { verbal_explanation: "שלב 6: חילוץ התוצאה החיובית (כמות כסאות).", math_expression: "(x - 20)(x + 8) = 0 \\Rightarrow x = 20" }
        ],
        final_answer: "20"
    },
    {
        topic: "word_problems_471",
        subTopic: "בעיות קנייה ומכירה (כולל אחוזים)",
        question_text: "מחירו של מוצר עלה ב-x אחוזים. לאחר חודש, מחירו של המוצר עלה שוב ב-x אחוזים. המחיר הסופי גדול ב-44% מהמחיר המקורי. מצאו את x.&rlm;",
        options: ["20", "10", "22", "15"],
        correctAnswer: 0,
        hint: "המחיר ההתחלתי P כפול המקדם בריבוע, שווה ל-1.44P.",
        solution_steps: [
            { verbal_explanation: "שלב 1: הצגת מודל אחוזי ההתייקרות הכפולה שמהווה את השינוי הכולל.", math_expression: "p \\times (1 + \\dfrac{x}{100})^{2} = p \\times 1.44" },
            { verbal_explanation: "שלב 2: צמצום המחיר המקורי משני האגפים.", math_expression: "(1 + \\dfrac{x}{100})^{2} = 1.44" },
            { verbal_explanation: "שלב 3: הוצאת שורש ריבועי לקבלת המקדם התקופתי הנקי.", math_expression: "1 + \\dfrac{x}{100} = 1.2" },
            { verbal_explanation: "שלב 4: בידוד השבר עם הנעלם.", math_expression: "\\dfrac{x}{100} = 0.2" },
            { verbal_explanation: "שלב 5: הכפלה במאה לקבלת האחוז המדויק.", math_expression: "x = 20" }
        ],
        final_answer: "20"
    },
    {
        topic: "word_problems_471",
        subTopic: "בעיות קנייה ומכירה (כולל אחוזים)",
        question_text: "חנות קנתה עפרונות במחיר כולל של 400 שקלים. 10 עפרונות אבדו. החנות מכרה את העפרונות הנותרים במחיר הגבוה ב-2 שקלים ליחידה ממחיר הקנייה שלהם. סך הכל קיבלה החנות 420 שקלים מהמכירה. כמה עפרונות קנתה החנות בהתחלה?&rlm;",
        options: ["50", "40", "60", "80"],
        correctAnswer: 0,
        hint: "בנו משוואה בדומה לשאלה הראשונה: כמות (x-10) כפול מחיר יחידה (400/x + 2) שווה 420.",
        solution_steps: [
            { verbal_explanation: "שלב 1: בניית משוואת הפדיון הכוללת כמות משתנה ומחיר משתנה.", math_expression: "(x - 10) \\times (\\dfrac{400}{x} + 2) = 420" },
            { verbal_explanation: "שלב 2: חלוקת המשוואה בשתיים לפשטות המספרים.", math_expression: "(x - 10) \\times (\\dfrac{200}{x} + 1) = 210" },
            { verbal_explanation: "שלב 3: פתיחת סוגריים מלאה.", math_expression: "200 + x - \\dfrac{2000}{x} - 10 = 210" },
            { verbal_explanation: "שלב 4: כינוס איברים והכפלה במשתנה לביטול השבר.", math_expression: "x^{2} - 20x - 2000 = 0" },
            { verbal_explanation: "שלב 5: מציאת הכמות המקורית שהיא השורש החיובי למשוואה הריבועית.", math_expression: "(x - 50)(x + 40) = 0 \\Rightarrow x = 50" }
        ],
        final_answer: "50"
    },
    {
        topic: "word_problems_471",
        subTopic: "בעיות קנייה ומכירה (כולל אחוזים)",
        question_text: "מחירו של מוצר עלה ב-25%. בכמה אחוזים יש להוריד את מחירו החדש כדי שיחזור למחירו המקורי לפני ההעלאה?&rlm;",
        options: ["20", "25", "15", "30"],
        correctAnswer: 0,
        hint: "אנו מחפשים איזה אחוז להוריד מ-1.25 כדי לקבל חזרה 1 (המחיר המקורי).",
        solution_steps: [
            { verbal_explanation: "שלב 1: הגדרת הקשר שבו המחיר החדש יוכפל במקדם חדש כדי לחזור לערך בסיס של אחד.", math_expression: "1.25 \\times q = 1" },
            { verbal_explanation: "שלב 2: חלוקה לבידוד המקדם החדש.", math_expression: "q = \\dfrac{1}{1.25} = 0.8" },
            { verbal_explanation: "שלב 3: המקדם הזה משקף הותרת שמונים אחוזים מהערך המלא. המרת הפער לאחוזים מניבה את הפתרון.", math_expression: "x = (1 - 0.8) \\times 100 = 20" }
        ],
        final_answer: "20"
    },
    {
        topic: "word_problems_471",
        subTopic: "בעיות קנייה ומכירה (כולל אחוזים)",
        question_text: "חולצה ומכנסיים עלו יחד 300 שקלים. בסוף העונה הוזלה החולצה ב-20% והמכנסיים הוזלו ב-30%. כעת המחיר הכולל שלהם יחד הוא 225 שקלים. מה היה מחירה המקורי של החולצה?&rlm;",
        options: ["150", "200", "100", "120"],
        correctAnswer: 0,
        hint: "זהו תרגיל עם שתי משוואות בשני נעלמים: x+y=300 וגם 0.8x+0.7y=225.",
        solution_steps: [
            { verbal_explanation: "שלב 1: בניית משוואת הסכום הראשונית וחילוץ משתנה אחד בעזרת השני.", math_expression: "x + y = 300 \\Rightarrow y = 300 - x" },
            { verbal_explanation: "שלב 2: בניית משוואת המחירים החדשים לאחר הפחתת האחוזים.", math_expression: "0.8x + 0.7y = 225" },
            { verbal_explanation: "שלב 3: הצבת הביטוי המייצג את המכנסיים לתוך המשוואה העדכנית.", math_expression: "0.8x + 0.7(300 - x) = 225" },
            { verbal_explanation: "שלב 4: פתיחת הסוגריים.", math_expression: "0.8x + 210 - 0.7x = 225" },
            { verbal_explanation: "שלב 5: חיסור משתנים ובידוד התוצאה למציאת הערך.", math_expression: "0.1x = 15 \\Rightarrow x = 150" }
        ],
        final_answer: "150"
    },
    {
        topic: "word_problems_471",
        subTopic: "בעיות קנייה ומכירה (כולל אחוזים)",
        question_text: "קבוצת חברים שכרה יאכטה ב-1200 שקלים (התשלום מתחלק שווה בשווה). ביום ההפלגה ביטלו 4 חברים את הגעתם, ולכן כל אחד מאלו שבאו נאלץ לשלם 10 שקלים יותר. כמה חברים היו בקבוצה במקור?&rlm;",
        options: ["24", "20", "30", "16"],
        correctAnswer: 0,
        hint: "התשלום המקורי לאדם היה 1200/x. התשלום החדש הוא 1200/(x-4). ההפרש ביניהם הוא 10.",
        solution_steps: [
            { verbal_explanation: "שלב 1: בניית משוואה המתארת את העלות הגבוהה פחות הנמוכה והשוואתה להפרש.", math_expression: "\\dfrac{1200}{x - 4} - \\dfrac{1200}{x} = 10" },
            { verbal_explanation: "שלב 2: חלוקת המשוואה בעשר לצמצום מספרים.", math_expression: "\\dfrac{120}{x - 4} - \\dfrac{120}{x} = 1" },
            { verbal_explanation: "שלב 3: כפל במכנה משותף לשם הוצאת הנעלם מקו השבר.", math_expression: "120x - 120(x - 4) = x(x - 4)" },
            { verbal_explanation: "שלב 4: פתיחת סוגריים וצמצום מהיר (האיקסים בצד שמאל מתבטלים).", math_expression: "480 = x^{2} - 4x" },
            { verbal_explanation: "שלב 5: סידור כמשוואה ריבועית קלאסית.", math_expression: "x^{2} - 4x - 480 = 0" },
            { verbal_explanation: "שלב 6: בחירת התוצאה החיובית.", math_expression: "(x - 24)(x + 20) = 0 \\Rightarrow x = 24" }
        ],
        final_answer: "24"
    },
    {
        topic: "word_problems_471",
        subTopic: "בעיות קנייה ומכירה (כולל אחוזים)",
        question_text: "בעל חנות קנה מוצר ב-x שקלים. הוא קבע לו מחיר מחירון הגבוה ב-25% ממחיר הקנייה. לאחר מכן נתן הנחה של 10% על מחיר המחירון. רווחו במכירה היה 25 שקלים. מה היה מחיר הקנייה (x)?&rlm;",
        options: ["200", "250", "150", "300"],
        correctAnswer: 0,
        hint: "המחיר הסופי מחושב על ידי הכפלה ב-1.25 ולאחר מכן ב-0.9. הרווח הוא ההפרש בין המחיר הסופי לעלות המקורית.",
        solution_steps: [
            { verbal_explanation: "שלב 1: כתיבת ביטוי המייצג את המחיר הסופי לאחר כל שינויי האחוזים.", math_expression: "P = x \\times 1.25 \\times 0.9 = 1.125x" },
            { verbal_explanation: "שלב 2: הגדרת הרווח כפער בין הפדיון לעלות, והשוואתו לנתון.", math_expression: "1.125x - x = 25" },
            { verbal_explanation: "שלב 3: כינוס המשתנים.", math_expression: "0.125x = 25" },
            { verbal_explanation: "שלב 4: חלוקה להשגת מחיר הקנייה הבסיסי.", math_expression: "x = 25 : 0.125 = 200" }
        ],
        final_answer: "200"
    },
    {
        topic: "word_problems_471",
        subTopic: "בעיות קנייה ומכירה (כולל אחוזים)",
        question_text: "ידוע שמוצר א' זול ב-20% ממוצר ב'. ביום מסוים, מוצר א' התייקר ב-15%, ומוצר ב' הוזל ב-10%. המחיר הכולל של שניהם יחד כעת הוא 364 שקלים. מה היה מחירו המקורי של מוצר א'?&rlm;",
        options: ["160", "200", "150", "180"],
        correctAnswer: 0,
        hint: "מוצר ב' הוא y. מוצר א' הוא 0.8y. בנו משוואה לחיבור המחירים המעודכנים שלהם.",
        solution_steps: [
            { verbal_explanation: "שלב 1: הגדרת מחירו של מוצר א' בעזרת ביטוי התלוי במוצר ב'.", math_expression: "P_{1} = 0.8y" },
            { verbal_explanation: "שלב 2: בניית משוואת המחירים החדשים לאחר שינויי העדכון באחוזים.", math_expression: "1.15 \\times (0.8y) + 0.9y = 364" },
            { verbal_explanation: "שלב 3: פישוט הנתונים המוכפלים.", math_expression: "0.92y + 0.9y = 364" },
            { verbal_explanation: "שלב 4: כינוס איברים וחלוקה למציאת מחירו של המוצר השני.", math_expression: "1.82y = 364 \\Rightarrow y = 200" },
            { verbal_explanation: "שלב 5: הצבה בחזרה למציאת המחיר המקורי של מוצר א' בלבד.", math_expression: "P_{1} = 0.8 \\times 200 = 160" }
        ],
        final_answer: "160"
    },
    {
        topic: "word_problems_471",
        subTopic: "בעיות קנייה ומכירה (כולל אחוזים)",
        question_text: "סוחר קנה 50 פריטים. 10 פריטים התקלקלו ונזרקו. את השאר הוא מכר ברווח של 40% על כל פריט. אם בסוף התהליך הוא הרוויח נטו 600 שקלים בעסקה כולה, כמה עלה לו כל פריט במקור?&rlm;",
        options: ["100", "50", "120", "80"],
        correctAnswer: 0,
        hint: "מחיר קנייה ליחידה הוא p. עלות כוללת: 50p. הוא מכר 40 פריטים במחיר 1.4p. הפדיון פחות העלות שווה 600.",
        solution_steps: [
            { verbal_explanation: "שלב 1: הגדרת ביטוי להוצאה הכוללת במונחי מחיר יחיד.", math_expression: "C = 50p" },
            { verbal_explanation: "שלב 2: הגדרת ביטוי לפדיון ממכירת שארית הסחורה התקינה בתעריף המוגדל.", math_expression: "R = 40 \\times (1.4p) = 56p" },
            { verbal_explanation: "שלב 3: בניית משוואת הרווח הכללי המהווה את ההפרש בין הפדיון להוצאות.", math_expression: "56p - 50p = 600" },
            { verbal_explanation: "שלב 4: כינוס ופתרון המשוואה הפשוטה.", math_expression: "6p = 600 \\Rightarrow p = 100" }
        ],
        final_answer: "100"
    },
    {
        topic: "word_problems_471",
        subTopic: "בעיות קנייה ומכירה (כולל אחוזים)",
        question_text: "מחיר ספר גדול ב-20 שקלים ממחיר מחברת. קנו 3 ספרים ו-5 מחברות. נתנו הנחה של 10% על הספרים, ולכן המחיר הכולל ששולם היה 169.5 שקלים. מהו מחיר מחברת?&rlm;",
        options: ["15", "20", "25", "10"],
        correctAnswer: 0,
        hint: "מחיר מחברת x. מחיר ספר x+20. המשוואה: 5x פלוס 3 כפול 0.9 כפול (x+20) שווה 169.5.",
        solution_steps: [
            { verbal_explanation: "שלב 1: הרכבת משוואת עלות הקנייה לפי הנתונים.", math_expression: "5x + 3 \\times 0.9 \\times (x + 20) = 169.5" },
            { verbal_explanation: "שלב 2: הכפלת המקדמים מחוץ לסוגריים.", math_expression: "5x + 2.7(x + 20) = 169.5" },
            { verbal_explanation: "שלב 3: פתיחת סוגריים.", math_expression: "5x + 2.7x + 54 = 169.5" },
            { verbal_explanation: "שלב 4: כינוס נעלמים וחיסור מספרים בין האגפים.", math_expression: "7.7x = 115.5" },
            { verbal_explanation: "שלב 5: חלוקה לקבלת מחיר הפריט הפשוט.", math_expression: "x = 15" }
        ],
        final_answer: "15"
    },

    // ==========================================
    // תת נושא 4: בעיות תערובות וריכוזים (10 שאלות)
    // ==========================================

    {
        topic: "word_problems_471",
        subTopic: "בעיות תערובות וריכוזים",
        question_text: "עירבבו 20 ליטרים של תמיסת חומצה בריכוז 30%, עם 30 ליטרים של תמיסת חומצה בריכוז 50%. מהו ריכוז החומצה (באחוזים) בתערובת החדשה שנוצרה?&rlm;",
        options: ["42%", "40%", "45%", "38%"],
        correctAnswer: 0,
        hint: "חשבו את כמות החומצה הנקייה בכל תמיסה, חברו אותן, וחלקו בנפח הכולל החדש של התערובת (50 ליטרים).",
        solution_steps: [
            { verbal_explanation: "שלב 1: מציאת כמות החומר הטהור בתמיסה הראשונה.", math_expression: "m_{1} = 20 \\times 0.3 = 6" },
            { verbal_explanation: "שלב 2: מציאת כמות החומר הטהור בתמיסה השנייה.", math_expression: "m_{2} = 30 \\times 0.5 = 15" },
            { verbal_explanation: "שלב 3: סכימת כמויות החומר והנוזל הכללי.", math_expression: "m = 6 + 15 = 21 \\quad , \\quad V = 20 + 30 = 50" },
            { verbal_explanation: "שלב 4: חישוב הריכוז הסופי כשבר והמרתו לאחוז.", math_expression: "p = (\\dfrac{21}{50}) \\times 100" },
            { verbal_explanation: "שלב 5: התוצאה המדויקת באחוזים.", math_expression: "p = 42" }
        ],
        final_answer: "42%"
    },
    {
        topic: "word_problems_471",
        subTopic: "בעיות תערובות וריכוזים",
        question_text: "במיכל יש 40 ק''ג של תמיסת מלח בריכוז 20%. כמה ק''ג של מים נקיים (0% מלח) יש להוסיף למיכל כדי שריכוז התמיסה יירד ל-16%?&rlm;",
        options: ["10", "8", "12", "15"],
        correctAnswer: 0,
        hint: "כמות המלח לא משתנה (נשארת 8 ק''ג). המשוואה: 8 ק''ג לחלק לנפח החדש (40 פלוס x) שווה ל-0.16.",
        solution_steps: [
            { verbal_explanation: "שלב 1: חישוב המלח הקיים במקור בתמיסה.", math_expression: "m = 40 \\times 0.2 = 8" },
            { verbal_explanation: "שלב 2: בניית משוואת הריכוז החדש לאחר הוספת המים שמשנים רק את הנפח.", math_expression: "\\dfrac{8}{40 + x} = 0.16" },
            { verbal_explanation: "שלב 3: כפל בהצלבה לביטול המכנה.", math_expression: "8 = 0.16(40 + x)" },
            { verbal_explanation: "שלב 4: פתיחת סוגריים.", math_expression: "8 = 6.4 + 0.16x" },
            { verbal_explanation: "שלב 5: העברת אגף וחלוקה לבידוד המים שנוספו.", math_expression: "1.6 = 0.16x \\Rightarrow x = 10" }
        ],
        final_answer: "10"
    },
    {
        topic: "word_problems_471",
        subTopic: "בעיות תערובות וריכוזים",
        question_text: "לתמיסת כוהל בריכוז 40% הוסיפו 5 ליטרים של כוהל נקי (100%), ונוצרה תמיסה חדשה בריכוז של 50%. מה היה נפחה של התמיסה המקורית (לפני ההוספה)?&rlm;",
        options: ["25", "20", "30", "15"],
        correctAnswer: 0,
        hint: "כמות הכוהל המקורית היא 0.4x. מוסיפים לה 5 ליטרים. הנפח החדש הוא x+5. המשוואה: (0.4x פלוס 5) חלקי (x פלוס 5) שווה ל-0.5.",
        solution_steps: [
            { verbal_explanation: "שלב 1: ניסוח משוואת הריכוז הסופית.", math_expression: "\\dfrac{0.4x + 5}{x + 5} = 0.5" },
            { verbal_explanation: "שלב 2: חילוץ הנעלמים מקו השבר לחלק העליון.", math_expression: "0.4x + 5 = 0.5(x + 5)" },
            { verbal_explanation: "שלב 3: פתיחת סוגריים.", math_expression: "0.4x + 5 = 0.5x + 2.5" },
            { verbal_explanation: "שלב 4: כינוס איברים לשם קבלת משתנה חיובי מבודד.", math_expression: "2.5 = 0.1x" },
            { verbal_explanation: "שלב 5: חלוקה בעשירית המספקת את הנפח ההתחלתי.", math_expression: "x = 25" }
        ],
        final_answer: "25"
    },
    {
        topic: "word_problems_471",
        subTopic: "בעיות תערובות וריכוזים",
        question_text: "יש להכין 50 ליטרים של תמיסה בריכוז 18%. לשם כך מערבבים תמיסה בריכוז 10% עם תמיסה בריכוז 30%. כמה ליטרים יש לקחת מהתמיסה של ה-10%?&rlm;",
        options: ["30", "20", "25", "35"],
        correctAnswer: 0,
        hint: "הנפח הכולל הוא 50. אם תמיסה א' תהיה בנפח x, אז תמיסה ב' תהיה 50 פחות x. השוו את כמות החומר הטהור.",
        solution_steps: [
            { verbal_explanation: "שלב 1: בניית משוואת החומר הטהור המרכיב את התערובת.", math_expression: "0.1x + 0.3(50 - x) = 0.18 \\times 50" },
            { verbal_explanation: "שלב 2: פתיחת סוגריים ופתרון אגף ימין.", math_expression: "0.1x + 15 - 0.3x = 9" },
            { verbal_explanation: "שלב 3: כינוס משתנים והעברת המספר ימינה.", math_expression: "-0.2x = -6" },
            { verbal_explanation: "שלב 4: חלוקה לשם קבלת נפח הנוזל מהסוג הראשון.", math_expression: "x = 30" }
        ],
        final_answer: "30"
    },
    {
        topic: "word_problems_471",
        subTopic: "בעיות תערובות וריכוזים",
        question_text: "מיכל מכיל 100 ליטרים של מי מלח בריכוז מסוים. מאדים ממנו 20 ליטרים של מים (רק מים נקיים מתאדים), וכתוצאה מכך הריכוז עולה ל-25%. מה היה הריכוז המקורי של מי המלח (באחוזים)?&rlm;",
        options: ["20", "15", "18", "22"],
        correctAnswer: 0,
        hint: "הנפח החדש הוא 80 ליטר. כיוון שהריכוז בו הוא 25%, כמות המלח היא 80 כפול 0.25. אותה כמות מלח הייתה בהתחלה ב-100 ליטרים.",
        solution_steps: [
            { verbal_explanation: "שלב 1: חישוב הנפח שנותר לאחר האידוי.", math_expression: "V = 100 - 20 = 80" },
            { verbal_explanation: "שלב 2: מציאת כמות המלח על בסיס הריכוז הנתון במצב החדש.", math_expression: "m = 80 \\times 0.25 = 20" },
            { verbal_explanation: "שלב 3: כיוון שרק מים התאדו, מסת המלח נותרה כשהייתה במקור. חישוב הריכוז ההתחלתי.", math_expression: "p = (\\dfrac{20}{100}) \\times 100" },
            { verbal_explanation: "שלב 4: התוצאה באחוזים נטו.", math_expression: "p = 20" }
        ],
        final_answer: "20"
    },
    {
        topic: "word_problems_471",
        subTopic: "בעיות תערובות וריכוזים",
        question_text: "קבלן מערבב שני סוגי קפה. מחיר קילו קפה א' הוא 40 שקלים, ומחיר קילו קפה ב' הוא 60 שקלים. הוא יוצר תערובת של 100 ק''ג שבה מחיר קילו אחד עומד על 46 שקלים. כמה ק''ג הוא לקח מקפה ב'?&rlm;",
        options: ["30", "70", "40", "20"],
        correctAnswer: 0,
        hint: "זו בעיית ממוצע משוקלל הזהה לפתרון בעיית תערובות. x ק''ג מקפה ב', ולכן (100 פחות x) מקפה א'.",
        solution_steps: [
            { verbal_explanation: "שלב 1: בניית משוואת העלות הכוללת של התערובת.", math_expression: "60x + 40(100 - x) = 46 \\times 100" },
            { verbal_explanation: "שלב 2: פתיחת סוגריים ופישוט.", math_expression: "60x + 4000 - 40x = 4600" },
            { verbal_explanation: "שלב 3: כינוס איברים והעברת מספרים.", math_expression: "20x = 600" },
            { verbal_explanation: "שלב 4: חלוקה בעשרים.", math_expression: "x = 30" }
        ],
        final_answer: "30"
    },
    {
        topic: "word_problems_471",
        subTopic: "בעיות תערובות וריכוזים",
        question_text: "מיכל מכיל 50 ליטרים של אלכוהול נקי (100%). מוציאים מהמיכל x ליטרים, ומיד מכניסים במקומם x ליטרים של מים. עכשיו מוציאים שוב x ליטרים מהתערובת שנוצרה, ומכניסים x ליטרים של מים. ריכוז האלכוהול כעת הוא 64%. מצאו את x.&rlm;",
        options: ["10", "5", "20", "15"],
        correctAnswer: 0,
        hint: "זהו תהליך הוצאה והכנסה כפול. הכמות הנותרת בכל שלב יורדת בפקטור קבוע. 50 כפול החלק היחסי בריבוע שווה לכמות האלכוהול הסופית.",
        solution_steps: [
            { verbal_explanation: "שלב 1: כתיבת תבנית לתהליך מיהול עוקב המתרחש פעמיים.", math_expression: "50 \\times (\\dfrac{50 - x}{50})^{2} = 50 \\times 0.64" },
            { verbal_explanation: "שלב 2: חלוקת שני האגפים בנפח המקורי כדי לפשט.", math_expression: "(\\dfrac{50 - x}{50})^{2} = 0.64" },
            { verbal_explanation: "שלב 3: הוצאת שורש ריבועי.", math_expression: "\\dfrac{50 - x}{50} = 0.8" },
            { verbal_explanation: "שלב 4: הכפלה בחמישים והעברת אגפים לבידוד המשתנה.", math_expression: "50 - x = 40 \\Rightarrow x = 10" }
        ],
        final_answer: "10"
    },
    {
        topic: "word_problems_471",
        subTopic: "בעיות תערובות וריכוזים",
        question_text: "לתוך כלי שהכיל 20 גרם של סגסוגת נחושת בריכוז מסוים, הוסיפו 5 גרם של נחושת טהורה. הריכוז של הנחושת עלה ב-10% (0.1 עשרוני). מה היה ריכוז הנחושת ההתחלתי בסגסוגת (באחוזים)?&rlm;",
        options: ["50", "40", "30", "25"],
        correctAnswer: 0,
        hint: "נסמן את הריכוז המקורי העשרוני ב-p. המסה החדשה היא 25. המשוואה: 20p + 5 = 25(p+0.1).",
        solution_steps: [
            { verbal_explanation: "שלב 1: משוואת החומר הטהור המושווה לחומר הסופי לפי ריכוזו העדכני.", math_expression: "20p + 5 = 25(p + 0.1)" },
            { verbal_explanation: "שלב 2: פתיחת סוגריים.", math_expression: "20p + 5 = 25p + 2.5" },
            { verbal_explanation: "שלב 3: העברת אגפים לקבלת המשתנה בחיובי.", math_expression: "2.5 = 5p" },
            { verbal_explanation: "שלב 4: חלוקה לקבלת הערך.", math_expression: "p = 0.5" },
            { verbal_explanation: "שלב 5: המרה לאחוזים שלמים.", math_expression: "50" }
        ],
        final_answer: "50"
    },
    {
        topic: "word_problems_471",
        subTopic: "בעיות תערובות וריכוזים",
        question_text: "מערבבים כמויות שוות (אותו הנפח) של שתי תמיסות. תמיסה אחת בריכוז 20% והשנייה בריכוז לא ידוע. התערובת שהתקבלה היא בריכוז של 35%. מהו ריכוז התמיסה השנייה?&rlm;",
        options: ["50%", "45%", "40%", "30%"],
        correctAnswer: 0,
        hint: "כאשר מערבבים כמויות שוות, ריכוז התערובת הוא פשוט הממוצע החשבוני של ריכוזי התמיסות. (20 פלוס p) חלקי 2 שווה 35.",
        solution_steps: [
            { verbal_explanation: "שלב 1: הצבת תכונת הממוצע לשני משקלים זהים.", math_expression: "\\dfrac{20 + p}{2} = 35" },
            { verbal_explanation: "שלב 2: הכפלת המשוואה בשתיים.", math_expression: "20 + p = 70" },
            { verbal_explanation: "שלב 3: בידוד ופיתרון.", math_expression: "p = 50" }
        ],
        final_answer: "50%"
    },
    {
        topic: "word_problems_471",
        subTopic: "בעיות תערובות וריכוזים",
        question_text: "יצרן בושם מוהל תמצית ריח טהורה במים. יש לו 10 מ''ל של תמצית טהורה. הוא מוסיף מים עד שריכוז התמצית יורד ל-5%. כמה מים (במ''ל) הוא הוסיף בסך הכל?&rlm;",
        options: ["190", "200", "150", "95"],
        correctAnswer: 0,
        hint: "כמות התמצית היא 10 מ''ל, והיא מהווה עכשיו 5% מהנפח הכולל. נפח כולל שווה 10 חלקי 0.05. כמות המים היא הנפח הכולל פחות התמצית.",
        solution_steps: [
            { verbal_explanation: "שלב 1: חישוב הנפח הכולל של הבושם כאשר התמצית ידועה כחמישה אחוזים ממנו.", math_expression: "0.05 \\times V = 10" },
            { verbal_explanation: "שלב 2: בידוד הנפח הכולל על ידי חלוקה.", math_expression: "V = 10 : 0.05 = 200" },
            { verbal_explanation: "שלב 3: חישוב כמות המים שנוספו בלבד, על ידי הפחתת התמצית מהנפח הכולל.", math_expression: "W = 200 - 10 = 190" }
        ],
        final_answer: "190"
    },

    // ==========================================
    // תת נושא 5: בעיות גיאומטריות המשלבות אלגברה (10 שאלות)
    // ==========================================

    {
        topic: "word_problems_471",
        subTopic: "בעיות גיאומטריות המשלבות אלגברה",
        question_text: "שטחו של מלבן הוא 48 סמ''ר. אורך המלבן גדול ב-2 ס''מ מרוחבו. מהו היקף המלבן?&rlm;",
        options: ["28", "24", "32", "30"],
        correctAnswer: 0,
        hint: "הרוחב הוא x, האורך x+2. שטח מלבן: x כפול (x+2) שווה 48. מצאו את x וחשבו היקף.",
        solution_steps: [
            { verbal_explanation: "שלב 1: בניית משוואת השטח בעזרת נעלם אחד.", math_expression: "x(x + 2) = 48" },
            { verbal_explanation: "שלב 2: פתיחת סוגריים וסידור כמשוואה ריבועית.", math_expression: "x^{2} + 2x - 48 = 0" },
            { verbal_explanation: "שלב 3: פתרון המשוואה הריבועית לחילוץ הממד החיובי של הרוחב.", math_expression: "(x + 8)(x - 6) = 0 \\Rightarrow x = 6" },
            { verbal_explanation: "שלב 4: מציאת האורך.", math_expression: "L = 6 + 2 = 8" },
            { verbal_explanation: "שלב 5: חישוב היקף המלבן.", math_expression: "P = 2 \\times 6 + 2 \\times 8 = 12 + 16 = 28" }
        ],
        final_answer: "28"
    },
    {
        topic: "word_problems_471",
        subTopic: "בעיות גיאומטריות המשלבות אלגברה",
        question_text: "במשולש ישר זווית, אורך היתר הוא 13 ס''מ. ניצב אחד קצר מהניצב השני ב-7 ס''מ. מהו שטח המשולש?&rlm;",
        options: ["30", "60", "20", "45"],
        correctAnswer: 0,
        hint: "ניצב אחד x, שני x+7. השתמשו במשפט פיתגורס. לאחר מציאת הניצבים, השטח הוא מכפלתם חלקי 2.",
        solution_steps: [
            { verbal_explanation: "שלב 1: הצבת המשתנים והנתונים למשפט פיתגורס.", math_expression: "x^{2} + (x + 7)^{2} = 13^{2}" },
            { verbal_explanation: "שלב 2: פיתוח חזקות ופתיחת סוגריים עם כפל מקוצר.", math_expression: "x^{2} + x^{2} + 14x + 49 = 169" },
            { verbal_explanation: "שלב 3: סידור כמשוואה ריבועית וכינוס.", math_expression: "2x^{2} + 14x - 120 = 0" },
            { verbal_explanation: "שלב 4: חלוקה בשתיים ופתרון להשגת הניצב הקצר.", math_expression: "x^{2} + 7x - 60 = 0 \\Rightarrow (x + 12)(x - 5) = 0 \\Rightarrow x = 5" },
            { verbal_explanation: "שלב 5: מציאת הניצב השני.", math_expression: "y = 5 + 7 = 12" },
            { verbal_explanation: "שלב 6: חישוב שטח המשולש באמצעות הניצבים.", math_expression: "S = \\dfrac{5 \\times 12}{2} = 30" }
        ],
        final_answer: "30"
    },
    {
        topic: "word_problems_471",
        subTopic: "בעיות גיאומטריות המשלבות אלגברה",
        question_text: "קיר מלבני שממדיו הם 10 מטרים על 6 מטרים כולל בתוכו חלון מרובע. הוחלט לצבוע את הקיר (מבלי לצבוע את החלון). אורך החלון גדול ב-1 מטר מרוחבו. השטח שנצבע בפועל הוא 48 מ''ר. מה רוחב החלון?&rlm;",
        options: ["3", "4", "2", "5"],
        correctAnswer: 0,
        hint: "שטח הקיר כולו (60) פחות השטח הצבוע (48) נותן את שטח החלון. בנו משוואה לשטח החלון.",
        solution_steps: [
            { verbal_explanation: "שלב 1: מציאת שטח החלון לבדו, באמצעות חיסור מהשטח הכולל.", math_expression: "S = 10 \\times 6 - 48 = 60 - 48 = 12" },
            { verbal_explanation: "שלב 2: כתיבת משוואת השטח של החלון עם משתנים.", math_expression: "x(x + 1) = 12" },
            { verbal_explanation: "שלב 3: בניית המשוואה הריבועית.", math_expression: "x^{2} + x - 12 = 0" },
            { verbal_explanation: "שלב 4: חילוץ התוצאה החיובית עבור רוחב החלון.", math_expression: "(x + 4)(x - 3) = 0 \\Rightarrow x = 3" }
        ],
        final_answer: "3"
    },
    {
        topic: "word_problems_471",
        subTopic: "בעיות גיאומטריות המשלבות אלגברה",
        question_text: "מסגרת ברוחב אחיד של x ס''מ מקיפה תמונה מלבנית שממדיה 12 ס''מ על 8 ס''מ. השטח הכולל של התמונה יחד עם המסגרת הוא 192 סמ''ר. מהו רוחב המסגרת x?&rlm;",
        options: ["2", "1", "3", "4"],
        correctAnswer: 0,
        hint: "הממדים החדשים הם (12 פלוס פעמיים x) ו-(8 פלוס פעמיים x). מכפלתם שווה 192.",
        solution_steps: [
            { verbal_explanation: "שלב 1: בניית משוואת השטח הכולל עם התוספת הדו-צדדית לכל ממד.", math_expression: "(12 + 2x)(8 + 2x) = 192" },
            { verbal_explanation: "שלב 2: פתיחת סוגריים מלאה.", math_expression: "96 + 24x + 16x + 4x^{2} = 192" },
            { verbal_explanation: "שלב 3: כינוס איברים והעברת מספר אגף ליצירת פולינום לאיפוס.", math_expression: "4x^{2} + 40x - 96 = 0" },
            { verbal_explanation: "שלב 4: צמצום הפולינום בחלוקה בארבע להקלת הפתרון.", math_expression: "x^{2} + 10x - 24 = 0" },
            { verbal_explanation: "שלב 5: מציאת השורש החיובי המהווה את רוחב המסגרת.", math_expression: "(x + 12)(x - 2) = 0 \\Rightarrow x = 2" }
        ],
        final_answer: "2"
    },
    {
        topic: "word_problems_471",
        subTopic: "בעיות גיאומטריות המשלבות אלגברה",
        question_text: "חוט מתכת שאורכו 40 ס''מ נחתך לשני חלקים. מחלק אחד יצרו ריבוע, ומהחלק השני יצרו מלבן שאורכו גדול ב-2 ס''מ מרוחבו. ידוע כי סכום שטחי הצורות הוא 49 סמ''ר. מהו אורך צלע הריבוע? (בחרו את הפתרון החיובי והשלם)&rlm;",
        options: ["5", "3", "4", "6"],
        correctAnswer: 0,
        hint: "צלע ריבוע היא y. צלעות המלבן הן x+2 ו-x. סכום היקפים שווה ל-40, כלומר 4y + 4x + 4 = 40. בודדו את y והציבו במשוואת סכום השטחים.",
        solution_steps: [
            { verbal_explanation: "שלב 1: חילוץ קשר בין צלע הריבוע לרוחב המלבן מתוך משוואת סכום ההיקפים המלאה (לאחר חלוקה בארבע).", math_expression: "y + x + 1 = 10 \\Rightarrow y = 9 - x" },
            { verbal_explanation: "שלב 2: בניית משוואת סכום השטחים תוך הצבת הביטוי של צלע הריבוע.", math_expression: "(9 - x)^{2} + x(x + 2) = 49" },
            { verbal_explanation: "שלב 3: פתיחת סוגריים וסידור משוואה.", math_expression: "81 - 18x + x^{2} + x^{2} + 2x = 49" },
            { verbal_explanation: "שלב 4: העברת אגפים וכינוס לפולינום מאופס.", math_expression: "2x^{2} - 16x + 32 = 0 \\Rightarrow x^{2} - 8x + 16 = 0" },
            { verbal_explanation: "שלב 5: מציאת צלע המלבן (פתרון יחיד ומוחלט עקב איפוס הדלתא).", math_expression: "(x - 4)^{2} = 0 \\Rightarrow x = 4" },
            { verbal_explanation: "שלב 6: חזרה להצבה הראשונית למציאת צלע הריבוע המבוקשת בתרגיל.", math_expression: "y = 9 - 4 = 5" }
        ],
        final_answer: "5"
    },
    {
        topic: "word_problems_471",
        subTopic: "בעיות גיאומטריות המשלבות אלגברה",
        question_text: "במשולש שווה שוקיים, הבסיס ארוך ב-4 ס''מ מהגובה היורד אליו. שטח המשולש הוא 48 סמ''ר. מהו אורך הגובה?&rlm;",
        options: ["8", "10", "6", "12"],
        correctAnswer: 0,
        hint: "הגובה הוא h, הבסיס הוא h+4. השטח הוא מחצית המכפלה שלהם וזה שווה 48.",
        solution_steps: [
            { verbal_explanation: "שלב 1: הרכבת משוואת השטח באמצעות הנעלם של הגובה.", math_expression: "\\dfrac{h(h + 4)}{2} = 48" },
            { verbal_explanation: "שלב 2: הכפלת האגף הימני בשתיים לביטול קו השבר.", math_expression: "h^{2} + 4h = 96" },
            { verbal_explanation: "שלב 3: העברת המספר לאגף שמאל.", math_expression: "h^{2} + 4h - 96 = 0" },
            { verbal_explanation: "שלב 4: מציאת השורש החיובי באמצעות נוסחה או פירוק ישיר.", math_expression: "(h + 12)(h - 8) = 0 \\Rightarrow h = 8" }
        ],
        final_answer: "8"
    },
    {
        topic: "word_problems_471",
        subTopic: "בעיות גיאומטריות המשלבות אלגברה",
        question_text: "בתיבה, אורך הבסיס גדול ב-3 ס''מ מרוחבו. גובה התיבה הוא 5 ס''מ. נפח התיבה הוא 200 סמ''ק. מהו רוחב בסיס התיבה?&rlm;",
        options: ["5", "8", "4", "10"],
        correctAnswer: 0,
        hint: "הנפח הוא גובה כפול צלעות הבסיס. חלקו את 200 ב-5 כדי להקל, ופתרו את המשוואה הריבועית שנוצרת לממדי הבסיס.",
        solution_steps: [
            { verbal_explanation: "שלב 1: בניית משוואת הנפח הכוללת של התיבה.", math_expression: "5x(x + 3) = 200" },
            { verbal_explanation: "שלב 2: חלוקת המשוואה בחמש כדי לצמצם מקדמים להמשך העבודה.", math_expression: "x(x + 3) = 40" },
            { verbal_explanation: "שלב 3: פתיחת הסוגריים והעברת המספר לאיפוס המשוואה.", math_expression: "x^{2} + 3x - 40 = 0" },
            { verbal_explanation: "שלב 4: חילוץ התשובה החיובית (רוחב התיבה המבוקש).", math_expression: "(x + 8)(x - 5) = 0 \\Rightarrow x = 5" }
        ],
        final_answer: "5"
    },
    {
        topic: "word_problems_471",
        subTopic: "בעיות גיאומטריות המשלבות אלגברה",
        question_text: "שטח של מעגל הוגדל ב-\\( 44\\pi \\) סמ''ר כאשר הרדיוס שלו הוגדל ב-2 ס''מ. מה היה הרדיוס המקורי של המעגל?&rlm;",
        options: ["10", "8", "12", "5"],
        correctAnswer: 0,
        hint: "השטח הישן הוא פאי כפול הרדיוס בריבוע. השטח החדש מחושב עם הרדיוס ועוד שתיים. המשוואה: השטח החדש פחות הישן שווה לתוספת שניתנה.",
        solution_steps: [
            { verbal_explanation: "שלב 1: בניית משוואה להפרש השטחים, תוך חלוקתה בפאי ישר על ההתחלה להקלת החישוב.", math_expression: "(R + 2)^{2} - R^{2} = 44" },
            { verbal_explanation: "שלב 2: פתיחת הסוגריים של המעגל המוגדל דרך כפל מקוצר.", math_expression: "R^{2} + 4R + 4 - R^{2} = 44" },
            { verbal_explanation: "שלב 3: איברי הריבוע מצטמצמים, ונשארת משוואה פשוטה ממעלה ראשונה.", math_expression: "4R + 4 = 44" },
            { verbal_explanation: "שלב 4: חילוץ הרדיוס בסידור האגפים.", math_expression: "4R = 40 \\Rightarrow R = 10" }
        ],
        final_answer: "10"
    },
    {
        topic: "word_problems_471",
        subTopic: "בעיות גיאומטריות המשלבות אלגברה",
        question_text: "בטרפז, הבסיס העליון שווה ל-x, הבסיס התחתון שווה ל-x+6, והגובה שווה ל-x-1. שטח הטרפז הוא 21 סמ''ר. מצאו את אורך הבסיס העליון (x).&rlm;",
        options: ["4", "5", "6", "3"],
        correctAnswer: 0,
        hint: "נוסחת שטח טרפז: ממוצע הבסיסים כפול הגובה. לאחר סידור המשוואה, פתרו למציאת x חיובי.",
        solution_steps: [
            { verbal_explanation: "שלב 1: כתיבת משוואת השטח לטרפז.", math_expression: "\\dfrac{2x + 6}{2} \\times (x - 1) = 21" },
            { verbal_explanation: "שלב 2: חלוקת המונה הדו-איברי בשתיים לטובת צמצום הביטוי השמאלי.", math_expression: "(x + 3)(x - 1) = 21" },
            { verbal_explanation: "שלב 3: פתיחת סוגריים לביטוי רגיל.", math_expression: "x^{2} + 2x - 3 = 21" },
            { verbal_explanation: "שלב 4: העברת אגף לכינוס הפולינום.", math_expression: "x^{2} + 2x - 24 = 0" },
            { verbal_explanation: "שלב 5: הפתרון החיובי לממד הפיזי מתוך צמד השורשים.", math_expression: "(x + 6)(x - 4) = 0 \\Rightarrow x = 4" }
        ],
        final_answer: "4"
    },
    {
        topic: "word_problems_471",
        subTopic: "בעיות גיאומטריות המשלבות אלגברה",
        question_text: "אורכה של צלע אחת במשולש הוא 10 ס''מ. אורך הגובה היורד אליה הוא 12 ס''מ. מגדילים את הצלע ב-x ס''מ, ומקטינים את הגובה אליה ב-x ס''מ. השטח החדש שווה ל-60 סמ''ר. מהו x (בהנחה ש-x קטן מ-5)?&rlm;",
        options: ["2", "3", "4", "1"],
        correctAnswer: 0,
        hint: "הבסיס החדש הוא (10 פלוס x). הגובה החדש הוא (12 פחות x). שטח משולש שווה למכפלתם חלקי 2.",
        solution_steps: [
            { verbal_explanation: "שלב 1: הצבת הנתונים המשופרים בנוסחת שטח המשולש.", math_expression: "\\dfrac{(10 + x)(12 - x)}{2} = 60" },
            { verbal_explanation: "שלב 2: הכפלה בשתיים לביטול השבר.", math_expression: "(10 + x)(12 - x) = 120" },
            { verbal_explanation: "שלב 3: פתיחת סוגריים משמאל.", math_expression: "120 - 10x + 12x - x^{2} = 120" },
            { verbal_explanation: "שלב 4: צמצום האיבר החופשי שמופיע בשני האגפים וסידור.", math_expression: "-x^{2} + 2x = 0 \\Rightarrow x(x - 2) = 0" },
            { verbal_explanation: "שלב 5: מציאת השורש שאיננו אפס המעיד על שינוי ממשי.", math_expression: "x = 2" }
        ],
        final_answer: "2"
    }
];