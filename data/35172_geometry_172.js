const questionsDB = [
    // ==========================================
    // תת נושא 1: משולשים (סכום זוויות, חפיפה, שווה שוקיים, ישר זווית) (12 שאלות)
    // ==========================================

    // שאלה מספר 1
    {
        topic: "geometry_172",
        subTopic: "משולשים (סכום זוויות, חפיפה, שווה שוקיים, ישר זווית)",
        question_text: "במשולש נתונות שתי זוויות שגודלן 50 מעלות ו-70 מעלות. מהו גודלה של הזווית השלישית?&rlm;\n<div dir='ltr' style='display:flex; justify-content:center; margin:20px 0;'><svg viewBox='0 0 200 200' style='max-width:250px; width:100%; border-radius:12px; background:#f8fafc; border:1px solid #e2e8f0;'><polygon points='40,160 160,160 90,40' fill='none' stroke='#3b82f6' stroke-width='3'/><text x='55' y='145' font-size='14' fill='#334155'>70°</text><text x='125' y='145' font-size='14' fill='#334155'>50°</text><text x='85' y='70' font-size='14' fill='#ef4444'>x</text></svg></div>",
        options: ["60", "70", "50", "80"],
        correctAnswer: 0,
        hint: "סכום הזוויות הפנימיות בכל משולש הוא תמיד מאה ושמונים מעלות.",
        solution_steps: [
            { verbal_explanation: "שלב 1: נרשום את סכום שתי הזוויות הנתונות.", math_expression: "50 + 70" },
            { verbal_explanation: "שלב 2: נחשב את סכומן.", math_expression: "120" },
            { verbal_explanation: "שלב 3: נשתמש במשפט סכום זוויות במשולש ונציב את הנעלם.", math_expression: "x + 120 = 180" },
            { verbal_explanation: "שלב 4: נעביר את המאה ועשרים לאגף השני בחיסור.", math_expression: "x = 180 - 120" },
            { verbal_explanation: "שלב 5: נבצע את פעולת החיסור.", math_expression: "60" },
            { verbal_explanation: "שלב 6: נרשום את גודל הזווית החסרה.", math_expression: "x = 60" }
        ],
        final_answer: "60"
    },

    // שאלה מספר 2
    {
        topic: "geometry_172",
        subTopic: "משולשים (סכום זוויות, חפיפה, שווה שוקיים, ישר זווית)",
        question_text: "במשולש שווה שוקיים, זווית הראש היא 40 מעלות. מהו גודלה של כל אחת מזוויות הבסיס?",
        options: ["70", "40", "140", "60"],
        correctAnswer: 0,
        hint: "במשולש שווה שוקיים, שתי זוויות הבסיס שוות זו לזו. החסירו את זווית הראש ממאה ושמונים וחלקו בשתיים.",
        solution_steps: [
            { verbal_explanation: "שלב 1: נגדיר את זווית הבסיס כנעלם, וניעזר בעובדה ששתיהן שוות.", math_expression: "x = y" },
            { verbal_explanation: "שלב 2: נבנה משוואה על סמך סכום זוויות במשולש.", math_expression: "x + x + 40 = 180" },
            { verbal_explanation: "שלב 3: נכנס איברים דומים.", math_expression: "2x + 40 = 180" },
            { verbal_explanation: "שלב 4: נחסר ארבעים משני האגפים.", math_expression: "2x = 180 - 40" },
            { verbal_explanation: "שלב 5: נחשב את ההפרש.", math_expression: "2x = 140" },
            { verbal_explanation: "שלב 6: נחלק בשתיים למציאת זווית בסיס אחת.", math_expression: "x = 140 : 2" },
            { verbal_explanation: "שלב 7: התוצאה הסופית.", math_expression: "x = 70" }
        ],
        final_answer: "70"
    },

    // שאלה מספר 3
    {
        topic: "geometry_172",
        subTopic: "משולשים (סכום זוויות, חפיפה, שווה שוקיים, ישר זווית)",
        question_text: "במשולש שווה שוקיים, זווית בסיס אחת היא 65 מעלות. מהו גודלה של זווית הראש?&rlm;\n<div dir='ltr' style='display:flex; justify-content:center; margin:20px 0;'><svg viewBox='0 0 200 200' style='max-width:250px; width:100%; border-radius:12px; background:#f8fafc; border:1px solid #e2e8f0;'><polygon points='40,160 160,160 100,30' fill='none' stroke='#10b981' stroke-width='3'/><line x1='60' y1='95' x2='75' y2='95' stroke='#10b981' stroke-width='2'/><line x1='125' y1='95' x2='140' y2='95' stroke='#10b981' stroke-width='2'/><text x='55' y='150' font-size='14' fill='#334155'>65°</text><text x='125' y='150' font-size='14' fill='#334155'>65°</text></svg></div>",
        options: ["50", "65", "115", "130"],
        correctAnswer: 0,
        hint: "כאשר נתונה זווית בסיס, זכרו שגם זווית הבסיס השנייה שווה לה. חברו אותן והחסירו את הסכום ממאה ושמונים.",
        solution_steps: [
            { verbal_explanation: "שלב 1: זיהוי זווית הבסיס השנייה מתוקף היות המשולש שווה שוקיים.", math_expression: "\\alpha = 65" },
            { verbal_explanation: "שלב 2: סכימת שתי זוויות הבסיס.", math_expression: "65 + 65" },
            { verbal_explanation: "שלב 3: חישוב הסכום.", math_expression: "130" },
            { verbal_explanation: "שלב 4: בניית המשוואה לזווית הראש.", math_expression: "x + 130 = 180" },
            { verbal_explanation: "שלב 5: בידוד זווית הראש.", math_expression: "x = 180 - 130" },
            { verbal_explanation: "שלב 6: ביצוע החיסור.", math_expression: "50" },
            { verbal_explanation: "שלב 7: הרישום הסופי.", math_expression: "x = 50" }
        ],
        final_answer: "50"
    },

    // שאלה מספר 4
    {
        topic: "geometry_172",
        subTopic: "משולשים (סכום זוויות, חפיפה, שווה שוקיים, ישר זווית)",
        question_text: "במשולש ישר זווית, אחת הזוויות החדות היא 35 מעלות. מה גודלה של הזווית החדה השנייה?",
        options: ["55", "45", "65", "145"],
        correctAnswer: 0,
        hint: "במשולש ישר זווית, זווית אחת היא בת תשעים מעלות. סכום שתי הזוויות החדות הנותרות תמיד שווה לתשעים.",
        solution_steps: [
            { verbal_explanation: "שלב 1: זיהוי הזווית הישרה.", math_expression: "\\alpha = 90" },
            { verbal_explanation: "שלב 2: סכום כל הזוויות הוא מאה ושמונים.", math_expression: "90 + 35 + x = 180" },
            { verbal_explanation: "שלב 3: כינוס המספרים באגף אחד.", math_expression: "125 + x = 180" },
            { verbal_explanation: "שלב 4: העברת מספרים לבידוד הנעלם.", math_expression: "x = 180 - 125" },
            { verbal_explanation: "שלב 5: חישוב התוצאה (ניתן גם היה לחסר פשוט שלושים וחמש מתשעים).", math_expression: "x = 55" },
            { verbal_explanation: "שלב 6: הרישום הסופי.", math_expression: "55" }
        ],
        final_answer: "55"
    },

    // שאלה מספר 5
    {
        topic: "geometry_172",
        subTopic: "משולשים (סכום זוויות, חפיפה, שווה שוקיים, ישר זווית)",
        question_text: "במשולש ישר זווית שהוא גם שווה שוקיים, מהו גודלה של כל אחת מזוויות הבסיס?",
        options: ["45", "90", "60", "30"],
        correctAnswer: 0,
        hint: "זווית הראש במשולש ישר זווית ושווה שוקיים היא הזווית הישרה (תשעים מעלות).",
        solution_steps: [
            { verbal_explanation: "שלב 1: זיהוי הזווית הישרה כזווית הראש.", math_expression: "\\alpha = 90" },
            { verbal_explanation: "שלב 2: הגדרת שתי הזוויות הנותרות כשוות זו לזו.", math_expression: "x = y" },
            { verbal_explanation: "שלב 3: בניית המשוואה.", math_expression: "x + x + 90 = 180" },
            { verbal_explanation: "שלב 4: כינוס איברים ובידוד הנעלמים.", math_expression: "2x = 180 - 90" },
            { verbal_explanation: "שלב 5: חישוב ההפרש.", math_expression: "2x = 90" },
            { verbal_explanation: "שלב 6: חלוקה בשתיים.", math_expression: "x = 90 : 2" },
            { verbal_explanation: "שלב 7: קבלת התוצאה.", math_expression: "x = 45" }
        ],
        final_answer: "45"
    },

    // שאלה מספר 6
    {
        topic: "geometry_172",
        subTopic: "משולשים (סכום זוויות, חפיפה, שווה שוקיים, ישר זווית)",
        question_text: "זווית חיצונית למשולש שווה ל-110 מעלות. אחת הזוויות הפנימיות שאינן צמודות לה היא 40 מעלות. מה גודל הזווית הפנימית השנייה שאינה צמודה לה?&rlm;<div dir='ltr' style='display:flex; justify-content:center; margin:20px 0;'><svg viewBox='0 0 200 200' style='max-width:250px; width:100%; border-radius:12px; background:#f8fafc; border:1px solid #e2e8f0;'><polygon points='40,160 140,160 100,40' fill='none' stroke='#f59e0b' stroke-width='3'/><line x1='140' y1='160' x2='180' y2='160' stroke='#f59e0b' stroke-width='3' stroke-dasharray='4,4'/><text x='145' y='145' font-size='14' fill='#ef4444'>110°</text><text x='95' y='70' font-size='14' fill='#334155'>40°</text></svg></div>",
        options: ["70", "40", "110", "140"],
        correctAnswer: 0,
        hint: "זווית חיצונית למשולש שווה לסכום שתי הזוויות הפנימיות שאינן צמודות לה.",
        solution_steps: [
            { verbal_explanation: "שלב 1: שימוש במשפט הזווית החיצונית.", math_expression: "\\alpha_{ext} = \\beta + \\gamma" },
            { verbal_explanation: "שלב 2: הצבת הנתונים הידועים למשוואה.", math_expression: "110 = 40 + x" },
            { verbal_explanation: "שלב 3: בידוד הנעלם על ידי העברת מספרים אגף.", math_expression: "x = 110 - 40" },
            { verbal_explanation: "שלב 4: ביצוע החיסור.", math_expression: "70" },
            { verbal_explanation: "שלב 5: וידוא התוצאה (הזווית הפנימית הצמודה היא שבעים, והסכום אכן מאה ושמונים).", math_expression: "70 + 40 + 70 = 180" },
            { verbal_explanation: "שלב 6: הרישום הסופי.", math_expression: "x = 70" }
        ],
        final_answer: "70"
    },

    // שאלה מספר 7
    {
        topic: "geometry_172",
        subTopic: "משולשים (סכום זוויות, חפיפה, שווה שוקיים, ישר זווית)",
        question_text: "נתונים שני משולשים חופפים. במשולש הראשון צלעות באורך 5, 7 ו-9. במשולש השני נתונה צלע באורך איקס פלוס שתיים החופפת לצלע שאורכה 9. מהו ערכו של איקס?",
        options: ["7", "9", "5", "11"],
        correctAnswer: 0,
        hint: "משולשים חופפים שווים לחלוטין בצלעותיהם וזוויותיהם בהתאמה. השוו את הביטוי לאורך הצלע המתאימה.",
        solution_steps: [
            { verbal_explanation: "שלב 1: זיהוי הצלעות המתאימות בחפיפה.", math_expression: "L_{1} = L_{2}" },
            { verbal_explanation: "שלב 2: הצבת הנתונים של הצלעות התואמות.", math_expression: "x + 2 = 9" },
            { verbal_explanation: "שלב 3: העברת המספר שתיים לאגף ימין בחיסור.", math_expression: "x = 9 - 2" },
            { verbal_explanation: "שלב 4: חישוב ההפרש.", math_expression: "x = 7" },
            { verbal_explanation: "שלב 5: וידוא תשובה: שבע ועוד שתיים אכן שווה לתשע.", math_expression: "7 + 2 = 9" },
            { verbal_explanation: "שלב 6: רישום הפתרון המסכם.", math_expression: "7" }
        ],
        final_answer: "7"
    },

    // שאלה מספר 8
    {
        topic: "geometry_172",
        subTopic: "משולשים (סכום זוויות, חפיפה, שווה שוקיים, ישר זווית)",
        question_text: "משולש ישר זווית חסום במלבן כך שניצביו מתלכדים עם צלעות המלבן. ניצב אחד שווה ל-6 והשני ל-8. מצאו את שטח המשולש.",
        options: ["24", "48", "14", "10"],
        correctAnswer: 0,
        hint: "במשולש ישר זווית, הניצבים משמשים כבסיס וגובה זה לזה. שטח משולש הוא מכפלתם חלקי שתיים.",
        solution_steps: [
            { verbal_explanation: "שלב 1: זיהוי הניצבים כבסיס וגובה.", math_expression: "a = 6 , b = 8" },
            { verbal_explanation: "שלב 2: כתיבת נוסחת שטח משולש.", math_expression: "S = \\dfrac{a \\times b}{2}" },
            { verbal_explanation: "שלב 3: הצבת הנתונים בנוסחה.", math_expression: "S = \\dfrac{6 \\times 8}{2}" },
            { verbal_explanation: "שלב 4: ביצוע פעולת הכפל במונה.", math_expression: "S = \\dfrac{48}{2}" },
            { verbal_explanation: "שלב 5: ביצוע פעולת החילוק לקבלת השטח.", math_expression: "S = 24" },
            { verbal_explanation: "שלב 6: התוצאה הסופית.", math_expression: "24" }
        ],
        final_answer: "24"
    },

    // שאלה מספר 9
    {
        topic: "geometry_172",
        subTopic: "משולשים (סכום זוויות, חפיפה, שווה שוקיים, ישר זווית)",
        question_text: "במשולש שווה שוקיים נתון שהיקפו הוא 30 סנטימטרים. בסיס המשולש שווה ל-10. מהו אורכה של כל שוק?",
        options: ["10", "20", "5", "15"],
        correctAnswer: 0,
        hint: "היקף הוא סכום כל הצלעות. במשולש שווה שוקיים, שתי השוקיים שוות. החסירו את הבסיס מההיקף וחלקו בשתיים.",
        solution_steps: [
            { verbal_explanation: "שלב 1: הגדרת שתי השוקיים כנעלמים שווים.", math_expression: "L_{1} = L_{2} = x" },
            { verbal_explanation: "שלב 2: בניית משוואת ההיקף.", math_expression: "x + x + 10 = 30" },
            { verbal_explanation: "שלב 3: כינוס איברים.", math_expression: "2x + 10 = 30" },
            { verbal_explanation: "שלב 4: חיסור עשר משני האגפים.", math_expression: "2x = 30 - 10" },
            { verbal_explanation: "שלב 5: תוצאת החיסור.", math_expression: "2x = 20" },
            { verbal_explanation: "שלב 6: חלוקה בשתיים למציאת אורך שוק אחת.", math_expression: "x = 20 : 2" },
            { verbal_explanation: "שלב 7: התוצאה.", math_expression: "x = 10" }
        ],
        final_answer: "10"
    },

    // שאלה מספר 10
    {
        topic: "geometry_172",
        subTopic: "משולשים (סכום זוויות, חפיפה, שווה שוקיים, ישר זווית)",
        question_text: "יחס הזוויות במשולש הוא 1:2:3. מהי הזווית הגדולה ביותר במשולש?",
        options: ["90", "60", "120", "30"],
        correctAnswer: 0,
        hint: "סמנו את הזוויות באיקס, שני איקס ושלושה איקס. חברו אותן, השוו למאה ושמונים, מצאו את איקס, והכפילו בשלוש.",
        solution_steps: [
            { verbal_explanation: "שלב 1: הגדרת הזוויות על פי היחס הנתון.", math_expression: "x , 2x , 3x" },
            { verbal_explanation: "שלב 2: בניית משוואת סכום זוויות.", math_expression: "x + 2x + 3x = 180" },
            { verbal_explanation: "שלב 3: כינוס המקדמים של הנעלם.", math_expression: "6x = 180" },
            { verbal_explanation: "שלב 4: חלוקה בשש למציאת יחידת יחס אחת.", math_expression: "x = 180 : 6" },
            { verbal_explanation: "שלב 5: התוצאה לאיקס.", math_expression: "x = 30" },
            { verbal_explanation: "שלב 6: מציאת הזווית הגדולה ביותר לפי היחס.", math_expression: "3 \\times 30" },
            { verbal_explanation: "שלב 7: החישוב הסופי.", math_expression: "90" }
        ],
        final_answer: "90"
    },

    // שאלה מספר 11
    {
        topic: "geometry_172",
        subTopic: "משולשים (סכום זוויות, חפיפה, שווה שוקיים, ישר זווית)",
        question_text: "במשולש ישר זווית, אורך היתר הוא 13 ואורך אחד הניצבים הוא 12. מהו שטח המשולש?",
        options: ["30", "60", "78", "15"],
        correctAnswer: 0,
        hint: "תחילה, השתמשו במשפט פיתגורס כדי למצוא את הניצב השני. רק לאחר מכן חשבו את השטח בעזרת שני הניצבים.",
        solution_steps: [
            { verbal_explanation: "שלב 1: שימוש במשפט פיתגורס למציאת הניצב החסר.", math_expression: "a^{2} + 12^{2} = 13^{2}" },
            { verbal_explanation: "שלב 2: העלאה בריבוע.", math_expression: "a^{2} + 144 = 169" },
            { verbal_explanation: "שלב 3: חיסור והוצאת שורש.", math_expression: "a^{2} = 25 \\Rightarrow a = 5" },
            { verbal_explanation: "שלב 4: הניצב השני הוא חמש. כעת נציב בנוסחת שטח משולש.", math_expression: "S = \\dfrac{5 \\times 12}{2}" },
            { verbal_explanation: "שלב 5: ביצוע הכפל.", math_expression: "S = \\dfrac{60}{2}" },
            { verbal_explanation: "שלב 6: פעולת חילוק למציאת השטח.", math_expression: "S = 30" },
            { verbal_explanation: "שלב 7: הרישום הסופי.", math_expression: "30" }
        ],
        final_answer: "30"
    },

    // שאלה מספר 12
    {
        topic: "geometry_172",
        subTopic: "משולשים (סכום זוויות, חפיפה, שווה שוקיים, ישר זווית)",
        question_text: "במשולש שווה שוקיים, זווית חיצונית לאחת מזוויות הבסיס שווה ל-110 מעלות. מהו גודלה של זווית הראש?",
        options: ["40", "70", "110", "140"],
        correctAnswer: 0,
        hint: "זווית חיצונית וזווית פנימית צמודה משלימות למאה ושמונים מעלות. מצאו את זווית הבסיס הפנימית, ואז את זווית הראש.",
        solution_steps: [
            { verbal_explanation: "שלב 1: מציאת זווית הבסיס הפנימית הצמודה לחיצונית.", math_expression: "180 - 110 = 70" },
            { verbal_explanation: "שלב 2: מכיוון שהמשולש שווה שוקיים, זווית הבסיס השנייה שווה גם היא.", math_expression: "\\alpha = 70" },
            { verbal_explanation: "שלב 3: סכום שתי זוויות הבסיס.", math_expression: "70 + 70 = 140" },
            { verbal_explanation: "שלב 4: מציאת זווית הראש מהשלמה למאה ושמונים.", math_expression: "x = 180 - 140" },
            { verbal_explanation: "שלב 5: ביצוע החיסור.", math_expression: "40" },
            { verbal_explanation: "שלב 6: וידוא הנתונים.", math_expression: "70 + 70 + 40 = 180" },
            { verbal_explanation: "שלב 7: התשובה.", math_expression: "40" }
        ],
        final_answer: "40"
    },

    // ==========================================
    // תת נושא 2: משפט פיתגורס (12 שאלות)
    // ==========================================

    // שאלה מספר 13
    {
        topic: "geometry_172",
        subTopic: "משפט פיתגורס",
        question_text: "במשולש ישר זווית, אורכי הניצבים הם 3 ו-4. מהו אורך היתר?&rlm;\n<div dir='ltr' style='display:flex; justify-content:center; margin:20px 0;'><svg viewBox='0 0 200 200' style='max-width:250px; width:100%; border-radius:12px; background:#f8fafc; border:1px solid #e2e8f0;'><polygon points='40,160 160,160 40,40' fill='none' stroke='#8b5cf6' stroke-width='3'/><polyline points='40,140 60,140 60,160' fill='none' stroke='#8b5cf6' stroke-width='2'/><text x='100' y='180' font-size='14' fill='#334155'>4</text><text x='20' y='100' font-size='14' fill='#334155'>3</text><text x='110' y='90' font-size='14' fill='#ef4444'>c</text></svg></div>",
        options: ["5", "7", "25", "12"],
        correctAnswer: 0,
        hint: "השתמשו במשפט פיתגורס: סכום ריבועי הניצבים שווה לריבוע היתר.",
        solution_steps: [
            { verbal_explanation: "שלב 1: הצבת הניצבים בנוסחת פיתגורס.", math_expression: "c^{2} = 3^{2} + 4^{2}" },
            { verbal_explanation: "שלב 2: העלאה בריבוע של הניצב הראשון.", math_expression: "3^{2} = 9" },
            { verbal_explanation: "שלב 3: העלאה בריבוע של הניצב השני.", math_expression: "4^{2} = 16" },
            { verbal_explanation: "שלב 4: סכימת ריבועי הניצבים.", math_expression: "c^{2} = 9 + 16" },
            { verbal_explanation: "שלב 5: ביצוע פעולת החיבור.", math_expression: "c^{2} = 25" },
            { verbal_explanation: "שלב 6: הוצאת שורש ריבועי למציאת אורך היתר.", math_expression: "c = \\sqrt{25}" },
            { verbal_explanation: "שלב 7: התוצאה הסופית.", math_expression: "c = 5" }
        ],
        final_answer: "5"
    },

    // שאלה מספר 14
    {
        topic: "geometry_172",
        subTopic: "משפט פיתגורס",
        question_text: "במשולש ישר זווית, אורך יתר המשולש הוא 10 ואורך אחד הניצבים הוא 8. מהו אורכו של הניצב השני?",
        options: ["6", "2", "36", "100"],
        correctAnswer: 0,
        hint: "הפעם עליכם להחסיר: ריבוע היתר פחות ריבוע הניצב הידוע ייתן לכם את ריבוע הניצב החסר.",
        solution_steps: [
            { verbal_explanation: "שלב 1: הצבת הנתונים במשוואת פיתגורס.", math_expression: "a^{2} + 8^{2} = 10^{2}" },
            { verbal_explanation: "שלב 2: העלאת המספרים בריבוע.", math_expression: "a^{2} + 64 = 100" },
            { verbal_explanation: "שלב 3: העברת המספרים לאגף ימין בחיסור.", math_expression: "a^{2} = 100 - 64" },
            { verbal_explanation: "שלב 4: חישוב ההפרש.", math_expression: "a^{2} = 36" },
            { verbal_explanation: "שלב 5: הוצאת שורש ריבועי משני האגפים.", math_expression: "a = \\sqrt{36}" },
            { verbal_explanation: "שלב 6: קבלת הערך.", math_expression: "a = 6" }
        ],
        final_answer: "6"
    },

    // שאלה מספר 15
    {
        topic: "geometry_172",
        subTopic: "משפט פיתגורס",
        question_text: "במלבן, אורך צלע אחת הוא 5 ואורך הצלע הסמוכה לה הוא 12. מהו אורך אלכסון המלבן?&rlm;<div dir='ltr' style='display:flex; justify-content:center; margin:20px 0;'><svg viewBox='0 0 200 200' style='max-width:250px; width:100%; border-radius:12px; background:#f8fafc; border:1px solid #e2e8f0;'><rect x='30' y='60' width='140' height='80' fill='none' stroke='#f59e0b' stroke-width='3'/><line x1='30' y1='140' x2='170' y2='60' stroke='#f59e0b' stroke-dasharray='5,5' stroke-width='2'/><text x='100' y='160' font-size='14' fill='#334155'>12</text><text x='10' y='105' font-size='14' fill='#334155'>5</text></svg></div>",
        options: ["13", "17", "169", "11"],
        correctAnswer: 0,
        hint: "אלכסון המלבן יוצר שני משולשים ישרי זווית. הצלעות הן הניצבים והאלכסון הוא היתר.",
        solution_steps: [
            { verbal_explanation: "שלב 1: כתיבת משוואת פיתגורס למשולש שנוצר במלבן.", math_expression: "c^{2} = 5^{2} + 12^{2}" },
            { verbal_explanation: "שלב 2: העלאת חמש בריבוע.", math_expression: "25" },
            { verbal_explanation: "שלב 3: העלאת שתים עשרה בריבוע.", math_expression: "144" },
            { verbal_explanation: "שלב 4: חיבור התוצאות.", math_expression: "c^{2} = 25 + 144" },
            { verbal_explanation: "שלב 5: קבלת הסכום.", math_expression: "c^{2} = 169" },
            { verbal_explanation: "שלב 6: הוצאת שורש למציאת אורך האלכסון.", math_expression: "c = \\sqrt{169}" },
            { verbal_explanation: "שלב 7: התוצאה המסכמת.", math_expression: "c = 13" }
        ],
        final_answer: "13"
    },

    // שאלה מספר 16
    {
        topic: "geometry_172",
        subTopic: "משפט פיתגורס",
        question_text: "במשולש שווה שוקיים, אורך כל שוק הוא 10 ואורך הבסיס הוא 12. מהו אורך הגובה היורד לבסיס?",
        options: ["8", "6", "100", "16"],
        correctAnswer: 0,
        hint: "גובה לבסיס במשולש שווה שוקיים הוא גם תיכון. הוא חוצה את הבסיס לשני חלקים שווים ויוצר משולש ישר זווית.",
        solution_steps: [
            { verbal_explanation: "שלב 1: חלוקת הבסיס לשניים כדי למצוא את הניצב של המשולש ישר הזווית.", math_expression: "b = 12 : 2 = 6" },
            { verbal_explanation: "שלב 2: הצבה במשפט פיתגורס כאשר היתר הוא השוק.", math_expression: "h^{2} + 6^{2} = 10^{2}" },
            { verbal_explanation: "שלב 3: העלאה בריבוע.", math_expression: "h^{2} + 36 = 100" },
            { verbal_explanation: "שלב 4: העברת מספרים אגף.", math_expression: "h^{2} = 100 - 36" },
            { verbal_explanation: "שלב 5: חישוב ההפרש.", math_expression: "h^{2} = 64" },
            { verbal_explanation: "שלב 6: הוצאת שורש ריבועי.", math_expression: "h = \\sqrt{64}" },
            { verbal_explanation: "שלב 7: התוצאה הסופית של אורך הגובה.", math_expression: "h = 8" }
        ],
        final_answer: "8"
    },

    // שאלה מספר 17
    {
        topic: "geometry_172",
        subTopic: "משפט פיתגורס",
        question_text: "אורכו של סולם הוא 15 מטרים. הסולם נשען על קיר אנכי, והמרחק מבסיס הסולם ועד הקיר הוא 9 מטרים. לאיזה גובה על הקיר מגיע הסולם?",
        options: ["12", "144", "16", "24"],
        correctAnswer: 0,
        hint: "הסולם הוא היתר במשולש ישר זווית. הרצפה והקיר הם הניצבים.",
        solution_steps: [
            { verbal_explanation: "שלב 1: הצבת הנתונים במשוואת פיתגורס (סולם כיתר).", math_expression: "h^{2} + 9^{2} = 15^{2}" },
            { verbal_explanation: "שלב 2: חישוב הריבועים.", math_expression: "h^{2} + 81 = 225" },
            { verbal_explanation: "שלב 3: בידוד נעלם על ידי חיסור.", math_expression: "h^{2} = 225 - 81" },
            { verbal_explanation: "שלב 4: מציאת ההפרש.", math_expression: "h^{2} = 144" },
            { verbal_explanation: "שלב 5: הוצאת שורש ריבועי להגעה לגובה המבוקש.", math_expression: "h = \\sqrt{144}" },
            { verbal_explanation: "שלב 6: רישום הפתרון.", math_expression: "h = 12" }
        ],
        final_answer: "12"
    },

    // שאלה מספר 18
    {
        topic: "geometry_172",
        subTopic: "משפט פיתגורס",
        question_text: "במעוין, אורך אלכסון אחד הוא 10 ואורך האלכסון השני הוא 24. מהו אורך צלע המעוין?",
        options: ["13", "26", "17", "169"],
        correctAnswer: 0,
        hint: "במעוין, האלכסונים מאונכים זה לזה וחוצים זה את זה. לכן הם יוצרים 4 משולשים ישרי זווית.",
        solution_steps: [
            { verbal_explanation: "שלב 1: חלוקת האלכסון הראשון לשניים למציאת ניצב ראשון.", math_expression: "a = 10 : 2 = 5" },
            { verbal_explanation: "שלב 2: חלוקת האלכסון השני למציאת הניצב השני.", math_expression: "b = 24 : 2 = 12" },
            { verbal_explanation: "שלב 3: שימוש בפיתגורס בתוך המשולש שנוצר (הצלע היא היתר).", math_expression: "c^{2} = 5^{2} + 12^{2}" },
            { verbal_explanation: "שלב 4: העלאה בריבוע וחיבור.", math_expression: "c^{2} = 25 + 144 = 169" },
            { verbal_explanation: "שלב 5: הוצאת שורש ריבועי.", math_expression: "c = \\sqrt{169}" },
            { verbal_explanation: "שלב 6: התשובה לצלע המעוין.", math_expression: "c = 13" }
        ],
        final_answer: "13"
    },

    // שאלה מספר 19
    {
        topic: "geometry_172",
        subTopic: "משפט פיתגורס",
        question_text: "בריבוע, אורך צלע אחת הוא 7. מהו ריבוע אורכו של האלכסון? (כלומר האלכסון בחזקת שתיים)",
        options: ["98", "49", "14", "7"],
        correctAnswer: 0,
        hint: "בריבוע, האלכסון יוצר משולש ישר זווית שווה שוקיים. חשבו את משפט פיתגורס ואין צורך להוציא שורש בסוף.",
        solution_steps: [
            { verbal_explanation: "שלב 1: זיהוי שהניצבים שווים זה לזה באורכם כי זה ריבוע.", math_expression: "a = 7 , b = 7" },
            { verbal_explanation: "שלב 2: כתיבת משוואת פיתגורס עבור היתר (האלכסון).", math_expression: "d^{2} = 7^{2} + 7^{2}" },
            { verbal_explanation: "שלב 3: העלאה בריבוע של כל צלע.", math_expression: "d^{2} = 49 + 49" },
            { verbal_explanation: "שלב 4: ביצוע פעולת החיבור.", math_expression: "d^{2} = 98" },
            { verbal_explanation: "שלב 5: מאחר והתבקשנו למצוא את ריבוע האלכסון, סיימנו.", math_expression: "98" }
        ],
        final_answer: "98"
    },

    // שאלה מספר 20
    {
        topic: "geometry_172",
        subTopic: "משפט פיתגורס",
        question_text: "בטרפז ישר זווית, הגובה הוא 4. הבסיס העליון הוא 5 והבסיס התחתון הוא 8. מהו אורך השוק המשופעת?&rlm;<div dir='ltr' style='display:flex; justify-content:center; margin:20px 0;'><svg viewBox='0 0 200 200' style='max-width:250px; width:100%; border-radius:12px; background:#f8fafc; border:1px solid #e2e8f0;'><polygon points='40,160 140,160 100,60 40,60' fill='none' stroke='#ec4899' stroke-width='3'/><line x1='100' y1='60' x2='100' y2='160' stroke='#94a3b8' stroke-dasharray='4,4' stroke-width='2'/><text x='125' y='120' font-size='14' fill='#ef4444'>c</text><text x='60' y='50' font-size='14' fill='#334155'>5</text><text x='90' y='180' font-size='14' fill='#334155'>8</text><text x='20' y='110' font-size='14' fill='#334155'>4</text></svg></div>",
        options: ["5", "3", "7", "25"],
        correctAnswer: 0,
        hint: "הורידו גובה נוסף מהקודקוד העליון. יווצר משולש ישר זווית שהניצב התחתון שלו הוא ההפרש בין הבסיסים.",
        solution_steps: [
            { verbal_explanation: "שלב 1: חישוב הניצב האופקי של המשולש שנוצר על ידי חיסור הבסיסים.", math_expression: "a = 8 - 5 = 3" },
            { verbal_explanation: "שלב 2: הגובה במלבן שווה לניצב האנכי במשולש שנוצר.", math_expression: "b = 4" },
            { verbal_explanation: "שלב 3: הפעלת משפט פיתגורס למציאת השוק המשופעת שהיא היתר.", math_expression: "c^{2} = 3^{2} + 4^{2}" },
            { verbal_explanation: "שלב 4: העלאה בריבוע.", math_expression: "c^{2} = 9 + 16" },
            { verbal_explanation: "שלב 5: חיבור.", math_expression: "c^{2} = 25" },
            { verbal_explanation: "שלב 6: הוצאת שורש למציאת הצלע.", math_expression: "c = \\sqrt{25} = 5" },
            { verbal_explanation: "שלב 7: הרישום.", math_expression: "5" }
        ],
        final_answer: "5"
    },

    // שאלה מספר 21
    {
        topic: "geometry_172",
        subTopic: "משפט פיתגורס",
        question_text: "במשולש ישר זווית ידוע שאורך שני הניצבים יחד הוא 14 (כלומר כל ניצב שווה 7). מהו ריבוע היתר?",
        options: ["98", "49", "14", "196"],
        correctAnswer: 0,
        hint: "העלו כל אחד מהניצבים בריבוע וחברו ביניהם.",
        solution_steps: [
            { verbal_explanation: "שלב 1: כל ניצב שווה למחצית הסכום מכיוון שהם שווים.", math_expression: "a = 7 , b = 7" },
            { verbal_explanation: "שלב 2: שימוש בנוסחה.", math_expression: "c^{2} = 7^{2} + 7^{2}" },
            { verbal_explanation: "שלב 3: חישוב ריבוע של שבע.", math_expression: "49 + 49" },
            { verbal_explanation: "שלב 4: סכימה פשוטה.", math_expression: "c^{2} = 98" },
            { verbal_explanation: "שלב 5: התבקשנו לתת את ריבוע היתר ולכן נשאיר זאת כך.", math_expression: "98" }
        ],
        final_answer: "98"
    },

    // שאלה מספר 22
    {
        topic: "geometry_172",
        subTopic: "משפט פיתגורס",
        question_text: "היקף של משולש ישר זווית הוא 24. היתר שווה ל-10 וניצב אחד שווה ל-8. מצאו את הניצב השני על ידי חיסור מההיקף, ואמתו עם פיתגורס.",
        options: ["6", "14", "36", "100"],
        correctAnswer: 0,
        hint: "היקף הוא סכום שלוש הצלעות. ניתן לחסר את הצלעות הידועות מההיקף הכולל.",
        solution_steps: [
            { verbal_explanation: "שלב 1: שימוש בנתון ההיקף.", math_expression: "a + 8 + 10 = 24" },
            { verbal_explanation: "שלב 2: חיבור המספרים.", math_expression: "a + 18 = 24" },
            { verbal_explanation: "שלב 3: חיסור למציאת הצלע.", math_expression: "a = 24 - 18 = 6" },
            { verbal_explanation: "שלב 4: אימות בעזרת פיתגורס.", math_expression: "6^{2} + 8^{2} = 10^{2}" },
            { verbal_explanation: "שלב 5: בדיקת הפסוק.", math_expression: "36 + 64 = 100" },
            { verbal_explanation: "שלב 6: המסקנה מאומתת לחלוטין.", math_expression: "100 = 100" },
            { verbal_explanation: "שלב 7: הרישום הסופי.", math_expression: "6" }
        ],
        final_answer: "6"
    },

    // שאלה מספר 23
    {
        topic: "geometry_172",
        subTopic: "משפט פיתגורס",
        question_text: "בטרפז שווה שוקיים, הבסיס הקטן הוא 4 והבסיס הגדול הוא 10. אורך הגובה הוא 4. מהו אורך כל שוק?",
        options: ["5", "3", "25", "16"],
        correctAnswer: 0,
        hint: "הורידו שני גבהים. הבסיס הגדול יחולק ל-3 חלקים. מצאו את החלק השייך למשולש הישר זווית והפעילו פיתגורס.",
        solution_steps: [
            { verbal_explanation: "שלב 1: מציאת ההפרש בין הבסיסים הכולל.", math_expression: "10 - 4 = 6" },
            { verbal_explanation: "שלב 2: חלוקת ההפרש לשניים כדי למצוא את אורך הניצב האופקי של כל משולש בצד.", math_expression: "a = 6 : 2 = 3" },
            { verbal_explanation: "שלב 3: הגובה נתון לנו והוא מהווה ניצב אנכי.", math_expression: "b = 4" },
            { verbal_explanation: "שלב 4: הפעלת פיתגורס למציאת השוק שהיא היתר.", math_expression: "c^{2} = 3^{2} + 4^{2}" },
            { verbal_explanation: "שלב 5: חישוב.", math_expression: "c^{2} = 9 + 16 = 25" },
            { verbal_explanation: "שלב 6: הוצאת שורש.", math_expression: "c = \\sqrt{25}" },
            { verbal_explanation: "שלב 7: סיום הפעולה.", math_expression: "c = 5" }
        ],
        final_answer: "5"
    },

    // שאלה מספר 24
    {
        topic: "geometry_172",
        subTopic: "משפט פיתגורס",
        question_text: "בריבוע שאלכסונו הוא שורש של שמונה, מהו אורך הצלע של הריבוע?",
        options: ["2", "4", "8", "64"],
        correctAnswer: 0,
        hint: "סכום ריבועי הצלעות (שהן שוות) שווה לריבוע האלכסון. בנו משוואה.",
        solution_steps: [
            { verbal_explanation: "שלב 1: הצבה בפיתגורס כאשר הניצבים שווים לאיקס.", math_expression: "x^{2} + x^{2} = (\\sqrt{8})^{2}" },
            { verbal_explanation: "שלב 2: כינוס שני האיקסים.", math_expression: "2x^{2} = 8" },
            { verbal_explanation: "שלב 3: חלוקת המשוואה בשתיים.", math_expression: "x^{2} = 4" },
            { verbal_explanation: "שלב 4: הוצאת שורש למציאת הצלע.", math_expression: "x = 2" },
            { verbal_explanation: "שלב 5: וידוא התוצאה.", math_expression: "2" }
        ],
        final_answer: "2"
    },

    // ==========================================
    // תת נושא 3: מרובעים (מקבילית, מלבן, ריבוע, מעוין, טרפז) (12 שאלות)
    // ==========================================

    // שאלה מספר 25
    {
        topic: "geometry_172",
        subTopic: "מרובעים (מקבילית, מלבן, ריבוע, מעוין, טרפז)",
        question_text: "במקבילית, אחת הזוויות היא 40 מעלות. מהו גודל הזווית הסמוכה לה?&rlm;\n<div dir='ltr' style='display:flex; justify-content:center; margin:20px 0;'><svg viewBox='0 0 200 200' style='max-width:250px; width:100%; border-radius:12px; background:#f8fafc; border:1px solid #e2e8f0;'><polygon points='60,140 180,140 140,60 20,60' fill='none' stroke='#f59e0b' stroke-width='3'/><text x='130' y='130' font-size='14' fill='#334155'>40°</text><text x='65' y='130' font-size='14' fill='#ef4444'>x</text></svg></div>",
        options: ["140", "40", "50", "90"],
        correctAnswer: 0,
        hint: "במקבילית, סכום כל שתי זוויות סמוכות (על אותה צלע) הוא תמיד מאה ושמונים מעלות.",
        solution_steps: [
            { verbal_explanation: "שלב 1: שימוש בתכונת זוויות סמוכות במקבילית.", math_expression: "x + 40 = 180" },
            { verbal_explanation: "שלב 2: העברת הארבעים אגף.", math_expression: "x = 180 - 40" },
            { verbal_explanation: "שלב 3: ביצוע החיסור.", math_expression: "140" },
            { verbal_explanation: "שלב 4: רישום הזווית החסרה.", math_expression: "x = 140" }
        ],
        final_answer: "140"
    },

    // שאלה מספר 26
    {
        topic: "geometry_172",
        subTopic: "מרובעים (מקבילית, מלבן, ריבוע, מעוין, טרפז)",
        question_text: "במעוין, זווית חדה אחת היא בת 60 מעלות. האלכסון הגדול חוצה את הזווית הקהה שמונחת מולו. מהו גודל חצי הזווית הקהה?",
        options: ["60", "120", "30", "90"],
        correctAnswer: 0,
        hint: "תחילה מצאו את גודל הזווית הקהה הסמוכה לזווית החדה, ולאחר מכן חלקו אותה לשניים כי אלכסון במעוין חוצה זווית.",
        solution_steps: [
            { verbal_explanation: "שלב 1: מציאת הזווית הקהה הסמוכה (סכומן מאה ושמונים).", math_expression: "\\alpha = 180 - 60 = 120" },
            { verbal_explanation: "שלב 2: נתון שהאלכסון חוצה את הזווית הקהה שגודלה מאה ועשרים.", math_expression: "x = 120 : 2" },
            { verbal_explanation: "שלב 3: חישוב החלוקה.", math_expression: "60" },
            { verbal_explanation: "שלב 4: כתיבת הפתרון.", math_expression: "x = 60" }
        ],
        final_answer: "60"
    },

    // שאלה מספר 27
    {
        topic: "geometry_172",
        subTopic: "מרובעים (מקבילית, מלבן, ריבוע, מעוין, טרפז)",
        question_text: "היקף של מעוין הוא 40 סנטימטרים. מהו אורך כל צלע שלו?",
        options: ["10", "20", "100", "5"],
        correctAnswer: 0,
        hint: "היקף מורכב מסכום כל הצלעות. במעוין, כל ארבע הצלעות שוות זו לזו באורכן.",
        solution_steps: [
            { verbal_explanation: "שלב 1: בניית משוואה להקיף בהתבסס על שוויון הצלעות.", math_expression: "4 \\times a = 40" },
            { verbal_explanation: "שלב 2: חלוקת המשוואה בארבע לבידוד הצלע.", math_expression: "a = 40 : 4" },
            { verbal_explanation: "שלב 3: ביצוע החלוקה.", math_expression: "10" },
            { verbal_explanation: "שלב 4: הרישום הסופי של צלע המעוין.", math_expression: "a = 10" }
        ],
        final_answer: "10"
    },

    // שאלה מספר 28
    {
        topic: "geometry_172",
        subTopic: "מרובעים (מקבילית, מלבן, ריבוע, מעוין, טרפז)",
        question_text: "במלבן, אורך צלע אחת הוא כפול מאורך הצלע הסמוכה לה. היקף המלבן הוא 30. מהו אורך הצלע הקצרה?",
        options: ["5", "10", "15", "3"],
        correctAnswer: 0,
        hint: "סמנו את הצלע הקצרה באיקס ואת הארוכה בשני איקס. היקף המלבן הוא פעמיים איקס ועוד פעמיים שני איקס.",
        solution_steps: [
            { verbal_explanation: "שלב 1: הגדרת הצלעות עם נעלם.", math_expression: "a = x , b = 2x" },
            { verbal_explanation: "שלב 2: בניית משוואת ההיקף.", math_expression: "2x + 2(2x) = 30" },
            { verbal_explanation: "שלב 3: פתיחת סוגריים וכינוס.", math_expression: "2x + 4x = 30 \\Rightarrow 6x = 30" },
            { verbal_explanation: "שלב 4: חלוקה בשש.", math_expression: "x = 30 : 6" },
            { verbal_explanation: "שלב 5: מציאת איקס המייצג את הצלע הקצרה.", math_expression: "x = 5" },
            { verbal_explanation: "שלב 6: הרישום הסופי.", math_expression: "5" }
        ],
        final_answer: "5"
    },

    // שאלה מספר 29
    {
        topic: "geometry_172",
        subTopic: "מרובעים (מקבילית, מלבן, ריבוע, מעוין, טרפז)",
        question_text: "בטרפז שווה שוקיים, זווית בסיס אחת היא 70 מעלות. מהו גודלה של הזווית הסמוכה לה על אותה שוק?&rlm;<div dir='ltr' style='display:flex; justify-content:center; margin:20px 0;'><svg viewBox='0 0 200 200' style='max-width:250px; width:100%; border-radius:12px; background:#f8fafc; border:1px solid #e2e8f0;'><polygon points='40,160 160,160 120,60 80,60' fill='none' stroke='#8b5cf6' stroke-width='3'/><text x='130' y='150' font-size='14' fill='#334155'>70°</text><text x='125' y='80' font-size='14' fill='#ef4444'>x</text></svg></div>",
        options: ["110", "70", "140", "40"],
        correctAnswer: 0,
        hint: "בכל טרפז, סכום הזוויות הסמוכות לשוק (לא לבסיס) הוא מאה ושמונים מעלות בגלל ישרים מקבילים.",
        solution_steps: [
            { verbal_explanation: "שלב 1: הגדרת הקשר בין הזוויות החד צדדיות על השוק.", math_expression: "x + 70 = 180" },
            { verbal_explanation: "שלב 2: העברת המספר אגף.", math_expression: "x = 180 - 70" },
            { verbal_explanation: "שלב 3: ביצוע החיסור.", math_expression: "110" },
            { verbal_explanation: "שלב 4: קבלת התוצאה.", math_expression: "x = 110" }
        ],
        final_answer: "110"
    },

    // שאלה מספר 30
    {
        topic: "geometry_172",
        subTopic: "מרובעים (מקבילית, מלבן, ריבוע, מעוין, טרפז)",
        question_text: "היקפו של ריבוע שווה ל-24. מהו שטחו?",
        options: ["36", "144", "24", "12"],
        correctAnswer: 0,
        hint: "קודם מצאו את צלע הריבוע על ידי חלוקת ההיקף בארבע. לאחר מכן, העלו את הצלע בריבוע למציאת השטח.",
        solution_steps: [
            { verbal_explanation: "שלב 1: מציאת הצלע מתוך ההיקף.", math_expression: "a = 24 : 4" },
            { verbal_explanation: "שלב 2: אורך הצלע הוא שש.", math_expression: "a = 6" },
            { verbal_explanation: "שלב 3: כתיבת נוסחת השטח לריבוע.", math_expression: "S = 6^{2}" },
            { verbal_explanation: "שלב 4: חישוב השטח.", math_expression: "S = 36" },
            { verbal_explanation: "שלב 5: התוצאה המוצגת למשתמש.", math_expression: "36" }
        ],
        final_answer: "36"
    },

    // שאלה מספר 31
    {
        topic: "geometry_172",
        subTopic: "מרובעים (מקבילית, מלבן, ריבוע, מעוין, טרפז)",
        question_text: "במקבילית, זווית אחת שווה ל-100 מעלות. מהו גודל הזווית הנגדית לה?",
        options: ["100", "80", "50", "200"],
        correctAnswer: 0,
        hint: "תכונה בסיסית של מקבילית היא שזוויות נגדיות (שאינן על אותה צלע) תמיד שוות זו לזו.",
        solution_steps: [
            { verbal_explanation: "שלב 1: שימוש ישיר במשפט הגיאומטרי הקובע כי זוויות נגדיות במקבילית שוות.", math_expression: "\\alpha = \\gamma" },
            { verbal_explanation: "שלב 2: הצבת הנתון מהשאלה.", math_expression: "\\gamma = 100" },
            { verbal_explanation: "שלב 3: אישור התשובה.", math_expression: "100" }
        ],
        final_answer: "100"
    },

    // שאלה מספר 32
    {
        topic: "geometry_172",
        subTopic: "מרובעים (מקבילית, מלבן, ריבוע, מעוין, טרפז)",
        question_text: "בטרפז ישר זווית, שתי זוויות סמוכות על השוק האנכית שוות ל-90 מעלות. מה סכום שתי הזוויות שעל השוק המשופעת?",
        options: ["180", "90", "360", "270"],
        correctAnswer: 0,
        hint: "סכום כל הזוויות במרובע הוא שלוש מאות שישים. חסרו את שתי הזוויות הישרות מהסכום הכולל, או השתמשו בכלל של זוויות חד צדדיות בין מקבילים.",
        solution_steps: [
            { verbal_explanation: "שלב 1: הצגת הכלל של סכום זוויות צמודות לשוק בטרפז בגלל בסיסים מקבילים.", math_expression: "\\alpha + \\beta = 180" },
            { verbal_explanation: "שלב 2: למעשה אין צורך בחישוב נוסף שכן זהו משפט גיאומטרי קבוע לכל שוק בטרפז.", math_expression: "180" },
            { verbal_explanation: "שלב 3: הרישום הסופי.", math_expression: "180" }
        ],
        final_answer: "180"
    },

    // שאלה מספר 33
    {
        topic: "geometry_172",
        subTopic: "מרובעים (מקבילית, מלבן, ריבוע, מעוין, טרפז)",
        question_text: "אורכו של קטע אמצעים בטרפז הוא 8. הבסיס העליון שווה ל-6. מהו אורכו של הבסיס התחתון?",
        options: ["10", "14", "2", "48"],
        correctAnswer: 0,
        hint: "קטע אמצעים בטרפז שווה לממוצע החשבוני של שני הבסיסים. בנו משוואה והכפילו בשתיים.",
        solution_steps: [
            { verbal_explanation: "שלב 1: בניית המשוואה המייצגת את קטע האמצעים.", math_expression: "8 = \\dfrac{6 + x}{2}" },
            { verbal_explanation: "שלב 2: הכפלת שני האגפים בשתיים כדי להיפטר מהמכנה.", math_expression: "16 = 6 + x" },
            { verbal_explanation: "שלב 3: העברת שש אגף בחיסור.", math_expression: "x = 16 - 6" },
            { verbal_explanation: "שלב 4: ביצוע הפעולה.", math_expression: "10" },
            { verbal_explanation: "שלב 5: התשובה לבסיס התחתון.", math_expression: "x = 10" }
        ],
        final_answer: "10"
    },

    // שאלה מספר 34
    {
        topic: "geometry_172",
        subTopic: "מרובעים (מקבילית, מלבן, ריבוע, מעוין, טרפז)",
        question_text: "במלבן, האלכסונים נחתכים בנקודה O. אורך חצי אלכסון הוא 5. מהו אורך האלכסון השלם השני?",
        options: ["10", "5", "20", "2.5"],
        correctAnswer: 0,
        hint: "במלבן האלכסונים חוצים זה את זה (כמו במקבילית) והם גם שווים זה לזה באורכם המלא.",
        solution_steps: [
            { verbal_explanation: "שלב 1: חישוב האלכסון המלא הראשון על ידי הכפלת חצי האלכסון בשתיים.", math_expression: "d_{1} = 5 \\times 2 = 10" },
            { verbal_explanation: "שלב 2: שימוש במשפט הקובע כי במלבן שני האלכסונים זהים באורכם.", math_expression: "d_{1} = d_{2}" },
            { verbal_explanation: "שלב 3: מסקנה מיידית לגבי האלכסון השני.", math_expression: "d_{2} = 10" },
            { verbal_explanation: "שלב 4: רישום הפתרון.", math_expression: "10" }
        ],
        final_answer: "10"
    },

    // שאלה מספר 35
    {
        topic: "geometry_172",
        subTopic: "מרובעים (מקבילית, מלבן, ריבוע, מעוין, טרפז)",
        question_text: "במעוין, הזוויות הנגדיות שוות ל-120 מעלות כל אחת. האלכסון הקטן מחלק את המעוין לשני משולשים. איזה סוג משולשים אלו?",
        options: ["שווה צלעות", "ישר זווית", "שונה צלעות", "קהה זווית"],
        correctAnswer: 0,
        hint: "האלכסון הקטן מחבר את הזוויות הקהות וחוצה אותן. בדקו אילו זוויות נוצרות במשולש (שתי זוויות בסיס של 60 וזווית ראש של 60).",
        solution_steps: [
            { verbal_explanation: "שלב 1: סכום זוויות סמוכות במעוין הוא מאה ושמונים, נמצא את הזווית החדה.", math_expression: "180 - 120 = 60" },
            { verbal_explanation: "שלב 2: האלכסון מחבר את שתי הזוויות הקהות ולכן הוא יוצר משולש עם הזווית החדה (שישים מעלות).", math_expression: "\\alpha = 60" },
            { verbal_explanation: "שלב 3: משולש שנוצר במעוין הוא תמיד שווה שוקיים בבסיסו. אם זווית הראש היא שישים, נחשב את שאר הזוויות.", math_expression: "(180 - 60) : 2 = 60" },
            { verbal_explanation: "שלב 4: כאשר כל שלוש הזוויות הן בנות שישים מעלות, המשולש מיוחד.", math_expression: "60 , 60 , 60" },
            { verbal_explanation: "שלב 5: בחירת התשובה הנכונה המאפיינת מצב זה.", math_expression: "1" }
        ],
        final_answer: "שווה צלעות"
    },

    // שאלה מספר 36
    {
        topic: "geometry_172",
        subTopic: "מרובעים (מקבילית, מלבן, ריבוע, מעוין, טרפז)",
        question_text: "במקבילית, צלע אחת היא 8 וצלע שנייה היא 6. מהו היקף המקבילית?",
        options: ["28", "48", "14", "24"],
        correctAnswer: 0,
        hint: "במקבילית כל זוג צלעות נגדיות שוות. פשוט חברו פעמיים את הצלע הראשונה ופעמיים את הצלע השנייה.",
        solution_steps: [
            { verbal_explanation: "שלב 1: הגדרת נוסחת ההיקף למקבילית (בדומה למלבן).", math_expression: "P = 2 \\times 8 + 2 \\times 6" },
            { verbal_explanation: "שלב 2: ביצוע הכפל עבור הצלע הארוכה.", math_expression: "16" },
            { verbal_explanation: "שלב 3: ביצוע הכפל עבור הצלע הקצרה.", math_expression: "12" },
            { verbal_explanation: "שלב 4: חיבור שתי התוצאות להשגת ההיקף הכולל.", math_expression: "P = 16 + 12 = 28" },
            { verbal_explanation: "שלב 5: התוצאה המוצגת.", math_expression: "28" }
        ],
        final_answer: "28"
    },

    // ==========================================
    // תת נושא 4: חישובי שטחים והיקפים (12 שאלות)
    // ==========================================

    // שאלה מספר 37
    {
        topic: "geometry_172",
        subTopic: "חישובי שטחים והיקפים",
        question_text: "מהו שטחו של טרפז שבו הבסיסים הם 6 ו-10, והגובה הוא 5?&rlm;\n<div dir='ltr' style='display:flex; justify-content:center; margin:20px 0;'><svg viewBox='0 0 200 200' style='max-width:250px; width:100%; border-radius:12px; background:#f8fafc; border:1px solid #e2e8f0;'><polygon points='40,160 160,160 120,60 80,60' fill='none' stroke='#3b82f6' stroke-width='3'/><line x1='80' y1='60' x2='80' y2='160' stroke='#94a3b8' stroke-dasharray='4,4' stroke-width='2'/><text x='95' y='50' font-size='14' fill='#334155'>6</text><text x='95' y='180' font-size='14' fill='#334155'>10</text><text x='65' y='110' font-size='14' fill='#ef4444'>5</text></svg></div>",
        options: ["40", "80", "30", "150"],
        correctAnswer: 0,
        hint: "נוסחת שטח טרפז דורשת לחבר את הבסיסים, להכפיל בגובה, ואז לחלק את כל התוצאה בשתיים.",
        solution_steps: [
            { verbal_explanation: "שלב 1: כתיבת הנוסחה להצבת הנתונים.", math_expression: "S = \\dfrac{(6 + 10) \\times 5}{2}" },
            { verbal_explanation: "שלב 2: סכימת הבסיסים בתוך הסוגריים.", math_expression: "S = \\dfrac{16 \\times 5}{2}" },
            { verbal_explanation: "שלב 3: ביצוע פעולת הכפל שבמונה.", math_expression: "S = \\dfrac{80}{2}" },
            { verbal_explanation: "שלב 4: חלוקה בשתיים לקבלת השטח הסופי.", math_expression: "S = 40" },
            { verbal_explanation: "שלב 5: התשובה הנכונה המופיעה באפשרויות.", math_expression: "40" }
        ],
        final_answer: "40"
    },

    // שאלה מספר 38
    {
        topic: "geometry_172",
        subTopic: "חישובי שטחים והיקפים",
        question_text: "במשולש, אורך הבסיס הוא 12 והשטח הוא 42. מהו אורך הגובה היורד לבסיס זה?",
        options: ["7", "3.5", "14", "84"],
        correctAnswer: 0,
        hint: "בנו משוואה: בסיס כפול גובה חלקי שתיים שווה לשטח. הכפילו את השטח בשתיים וחלקו בבסיס כדי למצוא את הגובה.",
        solution_steps: [
            { verbal_explanation: "שלב 1: הצבת הנתונים בנוסחת שטח משולש.", math_expression: "42 = \\dfrac{12 \\times h}{2}" },
            { verbal_explanation: "שלב 2: צמצום השבר על ידי חלוקת השתים עשרה בשתיים.", math_expression: "42 = 6 \\times h" },
            { verbal_explanation: "שלב 3: חלוקת שני אגפי המשוואה בשש כדי לבודד את הגובה.", math_expression: "h = 42 : 6" },
            { verbal_explanation: "שלב 4: חישוב התוצאה.", math_expression: "h = 7" },
            { verbal_explanation: "שלב 5: רישום הנתון המבוקש.", math_expression: "7" }
        ],
        final_answer: "7"
    },

    // שאלה מספר 39
    {
        topic: "geometry_172",
        subTopic: "חישובי שטחים והיקפים",
        question_text: "שטחו של ריבוע הוא 81 סנטימטר מרובע. מהו היקף הריבוע?",
        options: ["36", "18", "9", "81"],
        correctAnswer: 0,
        hint: "הוציאו שורש ריבועי מהשטח כדי למצוא את אורך צלע הריבוע, ולאחר מכן הכפילו את הצלע בארבע.",
        solution_steps: [
            { verbal_explanation: "שלב 1: שימוש בשטח למציאת צלע הריבוע על ידי הוצאת שורש.", math_expression: "a = \\sqrt{81}" },
            { verbal_explanation: "שלב 2: מציאת אורך הצלע.", math_expression: "a = 9" },
            { verbal_explanation: "שלב 3: כתיבת נוסחת היקף ריבוע (ארבע פעמים הצלע).", math_expression: "P = 4 \\times 9" },
            { verbal_explanation: "שלב 4: ביצוע פעולת הכפל.", math_expression: "36" },
            { verbal_explanation: "שלב 5: התשובה הסופית.", math_expression: "36" }
        ],
        final_answer: "36"
    },

    // שאלה מספר 40
    {
        topic: "geometry_172",
        subTopic: "חישובי שטחים והיקפים",
        question_text: "במקבילית, אורך צלע הוא 10, והגובה היורד לאותה צלע הוא 6. מהו שטח המקבילית?&rlm;<div dir='ltr' style='display:flex; justify-content:center; margin:20px 0;'><svg viewBox='0 0 200 200' style='max-width:250px; width:100%; border-radius:12px; background:#f8fafc; border:1px solid #e2e8f0;'><polygon points='60,140 180,140 140,60 20,60' fill='none' stroke='#10b981' stroke-width='3'/><line x1='140' y1='60' x2='140' y2='140' stroke='#94a3b8' stroke-dasharray='4,4' stroke-width='2'/><text x='110' y='160' font-size='14' fill='#334155'>10</text><text x='145' y='105' font-size='14' fill='#ef4444'>6</text></svg></div>",
        options: ["60", "30", "16", "32"],
        correctAnswer: 0,
        hint: "שטח מקבילית מחשבים פשוט על ידי מכפלת הצלע בגובה היורד אליה. אין צורך לחלק בשתיים כמו במשולש.",
        solution_steps: [
            { verbal_explanation: "שלב 1: זיהוי הנתונים הרלוונטיים (בסיס וגובה).", math_expression: "b = 10 \\quad , \\quad h = 6" },
            { verbal_explanation: "שלב 2: כתיבת נוסחת השטח למקבילית.", math_expression: "S = 10 \\times 6" },
            { verbal_explanation: "שלב 3: ביצוע הכפל.", math_expression: "60" },
            { verbal_explanation: "שלב 4: רישום הפתרון.", math_expression: "60" }
        ],
        final_answer: "60"
    },

    // שאלה מספר 41
    {
        topic: "geometry_172",
        subTopic: "חישובי שטחים והיקפים",
        question_text: "מגרש מלבני שמידותיו הן 20 על 15 מכיל בתוכו בריכה בצורת ריבוע שאורך צלעה הוא 5. חשבו את השטח שנותר במגרש מחוץ לבריכה.",
        options: ["275", "300", "25", "280"],
        correctAnswer: 0,
        hint: "חשבו את השטח הכולל של המלבן וחסרו ממנו את שטחה של הבריכה הריבועית.",
        solution_steps: [
            { verbal_explanation: "שלב 1: חישוב השטח הכולל של המגרש המלבני.", math_expression: "S_{1} = 20 \\times 15 = 300" },
            { verbal_explanation: "שלב 2: חישוב שטח הבריכה הריבועית.", math_expression: "S_{2} = 5^{2} = 25" },
            { verbal_explanation: "שלב 3: החסרת השטח הפנימי מהשטח הכולל.", math_expression: "S_{final} = 300 - 25" },
            { verbal_explanation: "שלב 4: ביצוע החיסור לקבלת שטח החלק הנותר.", math_expression: "275" },
            { verbal_explanation: "שלב 5: התשובה שתבחר.", math_expression: "275" }
        ],
        final_answer: "275"
    },

    // שאלה מספר 42
    {
        topic: "geometry_172",
        subTopic: "חישובי שטחים והיקפים",
        question_text: "במשולש ישר זווית, אורך היתר הוא 13. היקף המשולש הוא 30. מצאו את סכום שני הניצבים בלבד ואז חשבו מהו אורך כל ניצב אם ידוע שניצב אחד ארוך מהשני ב-7.",
        options: ["5 ו-12", "6 ו-13", "7 ו-10", "4 ו-11"],
        correctAnswer: 0,
        hint: "חסרו את היתר מההיקף כדי למצוא את סכום הניצבים (17). ואז, נחשו אילו שני מספרים סכומם שבע עשרה והפרשם שבע, או פשוט היעזרו בשלשות פיתגורס מוכרות.",
        solution_steps: [
            { verbal_explanation: "שלב 1: מציאת סכום הניצבים על ידי החסרת היתר מההיקף הכללי.", math_expression: "a + b = 30 - 13 = 17" },
            { verbal_explanation: "שלב 2: שימוש בנתון על ההפרש שביניהם להגדרת מערכת משוואות פשוטה.", math_expression: "a - b = 7" },
            { verbal_explanation: "שלב 3: סכימת שתי המשוואות כדי לבטל את הנעלם השני.", math_expression: "2a = 17 + 7 = 24" },
            { verbal_explanation: "שלב 4: חלוקה בשתיים למציאת הניצב הארוך.", math_expression: "a = 12" },
            { verbal_explanation: "שלב 5: מציאת הניצב הקצר באמצעות הצבה באחת המשוואות.", math_expression: "12 + b = 17 \\Rightarrow b = 5" },
            { verbal_explanation: "שלב 6: הרישום של צמד הניצבים שנמצאו.", math_expression: "5 , 12" }
        ],
        final_answer: "5 ו-12"
    },

    // שאלה מספר 43
    {
        topic: "geometry_172",
        subTopic: "חישובי שטחים והיקפים",
        question_text: "צורה מורכבת בנויה ממלבן שרוחבו 8 וגובהו 4, ועל רוחבו העליון מונח משולש שווה שוקיים שגובהו הוא 3. מהו השטח הכולל של הצורה?&rlm;<div dir='ltr' style='display:flex; justify-content:center; margin:20px 0;'><svg viewBox='0 0 200 200' style='max-width:250px; width:100%; border-radius:12px; background:#f8fafc; border:1px solid #e2e8f0;'><rect x='60' y='100' width='80' height='60' fill='none' stroke='#8b5cf6' stroke-width='2'/><polygon points='60,100 140,100 100,40' fill='none' stroke='#f59e0b' stroke-width='2'/><line x1='100' y1='40' x2='100' y2='100' stroke='#94a3b8' stroke-dasharray='4,4' stroke-width='2'/><text x='105' y='75' font-size='14' fill='#ef4444'>3</text><text x='95' y='180' font-size='14' fill='#334155'>8</text><text x='40' y='135' font-size='14' fill='#334155'>4</text></svg></div>",
        options: ["44", "56", "32", "24"],
        correctAnswer: 0,
        hint: "חשבו את שטח המלבן בנפרד ואת שטח המשולש בנפרד (כאשר בסיס המשולש הוא צלע המלבן), ולאחר מכן חברו את השטחים.",
        solution_steps: [
            { verbal_explanation: "שלב 1: חישוב שטח החלק המלבני.", math_expression: "S_{1} = 8 \\times 4 = 32" },
            { verbal_explanation: "שלב 2: זיהוי שבסיס המשולש זהה לרוחב המלבן.", math_expression: "b = 8" },
            { verbal_explanation: "שלב 3: חישוב שטח החלק המשולש העליון (בסיס כפול גובה חלקי שתיים).", math_expression: "S_{2} = \\dfrac{8 \\times 3}{2}" },
            { verbal_explanation: "שלב 4: ביצוע החישוב למשולש.", math_expression: "S_{2} = \\dfrac{24}{2} = 12" },
            { verbal_explanation: "שלב 5: חיבור שני השטחים כדי לקבל את שטח הצורה כולה.", math_expression: "S = 32 + 12" },
            { verbal_explanation: "שלב 6: סיום החישוב.", math_expression: "44" }
        ],
        final_answer: "44"
    },

    // שאלה מספר 44
    {
        topic: "geometry_172",
        subTopic: "חישובי שטחים והיקפים",
        question_text: "במשולש, ידוע שהגובה קטן מהבסיס ב-4. השטח של המשולש הוא 30. איזה מהזוגות הבאים יכול לייצג את הבסיס והגובה בהתאמה?",
        options: ["10 ו-6", "12 ו-8", "6 ו-10", "15 ו-4"],
        correctAnswer: 0,
        hint: "נסו להציב את האפשרויות הנתונות בנוסחת שטח משולש (מכפלה חלקי שתיים שווה לשלושים) ובדקו מי מקיים את תנאי ההפרש של 4.",
        solution_steps: [
            { verbal_explanation: "שלב 1: בניית המשוואה לפי נוסחת שטח, כשהבסיס הוא איקס והגובה קטן בארבע.", math_expression: "30 = \\dfrac{x \\times (x - 4)}{2}" },
            { verbal_explanation: "שלב 2: הכפלה בשתיים כדי לבטל את השבר.", math_expression: "60 = x(x - 4)" },
            { verbal_explanation: "שלב 3: הבנה שאנו מחפשים שני מספרים שהפרשם ארבע ומכפלתם שישים.", math_expression: "10 \\times 6 = 60" },
            { verbal_explanation: "שלב 4: מציאת הערכים בהתאמה.", math_expression: "x = 10 \\quad , \\quad x - 4 = 6" },
            { verbal_explanation: "שלב 5: רישום הפתרון כפי שהוא מופיע באפשרויות (הבסיס קודם).", math_expression: "10 \\quad , \\quad 6" }
        ],
        final_answer: "10 ו-6"
    },

    // שאלה מספר 45
    {
        topic: "geometry_172",
        subTopic: "חישובי שטחים והיקפים",
        question_text: "ריבוע ומלבן בעלי שטח זהה. אורך צלע הריבוע הוא 6. אם רוחב המלבן הוא 4, מהו אורכו?",
        options: ["9", "12", "8", "6"],
        correctAnswer: 0,
        hint: "חשבו את שטח הריבוע ואז בנו משוואה למלבן שבה השטח שחישבתם שווה לאורך כפול הרוחב הידוע.",
        solution_steps: [
            { verbal_explanation: "שלב 1: חישוב שטח הריבוע.", math_expression: "S = 6^{2} = 36" },
            { verbal_explanation: "שלב 2: השוואת שטח זה לנוסחת השטח של המלבן שיש לו רוחב נתון.", math_expression: "4 \\times L = 36" },
            { verbal_explanation: "שלב 3: חלוקת שני האגפים בארבע כדי לבודד את האורך.", math_expression: "L = 36 : 4" },
            { verbal_explanation: "שלב 4: חישוב הפעולה.", math_expression: "L = 9" },
            { verbal_explanation: "שלב 5: התשובה הדרושה.", math_expression: "9" }
        ],
        final_answer: "9"
    },

    // שאלה מספר 46
    {
        topic: "geometry_172",
        subTopic: "חישובי שטחים והיקפים",
        question_text: "במעוין, שטח המרובע הוא 40. אלכסון אחד שווה ל-10. מהו אורכו של האלכסון השני?",
        options: ["8", "4", "16", "20"],
        correctAnswer: 0,
        hint: "זכרו ששטח מעוין הוא מכפלת האלכסונים חלקי שתיים. בנו משוואה.",
        solution_steps: [
            { verbal_explanation: "שלב 1: כתיבת נוסחת השטח תוך הצבת הנתונים הידועים.", math_expression: "40 = \\dfrac{10 \\times d}{2}" },
            { verbal_explanation: "שלב 2: צמצום השבר. חלוקת עשר בשתיים שווה לחמש.", math_expression: "40 = 5 \\times d" },
            { verbal_explanation: "שלב 3: חלוקת המשוואה בחמש למציאת האלכסון השני.", math_expression: "d = 40 : 5" },
            { verbal_explanation: "שלב 4: חישוב החילוק.", math_expression: "d = 8" },
            { verbal_explanation: "שלב 5: הרישום המסכם לתשובה.", math_expression: "8" }
        ],
        final_answer: "8"
    },

    // שאלה מספר 47
    {
        topic: "geometry_172",
        subTopic: "חישובי שטחים והיקפים",
        question_text: "שטחו של טרפז הוא 50. גובה הטרפז הוא 5 והבסיס התחתון ארוך מהעליון ב-4. מהו אורך הבסיס הקטן?",
        options: ["8", "12", "6", "10"],
        correctAnswer: 0,
        hint: "הציבו בנוסחת טרפז. את הבסיס הקטן סמנו באיקס ואת הגדול באיקס ועוד 4. כפלו הכל ופתרו משוואה.",
        solution_steps: [
            { verbal_explanation: "שלב 1: הצבת הנתונים והנעלמים אל תוך נוסחת השטח של טרפז.", math_expression: "50 = \\dfrac{(x + x + 4) \\times 5}{2}" },
            { verbal_explanation: "שלב 2: הכפלת שני האגפים בשתיים כדי להסיר את המכנה.", math_expression: "100 = (2x + 4) \\times 5" },
            { verbal_explanation: "שלב 3: חלוקת שני אגפי המשוואה בחמש כדי לפשט אותה.", math_expression: "20 = 2x + 4" },
            { verbal_explanation: "שלב 4: העברת המספר ארבע שמאלה בחיסור.", math_expression: "16 = 2x" },
            { verbal_explanation: "שלב 5: חלוקת המשוואה בשתיים למציאת ערך האיקס, המייצג את הבסיס הקטן.", math_expression: "x = 8" },
            { verbal_explanation: "שלב 6: הרישום הסופי כפי שנדרש.", math_expression: "8" }
        ],
        final_answer: "8"
    },

    // שאלה מספר 48
    {
        topic: "geometry_172",
        subTopic: "חישובי שטחים והיקפים",
        question_text: "מלבן שרוחבו 6 ושטחו 48 מורחב כך שכל אחת מצלעותיו גדלה פי שניים. מה יהיה שטחו של המלבן החדש?",
        options: ["192", "96", "144", "72"],
        correctAnswer: 0,
        hint: "כאשר מכפילים את כל צלעות המלבן פי 2, השטח גדל פי הריבוע של יחס ההגדלה (כלומר פי ארבעה). נסו להכפיל את השטח הקיים ב-4.",
        solution_steps: [
            { verbal_explanation: "שלב 1: גישה מתמטית ישירה - הבנת כלל ההגדלה. יחס השטחים הוא ריבוע יחס ההגדלה.", math_expression: "K^{2} = 2^{2} = 4" },
            { verbal_explanation: "שלב 2: הכפלת השטח הקיים ביחס ההגדלה.", math_expression: "S_{new} = 48 \\times 4" },
            { verbal_explanation: "שלב 3: ביצוע פעולת הכפל.", math_expression: "S_{new} = 192" },
            { verbal_explanation: "שלב 4: גישה חלופית לאימות - מציאת האורך המקורי על ידי חלוקת השטח ברוחב.", math_expression: "L = 48 : 6 = 8" },
            { verbal_explanation: "שלב 5: הגדלת כל צלע פי שניים.", math_expression: "L_{new} = 16 \\quad , \\quad W_{new} = 12" },
            { verbal_explanation: "שלב 6: חישוב השטח עם הצלעות החדשות להוכחת הפתרון.", math_expression: "16 \\times 12 = 192" },
            { verbal_explanation: "שלב 7: הרישום המסכם לבחירה באפשרויות.", math_expression: "192" }
        ],
        final_answer: "192"
    }
];