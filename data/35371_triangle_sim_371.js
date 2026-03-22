const questionsDB = [
    // ==========================================
    // תת נושא 1: קריטריוני דמיון (ז.ז, צ.ז.צ, צ.צ.צ) (12 שאלות)
    // ==========================================

    // שאלה מספר 1
    {
        topic: "similar_triangles_35371",
        subTopic: "קריטריוני דמיון (ז.ז, צ.ז.צ, צ.צ.צ)",
        question_text: "במשולש אחד נתונות שתי זוויות שגודלן 50 מעלות ו-60 מעלות. במשולש שני נתונות שתי זוויות שגודלן 60 מעלות ו-70 מעלות. האם המשולשים דומים, ואם כן לפי איזה משפט?&rlm;\n<div dir='ltr' style='display:flex; justify-content:center; margin:20px 0;'><svg viewBox='0 0 300 150' style='max-width:350px; width:100%; border-radius:12px; background:#f8fafc; border:1px solid #e2e8f0;'><polygon points='20,130 120,130 60,30' fill='none' stroke='#3b82f6' stroke-width='2'/><polygon points='160,130 260,130 200,30' fill='none' stroke='#ef4444' stroke-width='2'/><text x='30' y='120' font-size='12' fill='#334155'>50°</text><text x='95' y='120' font-size='12' fill='#334155'>60°</text><text x='170' y='120' font-size='12' fill='#334155'>60°</text><text x='235' y='120' font-size='12' fill='#334155'>70°</text></svg></div>",
        options: ["דומים לפי ז.ז", "דומים לפי צ.ז.צ", "דומים לפי צ.צ.צ", "לא דומים"],
        correctAnswer: 0,
        hint: "חשבו את הזווית השלישית במשולש הראשון (השלימו ל-180 מעלות). אם יש שתי זוויות שוות בהתאמה, המשולשים דומים.",
        solution_steps: [
            { verbal_explanation: "שלב 1: חישוב הזווית השלישית במשולש הראשון.", math_expression: "\\alpha_{1} = 180^{\\circ} - (50^{\\circ} + 60^{\\circ})" },
            { verbal_explanation: "שלב 2: סכימת הזוויות בסוגריים.", math_expression: "\\alpha_{1} = 180^{\\circ} - 110^{\\circ}" },
            { verbal_explanation: "שלב 3: התוצאה לזווית השלישית במשולש הראשון.", math_expression: "\\alpha_{1} = 70^{\\circ}" },
            { verbal_explanation: "שלב 4: השוואת הזוויות בין שני המשולשים.", math_expression: "70^{\\circ} = 70^{\\circ} \\quad , \\quad 60^{\\circ} = 60^{\\circ}" },
            { verbal_explanation: "שלב 5: מצאנו שני זוגות של זוויות שוות בהתאמה. זה מספיק כדי להוכיח דמיון.", math_expression: "\\alpha_{1} = \\alpha_{2} \\quad , \\quad \\beta_{1} = \\beta_{2}" },
            { verbal_explanation: "שלב 6: קביעת משפט הדמיון הרלוונטי (זווית-זווית).", math_expression: "\\Delta_{1} \\sim \\Delta_{2}" }
        ],
        final_answer: "דומים לפי ז.ז"
    },

    // שאלה מספר 2
    {
        topic: "similar_triangles_35371",
        subTopic: "קריטריוני דמיון (ז.ז, צ.ז.צ, צ.צ.צ)",
        question_text: "במשולש א', אורכי שתי צלעות הם 4 ו-6, והזווית שביניהן היא 40 מעלות. במשולש ב', אורכי שתי צלעות הם 12 ו-18, והזווית שביניהן היא 40 מעלות. האם המשולשים דומים?&rlm;",
        options: ["דומים לפי צ.ז.צ", "דומים לפי ז.ז", "דומים לפי צ.צ.צ", "לא דומים"],
        correctAnswer: 0,
        hint: "בדקו אם היחס בין הצלעות המתאימות שווה, ואם הזווית הכלואה ביניהן שווה.",
        solution_steps: [
            { verbal_explanation: "שלב 1: השוואת הזווית הכלואה בין שתי הצלעות.", math_expression: "40^{\\circ} = 40^{\\circ}" },
            { verbal_explanation: "שלב 2: בדיקת היחס בין הצלעות הקצרות בשני המשולשים.", math_expression: "k_{1} = \\dfrac{12}{4}" },
            { verbal_explanation: "שלב 3: תוצאת היחס הראשון.", math_expression: "k_{1} = 3" },
            { verbal_explanation: "שלב 4: בדיקת היחס בין הצלעות הארוכות בשני המשולשים.", math_expression: "k_{2} = \\dfrac{18}{6}" },
            { verbal_explanation: "שלב 5: תוצאת היחס השני.", math_expression: "k_{2} = 3" },
            { verbal_explanation: "שלב 6: היחסים שווים והזווית הכלואה שווה, לכן המשולשים דומים.", math_expression: "k_{1} = k_{2} \\quad , \\quad \\gamma_{1} = \\gamma_{2}" },
            { verbal_explanation: "שלב 7: קביעת משפט הדמיון (צלע-זווית-צלע).", math_expression: "\\Delta_{1} \\sim \\Delta_{2}" }
        ],
        final_answer: "דומים לפי צ.ז.צ"
    },

    // שאלה מספר 3
    {
        topic: "similar_triangles_35371",
        subTopic: "קריטריוני דמיון (ז.ז, צ.ז.צ, צ.צ.צ)",
        question_text: "במשולש ישר זווית אחד, הזווית החדה היא בת 35 מעלות. במשולש ישר זווית שני, הזווית החדה היא בת 55 מעלות. האם המשולשים דומים?&rlm;",
        options: ["דומים לפי ז.ז", "דומים לפי צ.ז.צ", "דומים לפי צ.צ.צ", "לא דומים"],
        correctAnswer: 0,
        hint: "במשולש ישר זווית יש זווית של 90 מעלות. השלימו את הזווית החסרה בכל אחד מהמשולשים ל-180 מעלות.",
        solution_steps: [
            { verbal_explanation: "שלב 1: זיהוי הזווית הישרה המשותפת לשני המשולשים.", math_expression: "\\alpha_{1} = 90^{\\circ} \\quad , \\quad \\alpha_{2} = 90^{\\circ}" },
            { verbal_explanation: "שלב 2: חישוב הזווית השלישית במשולש הראשון.", math_expression: "\\beta_{1} = 180^{\\circ} - (90^{\\circ} + 35^{\\circ})" },
            { verbal_explanation: "שלב 3: תוצאת הזווית השלישית בראשון.", math_expression: "\\beta_{1} = 55^{\\circ}" },
            { verbal_explanation: "שלב 4: כעת ניתן לראות שבשני המשולשים יש זוויות של 90, 35 ו-55 מעלות.", math_expression: "\\beta_{1} = \\beta_{2}" },
            { verbal_explanation: "שלב 5: מציאת שני זוגות של זוויות שוות מוכיחה דמיון.", math_expression: "\\Delta_{1} \\sim \\Delta_{2}" }
        ],
        final_answer: "דומים לפי ז.ז"
    },

    // שאלה מספר 4
    {
        topic: "similar_triangles_35371",
        subTopic: "קריטריוני דמיון (ז.ז, צ.ז.צ, צ.צ.צ)",
        question_text: "אורכי צלעות משולש א' הם 3, 5, 6. אורכי צלעות משולש ב' הם 9, 15, 18. האם המשולשים דומים?&rlm;",
        options: ["דומים לפי צ.צ.צ", "דומים לפי צ.ז.צ", "דומים לפי ז.ז", "לא דומים"],
        correctAnswer: 0,
        hint: "בדקו האם היחס בין כל זוג צלעות מתאימות (הקצרה לקצרה, האמצעית לאמצעית, הארוכה לארוכה) נשמר.",
        solution_steps: [
            { verbal_explanation: "שלב 1: בדיקת יחס הצלעות הקצרות.", math_expression: "k_{1} = \\dfrac{9}{3} = 3" },
            { verbal_explanation: "שלב 2: בדיקת יחס הצלעות האמצעיות בגודלן.", math_expression: "k_{2} = \\dfrac{15}{5} = 3" },
            { verbal_explanation: "שלב 3: בדיקת יחס הצלעות הארוכות.", math_expression: "k_{3} = \\dfrac{18}{6} = 3" },
            { verbal_explanation: "שלב 4: השוואת כל היחסים שחושבו.", math_expression: "k_{1} = k_{2} = k_{3} = 3" },
            { verbal_explanation: "שלב 5: מכיוון ששלושת היחסים שווים, המשולשים דומים לפי משפט צ.צ.צ.", math_expression: "\\Delta_{1} \\sim \\Delta_{2}" }
        ],
        final_answer: "דומים לפי צ.צ.צ"
    },

    // שאלה מספר 5
    {
        topic: "similar_triangles_35371",
        subTopic: "קריטריוני דמיון (ז.ז, צ.ז.צ, צ.צ.צ)",
        question_text: "אורכי צלעות משולש א' הם 4, 8, 10. אורכי צלעות משולש ב' הם 6, 12, 14. האם המשולשים דומים?&rlm;",
        options: ["לא דומים", "דומים לפי צ.צ.צ", "דומים לפי ז.ז", "דומים לפי צ.ז.צ"],
        correctAnswer: 0,
        hint: "חלקו כל צלע ממשולש ב' בצלע המתאימה לה ממשולש א'. אם היחסים לא זהים לחלוטין, המשולשים אינם דומים.",
        solution_steps: [
            { verbal_explanation: "שלב 1: חישוב היחס בין הצלעות הקצרות.", math_expression: "k_{1} = \\dfrac{6}{4} = 1.5" },
            { verbal_explanation: "שלב 2: חישוב היחס בין הצלעות הבינוניות.", math_expression: "k_{2} = \\dfrac{12}{8} = 1.5" },
            { verbal_explanation: "שלב 3: חישוב היחס בין הצלעות הארוכות.", math_expression: "k_{3} = \\dfrac{14}{10} = 1.4" },
            { verbal_explanation: "שלב 4: השוואת היחסים.", math_expression: "1.5 \\neq 1.4" },
            { verbal_explanation: "שלב 5: מכיוון שהיחס השלישי שונה, התנאי נשבר והמשולשים אינם דומים.", math_expression: "k_{1} = k_{2} \\neq k_{3}" }
        ],
        final_answer: "לא דומים"
    },

    // שאלה מספר 6
    {
        topic: "similar_triangles_35371",
        subTopic: "קריטריוני דמיון (ז.ז, צ.ז.צ, צ.צ.צ)",
        question_text: "שני ישרים מקבילים נחתכים על ידי שני ישרים אחרים שיוצרים צורת שעון חול (משולשים קודקודיים). מה ניתן לומר על שני המשולשים שנוצרו?&rlm;\n<div dir='ltr' style='display:flex; justify-content:center; margin:20px 0;'><svg viewBox='0 0 200 200' style='max-width:250px; width:100%; border-radius:12px; background:#f8fafc; border:1px solid #e2e8f0;'><line x1='20' y1='40' x2='180' y2='40' stroke='#64748b' stroke-width='2'/><line x1='20' y1='160' x2='180' y2='160' stroke='#64748b' stroke-width='2'/><line x1='40' y1='40' x2='160' y2='160' stroke='#3b82f6' stroke-width='2'/><line x1='160' y1='40' x2='40' y2='160' stroke='#3b82f6' stroke-width='2'/></svg></div>",
        options: ["דומים לפי ז.ז", "חופפים תמיד", "לא דומים", "דומים לפי צ.צ.צ"],
        correctAnswer: 0,
        hint: "ישרים מקבילים יוצרים זוויות מתחלפות שוות. כמו כן, זוויות קודקודיות שוות זו לזו.",
        solution_steps: [
            { verbal_explanation: "שלב 1: זיהוי זוג זוויות קודקודיות שוות בנקודת המפגש המרכזית.", math_expression: "\\alpha_{1} = \\alpha_{2}" },
            { verbal_explanation: "שלב 2: שימוש בתכונת ישרים מקבילים למציאת זוויות מתחלפות שוות (צורת האות Z).", math_expression: "L_{1} \\parallel L_{2} \\Rightarrow \\beta_{1} = \\beta_{2}" },
            { verbal_explanation: "שלב 3: מצאנו שני זוגות של זוויות שוות בהתאמה.", math_expression: "\\alpha_{1}=\\alpha_{2} \\quad , \\quad \\beta_{1}=\\beta_{2}" },
            { verbal_explanation: "שלב 4: מסקנה: המשולשים דומים.", math_expression: "\\Delta_{1} \\sim \\Delta_{2}" },
            { verbal_explanation: "שלב 5: בחירת משפט הדמיון המתאים.", math_expression: "\\Delta_{1} \\sim \\Delta_{2}" }
        ],
        final_answer: "דומים לפי ז.ז"
    },

    // שאלה מספר 7
    {
        topic: "similar_triangles_35371",
        subTopic: "קריטריוני דמיון (ז.ז, צ.ז.צ, צ.צ.צ)",
        question_text: "במשולש שווה שוקיים זווית הראש היא 50 מעלות. משולש שווה שוקיים אחר גם הוא בעל זווית ראש של 50 מעלות. האם המשולשים דומים?&rlm;",
        options: ["דומים לפי ז.ז", "לא ניתן לדעת", "דומים לפי צ.ז.צ", "לא דומים"],
        correctAnswer: 0,
        hint: "במשולש שווה שוקיים, זווית הראש מכתיבה את גודל שתי זוויות הבסיס. חשבו אותן.",
        solution_steps: [
            { verbal_explanation: "שלב 1: חישוב סכום זוויות הבסיס במשולש הראשון.", math_expression: "180^{\\circ} - 50^{\\circ} = 130^{\\circ}" },
            { verbal_explanation: "שלב 2: חלוקה בשתיים למציאת כל זווית בסיס.", math_expression: "130^{\\circ} : 2 = 65^{\\circ}" },
            { verbal_explanation: "שלב 3: ביצוע אותו חישוב בדיוק למשולש השני, שכן זווית הראש שלו זהה.", math_expression: "(180^{\\circ} - 50^{\\circ}) : 2 = 65^{\\circ}" },
            { verbal_explanation: "שלב 4: השוואת הזוויות: בשני המשולשים הזוויות זהות לחלוטין.", math_expression: "\\alpha_{1}=\\alpha_{2} \\quad , \\quad \\beta_{1}=\\beta_{2}" },
            { verbal_explanation: "שלב 5: קביעת משפט הדמיון המבוסס על שוויון הזוויות.", math_expression: "\\Delta_{1} \\sim \\Delta_{2}" }
        ],
        final_answer: "דומים לפי ז.ז"
    },

    // שאלה מספר 8
    {
        topic: "similar_triangles_35371",
        subTopic: "קריטריוני דמיון (ז.ז, צ.ז.צ, צ.צ.צ)",
        question_text: "במשולש אחד צלעות באורך 2 ו-5 וזווית של 30 מעלות. במשולש שני צלעות באורך 6 ו-15 וזווית של 30 מעלות. הזווית בשני המשולשים אינה הכלואה בין שתי הצלעות, אלא מול הצלע הגדולה. האם ניתן לקבוע דמיון בוודאות?&rlm;",
        options: ["לא ניתן לקבוע בוודאות", "דומים לפי צ.ז.צ", "דומים לפי ז.ז", "דומים לפי צ.צ.צ"],
        correctAnswer: 0,
        hint: "משפט צ.ז.צ דורש במפורש שהזווית תהיה כלואה (נמצאת בין) שתי הצלעות שהיחס שלהן שווה.",
        solution_steps: [
            { verbal_explanation: "שלב 1: בדיקת יחס הצלעות הנתונות.", math_expression: "\\dfrac{6}{2} = 3 \\quad , \\quad \\dfrac{15}{5} = 3" },
            { verbal_explanation: "שלב 2: היחס אכן נשמר.", math_expression: "k = 3" },
            { verbal_explanation: "שלב 3: בדיקת מיקום הזווית. הנתון אומר שהיא מול אחת הצלעות ולא ביניהן.", math_expression: "\\gamma_{1} = 30^{\\circ} \\quad , \\quad \\gamma_{2} = 30^{\\circ}" },
            { verbal_explanation: "שלב 4: משפט הדמיון הרשמי דורש שהזווית השווה תהיה הזווית הכלואה בלבד.", math_expression: "\\gamma \\neq \\angle(a,b)" },
            { verbal_explanation: "שלב 5: מסקנה: אי אפשר לקבוע דמיון ללא זווית כלואה או צלע שלישית.", math_expression: "\\Delta_{1} \\nsim \\Delta_{2}" }
        ],
        final_answer: "לא ניתן לקבוע בוודאות"
    },

    // שאלה מספר 9
    {
        topic: "similar_triangles_35371",
        subTopic: "קריטריוני דמיון (ז.ז, צ.ז.צ, צ.צ.צ)",
        question_text: "משולש שווה צלעות בעל צלע 4. משולש שווה צלעות אחר בעל צלע 10. האם הם דומים?&rlm;",
        options: ["דומים (גם לפי ז.ז וגם לפי צ.צ.צ)", "לא דומים", "רק לפי צ.צ.צ", "רק לפי ז.ז"],
        correctAnswer: 0,
        hint: "במשולש שווה צלעות, כל הזוויות הן בנות 60 מעלות תמיד. בנוסף, כל הצלעות שוות ולכן היחס ביניהן קבוע.",
        solution_steps: [
            { verbal_explanation: "שלב 1: ניתוח לפי זוויות: במשולש שווה צלעות כל הזוויות הן שישים מעלות.", math_expression: "\\alpha_{1} = 60^{\\circ} \\quad , \\quad \\alpha_{2} = 60^{\\circ}" },
            { verbal_explanation: "שלב 2: מכאן שהם דומים לפי משפט זווית-זווית.", math_expression: "\\Delta_{1} \\sim \\Delta_{2}" },
            { verbal_explanation: "שלב 3: ניתוח לפי צלעות: הצלעות במשולש א' הן 4, 4, 4. במשולש ב' הן 10, 10, 10.", math_expression: "a_{1}=4 \\quad , \\quad a_{2}=10" },
            { verbal_explanation: "שלב 4: היחס בין כל זוג צלעות מתאימות הוא עשר חלקי ארבע (שתיים וחצי).", math_expression: "k = \\dfrac{10}{4} = 2.5" },
            { verbal_explanation: "שלב 5: מכאן שהם דומים גם לפי צלע-צלע-צלע.", math_expression: "k_{1}=k_{2}=k_{3}=2.5" },
            { verbal_explanation: "שלב 6: הרישום המסכם.", math_expression: "\\Delta_{1} \\sim \\Delta_{2}" }
        ],
        final_answer: "דומים (גם לפי ז.ז וגם לפי צ.צ.צ)"
    },

    // שאלה מספר 10
    {
        topic: "similar_triangles_35371",
        subTopic: "קריטריוני דמיון (ז.ז, צ.ז.צ, צ.צ.צ)",
        question_text: "נתון משולש ABC. מעבירים קטע מקביל לבסיס BC, החותך את הצלעות האחרות. קטע זה יוצר משולש קטן חדש בחלק העליון. האם המשולש הקטן דומה למשולש המקורי ABC?&rlm;\n<div dir='ltr' style='display:flex; justify-content:center; margin:20px 0;'><svg viewBox='0 0 200 200' style='max-width:250px; width:100%; border-radius:12px; background:#f8fafc; border:1px solid #e2e8f0;'><polygon points='100,20 40,160 160,160' fill='none' stroke='#10b981' stroke-width='3'/><line x1='70' y1='90' x2='130' y2='90' stroke='#f59e0b' stroke-width='3'/></svg></div>",
        options: ["כן, דומים לפי ז.ז", "כן, דומים לפי צ.צ.צ", "לא דומים", "כן, דומים לפי צ.ז.צ"],
        correctAnswer: 0,
        hint: "ישרים מקבילים יוצרים זוויות מתאימות שוות. כמו כן, זווית הראש המשותפת שייכת לשני המשולשים.",
        solution_steps: [
            { verbal_explanation: "שלב 1: זיהוי זווית משותפת לשני המשולשים (קודקוד המשולש המקורי).", math_expression: "\\alpha_{1} = \\alpha_{2}" },
            { verbal_explanation: "שלב 2: שימוש בתכונת ישרים מקבילים למציאת זוויות מתאימות שוות בבסיסים.", math_expression: "L_{1} \\parallel L_{2} \\Rightarrow \\beta_{1} = \\beta_{2}" },
            { verbal_explanation: "שלב 3: מציאת שני זוגות של זוויות שוות מספיקה להוכחת דמיון.", math_expression: "\\gamma_{1} = \\gamma_{2}" },
            { verbal_explanation: "שלב 4: המסקנה היא שהמשולשים אכן דומים (זהו משפט תאלס המורחב).", math_expression: "\\Delta_{1} \\sim \\Delta_{2}" },
            { verbal_explanation: "שלב 5: בחירת האפשרות הנכונה המבוססת על הזוויות.", math_expression: "\\Delta_{1} \\sim \\Delta_{2}" }
        ],
        final_answer: "כן, דומים לפי ז.ז"
    },

    // שאלה מספר 11
    {
        topic: "similar_triangles_35371",
        subTopic: "קריטריוני דמיון (ז.ז, צ.ז.צ, צ.צ.צ)",
        question_text: "במשולש ישר זווית, מורידים גובה ליתר. הגובה מחלק את המשולש המקורי לשני משולשים קטנים יותר. האם המשולשים הקטנים דומים זה לזה?&rlm;",
        options: ["כן, לפי ז.ז", "לא, הם רק דומים למשולש הגדול", "כן, לפי צ.צ.צ", "לא דומים כלל"],
        correctAnswer: 0,
        hint: "סמנו את אחת הזוויות החדות באלפא. הזווית החדה השנייה תהיה 90 מינוס אלפא. חשבו את הזוויות במשולשים הקטנים שנוצרו על ידי הגובה (שיוצר זווית של 90).",
        solution_steps: [
            { verbal_explanation: "שלב 1: הגדרת הזווית החדה באחד ממשולשי הגובה.", math_expression: "\\alpha" },
            { verbal_explanation: "שלב 2: הגובה יוצר זווית ישרה, ולכן הזווית השנייה באותו משולש קטן היא המשלים לתשעים.", math_expression: "90^{\\circ} - \\alpha" },
            { verbal_explanation: "שלב 3: הזווית הישרה המקורית של המשולש הגדול נחצתה על ידי הגובה. לכן חלקה השני חייב להיות אלפא.", math_expression: "90^{\\circ} - (90^{\\circ} - \\alpha) = \\alpha" },
            { verbal_explanation: "שלב 4: המשולש הקטן השני מכיל כעת זווית אלפא וזווית ישרה. מכאן שזוויתו השלישית היא המשלים לתשעים.", math_expression: "90^{\\circ} - \\alpha" },
            { verbal_explanation: "שלב 5: בשני המשולשים הקטנים יש אותן שלוש זוויות בדיוק.", math_expression: "\\alpha \\quad , \\quad 90^{\\circ}-\\alpha \\quad , \\quad 90^{\\circ}" },
            { verbal_explanation: "שלב 6: מכאן שהם דומים זה לזה לפי משפט זווית-זווית.", math_expression: "\\Delta_{1} \\sim \\Delta_{2}" }
        ],
        final_answer: "כן, לפי ז.ז"
    },

    // שאלה מספר 12
    {
        topic: "similar_triangles_35371",
        subTopic: "קריטריוני דמיון (ז.ז, צ.ז.צ, צ.צ.צ)",
        question_text: "נתונים שני משולשים. יחס שתי צלעות מתאימות הוא 1:2. יחס שתי צלעות נוספות הוא 2:4. הזווית הכלואה ביניהן בשני המשולשים היא 50 מעלות. האם המשולשים דומים?&rlm;",
        options: ["כן, דומים לפי צ.ז.צ", "כן, דומים לפי ז.ז", "כן, דומים לפי צ.צ.צ", "לא דומים"],
        correctAnswer: 0,
        hint: "בדקו אם היחסים שווים זה לזה. אם כן, ויש זווית כלואה שווה, משפט צלע-זווית-צלע מתקיים.",
        solution_steps: [
            { verbal_explanation: "שלב 1: בדיקת יחס הצלעות הראשון.", math_expression: "k_{1} = \\dfrac{1}{2}" },
            { verbal_explanation: "שלב 2: בדיקת יחס הצלעות השני.", math_expression: "k_{2} = \\dfrac{2}{4}" },
            { verbal_explanation: "שלב 3: צמצום השבר השני מראה שהיחסים זהים.", math_expression: "k_{2} = \\dfrac{1}{2} \\Rightarrow k_{1} = k_{2}" },
            { verbal_explanation: "שלב 4: וידוא קיום התנאי של זווית שווה הכלואה בין צלעות אלו.", math_expression: "\\gamma_{1} = \\gamma_{2} = 50^{\\circ}" },
            { verbal_explanation: "שלב 5: קביעת משפט הדמיון הרלוונטי.", math_expression: "\\Delta_{1} \\sim \\Delta_{2}" }
        ],
        final_answer: "כן, דומים לפי צ.ז.צ"
    },

    // ==========================================
    // תת נושא 2: שימוש בדמיון לחישוב אורכים (12 שאלות)
    // ==========================================

    // שאלה מספר 13
    {
        topic: "similar_triangles_35371",
        subTopic: "שימוש בדמיון לחישוב אורכים",
        question_text: "יחס הדמיון בין המשולש הגדול לקטן הוא 3. צלע במשולש הקטן שווה ל-5. מה אורך הצלע המתאימה במשולש הגדול?&rlm;\n<div dir='ltr' style='display:flex; justify-content:center; margin:20px 0;'><svg viewBox='0 0 300 150' style='max-width:350px; width:100%; border-radius:12px; background:#f8fafc; border:1px solid #e2e8f0;'><polygon points='10,120 70,120 40,40' fill='none' stroke='#3b82f6' stroke-width='2'/><polygon points='100,140 280,140 190,-100' fill='none' stroke='#ef4444' stroke-width='2'/><text x='20' y='70' font-size='12' fill='#334155'>5</text><text x='120' y='70' font-size='12' fill='#ef4444'>x</text></svg></div>",
        options: ["15", "1.66", "8", "2"],
        correctAnswer: 0,
        hint: "הכפילו את אורך הצלע הנתונה ביחס הדמיון הקווי.",
        solution_steps: [
            { verbal_explanation: "שלב 1: רישום יחס הדמיון הנתון.", math_expression: "k = 3" },
            { verbal_explanation: "שלב 2: כתיבת משוואת היחס בין הצלעות.", math_expression: "\\dfrac{x}{5} = k" },
            { verbal_explanation: "שלב 3: הצבת היחס במשוואה.", math_expression: "\\dfrac{x}{5} = 3" },
            { verbal_explanation: "שלב 4: הכפלת שני האגפים בחמש לבידוד הנעלם.", math_expression: "x = 5 \\times 3" },
            { verbal_explanation: "שלב 5: חישוב התוצאה הסופית.", math_expression: "x = 15" }
        ],
        final_answer: "15"
    },

    // שאלה מספר 14
    {
        topic: "similar_triangles_35371",
        subTopic: "שימוש בדמיון לחישוב אורכים",
        question_text: "שני משולשים דומים. צלע אחת בקטן היא 8, והצלע המתאימה בגדול היא 24. צלע אחרת בקטן היא 6. מהו אורך הצלע המתאימה לה בגדול?&rlm;",
        options: ["18", "2", "144", "32"],
        correctAnswer: 0,
        hint: "חשבו את יחס הדמיון על ידי חלוקת הצלעות הידועות (24 חלקי 8). לאחר מכן השתמשו ביחס זה להכפלת הצלע בת ה-6.",
        solution_steps: [
            { verbal_explanation: "שלב 1: בניית יחס הדמיון מתוך זוג הצלעות הידוע.", math_expression: "k = \\dfrac{24}{8}" },
            { verbal_explanation: "שלב 2: פתרון השבר לחישוב היחס.", math_expression: "k = 3" },
            { verbal_explanation: "שלב 3: בניית המשוואה לזוג הצלעות השני.", math_expression: "\\dfrac{x}{6} = k" },
            { verbal_explanation: "שלב 4: הצבת היחס שמצאנו.", math_expression: "\\dfrac{x}{6} = 3" },
            { verbal_explanation: "שלב 5: חילוץ הנעלם על ידי פעולת כפל.", math_expression: "x = 6 \\times 3" },
            { verbal_explanation: "שלב 6: התוצאה הסופית המבוקשת.", math_expression: "x = 18" }
        ],
        final_answer: "18"
    },

    // שאלה מספר 15
    {
        topic: "similar_triangles_35371",
        subTopic: "שימוש בדמיון לחישוב אורכים",
        question_text: "שני משולשים דומים. יחס הדמיון (קטן חלקי גדול) הוא 0.5. צלע במשולש הגדול אורכה 10. מה אורך הצלע המתאימה במשולש הקטן?&rlm;",
        options: ["5", "20", "10.5", "15"],
        correctAnswer: 0,
        hint: "אם היחס מוגדר כמשולש קטן חלקי משולש גדול שווה 0.5, אז הכפילו את אורך צלע המשולש הגדול ב-0.5.",
        solution_steps: [
            { verbal_explanation: "שלב 1: כתיבת משוואת היחס לפי הגדרת השאלה.", math_expression: "\\dfrac{x_{1}}{x_{2}} = 0.5" },
            { verbal_explanation: "שלב 2: הצבת האורך הידוע במכנה של המשוואה.", math_expression: "\\dfrac{x}{10} = 0.5" },
            { verbal_explanation: "שלב 3: בידוד הנעלם על ידי הכפלה בעשר.", math_expression: "x = 10 \\times 0.5" },
            { verbal_explanation: "שלב 4: חישוב התוצאה הסופית.", math_expression: "x = 5" },
            { verbal_explanation: "שלב 5: רישום הפתרון.", math_expression: "5" }
        ],
        final_answer: "5"
    },

    // שאלה מספר 16
    {
        topic: "similar_triangles_35371",
        subTopic: "שימוש בדמיון לחישוב אורכים",
        question_text: "במשולש קטן נתון: צלעות 4, 7, 9. במשולש גדול ודומה לו, הצלע המתאימה ל-4 שווה ל-10. מהו היקף המשולש הגדול?&rlm;",
        options: ["50", "20", "100", "25"],
        correctAnswer: 0,
        hint: "יחס הדמיון חל גם על ההיקפים. מצאו את יחס הדמיון מהצלעות הידועות, חשבו את היקף המשולש הקטן, והכפילו אותו ביחס.",
        solution_steps: [
            { verbal_explanation: "שלב 1: מציאת יחס הדמיון בעזרת הזוג הידוע של הצלעות.", math_expression: "k = \\dfrac{10}{4} = 2.5" },
            { verbal_explanation: "שלב 2: חישוב היקף המשולש הקטן על ידי סכימת צלעותיו.", math_expression: "P_{1} = 4 + 7 + 9" },
            { verbal_explanation: "שלב 3: תוצאת ההיקף הראשון.", math_expression: "P_{1} = 20" },
            { verbal_explanation: "שלב 4: שימוש בכלל שיחס ההיקפים שווה ליחס הדמיון הקווי.", math_expression: "\\dfrac{P_{2}}{P_{1}} = k" },
            { verbal_explanation: "שלב 5: הצבת הנתונים אל תוך המשוואה.", math_expression: "\\dfrac{P_{2}}{20} = 2.5" },
            { verbal_explanation: "שלב 6: חילוץ ההיקף של המשולש השני על ידי כפל.", math_expression: "P_{2} = 20 \\times 2.5" },
            { verbal_explanation: "שלב 7: הרישום הסופי.", math_expression: "P_{2} = 50" }
        ],
        final_answer: "50"
    },

    // שאלה מספר 17
    {
        topic: "similar_triangles_35371",
        subTopic: "שימוש בדמיון לחישוב אורכים",
        question_text: "שני משולשים דומים ויחס הדמיון (הגדול לקטן) הוא 2. אורך תיכון במשולש הקטן הוא 4. מה אורך התיכון המתאים לו במשולש הגדול?&rlm;",
        options: ["8", "2", "16", "6"],
        correctAnswer: 0,
        hint: "יחס הדמיון בין משולשים דומים תקף לכל הקטעים הפנימיים המתאימים ביניהם (גבהים, תיכונים, חוצי זוויות).",
        solution_steps: [
            { verbal_explanation: "שלב 1: הצגת הכלל שיחס התיכונים זהה ליחס הדמיון.", math_expression: "\\dfrac{m_{2}}{m_{1}} = k" },
            { verbal_explanation: "שלב 2: הצבת הנתונים הידועים למשוואה.", math_expression: "\\dfrac{m_{2}}{4} = 2" },
            { verbal_explanation: "שלב 3: חילוץ אורך התיכון המבוקש על ידי כפל הצדדים.", math_expression: "m_{2} = 4 \\times 2" },
            { verbal_explanation: "שלב 4: ביצוע פעולת הכפל.", math_expression: "m_{2} = 8" },
            { verbal_explanation: "שלב 5: קבלת התשובה הנכונה.", math_expression: "8" }
        ],
        final_answer: "8"
    },

    // שאלה מספר 18
    {
        topic: "similar_triangles_35371",
        subTopic: "שימוש בדמיון לחישוב אורכים",
        question_text: "קטע אמצעים במשולש יוצר משולש קטן בחלקו העליון שדומה למשולש הגדול. אורך קטע האמצעים הוא 5. מה אורך בסיס המשולש הגדול?&rlm;\n<div dir='ltr' style='display:flex; justify-content:center; margin:20px 0;'><svg viewBox='0 0 200 200' style='max-width:250px; width:100%; border-radius:12px; background:#f8fafc; border:1px solid #e2e8f0;'><polygon points='100,20 40,160 160,160' fill='none' stroke='#10b981' stroke-width='3'/><line x1='70' y1='90' x2='130' y2='90' stroke='#f59e0b' stroke-width='3'/><text x='95' y='80' font-size='14' fill='#334155'>5</text></svg></div>",
        options: ["10", "2.5", "15", "7.5"],
        correctAnswer: 0,
        hint: "יחס הדמיון במקרה של קטע אמצעים הוא תמיד 1:2 (כל צלע במשולש הגדול כפולה מהצלע במשולש הקטן).",
        solution_steps: [
            { verbal_explanation: "שלב 1: זיהוי תכונת קטע אמצעים (שווה למחצית הבסיס).", math_expression: "b_{1} = \\dfrac{b_{2}}{2}" },
            { verbal_explanation: "שלב 2: בניית המשוואה עם הערך הידוע של קטע האמצעים.", math_expression: "5 = \\dfrac{x}{2}" },
            { verbal_explanation: "שלב 3: חילוץ הנעלם על ידי הכפלה בשתיים.", math_expression: "x = 5 \\times 2" },
            { verbal_explanation: "שלב 4: ביצוע פעולת הכפל לקבלת אורך הבסיס.", math_expression: "x = 10" },
            { verbal_explanation: "שלב 5: התשובה הדרושה.", math_expression: "10" }
        ],
        final_answer: "10"
    },

    // שאלה מספר 19
    {
        topic: "similar_triangles_35371",
        subTopic: "שימוש בדמיון לחישוב אורכים",
        question_text: "בצורת 'שעון חול' שנוצרה על ידי ישרים מקבילים, המשולש העליון דומה לתחתון. בסיס המשולש העליון הוא 4 וגובהו 6. גובה המשולש התחתון הוא 18. מה אורך הבסיס של המשולש התחתון?&rlm;",
        options: ["12", "3", "24", "18"],
        correctAnswer: 0,
        hint: "מצאו את יחס הדמיון על ידי חלוקת הגבהים הידועים. השתמשו ביחס זה להכפלת הבסיס הידוע.",
        solution_steps: [
            { verbal_explanation: "שלב 1: חישוב יחס הדמיון בעזרת הגבהים הידועים של שני המשולשים.", math_expression: "k = \\dfrac{18}{6}" },
            { verbal_explanation: "שלב 2: תוצאת פעולת החילוק נותנת את מקדם ההגדלה.", math_expression: "k = 3" },
            { verbal_explanation: "שלב 3: כתיבת משוואת היחס עבור הבסיסים.", math_expression: "\\dfrac{b_{2}}{b_{1}} = 3" },
            { verbal_explanation: "שלב 4: הצבת הבסיס הידוע מהמשולש העליון.", math_expression: "\\dfrac{x}{4} = 3" },
            { verbal_explanation: "שלב 5: הכפלת שני האגפים בארבע לחילוץ הבסיס החסר.", math_expression: "x = 4 \\times 3" },
            { verbal_explanation: "שלב 6: החישוב הסופי לבסיס.", math_expression: "x = 12" }
        ],
        final_answer: "12"
    },

    // שאלה מספר 20
    {
        topic: "similar_triangles_35371",
        subTopic: "שימוש בדמיון לחישוב אורכים",
        question_text: "שני משולשים ישר זווית דומים זה לזה. במשולש הקטן הניצבים הם 3 ו-4. במשולש הגדול היתר הוא 15. מה אורכי הניצבים במשולש הגדול?&rlm;",
        options: ["9 ו-12", "6 ו-8", "12 ו-16", "3 ו-4"],
        correctAnswer: 0,
        hint: "חשבו תחילה את היתר של המשולש הקטן בעזרת משפט פיתגורס. לאחר מכן, מצאו את יחס הדמיון בין היתרים והפעילו אותו על הניצבים.",
        solution_steps: [
            { verbal_explanation: "שלב 1: שימוש במשפט פיתגורס למציאת היתר במשולש הקטן.", math_expression: "c_{1} = \\sqrt{3^{2} + 4^{2}}" },
            { verbal_explanation: "שלב 2: חישוב השורש המוכר לקבלת היתר הראשון.", math_expression: "c_{1} = \\sqrt{25} = 5" },
            { verbal_explanation: "שלב 3: מציאת יחס הדמיון בין שני המשולשים על ידי חלוקת היתרים.", math_expression: "k = \\dfrac{15}{5} = 3" },
            { verbal_explanation: "שלב 4: הכפלת הניצב הראשון של המשולש הקטן ביחס הדמיון למציאת הניצב המקביל.", math_expression: "a_{2} = 3 \\times 3 = 9" },
            { verbal_explanation: "שלב 5: הכפלת הניצב השני ביחס הדמיון.", math_expression: "b_{2} = 4 \\times 3 = 12" },
            { verbal_explanation: "שלב 6: הרישום לבחירה.", math_expression: "9 \\quad , \\quad 12" }
        ],
        final_answer: "9 ו-12"
    },

    // שאלה מספר 21
    {
        topic: "similar_triangles_35371",
        subTopic: "שימוש בדמיון לחישוב אורכים",
        question_text: "במשולש, הועבר ישר המקביל לבסיס. הישר חותך שוק אחת לקטעים באורך 2 ו-4 (החלק העליון הוא 2). השוק השנייה נחתכת כך שחלקה העליון הוא 3. מהו אורך השוק השנייה כולה?&rlm;",
        options: ["9", "6", "12", "15"],
        correctAnswer: 0,
        hint: "לפי משפט תאלס, היחס בין הקטעים על שוק אחת שווה ליחס בין הקטעים על השוק השנייה. מצאו את החלק התחתון וסכמו הכל יחד.",
        solution_steps: [
            { verbal_explanation: "שלב 1: רישום פרופורציית משפט תאלס המקשרת בין קטעי השוקיים.", math_expression: "\\dfrac{2}{4} = \\dfrac{3}{x}" },
            { verbal_explanation: "שלב 2: כפל באלכסון (הצלבה) לפתרון המשוואה.", math_expression: "2 \\times x = 3 \\times 4" },
            { verbal_explanation: "שלב 3: ביצוע פעולת הכפל באגף ימין.", math_expression: "2x = 12" },
            { verbal_explanation: "שלב 4: חלוקת המשוואה בשתיים למציאת אורך הקטע התחתון הנותר.", math_expression: "x = 6" },
            { verbal_explanation: "שלב 5: חישוב אורך השוק כולה על ידי חיבור החלק העליון (הנתון) והתחתון (שמצאנו).", math_expression: "L = 3 + 6" },
            { verbal_explanation: "שלב 6: חישוב פעולת החיבור לקבלת סך הכל.", math_expression: "L = 9" },
            { verbal_explanation: "שלב 7: הרישום הרשמי.", math_expression: "9" }
        ],
        final_answer: "9"
    },

    // שאלה מספר 22
    {
        topic: "similar_triangles_35371",
        subTopic: "שימוש בדמיון לחישוב אורכים",
        question_text: "שני משולשים דומים. שטח הראשון הוא 20. יחס הדמיון ביניהם (השני חלקי הראשון) הוא 2. מהו שטח המשולש השני?&rlm;",
        options: ["80", "40", "10", "60"],
        correctAnswer: 0,
        hint: "יחס השטחים של משולשים דומים שווה לריבוע יחס הדמיון. אם צלע גדלה פי 2, השטח גדל פי 4.",
        solution_steps: [
            { verbal_explanation: "שלב 1: הצגת הכלל המקשר בין יחס קווי ליחס שטחים.", math_expression: "\\dfrac{S_{2}}{S_{1}} = k^{2}" },
            { verbal_explanation: "שלב 2: הצבת הנתונים במשוואה (השטח הידוע ויחס הדמיון).", math_expression: "\\dfrac{S_{2}}{20} = 2^{2}" },
            { verbal_explanation: "שלב 3: העלאת יחס הדמיון הקווי בריבוע.", math_expression: "\\dfrac{S_{2}}{20} = 4" },
            { verbal_explanation: "שלב 4: הכפלת שני אגפי המשוואה בעשרים לבידוד השטח המבוקש.", math_expression: "S_{2} = 20 \\times 4" },
            { verbal_explanation: "שלב 5: ביצוע פעולת הכפל.", math_expression: "S_{2} = 80" },
            { verbal_explanation: "שלב 6: אישור התשובה.", math_expression: "80" }
        ],
        final_answer: "80"
    },

    // שאלה מספר 23
    {
        topic: "similar_triangles_35371",
        subTopic: "שימוש בדמיון לחישוב אורכים",
        question_text: "שטחם של שני משולשים דומים הוא 100 ו-25. צלע במשולש הקטן (ששטחו 25) היא באורך 4. מה אורך הצלע המתאימה במשולש הגדול?&rlm;",
        options: ["8", "16", "2", "12"],
        correctAnswer: 0,
        hint: "הוציאו שורש ריבועי מיחס השטחים כדי למצוא את יחס הדמיון הקווי. לאחר מכן הכפילו בו את הצלע הידועה.",
        solution_steps: [
            { verbal_explanation: "שלב 1: חישוב יחס השטחים בין המשולש הגדול לקטן.", math_expression: "k^{2} = \\dfrac{100}{25} = 4" },
            { verbal_explanation: "שלב 2: הוצאת שורש ריבועי כדי לחשב את יחס הדמיון הרגיל (הקווי).", math_expression: "k = \\sqrt{4} = 2" },
            { verbal_explanation: "שלב 3: בניית המשוואה המקשרת בין הצלעות בעזרת היחס שנמצא.", math_expression: "\\dfrac{a_{2}}{4} = 2" },
            { verbal_explanation: "שלב 4: חילוץ אורך הצלע של המשולש הגדול על ידי כפל.", math_expression: "a_{2} = 4 \\times 2" },
            { verbal_explanation: "שלב 5: ביצוע הכפל.", math_expression: "a_{2} = 8" },
            { verbal_explanation: "שלב 6: הרישום לבחירה.", math_expression: "8" }
        ],
        final_answer: "8"
    },

    // שאלה מספר 24
    {
        topic: "similar_triangles_35371",
        subTopic: "שימוש בדמיון לחישוב אורכים",
        question_text: "במשולש, קו המקביל לבסיס חותך את הגובה שלו. חלק הגובה שמעל הקו הוא 3, ואורך כל הגובה הוא 9. בסיס המשולש הקטן (העליון) שנוצר הוא 2. מה אורך בסיס המשולש הגדול?&rlm;",
        options: ["6", "18", "8", "4.5"],
        correctAnswer: 0,
        hint: "המשולש העליון דומה למשולש הגדול כולו. יחס הגבהים שלהם שווה בדיוק ליחס הבסיסים שלהם.",
        solution_steps: [
            { verbal_explanation: "שלב 1: מציאת יחס הדמיון על ידי חלוקת הגובה המלא בגובה החלקי העליון.", math_expression: "k = \\dfrac{9}{3} = 3" },
            { verbal_explanation: "שלב 2: הגדרת המשוואה המקשרת בין הבסיסים בעזרת יחס הדמיון הזה.", math_expression: "\\dfrac{b_{2}}{b_{1}} = 3" },
            { verbal_explanation: "שלב 3: הצבת אורך הבסיס הקטן הידוע במכנה.", math_expression: "\\dfrac{b_{2}}{2} = 3" },
            { verbal_explanation: "שלב 4: בידוד הבסיס הגדול באמצעות פעולת כפל.", math_expression: "b_{2} = 2 \\times 3" },
            { verbal_explanation: "שלב 5: חישוב התוצאה להשגת אורך הבסיס המלא.", math_expression: "b_{2} = 6" },
            { verbal_explanation: "שלב 6: הרישום הסופי.", math_expression: "6" }
        ],
        final_answer: "6"
    },

    // ==========================================
    // תת נושא 3: שימוש בדמיון לחישוב זוויות (12 שאלות)
    // ==========================================

    // שאלה מספר 25
    {
        topic: "similar_triangles_35371",
        subTopic: "שימוש בדמיון לחישוב זוויות",
        question_text: "משולש ABC דומה למשולש DEF. זווית A שווה ל-40 מעלות. למי שווה זווית D?&rlm;",
        options: ["40 מעלות", "140 מעלות", "50 מעלות", "לא ניתן לדעת"],
        correctAnswer: 0,
        hint: "במשולשים דומים, הזוויות המתאימות נשמרות ושמות הקודקודים נכתבים לפי סדר ההתאמה.",
        solution_steps: [
            { verbal_explanation: "שלב 1: הבנת המשמעות של סדר האותיות ברישום הדמיון.", math_expression: "A \\sim D" },
            { verbal_explanation: "שלב 2: יישום הכלל הקובע שזוויות מתאימות במשולשים דומים שוות זו לזו.", math_expression: "\\angle A = \\angle D" },
            { verbal_explanation: "שלב 3: הצבת הערך הנתון בשאלה למציאת הזווית הנדרשת.", math_expression: "40^{\\circ} = \\angle D" },
            { verbal_explanation: "שלב 4: המסקנה הברורה והישירה.", math_expression: "40" }
        ],
        final_answer: "40 מעלות"
    },

    // שאלה מספר 26
    {
        topic: "similar_triangles_35371",
        subTopic: "שימוש בדמיון לחישוב זוויות",
        question_text: "שני משולשים דומים. במשולש הקטן שתי זוויות הן 70 ו-50. במשולש הגדול נתונה זווית אחת שגודלה 60. מהן שתי הזוויות האחרות במשולש הגדול?&rlm;",
        options: ["50 ו-70", "60 ו-60", "70 ו-60", "לא ניתן לדעת"],
        correctAnswer: 0,
        hint: "חשבו את הזווית השלישית במשולש הקטן (השלימו ל-180), וזכרו שהמשולש הגדול מכיל בדיוק את אותן זוויות.",
        solution_steps: [
            { verbal_explanation: "שלב 1: חישוב הזווית החסרה במשולש הקטן באמצעות סכום זוויות משולש.", math_expression: "\\alpha = 180^{\\circ} - (70^{\\circ} + 50^{\\circ})" },
            { verbal_explanation: "שלב 2: סכימת הזוויות בסוגריים.", math_expression: "\\alpha = 180^{\\circ} - 120^{\\circ}" },
            { verbal_explanation: "שלב 3: קבלת הזווית השלישית בקטן.", math_expression: "\\alpha = 60^{\\circ}" },
            { verbal_explanation: "שלב 4: קבוצת הזוויות של המשולש הקטן ידועה כעת במלואה.", math_expression: "50^{\\circ} , 60^{\\circ} , 70^{\\circ}" },
            { verbal_explanation: "שלב 5: מאחר והם דומים, גם המשולש הגדול מכיל את אותן זוויות בדיוק. מכיוון שאחת נתונה (60), חסרות השתיים האחרות.", math_expression: "50^{\\circ} , 70^{\\circ}" },
            { verbal_explanation: "שלב 6: הרישום לבחירה מרובה.", math_expression: "50 \\quad , \\quad 70" }
        ],
        final_answer: "50 ו-70"
    },

    // שאלה מספר 27
    {
        topic: "similar_triangles_35371",
        subTopic: "שימוש בדמיון לחישוב זוויות",
        question_text: "משולש ישר זווית אחד מכיל זווית של 25 מעלות. הוא דומה למשולש ישר זווית שני. מה גודלה של הזווית השלישית במשולש השני?&rlm;",
        options: ["65", "25", "90", "155"],
        correctAnswer: 0,
        hint: "הזוויות זהות בשני המשולשים. זווית אחת היא ישרה (90), השנייה נתונה (25). מצאו את המשלים ל-180.",
        solution_steps: [
            { verbal_explanation: "שלב 1: זיהוי שתי הזוויות הידועות על סמך נתוני השאלה והדמיון.", math_expression: "\\alpha_{1} = 90^{\\circ} \\quad , \\quad \\alpha_{2} = 25^{\\circ}" },
            { verbal_explanation: "שלב 2: כתיבת משוואת סכום הזוויות במשולש למציאת הזווית הנותרת.", math_expression: "\\alpha_{3} = 180^{\\circ} - (90^{\\circ} + 25^{\\circ})" },
            { verbal_explanation: "שלב 3: חיבור הזוויות הידועות.", math_expression: "\\alpha_{3} = 180^{\\circ} - 115^{\\circ}" },
            { verbal_explanation: "שלב 4: ביצוע החיסור לקבלת הזווית השלישית.", math_expression: "\\alpha_{3} = 65^{\\circ}" },
            { verbal_explanation: "שלב 5: התשובה המספרית שתוזן למערכת.", math_expression: "65" }
        ],
        final_answer: "65"
    },

    // שאלה מספר 28
    {
        topic: "similar_triangles_35371",
        subTopic: "שימוש בדמיון לחישוב זוויות",
        question_text: "במשולש הועבר ישר המקביל לבסיס, היוצר משולש קטן ודומה בחלקו העליון. זווית הבסיס השמאלית של המשולש הגדול היא 45 מעלות. למה שווה זווית הבסיס השמאלית של המשולש הקטן?&rlm;<div dir='ltr' style='display:flex; justify-content:center; margin:20px 0;'><svg viewBox='0 0 200 200' style='max-width:250px; width:100%; border-radius:12px; background:#f8fafc; border:1px solid #e2e8f0;'><polygon points='100,20 40,160 160,160' fill='none' stroke='#10b981' stroke-width='3'/><line x1='70' y1='90' x2='130' y2='90' stroke='#f59e0b' stroke-width='3'/><text x='45' y='150' font-size='12' fill='#334155'>45°</text></svg></div>",
        options: ["45 מעלות", "135 מעלות", "90 מעלות", "לא ניתן לקבוע"],
        correctAnswer: 0,
        hint: "ישרים מקבילים יוצרים זוויות מתאימות שוות בין הישרים החותכים אותם.",
        solution_steps: [
            { verbal_explanation: "שלב 1: זיהוי הישרים המקבילים בשרטוט (בסיס המשולש והישר החותך).", math_expression: "L_{1} \\parallel L_{2}" },
            { verbal_explanation: "שלב 2: שימוש במשפט: זוויות מתאימות בין ישרים מקבילים שוות זו לזו.", math_expression: "\\alpha_{1} = \\alpha_{2}" },
            { verbal_explanation: "שלב 3: זווית הבסיס השמאלית הקטנה היא הזווית המתאימה לזווית הבסיס השמאלית הגדולה.", math_expression: "\\angle_{small} = \\angle_{large}" },
            { verbal_explanation: "שלב 4: הצבת הנתון מהשאלה במשוואת השוויון.", math_expression: "\\angle_{small} = 45^{\\circ}" },
            { verbal_explanation: "שלב 5: אין צורך בחישוב נוסף, המסקנה נובעת ישירות מהמשפט.", math_expression: "45" }
        ],
        final_answer: "45 מעלות"
    },

    // שאלה מספר 29
    {
        topic: "similar_triangles_35371",
        subTopic: "שימוש בדמיון לחישוב זוויות",
        question_text: "שני משולשים שווי שוקיים דומים זה לזה. זווית הראש של אחד מהם היא 100 מעלות. מהי זווית הבסיס של המשולש השני?&rlm;",
        options: ["40", "100", "80", "50"],
        correctAnswer: 0,
        hint: "במשולשים דומים, לכל משולש יש אותן זוויות פנימיות. מצאו את זוויות הבסיס של המשולש הראשון (השלימו ל-180 וחלקו ב-2).",
        solution_steps: [
            { verbal_explanation: "שלב 1: מכיוון שהמשולשים דומים, זווית הראש של המשולש השני שווה גם היא למאה.", math_expression: "\\alpha_{1} = \\alpha_{2} = 100^{\\circ}" },
            { verbal_explanation: "שלב 2: סכום שתי זוויות הבסיס הוא המשלים למאה ושמונים.", math_expression: "2x = 180^{\\circ} - 100^{\\circ}" },
            { verbal_explanation: "שלב 3: ביצוע החיסור לקבלת הסכום.", math_expression: "2x = 80^{\\circ}" },
            { verbal_explanation: "שלב 4: חלוקת התוצאה בשתיים למציאת זווית בסיס בודדת.", math_expression: "x = 80^{\\circ} : 2" },
            { verbal_explanation: "שלב 5: התוצאה המספרית לזווית.", math_expression: "x = 40^{\\circ}" },
            { verbal_explanation: "שלב 6: הרישום לבדיקה במערכת.", math_expression: "40" }
        ],
        final_answer: "40"
    },

    // שאלה מספר 30
    {
        topic: "similar_triangles_35371",
        subTopic: "שימוש בדמיון לחישוב זוויות",
        question_text: "משולש ABC מוגדל פי 3 לקבלת משולש דומה DEF. אם זווית B היא 50 מעלות, מה יהיה גודל הזווית המקבילה E במשולש המוגדל?&rlm;",
        options: ["50", "150", "16.6", "100"],
        correctAnswer: 0,
        hint: "הגדלה או הקטנה של צורה משפיעות רק על אורך הצלעות והשטח. הזוויות הפנימיות נשמרות תמיד.",
        solution_steps: [
            { verbal_explanation: "שלב 1: זיהוי תכונת הזוויות בדמיון מצולעים (הן אינן משתנות).", math_expression: "\\alpha_{1} = \\alpha_{2}" },
            { verbal_explanation: "שלב 2: יחס הדמיון (כפל בשלוש) אינו חל על מעלות הזווית.", math_expression: "\\angle B = \\angle E" },
            { verbal_explanation: "שלב 3: הצבת הערך של זווית B כפי שנתון בשאלה.", math_expression: "\\angle E = 50^{\\circ}" },
            { verbal_explanation: "שלב 4: המסקנה הברורה והסופית.", math_expression: "50" }
        ],
        final_answer: "50"
    },

    // שאלה מספר 31
    {
        topic: "similar_triangles_35371",
        subTopic: "שימוש בדמיון לחישוב זוויות",
        question_text: "צורת שעון חול (משולשים קודקודיים) נוצרת על ידי שני ישרים מקבילים. זווית אחת במשולש העליון היא 30 מעלות והזווית הקודקודית המשותפת היא 70 מעלות. מה גודל הזווית השלישית במשולש התחתון?&rlm;",
        options: ["80", "100", "30", "110"],
        correctAnswer: 0,
        hint: "המשולשים דומים (יש זוויות מתחלפות וקודקודיות). לכן, סט הזוויות שלהם זהה. מצאו את הזווית השלישית על ידי השלמה ל-180.",
        solution_steps: [
            { verbal_explanation: "שלב 1: זיהוי ששני המשולשים מכילים בדיוק את אותן זוויות עקב דמיון קודקודי ומקביל.", math_expression: "\\Delta_{1} \\sim \\Delta_{2} \\Rightarrow \\text{Angles Match}" },
            { verbal_explanation: "שלב 2: שתיים מתוך שלוש הזוויות ידועות (שלושים ושבעים).", math_expression: "\\alpha = 30^{\\circ} \\quad , \\quad \\beta = 70^{\\circ}" },
            { verbal_explanation: "שלב 3: בניית משוואה לסכום זוויות במשולש כדי למצוא את הזווית השלישית.", math_expression: "\\gamma = 180^{\\circ} - (30^{\\circ} + 70^{\\circ})" },
            { verbal_explanation: "שלב 4: סכימת הזוויות שבתוך הסוגריים.", math_expression: "\\gamma = 180^{\\circ} - 100^{\\circ}" },
            { verbal_explanation: "שלב 5: ביצוע החיסור.", math_expression: "\\gamma = 80^{\\circ}" },
            { verbal_explanation: "שלב 6: התוצאה להזנה.", math_expression: "80" }
        ],
        final_answer: "80"
    },

    // שאלה מספר 32
    {
        topic: "similar_triangles_35371",
        subTopic: "שימוש בדמיון לחישוב זוויות",
        question_text: "משולש ABC דומה למשולש PQR. נתון: זווית A ועוד זווית P שוות יחד ל-120 מעלות. מה גודל זווית A?&rlm;",
        options: ["60", "120", "30", "90"],
        correctAnswer: 0,
        hint: "על פי שמות המשולשים, האות הראשונה מתאימה לאות הראשונה. כלומר, זווית A שווה בדיוק לזווית P.",
        solution_steps: [
            { verbal_explanation: "שלב 1: זיהוי הקודקודים המתאימים משם הדמיון (קודקוד ראשון לראשון).", math_expression: "\\angle A = \\angle P" },
            { verbal_explanation: "שלב 2: כתיבת המשוואה הנתונה בשאלה עם סכום הזוויות.", math_expression: "\\angle A + \\angle P = 120^{\\circ}" },
            { verbal_explanation: "שלב 3: הצבת השוויון אל תוך המשוואה (נחליף את זווית פי בזווית איי).", math_expression: "\\angle A + \\angle A = 120^{\\circ}" },
            { verbal_explanation: "שלב 4: כינוס איברים למשוואה פשוטה.", math_expression: "2 \\times \\angle A = 120^{\\circ}" },
            { verbal_explanation: "שלב 5: חלוקת המשוואה בשתיים לבידוד הזווית המבוקשת.", math_expression: "\\angle A = 120^{\\circ} : 2" },
            { verbal_explanation: "שלב 6: תוצאת החלוקה.", math_expression: "\\angle A = 60^{\\circ}" },
            { verbal_explanation: "שלב 7: הרישום הרשמי.", math_expression: "60" }
        ],
        final_answer: "60"
    },

    // שאלה מספר 33
    {
        topic: "similar_triangles_35371",
        subTopic: "שימוש בדמיון לחישוב זוויות",
        question_text: "במשולש ישר זווית ABC (זווית B ישרה) מעבירים גובה BD ליתר. מה גודל הזווית BDC (הזווית שנוצרת בין הגובה ליתר)?&rlm;",
        options: ["90", "45", "180", "לא ניתן לדעת"],
        correctAnswer: 0,
        hint: "גובה מוגדר בגיאומטריה כקטע היורד מקודקוד ויוצר זווית של 90 מעלות (אנך) עם הצלע שאליה הוא מגיע.",
        solution_steps: [
            { verbal_explanation: "שלב 1: קריאת הנתון העיקרי מהשאלה - מעבירים גובה מהקודקוד ליתר.", math_expression: "BD \\perp AC" },
            { verbal_explanation: "שלב 2: הבנת ההגדרה הגיאומטרית של גובה במצולעים.", math_expression: "h \\perp Base" },
            { verbal_explanation: "שלב 3: הקשה ישירה מההגדרה על הזווית המבוקשת.", math_expression: "\\angle BDC = 90^{\\circ}" },
            { verbal_explanation: "שלב 4: אין צורך בחישוב נוסף מעבר להבנת המושג.", math_expression: "90" }
        ],
        final_answer: "90"
    },

    // שאלה מספר 34
    {
        topic: "similar_triangles_35371",
        subTopic: "שימוש בדמיון לחישוב זוויות",
        question_text: "משולש קהה זווית אחד דומה למשולש קהה זווית שני. במשולש הראשון הזוויות החדות הן 20 ו-30 מעלות. מה גודל הזווית הקהה במשולש השני?&rlm;",
        options: ["130", "150", "100", "50"],
        correctAnswer: 0,
        hint: "חשבו את הזווית הקהה במשולש הראשון על ידי חיסור מ-180. על פי חוקי הדמיון, זו תהיה אותה זווית בדיוק גם במשולש השני.",
        solution_steps: [
            { verbal_explanation: "שלב 1: חישוב הזווית הקהה במשולש הראשון על ידי חיסור הזוויות הידועות ממאה ושמונים.", math_expression: "\\alpha_{1} = 180^{\\circ} - (20^{\\circ} + 30^{\\circ})" },
            { verbal_explanation: "שלב 2: סכימת הזוויות החדות.", math_expression: "\\alpha_{1} = 180^{\\circ} - 50^{\\circ}" },
            { verbal_explanation: "שלב 3: ביצוע פעולת החיסור.", math_expression: "\\alpha_{1} = 130^{\\circ}" },
            { verbal_explanation: "שלב 4: שימוש במשפט הקובע שמשולשים דומים חולקים את אותן זוויות בדיוק.", math_expression: "\\angle_{1} = \\angle_{2} = 130^{\\circ}" },
            { verbal_explanation: "שלב 5: התוצאה למבחן.", math_expression: "130" }
        ],
        final_answer: "130"
    },

    // שאלה מספר 35
    {
        topic: "similar_triangles_35371",
        subTopic: "שימוש בדמיון לחישוב זוויות",
        question_text: "שני משולשים שווי צלעות דומים זה לזה ביחס של 1:5. מהו ההפרש (במעלות) בין זווית במשולש הגדול לזווית במשולש הקטן?&rlm;",
        options: ["0", "60", "12", "300"],
        correctAnswer: 0,
        hint: "במשולש שווה צלעות, כל הזוויות הן תמיד 60 מעלות, ללא קשר לגודל המשולש. לכן ההפרש ביניהן יהיה אפס.",
        solution_steps: [
            { verbal_explanation: "שלב 1: זיהוי תכונת הזוויות במשולש שווה צלעות (תמיד שישים מעלות).", math_expression: "\\alpha_{1} = 60^{\\circ}" },
            { verbal_explanation: "שלב 2: החלת אותה תכונה בדיוק על המשולש הגדול מכוח היותו שווה צלעות גם כן.", math_expression: "\\alpha_{2} = 60^{\\circ}" },
            { verbal_explanation: "שלב 3: הגדרת הפעולה החשבונית המבוקשת בשאלה (הפרש בין שתי הזוויות).", math_expression: "x = 60^{\\circ} - 60^{\\circ}" },
            { verbal_explanation: "שלב 4: ביצוע החיסור.", math_expression: "x = 0^{\\circ}" },
            { verbal_explanation: "שלב 5: כתיבת התשובה הסופית.", math_expression: "0" }
        ],
        final_answer: "0"
    },

    // שאלה מספר 36
    {
        topic: "similar_triangles_35371",
        subTopic: "שימוש בדמיון לחישוב זוויות",
        question_text: "שני משולשים דומים ABC ו-DEF מונחים כך ש-BC מקביל ל-EF. הזווית C שווה ל-80 מעלות. מה גודל הזווית F?&rlm;",
        options: ["80", "100", "40", "לא ניתן לדעת"],
        correctAnswer: 0,
        hint: "זווית C מתאימה לזווית F גם על פי מיקומן בשמות המשולשים וגם על פי היות הישרים מקבילים. לכן הן שוות באורכן.",
        solution_steps: [
            { verbal_explanation: "שלב 1: התבוננות בסדר האותיות של דמיון המשולשים, האות השלישית מתאימה לשלישית.", math_expression: "C \\sim F" },
            { verbal_explanation: "שלב 2: קביעת שוויון זוויות הנובע מדמיון משולשים ישיר.", math_expression: "\\angle C = \\angle F" },
            { verbal_explanation: "שלב 3: הצבת הערך המספרי הנתון.", math_expression: "80^{\\circ} = \\angle F" },
            { verbal_explanation: "שלב 4: אימות על סמך היות הישרים מקבילים (הזוויות מתאימות לכן שוות).", math_expression: "L_{1} \\parallel L_{2} \\Rightarrow \\alpha = \\beta" },
            { verbal_explanation: "שלב 5: הרישום הסופי הדרוש.", math_expression: "80" }
        ],
        final_answer: "80"
    }
];