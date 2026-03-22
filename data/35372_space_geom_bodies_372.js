const questionsDB = [
    // ==========================================
    // תת נושא 1: קובייה (10 שאלות)
    // ==========================================

    // שאלה מספר 1 (רב שלבית)
    {
        topic: "solid_geometry_372",
        subTopic: "קובייה",
        question_text: "נתונה קובייה שאורך המקצוע שלה הוא 5 ס''מ.&rlm;<br>א. מהו נפח הקובייה?&rlm;<br>ב. מהו שטח הפנים הכולל של הקובייה?&rlm;\n<div dir='ltr' style='display:flex; justify-content:center; margin:20px 0;'><svg viewBox='0 0 200 200' style='max-width:200px; width:100%; border-radius:12px; background:#f8fafc; border:1px solid #e2e8f0;'><polygon points='60,140 140,140 140,60 60,60' fill='#3b82f6' opacity='0.2' stroke='#3b82f6' stroke-width='2'/><polygon points='60,60 100,20 180,20 140,60' fill='#3b82f6' opacity='0.3' stroke='#3b82f6' stroke-width='2'/><polygon points='140,140 180,100 180,20 140,60' fill='#3b82f6' opacity='0.4' stroke='#3b82f6' stroke-width='2'/><text x='95' y='160' font-size='14'>5</text><text x='35' y='105' font-size='14'>5</text></svg></div>",
        options: ["א. 125 | ב. 150", "א. 25 | ב. 150", "א. 125 | ב. 125", "א. 150 | ב. 125"],
        correctAnswer: 0,
        hint: "נפח קובייה שווה למקצוע בשלישית. שטח הפנים מורכב מ-6 ריבועים זהים שאורך צלעם שווה למקצוע.",
        solution_steps: [
            { verbal_explanation: "שלב 1: חישוב נפח הקובייה באמצעות העלאת המקצוע בחזקת שלוש.", math_expression: "V = 5^{3}" },
            { verbal_explanation: "שלב 2: פתרון החזקה (חמש כפול חמש כפול חמש) לקבלת הנפח (תשובה לא').", math_expression: "V = 125" },
            { verbal_explanation: "שלב 3: חישוב שטח של פאה אחת (ריבוע).", math_expression: "S_{1} = 5^{2} = 25" },
            { verbal_explanation: "שלב 4: הכפלת שטח הפאה בשש, מכיוון שלקובייה יש שש פאות זהות.", math_expression: "S = 6 \\times 25" },
            { verbal_explanation: "שלב 5: חישוב שטח הפנים הכולל (תשובה לב').", math_expression: "S = 150" }
        ],
        final_answer: "א. 125 | ב. 150"
    },

    // שאלה מספר 2
    {
        topic: "solid_geometry_372",
        subTopic: "קובייה",
        question_text: "נפחה של קובייה הוא 64 סמ''ק. מהו סכום אורכי כל המקצועות של הקובייה?&rlm;",
        options: ["48", "16", "64", "24"],
        correctAnswer: 0,
        hint: "תחילה מצאו את אורך המקצוע הבודד (שורש שלישי של הנפח). לאחר מכן, זכרו שלקובייה יש 12 מקצועות בסך הכל.",
        solution_steps: [
            { verbal_explanation: "שלב 1: כתיבת משוואת הנפח כדי לחלץ את המקצוע.", math_expression: "a^{3} = 64" },
            { verbal_explanation: "שלב 2: הוצאת שורש שלישי למציאת אורך מקצוע בודד.", math_expression: "a = \\sqrt[3]{64} = 4" },
            { verbal_explanation: "שלב 3: הגדרת כמות המקצועות בקובייה.", math_expression: "n = 12" },
            { verbal_explanation: "שלב 4: חישוב סכום כל המקצועות על ידי הכפלה.", math_expression: "P = 12 \\times 4" },
            { verbal_explanation: "שלב 5: התוצאה הסופית לסכום האורכים.", math_expression: "P = 48" }
        ],
        final_answer: "48"
    },

    // שאלה מספר 3 (רב שלבית)
    {
        topic: "solid_geometry_372",
        subTopic: "קובייה",
        question_text: "אורך מקצוע קובייה הוא 6 ס''מ.&rlm;<br>א. חשבו את אורך אלכסון הפאה (אלכסון של אחד הריבועים).&rlm;<br>ב. חשבו את אורך האלכסון הראשי של הקובייה (בתוך החלל).&rlm;",
        options: ["א. 8.48 | ב. 10.39", "א. 12 | ב. 18", "א. 8.48 | ב. 12", "א. 7.2 | ב. 10.39"],
        correctAnswer: 0,
        hint: "אלכסון פאה מחושב ממשפט פיתגורס על שני מקצועות. האלכסון הראשי מחושב ממשפט פיתגורס על אלכסון הפאה והגובה.",
        solution_steps: [
            { verbal_explanation: "שלב 1: שימוש במשפט פיתגורס בתוך פאה אחת (ריבוע) למציאת אלכסון הפאה.", math_expression: "d_{1} = \\sqrt{6^{2} + 6^{2}}" },
            { verbal_explanation: "שלב 2: סכימת הריבועים והוצאת שורש (תשובה לא').", math_expression: "d_{1} = \\sqrt{36 + 36} = \\sqrt{72} \\approx 8.485" },
            { verbal_explanation: "שלב 3: בניית משולש ישר זווית בחלל: ניצב אחד הוא אלכסון הפאה, ניצב שני הוא גובה הקובייה.", math_expression: "d_{2} = \\sqrt{(\\sqrt{72})^{2} + 6^{2}}" },
            { verbal_explanation: "שלב 4: חישוב הערכים מתחת לשורש עבור האלכסון הראשי.", math_expression: "d_{2} = \\sqrt{72 + 36} = \\sqrt{108}" },
            { verbal_explanation: "שלב 5: הוצאת שורש למציאת אלכסון הקובייה (תשובה לב').", math_expression: "d_{2} \\approx 10.392" }
        ],
        final_answer: "א. 8.48 | ב. 10.39"
    },

    // שאלה מספר 4
    {
        topic: "solid_geometry_372",
        subTopic: "קובייה",
        question_text: "שטח הפנים של קובייה הוא 216 סמ''ר. מהו נפחה של הקובייה?&rlm;",
        options: ["216", "36", "1296", "144"],
        correctAnswer: 0,
        hint: "חלקו את שטח הפנים ב-6 כדי לקבל שטח של פאה אחת. הוציאו שורש למציאת המקצוע, ואז העלו בשלישית לנפח.",
        solution_steps: [
            { verbal_explanation: "שלב 1: בניית משוואה לשטח הפנים הכללי של שש הפאות.", math_expression: "6 \\times a^{2} = 216" },
            { verbal_explanation: "שלב 2: חלוקה בשש למציאת שטח פאה בודדת.", math_expression: "a^{2} = 216 : 6 = 36" },
            { verbal_explanation: "שלב 3: הוצאת שורש ריבועי למציאת אורך המקצוע.", math_expression: "a = \\sqrt{36} = 6" },
            { verbal_explanation: "שלב 4: חישוב הנפח על ידי העלאת המקצוע בחזקת שלוש.", math_expression: "V = 6^{3}" },
            { verbal_explanation: "שלב 5: תוצאת החישוב של הנפח.", math_expression: "V = 216" }
        ],
        final_answer: "216"
    },

    // שאלה מספר 5
    {
        topic: "solid_geometry_372",
        subTopic: "קובייה",
        question_text: "בקובייה, מהי הזווית שבין אלכסון הקובייה (הראשי) לבין בסיס הקובייה?&rlm;\n<div dir='ltr' style='display:flex; justify-content:center; margin:20px 0;'><svg viewBox='0 0 200 200' style='max-width:200px; width:100%; border-radius:12px; background:#f8fafc; border:1px solid #e2e8f0;'><polygon points='60,140 140,140 180,100 100,100' fill='#f59e0b' opacity='0.2' stroke='#f59e0b' stroke-width='2'/><line x1='60' y1='60' x2='60' y2='140' stroke='#64748b' stroke-width='2'/><line x1='180' y1='20' x2='180' y2='100' stroke='#64748b' stroke-width='2'/><line x1='60' y1='60' x2='180' y2='100' stroke='#ef4444' stroke-width='2'/><line x1='60' y1='140' x2='180' y2='100' stroke='#10b981' stroke-dasharray='4,4' stroke-width='2'/></svg></div>",
        options: ["35.26°", "45°", "30°", "60°"],
        correctAnswer: 0,
        hint: "הזווית נוצרת במשולש ישר זווית שבו הניצב שמול הזווית הוא מקצוע הקובייה (a), והניצב שליד הזווית הוא אלכסון הבסיס (a כפול שורש 2). השתמשו בטנגנס.",
        solution_steps: [
            { verbal_explanation: "שלב 1: הגדרת הגובה של המשולש התלת-ממדי (מקצוע הקובייה).", math_expression: "h = a" },
            { verbal_explanation: "שלב 2: הגדרת הבסיס של המשולש (אלכסון פאת הבסיס של הקובייה).", math_expression: "d = \\sqrt{a^{2} + a^{2}} = a\\sqrt{2}" },
            { verbal_explanation: "שלב 3: שימוש בפונקציית הטנגנס (ניצב מול חלקי ניצב ליד) לחישוב הזווית.", math_expression: "\\tan(\\alpha) = \\dfrac{a}{a\\sqrt{2}}" },
            { verbal_explanation: "שלב 4: צמצום המשתנה המשותף מהמונה והמכנה.", math_expression: "\\tan(\\alpha) = \\dfrac{1}{\\sqrt{2}} \\approx 0.707" },
            { verbal_explanation: "שלב 5: ביצוע הפעולה ההפוכה במחשבון למציאת הזווית במעלות.", math_expression: "\\alpha = \\tan^{-1}(0.707) \\approx 35.26^{\\circ}" }
        ],
        final_answer: "35.26°"
    },

    // שאלה מספר 6 (רב שלבית)
    {
        topic: "solid_geometry_372",
        subTopic: "קובייה",
        question_text: "קובייה עשויה מחומר שצפיפותו 2 גרם לסמ''ק. אורך מקצוע הקובייה הוא 4 ס''מ.&rlm;<br>א. מהו נפח הקובייה?&rlm;<br>ב. מהי מסת הקובייה הכוללת (בגרמים)?&rlm;",
        options: ["א. 64 | ב. 128", "א. 16 | ב. 32", "א. 64 | ב. 64", "א. 48 | ב. 96"],
        correctAnswer: 0,
        hint: "חשבו את הנפח כרגיל. המסה היא הנפח כפול הצפיפות.",
        solution_steps: [
            { verbal_explanation: "שלב 1: חישוב הנפח על ידי חזקה שלישית של המקצוע (תשובה לא').", math_expression: "V = 4^{3} = 64" },
            { verbal_explanation: "שלב 2: ציון נתון הצפיפות שסופק.", math_expression: "d = 2" },
            { verbal_explanation: "שלב 3: כתיבת משוואת המסה הקושרת נפח וצפיפות.", math_expression: "M = V \\times d" },
            { verbal_explanation: "שלב 4: הצבת הנתונים וחישוב המכפלה (תשובה לב').", math_expression: "M = 64 \\times 2 = 128" }
        ],
        final_answer: "א. 64 | ב. 128"
    },

    // שאלה מספר 7
    {
        topic: "solid_geometry_372",
        subTopic: "קובייה",
        question_text: "בונים קובייה פתוחה (קופסה ללא מכסה עליון) מקרטון. אורך מקצוע הקובייה הוא 10 ס''מ. מהו שטח הקרטון הדרוש לבניית הקופסה?&rlm;",
        options: ["500", "600", "400", "1000"],
        correctAnswer: 0,
        hint: "מכיוון שאין מכסה עליון, לקובייה זו יש רק 5 פאות ולא 6. חשבו שטח של פאה אחת והכפילו ב-5.",
        solution_steps: [
            { verbal_explanation: "שלב 1: חישוב שטח פאה בודדת (ריבוע).", math_expression: "S_{1} = 10^{2} = 100" },
            { verbal_explanation: "שלב 2: קביעת מספר הפאות בקופסה ללא מכסה.", math_expression: "n = 5" },
            { verbal_explanation: "שלב 3: חישוב שטח הפנים הכולל של הצורה הפתוחה.", math_expression: "S = 5 \\times 100" },
            { verbal_explanation: "שלב 4: תוצאת המכפלה.", math_expression: "S = 500" },
            { verbal_explanation: "שלב 5: הרישום לבדיקה.", math_expression: "500" }
        ],
        final_answer: "500"
    },

    // שאלה מספר 8
    {
        topic: "solid_geometry_372",
        subTopic: "קובייה",
        question_text: "שתי קוביות מונחות זו לצד זו. אורך מקצוע קובייה א' הוא x. אורך מקצוע קובייה ב' הוא 2x. מהו היחס בין נפח קובייה ב' לנפח קובייה א'?&rlm;",
        options: ["8", "2", "4", "6"],
        correctAnswer: 0,
        hint: "הנפח מחושב כמקצוע בשלישית. העלו (2x) בשלישית ובדקו פי כמה זה גדול מ-x בשלישית.",
        solution_steps: [
            { verbal_explanation: "שלב 1: ביטוי מתמטי לנפח הקובייה הראשונה הקטנה.", math_expression: "V_{1} = x^{3}" },
            { verbal_explanation: "שלב 2: ביטוי מתמטי לנפח הקובייה השנייה הגדולה.", math_expression: "V_{2} = (2x)^{3}" },
            { verbal_explanation: "שלב 3: פתיחת הסוגריים על ידי העלאת גם המקדם וגם המשתנה בחזקה.", math_expression: "V_{2} = 8 \\times x^{3}" },
            { verbal_explanation: "שלב 4: מציאת היחס בין הנפחים על ידי חלוקה.", math_expression: "R = \\dfrac{8x^{3}}{x^{3}}" },
            { verbal_explanation: "שלב 5: צמצום המשתנה משאיר את היחס המספרי הנקי.", math_expression: "R = 8" }
        ],
        final_answer: "8"
    },

    // שאלה מספר 9
    {
        topic: "solid_geometry_372",
        subTopic: "קובייה",
        question_text: "מעבירים חתך אלכסוני בקובייה (מלבן הנוצר משני מקצועות נגדיים ושני אלכסוני פאות נגדיות). אורך המקצוע הוא 4 ס''מ. מהו שטח המלבן האלכסוני הזה?&rlm;\n<div dir='ltr' style='display:flex; justify-content:center; margin:20px 0;'><svg viewBox='0 0 200 200' style='max-width:200px; width:100%; border-radius:12px; background:#f8fafc; border:1px solid #e2e8f0;'><polygon points='60,140 140,140 140,60 60,60' fill='none' stroke='#64748b' stroke-width='1'/><polygon points='100,20 180,20 180,100 100,100' fill='none' stroke='#64748b' stroke-width='1'/><line x1='60' y1='60' x2='100' y2='20' stroke='#64748b' stroke-width='1'/><line x1='140' y1='60' x2='180' y2='20' stroke='#64748b' stroke-width='1'/><line x1='60' y1='140' x2='100' y2='100' stroke='#64748b' stroke-width='1'/><line x1='140' y1='140' x2='180' y2='100' stroke='#64748b' stroke-width='1'/><polygon points='60,140 140,140 180,20 100,20' fill='#ef4444' opacity='0.3' stroke='#ef4444' stroke-width='2'/></svg></div>",
        options: ["22.62", "16", "32", "11.31"],
        correctAnswer: 0,
        hint: "ממדי המלבן האלכסוני הם: מקצוע הקובייה (a) ואלכסון פאה (a כפול שורש 2). הכפילו אותם למציאת השטח.",
        solution_steps: [
            { verbal_explanation: "שלב 1: זיהוי אורך צלע אחת של המלבן האלכסוני (הגובה של הקובייה).", math_expression: "h = 4" },
            { verbal_explanation: "שלב 2: זיהוי הצלע השנייה המהווה אלכסון של בסיס הקובייה ממשפט פיתגורס.", math_expression: "d = \\sqrt{4^{2} + 4^{2}} = \\sqrt{32} \\approx 5.656" },
            { verbal_explanation: "שלב 3: שימוש בנוסחת שטח מלבן פשוטה.", math_expression: "S = 4 \\times 5.656" },
            { verbal_explanation: "שלב 4: ביצוע פעולת הכפל.", math_expression: "S \\approx 22.627" },
            { verbal_explanation: "שלב 5: בחירת התשובה בקירוב שתי ספרות עשרוניות.", math_expression: "22.62" }
        ],
        final_answer: "22.62"
    },

    // שאלה מספר 10 (רב שלבית)
    {
        topic: "solid_geometry_372",
        subTopic: "קובייה",
        question_text: "אלכסון הפאה של קובייה הוא \\( 10\\sqrt{2} \\) ס''מ.&rlm;<br>א. מצאו את אורך מקצוע הקובייה.&rlm;<br>ב. מצאו את נפח הקובייה.&rlm;",
        options: ["א. 10 | ב. 1000", "א. 10 | ב. 100", "א. 5 | ב. 125", "א. 20 | ב. 8000"],
        correctAnswer: 0,
        hint: "היחס בין אלכסון ריבוע לצלע שלו הוא שורש 2. חלקו את אורך האלכסון בשורש 2 כדי למצוא את המקצוע.",
        solution_steps: [
            { verbal_explanation: "שלב 1: כתיבת משוואת פיתגורס המקשרת את המקצוע לאלכסון הפאה שנתון.", math_expression: "a^{2} + a^{2} = (10\\sqrt{2})^{2}" },
            { verbal_explanation: "שלב 2: פישוט האגף הימני (העלאה בריבוע של עשר ושל שורש שתיים).", math_expression: "2a^{2} = 100 \\times 2 = 200" },
            { verbal_explanation: "שלב 3: חלוקה בשתיים לבידוד הריבוע.", math_expression: "a^{2} = 100" },
            { verbal_explanation: "שלב 4: הוצאת שורש למציאת אורך המקצוע הבודד (תשובה לא').", math_expression: "a = 10" },
            { verbal_explanation: "שלב 5: הצבה בנוסחת נפח הקובייה לחישוב סופי (תשובה לב').", math_expression: "V = 10^{3} = 1000" }
        ],
        final_answer: "א. 10 | ב. 1000"
    },

    // ==========================================
    // תת נושא 2: תיבה (10 שאלות)
    // ==========================================

    // שאלה מספר 11 (רב שלבית)
    {
        topic: "solid_geometry_372",
        subTopic: "תיבה",
        question_text: "בתיבה שרירותית, ממדי הבסיס המלבני הם 3 ס''מ ו-4 ס''מ. גובה התיבה הוא 12 ס''מ.&rlm;<br>א. חשבו את אורך אלכסון הבסיס.&rlm;<br>ב. חשבו את אורך האלכסון הראשי של התיבה.&rlm;\n<div dir='ltr' style='display:flex; justify-content:center; margin:20px 0;'><svg viewBox='0 0 250 150' style='max-width:250px; width:100%; border-radius:12px; background:#f8fafc; border:1px solid #e2e8f0;'><polygon points='50,120 150,120 180,90 80,90' fill='#10b981' opacity='0.2' stroke='#10b981' stroke-width='2'/><line x1='50' y1='120' x2='50' y2='40' stroke='#64748b' stroke-width='2'/><line x1='150' y1='120' x2='150' y2='40' stroke='#64748b' stroke-width='2'/><line x1='50' y1='120' x2='180' y2='90' stroke='#ef4444' stroke-dasharray='4,4' stroke-width='2'/><line x1='50' y1='40' x2='180' y2='90' stroke='#f59e0b' stroke-width='2'/><text x='95' y='135' font-size='12'>4</text><text x='170' y='115' font-size='12'>3</text><text x='30' y='85' font-size='12'>12</text></svg></div>",
        options: ["א. 5 | ב. 13", "א. 7 | ב. 14", "א. 5 | ב. 15", "א. 12 | ב. 13"],
        correctAnswer: 0,
        hint: "בסעיף א', עשו פיתגורס על צלעות הבסיס (3, 4). בסעיף ב', עשו פיתגורס נוסף במרחב בין אלכסון הבסיס שמצאתם לבין הגובה (12).",
        solution_steps: [
            { verbal_explanation: "שלב 1: שימוש במשפט פיתגורס על פאת הבסיס בלבד.", math_expression: "d_{1} = \\sqrt{3^{2} + 4^{2}}" },
            { verbal_explanation: "שלב 2: פתרון השורש למציאת אלכסון הבסיס המהווה שלשה פיתגורית (תשובה לא').", math_expression: "d_{1} = \\sqrt{9 + 16} = 5" },
            { verbal_explanation: "שלב 3: כתיבת משפט פיתגורס במרחב, הכולל את אלכסון הבסיס והגובה האנכי אליו.", math_expression: "d_{2} = \\sqrt{5^{2} + 12^{2}}" },
            { verbal_explanation: "שלב 4: ביצוע פעולות החזקה.", math_expression: "d_{2} = \\sqrt{25 + 144} = \\sqrt{169}" },
            { verbal_explanation: "שלב 5: חילוץ אורך האלכסון הראשי בתוך החלל (תשובה לב').", math_expression: "d_{2} = 13" }
        ],
        final_answer: "א. 5 | ב. 13"
    },

    // שאלה מספר 12 (רב שלבית)
    {
        topic: "solid_geometry_372",
        subTopic: "תיבה",
        question_text: "בתיבה, אורך בסיס אחד הוא 6, ורוחבו הוא 8. נפח התיבה הוא 480 סמ''ק.&rlm;<br>א. מצאו את גובה התיבה.&rlm;<br>ב. חשבו את שטח הפנים הכולל של התיבה.&rlm;",
        options: ["א. 10 | ב. 376", "א. 12 | ב. 400", "א. 10 | ב. 280", "א. 8 | ב. 320"],
        correctAnswer: 0,
        hint: "נפח שווה למכפלת שלושת הממדים. למציאת הגובה, חלקו את הנפח בשטח הבסיס. שטח פנים הוא סכום שטחי 6 המלבנים העוטפים את התיבה.",
        solution_steps: [
            { verbal_explanation: "שלב 1: חישוב שטח הבסיס המלבני התחתון.", math_expression: "S_{base} = 6 \\times 8 = 48" },
            { verbal_explanation: "שלב 2: בניית משוואת הנפח לחילוץ הגובה.", math_expression: "48 \\times h = 480" },
            { verbal_explanation: "שלב 3: חלוקת אגפים למציאת הגובה (תשובה לא').", math_expression: "h = 480 : 48 = 10" },
            { verbal_explanation: "שלב 4: הרכבת משוואת שטח הפנים הכולל (סכימת שלושת זוגות הפאות המנוגדות).", math_expression: "S = 2 \\times (6 \\times 8) + 2 \\times (6 \\times 10) + 2 \\times (8 \\times 10)" },
            { verbal_explanation: "שלב 5: ביצוע פעולות הכפל בסוגריים והכפלה בזוגות.", math_expression: "S = 2 \\times 48 + 2 \\times 60 + 2 \\times 80 = 96 + 120 + 160" },
            { verbal_explanation: "שלב 6: סכימה כוללת לשטח הפנים החיצוני (תשובה לב').", math_expression: "S = 376" }
        ],
        final_answer: "א. 10 | ב. 376"
    },

    // שאלה מספר 13
    {
        topic: "solid_geometry_372",
        subTopic: "תיבה",
        question_text: "בתיבה שבה הבסיס הוא מלבן במידות 5 על 12, גובה התיבה הוא 10. מהי הזווית שיוצר האלכסון הראשי של התיבה עם מישור הבסיס?&rlm;",
        options: ["37.56°", "52.44°", "45°", "30°"],
        correctAnswer: 0,
        hint: "תחילה, מצאו את אלכסון הבסיס. זהו הניצב הסמוך לזווית. הגובה הוא הניצב שמול הזווית. השתמשו בטנגנס.",
        solution_steps: [
            { verbal_explanation: "שלב 1: חישוב אלכסון הבסיס (הניצב האופקי במשולש המרחבי) על ידי פיתגורס.", math_expression: "d_{base} = \\sqrt{5^{2} + 12^{2}} = \\sqrt{25 + 144} = 13" },
            { verbal_explanation: "שלב 2: זיהוי הניצב האנכי (הגובה הנתון בשאלה).", math_expression: "h = 10" },
            { verbal_explanation: "שלב 3: כתיבת משוואת טריגונומטריה טנגנס המשלבת ניצב מול וניצב סמוך.", math_expression: "\\tan(\\alpha) = \\dfrac{10}{13}" },
            { verbal_explanation: "שלב 4: ביצוע החלוקה לשבר עשרוני.", math_expression: "\\tan(\\alpha) \\approx 0.769" },
            { verbal_explanation: "שלב 5: חילוץ הזווית באמצעות פונקציה הפוכה.", math_expression: "\\alpha = \\tan^{-1}(0.769) \\approx 37.56^{\\circ}" }
        ],
        final_answer: "37.56°"
    },

    // שאלה מספר 14 (רב שלבית)
    {
        topic: "solid_geometry_372",
        subTopic: "תיבה",
        question_text: "בתיבה שבסיסה ריבוע, נתון כי אורך צלע הבסיס הוא x. גובה התיבה הוא כפול מצלע הבסיס (2x). ידוע שנפח התיבה הוא 250 סמ''ק.&rlm;<br>א. מצאו את x (אורך צלע הבסיס).&rlm;<br>ב. מצאו את שטח המעטפת (ארבע הפאות הצדדיות) של התיבה.&rlm;",
        options: ["א. 5 | ב. 200", "א. 5 | ב. 250", "א. 10 | ב. 400", "א. 5 | ב. 100"],
        correctAnswer: 0,
        hint: "בנו משוואת נפח: x כפול x כפול 2x שווה 250. שטח המעטפת הוא סכום שטחי 4 המלבנים העומדים בצדדים.",
        solution_steps: [
            { verbal_explanation: "שלב 1: בניית משוואת הנפח באמצעות הכפלת שלושת הממדים.", math_expression: "x \\times x \\times 2x = 250" },
            { verbal_explanation: "שלב 2: כינוס איברים והעלאה לחזקה שלישית.", math_expression: "2x^{3} = 250" },
            { verbal_explanation: "שלב 3: חלוקה בשתיים לבידוד הנעלם.", math_expression: "x^{3} = 125" },
            { verbal_explanation: "שלב 4: הוצאת שורש שלישי למציאת המקצוע הבסיסי (תשובה לא').", math_expression: "x = 5" },
            { verbal_explanation: "שלב 5: חישוב הגובה על פי הנתון שהוא כפול מצלע הבסיס.", math_expression: "h = 2 \\times 5 = 10" },
            { verbal_explanation: "שלב 6: שטח המעטפת מורכב מארבע פאות צדדיות זהות (מלבנים של חמש על עשר). ביצוע החישוב (תשובה לב').", math_expression: "M = 4 \\times (5 \\times 10) = 4 \\times 50 = 200" }
        ],
        final_answer: "א. 5 | ב. 200"
    },

    // שאלה מספר 15
    {
        topic: "solid_geometry_372",
        subTopic: "תיבה",
        question_text: "עושים מסגרת מחוט ברזל בצורת תיבה. ממדי התיבה הם: אורך 10, רוחב 4, גובה 6. מהו האורך הכולל של חוט הברזל הדרוש?&rlm;",
        options: ["80", "120", "240", "100"],
        correctAnswer: 0,
        hint: "בתיבה יש 4 צלעות של אורך, 4 צלעות של רוחב, ו-4 צלעות של גובה. סכמו את כולן יחד.",
        solution_steps: [
            { verbal_explanation: "שלב 1: זיהוי עובדה גיאומטרית - לתיבה יש ארבעה עותקים מכל ממד.", math_expression: "n = 4" },
            { verbal_explanation: "שלב 2: כתיבת משוואה לסכום המקצועות האופקיים (אורכים).", math_expression: "L_{1} = 4 \\times 10 = 40" },
            { verbal_explanation: "שלב 3: כתיבת משוואה לסכום המקצועות הרוחביים.", math_expression: "L_{2} = 4 \\times 4 = 16" },
            { verbal_explanation: "שלב 4: כתיבת משוואה לסכום המקצועות האנכיים (גבהים).", math_expression: "L_{3} = 4 \\times 6 = 24" },
            { verbal_explanation: "שלב 5: סכימת שלושת הרכיבים למציאת סך אורך החוט.", math_expression: "P = 40 + 16 + 24 = 80" }
        ],
        final_answer: "80"
    },

    // שאלה מספר 16
    {
        topic: "solid_geometry_372",
        subTopic: "תיבה",
        question_text: "בתיבה, אורך הבסיס הוא 9 וגובה התיבה הוא 12. מהי הזווית בין אלכסון הפאה הצדדית (המלבן הנוצר מ-9 ו-12) לבין בסיס התיבה?&rlm;",
        options: ["53.13°", "36.87°", "45°", "60°"],
        correctAnswer: 0,
        hint: "המשולש מורכב מגובה התיבה, אורך הבסיס (ניצבים), ואלכסון הפאה (יתר). הזווית המבוקשת נמצאת מול הגובה.",
        solution_steps: [
            { verbal_explanation: "שלב 1: זיהוי הניצב שמול הזווית المבוקשת (הגובה).", math_expression: "h = 12" },
            { verbal_explanation: "שלב 2: זיהוי הניצב שלצד הזווית המונח על הבסיס.", math_expression: "b = 9" },
            { verbal_explanation: "שלב 3: כתיבת המשוואה הטריגונומטרית טנגנס.", math_expression: "\\tan(\\alpha) = \\dfrac{12}{9}" },
            { verbal_explanation: "שלב 4: צמצום השבר והמרה לערך עשרוני.", math_expression: "\\tan(\\alpha) = \\dfrac{4}{3} \\approx 1.333" },
            { verbal_explanation: "שלב 5: חילוץ הזווית במעלות.", math_expression: "\\alpha = \\tan^{-1}(1.333) \\approx 53.13^{\\circ}" }
        ],
        final_answer: "53.13°"
    },

    // שאלה מספר 17 (רב שלבית)
    {
        topic: "solid_geometry_372",
        subTopic: "תיבה",
        question_text: "חתך אלכסוני בתיבה הוא המלבן שנוצר ממעבר של מישור דרך שני מקצועות אנכיים נגדיים. ממדי בסיס התיבה הם 6 ו-8, וגובה התיבה הוא 5.&rlm;<br>א. מהם ממדי המלבן האלכסוני (רוחב וגובה)?&rlm;<br>ב. מהו שטח המלבן האלכסוני?&rlm;",
        options: ["א. 10 ו-5 | ב. 50", "א. 6 ו-5 | ב. 30", "א. 8 ו-5 | ב. 40", "א. 14 ו-5 | ב. 70"],
        correctAnswer: 0,
        hint: "רוחב המלבן האלכסוני הוא אלכסון בסיס התיבה (חשבו בעזרת פיתגורס). גובה המלבן הוא פשוט גובה התיבה.",
        solution_steps: [
            { verbal_explanation: "שלב 1: חישוב צלע הבסיס של המלבן האלכסוני (המהווה את אלכסון בסיס התיבה).", math_expression: "d_{base} = \\sqrt{6^{2} + 8^{2}}" },
            { verbal_explanation: "שלב 2: העלאה בריבוע וחיבור לקבלת שלשה פיתגורית ידועה.", math_expression: "d_{base} = \\sqrt{36 + 64} = 10" },
            { verbal_explanation: "שלב 3: הצלע השנייה של המלבן היא הגובה האנכי שנתון (תשובה לא').", math_expression: "h = 5" },
            { verbal_explanation: "שלב 4: כתיבת משוואת שטח למלבן האלכסוני.", math_expression: "S = 10 \\times 5" },
            { verbal_explanation: "שלב 5: חישוב סופי (תשובה לב').", math_expression: "S = 50" }
        ],
        final_answer: "א. 10 ו-5 | ב. 50"
    },

    // שאלה מספר 18
    {
        topic: "solid_geometry_372",
        subTopic: "תיבה",
        question_text: "בתיבה בעלת בסיס ריבועי, גובה התיבה קטן ב-2 מסנטימטרים מאורך צלע הבסיס. אורך צלע הבסיס הוא 6. מהו נפח התיבה?&rlm;",
        options: ["144", "216", "180", "120"],
        correctAnswer: 0,
        hint: "חשבו את הגובה קודם (6 פחות 2). בסיס ריבועי אומר שאורך ורוחב זהים. הנפח הוא אורך כפול רוחב כפול גובה.",
        solution_steps: [
            { verbal_explanation: "שלב 1: הגדרת מידות הבסיס הריבועי (אורך ורוחב זהים).", math_expression: "a = 6 \\quad , \\quad b = 6" },
            { verbal_explanation: "שלב 2: חישוב גובה התיבה בהתאם לאילוץ שבשאלה.", math_expression: "h = 6 - 2 = 4" },
            { verbal_explanation: "שלב 3: בניית המשוואה לחישוב הנפח.", math_expression: "V = 6 \\times 6 \\times 4" },
            { verbal_explanation: "שלב 4: ביצוע פעולת הכפל השלבה.", math_expression: "V = 36 \\times 4" },
            { verbal_explanation: "שלב 5: תוצאת הנפח הסופית.", math_expression: "V = 144" }
        ],
        final_answer: "144"
    },

    // שאלה מספר 19
    {
        topic: "solid_geometry_372",
        subTopic: "תיבה",
        question_text: "בריכת מים בצורת תיבה מכילה 120 מטרים מעוקבים של מים, והיא מלאה עד מחצית מגובהה בלבד. אורך הבסיס הוא 8 ורוחבו 5. מהו גובה התיבה השלמה?&rlm;",
        options: ["6", "3", "12", "10"],
        correctAnswer: 0,
        hint: "אם מחצית מהנפח היא 120, הנפח הכולל של התיבה המלאה הוא 240. חלקו את הנפח המלא בשטח הבסיס כדי למצוא את הגובה המלא.",
        solution_steps: [
            { verbal_explanation: "שלב 1: חישוב הנפח הכללי של הבריכה השלמה מתוך נתון המילוי החלקי.", math_expression: "V_{total} = 120 \\times 2 = 240" },
            { verbal_explanation: "שלב 2: חישוב שטח הפנים של בסיס התיבה (רצפת הבריכה).", math_expression: "S_{base} = 8 \\times 5 = 40" },
            { verbal_explanation: "שלב 3: כתיבת משוואת הנפח כאשר הגובה הוא הנעלם.", math_expression: "240 = 40 \\times h" },
            { verbal_explanation: "שלב 4: חלוקה בארבעים לבידוד הגובה.", math_expression: "h = 240 : 40" },
            { verbal_explanation: "שלב 5: סיום התרגיל וקבלת הגובה השלם.", math_expression: "h = 6" }
        ],
        final_answer: "6"
    },

    // שאלה מספר 20 (רב שלבית)
    {
        topic: "solid_geometry_372",
        subTopic: "תיבה",
        question_text: "קופסת אחסון פתוחה מלמעלה נבנית מלוח חומר. הבסיס הוא מלבן של 20 על 30 ס''מ. גובה הקופסה הוא 10 ס''מ.&rlm;<br>א. מהו נפח הקופסה?&rlm;<br>ב. מהו שטח החומר הנדרש לבניית הקופסה כולה (ללא מכסה)?&rlm;",
        options: ["א. 6000 | ב. 1600", "א. 6000 | ב. 2200", "א. 5000 | ב. 1600", "א. 6000 | ב. 1000"],
        correctAnswer: 0,
        hint: "שטח החומר הוא שטח פנים. זכרו לחשב רק בסיס תחתון אחד, ועוד ארבע פאות צדדיות עומדות (שתיים באורך ושתיים ברוחב).",
        solution_steps: [
            { verbal_explanation: "שלב 1: חישוב נפח הקופסה באמצעות הכפלת כל שלושת הממדים (תשובה לא').", math_expression: "V = 20 \\times 30 \\times 10 = 6000" },
            { verbal_explanation: "שלב 2: חישוב השטח של תחתית הקופסה בלבד (ללא מכסה עליון).", math_expression: "S_{bottom} = 20 \\times 30 = 600" },
            { verbal_explanation: "שלב 3: חישוב שטחי הפאות הצדדיות העומדות לאורך הצלע הארוכה (יש שתיים כאלו).", math_expression: "S_{long} = 2 \\times (30 \\times 10) = 600" },
            { verbal_explanation: "שלב 4: חישוב שטחי הפאות הצדדיות העומדות לאורך הצלע הקצרה (יש שתיים כאלו).", math_expression: "S_{short} = 2 \\times (20 \\times 10) = 400" },
            { verbal_explanation: "שלב 5: חיבור של כל המשטחים יחד לקבלת כמות החומר הנדרשת (תשובה לב').", math_expression: "S = 600 + 600 + 400 = 1600" }
        ],
        final_answer: "א. 6000 | ב. 1600"
    },

    // ==========================================
    // תת נושא 3: פירמידה (10 שאלות)
    // ==========================================

    // שאלה מספר 21 (רב שלבית)
    {
        topic: "solid_geometry_372",
        subTopic: "פירמידה",
        question_text: "נתונה פירמידה ישרה שבסיסה ריבוע. אורך צלע הבסיס הוא 10 ס''מ וגובה הפירמידה הוא 12 ס''מ.&rlm;<br>א. מהו נפח הפירמידה?&rlm;<br>ב. מצאו את אורך גובה הפאה הצדדית (המשולש השוקי שבצד).&rlm;\n<div dir='ltr' style='display:flex; justify-content:center; margin:20px 0;'><svg viewBox='0 0 250 200' style='max-width:250px; width:100%; border-radius:12px; background:#f8fafc; border:1px solid #e2e8f0;'><polygon points='125,20 40,160 210,160' fill='#f59e0b' opacity='0.2' stroke='#f59e0b' stroke-width='2'/><polygon points='125,20 40,160 125,120' fill='none' stroke='#f59e0b' stroke-width='1'/><line x1='125' y1='20' x2='125' y2='120' stroke='#64748b' stroke-dasharray='4,4' stroke-width='2'/><line x1='125' y1='120' x2='125' y2='160' stroke='#ef4444' stroke-dasharray='4,4' stroke-width='2'/><line x1='125' y1='20' x2='125' y2='160' stroke='#10b981' stroke-width='2'/><text x='130' y='80' font-size='12'>12</text><text x='110' y='175' font-size='12'>10</text></svg></div>",
        options: ["א. 400 | ב. 13", "א. 1200 | ב. 13", "א. 400 | ב. 15", "א. 1200 | ב. 15"],
        correctAnswer: 0,
        hint: "נפח פירמידה הוא שטח הבסיס כפול הגובה לחלק ל-3. גובה הפאה מחושב ממשפט פיתגורס במשולש שנוצר בין גובה הפירמידה למחצית צלע הבסיס.",
        solution_steps: [
            { verbal_explanation: "שלב 1: חישוב שטח הבסיס הריבועי.", math_expression: "S_{base} = 10^{2} = 100" },
            { verbal_explanation: "שלב 2: בניית נוסחת הנפח (שטח בסיס כפול גובה, חלקי שלוש).", math_expression: "V = \\dfrac{100 \\times 12}{3}" },
            { verbal_explanation: "שלב 3: תוצאת הנפח (תשובה לא').", math_expression: "V = 400" },
            { verbal_explanation: "שלב 4: מציאת הניצב האופקי ליצירת משולש פיתגורס פנימי (חצי מצלע הבסיס).", math_expression: "x = \\dfrac{10}{2} = 5" },
            { verbal_explanation: "שלב 5: יישום פיתגורס עם הגובה הראשי למציאת גובה הפאה המשופע (תשובה לב').", math_expression: "h_{face} = \\sqrt{12^{2} + 5^{2}} = \\sqrt{144 + 25} = \\sqrt{169} = 13" }
        ],
        final_answer: "א. 400 | ב. 13"
    },

    // שאלה מספר 22
    {
        topic: "solid_geometry_372",
        subTopic: "פירמידה",
        question_text: "בהמשך לשאלה הקודמת (בסיס ריבוע של 10 ס''מ, וגובה פאה צדדית שחישבתם שהוא 13 ס''מ). מהו שטח המעטפת הכולל של הפירמידה (שטח 4 הפאות הצדדיות)?&rlm;",
        options: ["260", "130", "520", "360"],
        correctAnswer: 0,
        hint: "לפירמידה יש 4 פאות צדדיות שהן משולשים שווי שוקיים חופפים. חשבו שטח של משולש אחד (בסיס כפול גובה הפאה חלקי 2) והכפילו ב-4.",
        solution_steps: [
            { verbal_explanation: "שלב 1: כתיבת משוואת השטח עבור פאה אחת בודדת (משולש).", math_expression: "S_{1} = \\dfrac{10 \\times 13}{2}" },
            { verbal_explanation: "שלב 2: חישוב השטח לפאה.", math_expression: "S_{1} = 65" },
            { verbal_explanation: "שלב 3: הכפלת השטח של פאה אחת בארבע, מכיוון שיש ארבע פאות במעטפת הפירמידה.", math_expression: "M = 4 \\times 65" },
            { verbal_explanation: "שלב 4: סכום השטחים הכללי של הפאות.", math_expression: "M = 260" },
            { verbal_explanation: "שלב 5: התשובה לרישום במערכת.", math_expression: "260" }
        ],
        final_answer: "260"
    },

    // שאלה מספר 23
    {
        topic: "solid_geometry_372",
        subTopic: "פירמידה",
        question_text: "בפירמידה ישרה מלבנית, בסיס הפירמידה הוא מלבן שממדיו 6 ו-8. גובה הפירמידה הוא 12. מהו אורך המקצוע הצדדי (הקו המחבר את קודקוד הפירמידה עם פינות הבסיס)?&rlm;",
        options: ["13", "12.5", "14", "15"],
        correctAnswer: 0,
        hint: "בפירמידה מלבנית, הגובה פוגע בדיוק באמצע אלכסון הבסיס. חשבו את אלכסון הבסיס, קחו את החצי שלו (זה יהיה ניצב אחד), הגובה הוא הניצב השני (12), והמקצוע הוא היתר.",
        solution_steps: [
            { verbal_explanation: "שלב 1: מציאת אלכסון הבסיס המלבני במלואו.", math_expression: "d_{base} = \\sqrt{6^{2} + 8^{2}} = \\sqrt{100} = 10" },
            { verbal_explanation: "שלב 2: הגובה פוגע בדיוק באמצע האלכסון, לכן ניקח את מחציתו כניצב במשולש המרחבי.", math_expression: "x = 10 : 2 = 5" },
            { verbal_explanation: "שלב 3: כתיבת משוואת פיתגורס בין חצי האלכסון, הגובה הישר, והמקצוע הצדדי.", math_expression: "d_{edge} = \\sqrt{5^{2} + 12^{2}}" },
            { verbal_explanation: "שלב 4: העלאה בריבוע של איברי השורש.", math_expression: "d_{edge} = \\sqrt{25 + 144} = \\sqrt{169}" },
            { verbal_explanation: "שלב 5: תוצאת המקצוע הצדדי החיצוני.", math_expression: "d_{edge} = 13" }
        ],
        final_answer: "13"
    },

    // שאלה מספר 24 (רב שלבית)
    {
        topic: "solid_geometry_372",
        subTopic: "פירמידה",
        question_text: "נתונה פירמידה ישרה שבסיסה ריבוע. אורך מקצוע הבסיס הוא 8 ס''מ. אורך המקצוע הצדדי הוא 9 ס''מ.&rlm;<br>א. חשבו את אורך אלכסון הבסיס.&rlm;<br>ב. חשבו את גובה הפירמידה.&rlm;",
        options: ["א. 11.31 | ב. 7.00", "א. 11.31 | ב. 8.00", "א. 8.00 | ב. 7.00", "א. 16.00 | ב. 9.00"],
        correctAnswer: 0,
        hint: "האלכסון הוא 8 כפול שורש 2. הגובה מחושב בפיתגורס כאשר היתר הוא 9 והניצב הוא חצי מהאלכסון שמצאתם.",
        solution_steps: [
            { verbal_explanation: "שלב 1: חישוב אלכסון הבסיס הריבועי (תשובה לא').", math_expression: "d_{base} = \\sqrt{8^{2} + 8^{2}} = \\sqrt{128} \\approx 11.313" },
            { verbal_explanation: "שלב 2: חלוקת האלכסון בשתיים כדי ליצור את משולש הגובה.", math_expression: "x = \\dfrac{11.313}{2} \\approx 5.656" },
            { verbal_explanation: "שלב 3: בניית פיתגורס להשגת הגובה כאשר היתר (מקצוע צדדי) נתון.", math_expression: "h^{2} + (5.656)^{2} = 9^{2}" },
            { verbal_explanation: "שלב 4: בידוד הגובה בריבוע.", math_expression: "h^{2} = 81 - 32 = 49" },
            { verbal_explanation: "שלב 5: מציאת הגובה הנקי (תשובה לב').", math_expression: "h = \\sqrt{49} = 7" }
        ],
        final_answer: "א. 11.31 | ב. 7.00"
    },

    // שאלה מספר 25
    {
        topic: "solid_geometry_372",
        subTopic: "פירמידה",
        question_text: "נפחה של פירמידה ישרה מרובעת הוא 150 סמ''ק. גובה הפירמידה הוא 18 ס''מ. הבסיס הוא מלבן שאורכו 5 ס''מ. מהו רוחב בסיס הפירמידה?&rlm;",
        options: ["5", "10", "15", "8"],
        correctAnswer: 0,
        hint: "הציבו בנוסחת הנפח: (5 כפול הרוחב) כפול 18 לחלק ל-3 שווה 150. פתרו את המשוואה ומיצאו את הרוחב.",
        solution_steps: [
            { verbal_explanation: "שלב 1: בניית נוסחת הנפח עם הנעלם במקום המיועד לרוחב הבסיס.", math_expression: "150 = \\dfrac{(5 \\times b) \\times 18}{3}" },
            { verbal_explanation: "שלב 2: חלוקת הגובה במכנה כדי לפשט את המשוואה.", math_expression: "150 = (5 \\times b) \\times 6" },
            { verbal_explanation: "שלב 3: כפל המקדמים שבאגף הימני.", math_expression: "150 = 30 \\times b" },
            { verbal_explanation: "שלב 4: חלוקה בשלושים לבידוד המשתנה.", math_expression: "b = 150 : 30" },
            { verbal_explanation: "שלב 5: התוצאה לממד הרוחב החסר.", math_expression: "b = 5" }
        ],
        final_answer: "5"
    },

    // שאלה מספר 26
    {
        topic: "solid_geometry_372",
        subTopic: "פירמידה",
        question_text: "בפירמידה ישרה בעלת בסיס ריבועי, זווית הנטייה של פאה צדדית (זווית בין גובה הפאה למישור הבסיס) היא 60 מעלות. אורך צלע הבסיס הוא 4. מהו גובה הפירמידה?&rlm;",
        options: ["3.46", "6.92", "2", "4"],
        correctAnswer: 0,
        hint: "הניצב הסמוך לזווית הוא בדיוק מחצית מצלע הבסיס (2 ס''מ). השתמשו בטנגנס 60 מעלות כפול 2 כדי למצוא את הניצב ממול (הגובה).",
        solution_steps: [
            { verbal_explanation: "שלב 1: איתור הניצב האופקי של המשולש היוצר את זווית הפאה (מחצית מצלע הבסיס).", math_expression: "x = 4 : 2 = 2" },
            { verbal_explanation: "שלב 2: כתיבת משוואת טנגנס המקשרת את הגובה לניצב זה.", math_expression: "\\tan(60^{\\circ}) = \\dfrac{h}{2}" },
            { verbal_explanation: "שלב 3: בידוד הגובה במשוואה על ידי כפל.", math_expression: "h = 2 \\times \\tan(60^{\\circ})" },
            { verbal_explanation: "שלב 4: הצבת ערך הטנגנס המוכר (שורש שלוש).", math_expression: "h = 2 \\times 1.732" },
            { verbal_explanation: "שלב 5: תוצאה סופית לגובה.", math_expression: "h \\approx 3.464" }
        ],
        final_answer: "3.46"
    },

    // שאלה מספר 27 (רב שלבית)
    {
        topic: "solid_geometry_372",
        subTopic: "פירמידה",
        question_text: "בפירמידה מרובעת ישרה, גובה הפירמידה הוא 8 ואורך חצי מאלכסון הבסיס הוא 6.&rlm;<br>א. חשבו את אורך המקצוע הצדדי.&rlm;<br>ב. חשבו את הזווית בין המקצוע הצדדי לבסיס הפירמידה.&rlm;",
        options: ["א. 10 | ב. 53.13°", "א. 10 | ב. 36.87°", "א. 14 | ב. 53.13°", "א. 14 | ב. 45°"],
        correctAnswer: 0,
        hint: "המשולש מורכב מהגובה (8), חצי אלכסון (6), והמקצוע. בסעיף א' השתמשו בפיתגורס. בסעיף ב', השתמשו בטנגנס או סינוס למציאת הזווית שמול הגובה.",
        solution_steps: [
            { verbal_explanation: "שלב 1: מציאת יתר המשולש (מקצוע צדדי) בעזרת משפט פיתגורס על הנתונים (תשובה לא').", math_expression: "d = \\sqrt{8^{2} + 6^{2}} = \\sqrt{64 + 36} = \\sqrt{100} = 10" },
            { verbal_explanation: "שלב 2: הגדרת הפונקציה למציאת הזווית הכלואה עם המישור (מול חלקי סמוך).", math_expression: "\\tan(\\alpha) = \\dfrac{8}{6}" },
            { verbal_explanation: "שלב 3: ביצוע החלוקה לשבר עשרוני.", math_expression: "\\tan(\\alpha) \\approx 1.333" },
            { verbal_explanation: "שלב 4: חילוץ הזווית (תשובה לב').", math_expression: "\\alpha = \\tan^{-1}(1.333) \\approx 53.13^{\\circ}" }
        ],
        final_answer: "א. 10 | ב. 53.13°"
    },

    // שאלה מספר 28
    {
        topic: "solid_geometry_372",
        subTopic: "פירמידה",
        question_text: "שתי פירמידות שונות ניצבות על בסיסים זהים בשטחם. גובה פירמידה א' הוא 10. גובה פירמידה ב' הוא 5. מהו היחס בין נפח פירמידה א' לנפח פירמידה ב'?&rlm;",
        options: ["2", "4", "0.5", "1"],
        correctAnswer: 0,
        hint: "מאחר ושטח הבסיס זהה בשתיהן והנוסחה מחלקת ב-3 בשתיהן, היחס בין הנפחים שווה בדיוק ליחס שבין הגבהים שלהן.",
        solution_steps: [
            { verbal_explanation: "שלב 1: ניסוח משוואת היחס בין הנפחים תוך הצגת חלקי הנוסחה הזהים.", math_expression: "Ratio = \\dfrac{\\dfrac{S \\times 10}{3}}{\\dfrac{S \\times 5}{3}}" },
            { verbal_explanation: "שלב 2: צמצום הגורמים המשותפים במונה ובמכנה של השבר המורכב.", math_expression: "Ratio = \\dfrac{10}{5}" },
            { verbal_explanation: "שלב 3: פתרון.", math_expression: "Ratio = 2" },
            { verbal_explanation: "שלב 4: בחירת החלופה התואמת.", math_expression: "2" }
        ],
        final_answer: "2"
    },

    // שאלה מספר 29 (רב שלבית)
    {
        topic: "solid_geometry_372",
        subTopic: "פירמידה",
        question_text: "קובייה שצלעה a ופירמידה בעלת בסיס ריבועי של a על a בנויות כך שיש להן אותו הנפח בדיוק.&rlm;<br>א. כמה פעמים גדול גובה הפירמידה מגובה הקובייה?&rlm;<br>ב. אם אורך המקצוע a הוא 2 ס''מ, מהו גובה הפירמידה?&rlm;",
        options: ["א. 3 | ב. 6", "א. 1 | ב. 2", "א. 3 | ב. 8", "א. 2 | ב. 4"],
        correctAnswer: 0,
        hint: "בנוסחת הפירמידה מחלקים ב-3. לכן, כדי שהנפחים יהיו שווים כאשר הבסיסים זהים, גובה הפירמידה חייב להיות פי 3.",
        solution_steps: [
            { verbal_explanation: "שלב 1: השוואת נוסחת הנפח של קובייה מול פירמידה בעלת בסיס זהה.", math_expression: "a^{3} = \\dfrac{a^{2} \\times h}{3}" },
            { verbal_explanation: "שלב 2: הכפלת המשוואה בשלוש ובידוד הגובה.", math_expression: "3 \\times a^{3} = a^{2} \\times h" },
            { verbal_explanation: "שלב 3: צמצום אגפים חושף שגובה הפירמידה חייב להיות פי שלוש מהמקצוע (תשובה לא').", math_expression: "h = 3 \\times a" },
            { verbal_explanation: "שלב 4: יישום המסקנה על הנתון המספרי שסופק בסעיף השני (תשובה לב').", math_expression: "h = 3 \\times 2 = 6" },
            { verbal_explanation: "שלב 5: התשובה במערכת.", math_expression: "3 \\quad , \\quad 6" }
        ],
        final_answer: "א. 3 | ב. 6"
    },

    // שאלה מספר 30
    {
        topic: "solid_geometry_372",
        subTopic: "פירמידה",
        question_text: "מעבירים חתך אנכי בתוך פירמידה מרובעת, שעובר דרך קודקוד הפירמידה ודרך אלכסון הבסיס הריבועי שלה. איזו צורה גיאומטרית יתאר החתך הזה?&rlm;",
        options: ["משולש שווה שוקיים", "משולש ישר זווית", "מלבן", "ריבוע"],
        correctAnswer: 0,
        hint: "החתך עובר מקודקוד עליון ושני קודקודים נגדיים בבסיס. שתי הצלעות שעולות למעלה הן המקצועות הצדדיים, והם שווים זה לזה בפירמידה ישרה.",
        solution_steps: [
            { verbal_explanation: "שלב 1: הגדרת הצלע התחתונה של החתך, שהיא אלכסון הבסיס.", math_expression: "Base = d_{diagonal}" },
            { verbal_explanation: "שלב 2: הגדרת שתי הצלעות המשופעות של החתך, שהן בעצם המקצועות הצדדיים של הפירמידה הישרה.", math_expression: "Side_{1} = Edge \\quad , \\quad Side_{2} = Edge" },
            { verbal_explanation: "שלב 3: מכיוון ששני המקצועות שווים זה לזה באורכם, מתקבל משולש ששתיים מצלעותיו שוות.", math_expression: "Side_{1} = Side_{2}" },
            { verbal_explanation: "שלב 4: הגדרה זו מתאימה בגיאומטריה למשולש שווה שוקיים.", math_expression: "Isosceles" },
            { verbal_explanation: "שלב 5: בחירת התשובה התיאורטית המתאימה.", math_expression: "1" }
        ],
        final_answer: "משולש שווה שוקיים"
    },
    // ==========================================
    // תת נושא 4: גליל (10 שאלות)
    // ==========================================

    // שאלה מספר 1 (רב שלבית)
    {
        topic: "solid_geometry_372",
        subTopic: "גליל",
        question_text: "נתון גליל ישר שבו רדיוס הבסיס הוא 4 ס''מ, וגובה הגליל הוא 10 ס''מ.&rlm;<br>א. חשבו את נפח הגליל (השאירו את פאי בתשובה).&rlm;<br>ב. חשבו את שטח המעטפת של הגליל.&rlm;\n<div dir='ltr' style='display:flex; justify-content:center; margin:20px 0;'><svg viewBox='0 0 200 200' style='max-width:200px; width:100%; border-radius:12px; background:#f8fafc; border:1px solid #e2e8f0;'><ellipse cx='100' cy='40' rx='50' ry='15' fill='#3b82f6' opacity='0.3' stroke='#3b82f6' stroke-width='2'/><ellipse cx='100' cy='160' rx='50' ry='15' fill='#3b82f6' opacity='0.3' stroke='#3b82f6' stroke-width='2'/><line x1='50' y1='40' x2='50' y2='160' stroke='#3b82f6' stroke-width='2'/><line x1='150' y1='40' x2='150' y2='160' stroke='#3b82f6' stroke-width='2'/><line x1='100' y1='160' x2='150' y2='160' stroke='#ef4444' stroke-width='2'/><text x='120' y='155' font-size='12'>4</text><text x='35' y='105' font-size='12'>10</text></svg></div>",
        options: ["א. 160\\pi | ב. 80\\pi", "א. 80\\pi | ב. 160\\pi", "א. 40\\pi | ב. 80\\pi", "א. 160\\pi | ב. 112\\pi"],
        correctAnswer: 0,
        hint: "נפח גליל הוא שטח הבסיס כפול הגובה. שטח המעטפת הוא היקף הבסיס כפול הגובה.",
        solution_steps: [
            { verbal_explanation: "שלב 1: חישוב שטח בסיס הגליל (מעגל).", math_expression: "S = \\pi \\times 4^{2} = 16\\pi" },
            { verbal_explanation: "שלב 2: הכפלת שטח הבסיס בגובה למציאת הנפח הכולל (תשובה לא').", math_expression: "V = 16\\pi \\times 10 = 160\\pi" },
            { verbal_explanation: "שלב 3: חישוב היקף הבסיס המעגלי.", math_expression: "P = 2 \\times \\pi \\times 4 = 8\\pi" },
            { verbal_explanation: "שלב 4: הכפלת היקף הבסיס בגובה למציאת שטח המעטפת העוטפת (תשובה לב').", math_expression: "M = 8\\pi \\times 10 = 80\\pi" }
        ],
        final_answer: "א. 160\\pi | ב. 80\\pi"
    },

    // שאלה מספר 2
    {
        topic: "solid_geometry_372",
        subTopic: "גליל",
        question_text: "נפחו של גליל הוא \\( 250\\pi \\) סמ''ק. רדיוס בסיס הגליל הוא 5 ס''מ. מהו גובהו של הגליל?&rlm;",
        options: ["10", "25", "5", "50"],
        correctAnswer: 0,
        hint: "הציבו את הנתונים בנוסחת נפח הגליל, חלקו ב-פאי משני הצדדים, ובודדו את הגובה.",
        solution_steps: [
            { verbal_explanation: "שלב 1: בניית משוואת הנפח הכוללת את כל הפרמטרים הידועים.", math_expression: "250\\pi = \\pi \\times 5^{2} \\times h" },
            { verbal_explanation: "שלב 2: העלאה בריבוע של הרדיוס.", math_expression: "250\\pi = 25\\pi \\times h" },
            { verbal_explanation: "שלב 3: צמצום הפאי משני האגפים.", math_expression: "250 = 25 \\times h" },
            { verbal_explanation: "שלב 4: חלוקה בעשרים וחמש לבידוד הגובה.", math_expression: "h = 250 : 25" },
            { verbal_explanation: "שלב 5: התוצאה לאורך הגובה.", math_expression: "h = 10" }
        ],
        final_answer: "10"
    },

    // שאלה מספר 3 (רב שלבית)
    {
        topic: "solid_geometry_372",
        subTopic: "גליל",
        question_text: "בגליל ישר, שטח הפנים הכולל (מעטפת + שני בסיסים) הוא \\( 132\\pi \\) סמ''ר. גובה הגליל הוא 5 ס''מ.&rlm;<br>א. מצאו את רדיוס בסיס הגליל.&rlm;<br>ב. מצאו את שטח המעטפת בלבד.&rlm;",
        options: ["א. 6 | ב. 60\\pi", "א. 6 | ב. 72\\pi", "א. 5 | ב. 50\\pi", "א. 4 | ב. 40\\pi"],
        correctAnswer: 0,
        hint: "בנו משוואה: 2 פאי R בריבוע (שני בסיסים) פלוס 2 פאי R כפול 5 (מעטפת) שווה ל-132 פאי. חלקו ב-2 פאי, ופתרו משוואה ריבועית למציאת R.",
        solution_steps: [
            { verbal_explanation: "שלב 1: כתיבת משוואת שטח הפנים הכללי.", math_expression: "2\\pi \\times R^{2} + 2\\pi \\times R \\times 5 = 132\\pi" },
            { verbal_explanation: "שלב 2: חלוקת כל המשוואה בשני פאי כדי לפשט אותה.", math_expression: "R^{2} + 5R = 66" },
            { verbal_explanation: "שלב 3: העברת מספרים לאגף אחד ליצירת משוואה ריבועית.", math_expression: "R^{2} + 5R - 66 = 0" },
            { verbal_explanation: "שלב 4: פירוק לטרינום או שימוש בנוסחת שורשים למציאת הרדיוס החיובי (תשובה לא').", math_expression: "(R + 11)(R - 6) = 0 \\Rightarrow R = 6" },
            { verbal_explanation: "שלב 5: הצבת הרדיוס והגובה בנוסחת שטח המעטפת (תשובה לב').", math_expression: "M = 2\\pi \\times 6 \\times 5 = 60\\pi" }
        ],
        final_answer: "א. 6 | ב. 60\\pi"
    },

    // שאלה מספר 4
    {
        topic: "solid_geometry_372",
        subTopic: "גליל",
        question_text: "חותכים גליל ישר לשניים לאורך ציר הסימטריה שלו. חתך הציר שנוצר הוא ריבוע ששטחו 36 סמ''ר. מהו נפח הגליל?&rlm;",
        options: ["54\\pi", "36\\pi", "108\\pi", "72\\pi"],
        correctAnswer: 0,
        hint: "בחתך ציר ריבועי, גובה הגליל שווה לקוטר הבסיס. שטח הריבוע נותן את אורך הצלע, שממנה אפשר לחלץ את הגובה ואת הקוטר (וממנו את הרדיוס).",
        solution_steps: [
            { verbal_explanation: "שלב 1: מציאת צלע הריבוע מתוך נתון השטח.", math_expression: "h = \\sqrt{36} = 6" },
            { verbal_explanation: "שלב 2: הבנה שרוחב החתך שווה לקוטר הבסיס.", math_expression: "D = 6" },
            { verbal_explanation: "שלב 3: חלוקת הקוטר בשתיים למציאת הרדיוס.", math_expression: "R = 6 : 2 = 3" },
            { verbal_explanation: "שלב 4: כתיבת משוואת הנפח עם הרדיוס והגובה.", math_expression: "V = \\pi \\times 3^{2} \\times 6" },
            { verbal_explanation: "שלב 5: ביצוע פעולות חזקה וכפל להשלמת התרגיל.", math_expression: "V = 9\\pi \\times 6 = 54\\pi" }
        ],
        final_answer: "54\\pi"
    },

    // שאלה מספר 5 (רב שלבית)
    {
        topic: "solid_geometry_372",
        subTopic: "גליל",
        question_text: "נתונים שני גלילים. גליל א' בעל רדיוס R וגובה h. גליל ב' בעל רדיוס 2R וגובה h.&rlm;<br>א. פי כמה גדול שטח הבסיס של גליל ב' משטח הבסיס של גליל א'?&rlm;<br>ב. פי כמה גדול נפח גליל ב' מנפח גליל א'?&rlm;",
        options: ["א. 4 | ב. 4", "א. 2 | ב. 2", "א. 2 | ב. 4", "א. 4 | ב. 8"],
        correctAnswer: 0,
        hint: "הכפלת הרדיוס פי 2 משפיעה על השטח ועל הנפח בריבוע (כלומר פי 4).",
        solution_steps: [
            { verbal_explanation: "שלב 1: הצבת הרדיוס הכפול בנוסחת שטח בסיס מול שטח בסיס רגיל.", math_expression: "k_{1} = \\dfrac{\\pi \\times (2R)^{2}}{\\pi \\times R^{2}}" },
            { verbal_explanation: "שלב 2: פתיחת סוגריים וצמצום איברים זהים (תשובה לא').", math_expression: "k_{1} = \\dfrac{4\\pi \\times R^{2}}{\\pi \\times R^{2}} = 4" },
            { verbal_explanation: "שלב 3: הצבת הנתונים בנוסחת יחס נפחים כשהגובה זהה.", math_expression: "k_{2} = \\dfrac{\\pi \\times (2R)^{2} \\times h}{\\pi \\times R^{2} \\times h}" },
            { verbal_explanation: "שלב 4: צמצום הגובה ופאי חושף שיחס הנפחים זהה ליחס השטחים במקרה זה (תשובה לב').", math_expression: "k_{2} = 4" }
        ],
        final_answer: "א. 4 | ב. 4"
    },

    // שאלה מספר 6
    {
        topic: "solid_geometry_372",
        subTopic: "גליל",
        question_text: "מיכל גלילי מלא במים. רדיוס המיכל הוא 5 ס''מ וגובהו 8 ס''מ. מכניסים למיכל אבן ששוקעת לחלוטין, וגובה פני המים עולה ל-10 ס''מ. מהו נפח האבן?&rlm;",
        options: ["50\\pi", "100\\pi", "25\\pi", "250\\pi"],
        correctAnswer: 0,
        hint: "נפח האבן שווה לנפח תוספת המים. תוספת הגובה היא 2 ס''מ (מ-8 ל-10). חוק ארכימדס קובע שנפח החפץ השוקע שווה לנפח המים שנדחקו.",
        solution_steps: [
            { verbal_explanation: "שלב 1: חישוב הפרש הגבהים של פני המים המייצג את נפח העצם.", math_expression: "h = 10 - 8 = 2" },
            { verbal_explanation: "שלב 2: הצבת הגובה החדש בנוסחת הנפח הגלילי לחישוב התוספת בלבד.", math_expression: "V = \\pi \\times 5^{2} \\times 2" },
            { verbal_explanation: "שלב 3: חזקה.", math_expression: "V = 25\\pi \\times 2" },
            { verbal_explanation: "שלב 4: כפל.", math_expression: "V = 50\\pi" },
            { verbal_explanation: "שלב 5: בחירת התשובה המתאימה לנפח האבן.", math_expression: "50\\pi" }
        ],
        final_answer: "50\\pi"
    },

    // שאלה מספר 7
    {
        topic: "solid_geometry_372",
        subTopic: "גליל",
        question_text: "קשתות מלבניות נגזרות מתוך דף נייר. למלבן יש אורך של \\( 10\\pi \\) ורוחב של 10. מקפלים את הדף לצורת מעטפת של גליל כך שהרוחב מהווה את גובה הגליל. מהו רדיוס בסיס הגליל שנוצר?&rlm;",
        options: ["5", "10", "10\\pi", "2.5"],
        correctAnswer: 0,
        hint: "אורך המלבן הופך להיות היקף הבסיס של הגליל. השוו את הנוסחה של היקף מעגל לאורך המלבן וחלצו את הרדיוס.",
        solution_steps: [
            { verbal_explanation: "שלב 1: הבנה גיאומטרית שאורך הפריסה הופך להיקף הבסיס. השוואה לנוסחת ההיקף.", math_expression: "2\\pi \\times R = 10\\pi" },
            { verbal_explanation: "שלב 2: צמצום שני האגפים בערך פאי.", math_expression: "2 \\times R = 10" },
            { verbal_explanation: "שלב 3: חלוקה בשתיים לבידוד הרדיוס.", math_expression: "R = 10 : 2" },
            { verbal_explanation: "שלב 4: קבלת התשובה הנקייה.", math_expression: "R = 5" }
        ],
        final_answer: "5"
    },

    // שאלה מספר 8 (רב שלבית)
    {
        topic: "solid_geometry_372",
        subTopic: "גליל",
        question_text: "צינור גלילי פתוח משני צדדיו (ללא בסיסים) נצבע מבחוץ. רדיוס הצינור הוא 3 ס''מ וגובהו 20 ס''מ. עלות הצבע היא 2 שקלים לכל סמ''ר.&rlm;<br>א. מהו שטח המשטח שנצבע?&rlm;<br>ב. מהי העלות הכוללת של הצביעה?&rlm;",
        options: ["א. 120\\pi | ב. 240\\pi", "א. 60\\pi | ב. 120\\pi", "א. 120\\pi | ב. 120\\pi", "א. 180\\pi | ב. 360\\pi"],
        correctAnswer: 0,
        hint: "מכיוון שהצינור פתוח משני צדדיו, המשטח הנצבע הוא רק מעטפת הגליל. העלות היא השטח כפול התעריף.",
        solution_steps: [
            { verbal_explanation: "שלב 1: חישוב שטח מעטפת בלבד (ללא בסיסים).", math_expression: "M = 2\\pi \\times 3 \\times 20" },
            { verbal_explanation: "שלב 2: ביצוע הכפלות (תשובה לא').", math_expression: "M = 120\\pi" },
            { verbal_explanation: "שלב 3: בניית פונקציית עלות המכפילה שטח במחיר ליחידה.", math_expression: "C = 120\\pi \\times 2" },
            { verbal_explanation: "שלב 4: התוצאה לעלות הכוללת (תשובה לב').", math_expression: "C = 240\\pi" }
        ],
        final_answer: "א. 120\\pi | ב. 240\\pi"
    },

    // שאלה מספר 9
    {
        topic: "solid_geometry_372",
        subTopic: "גליל",
        question_text: "בגליל ישר, אורך אלכסון החתך הצירי הוא 13. קוטר בסיס הגליל הוא 5. מהו נפח הגליל?&rlm;",
        options: ["75\\pi", "300\\pi", "37.5\\pi", "150\\pi"],
        correctAnswer: 0,
        hint: "בחתך הצירי נוצר משולש ישר זווית שהניצבים שלו הם קוטר הבסיס וגובה הגליל, והיתר הוא אלכסון החתך. השתמשו בפיתגורס למציאת הגובה. הרדיוס הוא חצי מהקוטר.",
        solution_steps: [
            { verbal_explanation: "שלב 1: שימוש בפיתגורס במלבן החתך כדי לחלץ את גובה הגליל.", math_expression: "h^{2} + 5^{2} = 13^{2}" },
            { verbal_explanation: "שלב 2: העברת אגף וחיסור לבידוד הגובה.", math_expression: "h^{2} = 169 - 25 = 144 \\Rightarrow h = 12" },
            { verbal_explanation: "שלב 3: מציאת הרדיוס ממדד הקוטר.", math_expression: "R = 5 : 2 = 2.5" },
            { verbal_explanation: "שלב 4: הצבה בנוסחת נפח הגליל.", math_expression: "V = \\pi \\times (2.5)^{2} \\times 12" },
            { verbal_explanation: "שלב 5: חישוב חזקה וכפל סופי.", math_expression: "V = \\pi \\times 6.25 \\times 12 = 75\\pi" }
        ],
        final_answer: "75\\pi"
    },

    // שאלה מספר 10 (רב שלבית)
    {
        topic: "solid_geometry_372",
        subTopic: "גליל",
        question_text: "גליל ישר שגובהו 10 ס''מ חסום במנסרה ריבועית (תיבה בעלת בסיס ריבוע), כך שמעגלי הבסיס של הגליל חסומים בריבועי הבסיס של המנסרה. רדיוס הגליל הוא 3 ס''מ.&rlm;<br>א. מהי אורך צלע הבסיס הריבועי של המנסרה?&rlm;<br>ב. מהו נפח המנסרה כולה?&rlm;",
        options: ["א. 6 | ב. 360", "א. 3 | ב. 90", "א. 6 | ב. 180", "א. 12 | ב. 1440"],
        correctAnswer: 0,
        hint: "כאשר מעגל חסום בריבוע, קוטר המעגל שווה בדיוק לאורך צלע הריבוע. נפח המנסרה שווה לשטח הריבוע כפול הגובה.",
        solution_steps: [
            { verbal_explanation: "שלב 1: הבנה גיאומטרית שצלע הריבוע החוסם שווה לקוטר המעגל החסום (תשובה לא').", math_expression: "a = 2 \\times 3 = 6" },
            { verbal_explanation: "שלב 2: חישוב שטח הבסיס הריבועי.", math_expression: "S_{base} = 6^{2} = 36" },
            { verbal_explanation: "שלב 3: הצבה בנוסחת נפח המנסרה (שטח בסיס כפול גובה).", math_expression: "V = 36 \\times 10" },
            { verbal_explanation: "שלב 4: ביצוע הכפלה בעשר (תשובה לב').", math_expression: "V = 360" }
        ],
        final_answer: "א. 6 | ב. 360"
    },

    // ==========================================
    // תת נושא 5: חרוט (10 שאלות)
    // ==========================================

    // שאלה מספר 11 (רב שלבית)
    {
        topic: "solid_geometry_372",
        subTopic: "חרוט",
        question_text: "נתון חרוט ישר שבו רדיוס הבסיס הוא 3 ס''מ, וגובה החרוט הוא 4 ס''מ.&rlm;<br>א. חשבו את אורך הקו היוצר (המקצוע הצדדי) של החרוט.&rlm;<br>ב. חשבו את נפח החרוט (עם פאי).&rlm;\n<div dir='ltr' style='display:flex; justify-content:center; margin:20px 0;'><svg viewBox='0 0 200 200' style='max-width:200px; width:100%; border-radius:12px; background:#f8fafc; border:1px solid #e2e8f0;'><ellipse cx='100' cy='150' rx='60' ry='15' fill='#f59e0b' opacity='0.3' stroke='#f59e0b' stroke-width='2'/><path d='M 40 150 L 100 20 L 160 150' fill='none' stroke='#f59e0b' stroke-width='2'/><line x1='100' y1='20' x2='100' y2='150' stroke='#64748b' stroke-dasharray='4,4' stroke-width='2'/><line x1='100' y1='150' x2='160' y2='150' stroke='#ef4444' stroke-width='2'/><text x='125' y='145' font-size='12'>3</text><text x='85' y='95' font-size='12'>4</text></svg></div>",
        options: ["א. 5 | ב. 12\\pi", "א. 5 | ב. 36\\pi", "א. 7 | ב. 12\\pi", "א. 25 | ב. 36\\pi"],
        correctAnswer: 0,
        hint: "הקו היוצר, הגובה והרדיוס יוצרים משולש ישר זווית. השתמשו בפיתגורס למציאת הקו היוצר. נפח החרוט הוא שליש מנפח גליל בעל אותם ממדים.",
        solution_steps: [
            { verbal_explanation: "שלב 1: הפעלת משפט פיתגורס למציאת הקו היוצר המהווה יתר (תשובה לא').", math_expression: "l = \\sqrt{3^{2} + 4^{2}} = \\sqrt{9 + 16} = \\sqrt{25} = 5" },
            { verbal_explanation: "שלב 2: כתיבת נוסחת נפח החרוט.", math_expression: "V = \\dfrac{\\pi \\times 3^{2} \\times 4}{3}" },
            { verbal_explanation: "שלב 3: צמצום שלוש מהמונה והמכנה.", math_expression: "V = \\pi \\times 3 \\times 4" },
            { verbal_explanation: "שלב 4: תוצאת המכפלה הסופית לנפח (תשובה לב').", math_expression: "V = 12\\pi" }
        ],
        final_answer: "א. 5 | ב. 12\\pi"
    },

    // שאלה מספר 12
    {
        topic: "solid_geometry_372",
        subTopic: "חרוט",
        question_text: "נפחו של חרוט ישר הוא \\( 100\\pi \\) סמ''ק. גובהו של החרוט הוא 12 ס''מ. מהו רדיוס הבסיס של החרוט?&rlm;",
        options: ["5", "10", "25", "6"],
        correctAnswer: 0,
        hint: "הציבו את הנתונים בנוסחת הנפח, הכפילו ב-3 (כדי להיפטר מהמכנה), צמצמו את פאי, ובודדו את הרדיוס.",
        solution_steps: [
            { verbal_explanation: "שלב 1: הצבת הנתונים בנוסחת הנפח של חרוט.", math_expression: "100\\pi = \\dfrac{\\pi \\times R^{2} \\times 12}{3}" },
            { verbal_explanation: "שלב 2: ביצוע החלוקה בשלוש באגף ימין.", math_expression: "100\\pi = \\pi \\times R^{2} \\times 4" },
            { verbal_explanation: "שלב 3: צמצום הפאי משני צידי המשוואה.", math_expression: "100 = 4 \\times R^{2}" },
            { verbal_explanation: "שלב 4: חלוקת המשוואה בארבע.", math_expression: "R^{2} = 25" },
            { verbal_explanation: "שלב 5: הוצאת שורש למציאת אורך הרדיוס החיובי.", math_expression: "R = 5" }
        ],
        final_answer: "5"
    },

    // שאלה מספר 13
    {
        topic: "solid_geometry_372",
        subTopic: "חרוט",
        question_text: "בחרוט ישר, אורך הקו היוצר הוא 13 ס''מ ורדיוס הבסיס הוא 5 ס''מ. מהו גובה החרוט?&rlm;",
        options: ["12", "18", "8", "144"],
        correctAnswer: 0,
        hint: "השתמשו במשפט פיתגורס, כאשר הקו היוצר הוא היתר והרדיוס הוא אחד הניצבים.",
        solution_steps: [
            { verbal_explanation: "שלב 1: הצבת המשתנים במשוואת פיתגורס הפנימית של החרוט.", math_expression: "h^{2} + 5^{2} = 13^{2}" },
            { verbal_explanation: "שלב 2: פיתוח החזקות.", math_expression: "h^{2} + 25 = 169" },
            { verbal_explanation: "שלב 3: בידוד הגובה בריבוע על ידי העברת אגף בחיסור.", math_expression: "h^{2} = 169 - 25 = 144" },
            { verbal_explanation: "שלב 4: הוצאת שורש לקבלת ערך הגובה.", math_expression: "h = \\sqrt{144} = 12" },
            { verbal_explanation: "שלב 5: הרישום של הפתרון.", math_expression: "12" }
        ],
        final_answer: "12"
    },

    // שאלה מספר 14 (רב שלבית)
    {
        topic: "solid_geometry_372",
        subTopic: "חרוט",
        question_text: "שטח הבסיס של חרוט הוא \\( 64\\pi \\). גובה החרוט הוא 6.&rlm;<br>א. מהו רדיוס הבסיס?&rlm;<br>ב. מהו אורך הקו היוצר?&rlm;",
        options: ["א. 8 | ב. 10", "א. 64 | ב. 10", "א. 8 | ב. 14", "א. 4 | ב. 10"],
        correctAnswer: 0,
        hint: "שטח בסיס מעגלי הוא פאי כפול רדיוס בריבוע. לאחר מציאת הרדיוס, השתמשו בפיתגורס עם הגובה.",
        solution_steps: [
            { verbal_explanation: "שלב 1: חילוץ הרדיוס מתוך שטח המעגל הנתון (תשובה לא').", math_expression: "\\pi \\times R^{2} = 64\\pi \\Rightarrow R^{2} = 64 \\Rightarrow R = 8" },
            { verbal_explanation: "שלב 2: בניית פיתגורס למציאת הקו היוצר במעטפת.", math_expression: "l = \\sqrt{8^{2} + 6^{2}}" },
            { verbal_explanation: "שלב 3: חזקות.", math_expression: "l = \\sqrt{64 + 36}" },
            { verbal_explanation: "שלב 4: סכימה.", math_expression: "l = \\sqrt{100}" },
            { verbal_explanation: "שלב 5: קבלת אורך הקו היוצר כיתר (תשובה לב').", math_expression: "l = 10" }
        ],
        final_answer: "א. 8 | ב. 10"
    },

    // שאלה מספר 15
    {
        topic: "solid_geometry_372",
        subTopic: "חרוט",
        question_text: "בחרוט ישר, הזווית שבין הקו היוצר לבין מישור הבסיס היא 60 מעלות. רדיוס הבסיס הוא 4. מהו גובה החרוט?&rlm;",
        options: ["6.93", "8", "4.62", "2"],
        correctAnswer: 0,
        hint: "הניצב מול הזווית הוא הגובה, והניצב ליד הזווית הוא הרדיוס. השתמשו בטנגנס 60 מעלות כפול 4.",
        solution_steps: [
            { verbal_explanation: "שלב 1: הצגת הקשר הטריגונומטרי בין גובה לרדיוס.", math_expression: "\\tan(60^{\\circ}) = \\dfrac{h}{4}" },
            { verbal_explanation: "שלב 2: הכפלת המשוואה בארבע לבידוד הגובה.", math_expression: "h = 4 \\times \\tan(60^{\\circ})" },
            { verbal_explanation: "שלב 3: החלפת הטנגנס בערכו המספרי (שורש שלוש).", math_expression: "h = 4 \\times 1.732" },
            { verbal_explanation: "שלב 4: ביצוע פעולת הכפל.", math_expression: "h \\approx 6.928" },
            { verbal_explanation: "שלב 5: בחירת התשובה בקירוב.", math_expression: "6.93" }
        ],
        final_answer: "6.93"
    },

    // שאלה מספר 16 (רב שלבית)
    {
        topic: "solid_geometry_372",
        subTopic: "חרוט",
        question_text: "חרוט ישר חסום בתוך גליל ישר בעל אותו בסיס ואותו גובה. נפח הגליל הוא \\( 150\\pi \\).&rlm;<br>א. מהו נפח החרוט?&rlm;<br>ב. מהו נפח החלל הריק שנשאר בין החרוט לבין מעטפת הגליל?&rlm;",
        options: ["א. 50\\pi | ב. 100\\pi", "א. 75\\pi | ב. 75\\pi", "א. 100\\pi | ב. 50\\pi", "א. 50\\pi | ב. 50\\pi"],
        correctAnswer: 0,
        hint: "נפח חרוט תמיד שווה לשליש מנפח גליל בעל מידות זהות. החלל הריק הוא ההפרש ביניהם (שני שליש).",
        solution_steps: [
            { verbal_explanation: "שלב 1: חישוב נפח החרוט כשליש מנפח הגליל החוסם אותו (תשובה לא').", math_expression: "V_{1} = 150\\pi : 3 = 50\\pi" },
            { verbal_explanation: "שלב 2: הגדרת החלל הריק כהפרש הנפחים של שני הגופים.", math_expression: "V_{2} = V_{total} - V_{1}" },
            { verbal_explanation: "שלב 3: ביצוע פעולת החיסור.", math_expression: "V_{2} = 150\\pi - 50\\pi" },
            { verbal_explanation: "שלב 4: תוצאת החלל הנותר בגליל (תשובה לב').", math_expression: "V_{2} = 100\\pi" }
        ],
        final_answer: "א. 50\\pi | ב. 100\\pi"
    },

    // שאלה מספר 17 (רב שלבית)
    {
        topic: "solid_geometry_372",
        subTopic: "חרוט",
        question_text: "חתך ציר של חרוט (המקביל לציר הסימטריה ועובר דרכו) יוצר משולש שווה צלעות שאורך צלעו הוא 10 ס''מ.&rlm;<br>א. מהו רדיוס הבסיס של החרוט?&rlm;<br>ב. מהו גובה החרוט?&rlm;",
        options: ["א. 5 | ב. 8.66", "א. 10 | ב. 5", "א. 5 | ב. 10", "א. 8.66 | ב. 5"],
        correctAnswer: 0,
        hint: "בחתך כזה, צלע המשולש התחתונה היא הקוטר. שתי הצלעות העולות הן הקווים היוצרים. הגובה חוצה את המשולש לשני משולשים ישרי זווית.",
        solution_steps: [
            { verbal_explanation: "שלב 1: זיהוי אורך הקוטר כצלע המשולש המונחת בבסיס.", math_expression: "D = 10" },
            { verbal_explanation: "שלב 2: חלוקת הקוטר בשתיים למציאת הרדיוס (תשובה לא').", math_expression: "R = 10 : 2 = 5" },
            { verbal_explanation: "שלב 3: הפעלת משפט פיתגורס במשולש הפנימי למציאת הגובה, כאשר היתר הוא הצלע העולה (עשר).", math_expression: "h^{2} + 5^{2} = 10^{2}" },
            { verbal_explanation: "שלב 4: בידוד הגובה.", math_expression: "h^{2} = 100 - 25 = 75" },
            { verbal_explanation: "שלב 5: הוצאת שורש למציאת הגובה הנקי (תשובה לב').", math_expression: "h = \\sqrt{75} \\approx 8.66" }
        ],
        final_answer: "א. 5 | ב. 8.66"
    },

    // שאלה מספר 18
    {
        topic: "solid_geometry_372",
        subTopic: "חרוט",
        question_text: "נתונים שני חרוטים בעלי אותו גובה בדיוק. לחרוט השני יש רדיוס שגדול פי 3 מהרדיוס של החרוט הראשון. פי כמה גדול נפח החרוט השני מנפח החרוט הראשון?&rlm;",
        options: ["9", "3", "6", "27"],
        correctAnswer: 0,
        hint: "הנפח תלוי ברדיוס בריבוע. אם הרדיוס גדל פי 3, הנפח יגדל פי 3 בריבוע.",
        solution_steps: [
            { verbal_explanation: "שלב 1: כתיבת תבנית יחס הנפחים עם הצבת הרדיוס המוגדל במקביל למקורי.", math_expression: "k = \\dfrac{\\dfrac{\\pi \\times (3R)^{2} \\times h}{3}}{\\dfrac{\\pi \\times R^{2} \\times h}{3}}" },
            { verbal_explanation: "שלב 2: פתיחת הסוגריים בחזקה והסרת כל הגורמים המשותפים בשבר המורכב.", math_expression: "k = \\dfrac{9R^{2}}{R^{2}}" },
            { verbal_explanation: "שלב 3: צמצום משתנה הרדיוס מותיר אותנו עם מספר טהור.", math_expression: "k = 9" },
            { verbal_explanation: "שלב 4: המסקנה היא שהגדלת הרדיוס פי שלוש מובילה להכפלת הנפח פי תשע.", math_expression: "9" }
        ],
        final_answer: "9"
    },

    // שאלה מספר 19
    {
        topic: "solid_geometry_372",
        subTopic: "חרוט",
        question_text: "נוסחת שטח המעטפת של חרוט (ללא הבסיס) היא \\( S = \\pi \\times R \\times l \\), כאשר l הוא הקו היוצר. מצאו את שטח הפנים הכולל (מעטפת + בסיס) של חרוט שבו הרדיוס הוא 6 והקו היוצר הוא 10.&rlm;",
        options: ["96\\pi", "60\\pi", "36\\pi", "120\\pi"],
        correctAnswer: 0,
        hint: "חשבו את שטח המעטפת בעזרת הנוסחה, וחשבו את שטח הבסיס (פאי כפול רדיוס בריבוע). חברו את התוצאות.",
        solution_steps: [
            { verbal_explanation: "שלב 1: הצבת הנתונים בנוסחה שניתנה כדי למצוא את שטח המעטפת.", math_expression: "M = \\pi \\times 6 \\times 10 = 60\\pi" },
            { verbal_explanation: "שלב 2: חישוב שטח הבסיס (עיגול יחיד) שאותו מוסיפים.", math_expression: "S_{base} = \\pi \\times 6^{2} = 36\\pi" },
            { verbal_explanation: "שלב 3: סכימת המעטפת והבסיס לקבלת שטח הפנים השלם.", math_expression: "S = 60\\pi + 36\\pi" },
            { verbal_explanation: "שלב 4: תוצאת החיבור.", math_expression: "S = 96\\pi" },
            { verbal_explanation: "שלב 5: בחירת התשובה הנכונה מבין החלופות.", math_expression: "96\\pi" }
        ],
        final_answer: "96\\pi"
    },

    // שאלה מספר 20
    {
        topic: "solid_geometry_372",
        subTopic: "חרוט",
        question_text: "מיכל בצורת חרוט הפוך (קודקוד למטה) מתרוקן ממים. רדיוס הבסיס המלא למעלה הוא 6 וגובהו המלא הוא 8. כעת גובה פני המים הוא רק 4. מהו רדיוס פני המים כעת? (השתמשו בדמיון משולשים בחתך הציר).&rlm;",
        options: ["3", "4", "2", "6"],
        correctAnswer: 0,
        hint: "בחתך הציר נוצרים משולשים דומים. יחס הגבהים שווה ליחס הרדיוסים. הגובה ירד לחצי, לכן גם הרדיוס יירד לחצי.",
        solution_steps: [
            { verbal_explanation: "שלב 1: כתיבת משוואת הפרופורציה המבוססת על דמיון משולשים.", math_expression: "\\dfrac{r}{R} = \\dfrac{h_{1}}{h_{2}}" },
            { verbal_explanation: "שלב 2: הצבת הנתונים הידועים למשוואה לחילוץ הרדיוס הקטן.", math_expression: "\\dfrac{r}{6} = \\dfrac{4}{8}" },
            { verbal_explanation: "שלב 3: צמצום השבר באגף ימין לחצי.", math_expression: "\\dfrac{r}{6} = 0.5" },
            { verbal_explanation: "שלב 4: הכפלה בשש לבידוד המשתנה.", math_expression: "r = 6 \\times 0.5" },
            { verbal_explanation: "שלב 5: התוצאה המדויקת לרדיוס מפלס המים.", math_expression: "r = 3" }
        ],
        final_answer: "3"
    },

    // ==========================================
    // תת נושא 6: שטח פנים ונפח (10 שאלות)
    // ==========================================

    // שאלה מספר 21 (רב שלבית)
    {
        topic: "solid_geometry_372",
        subTopic: "שטח פנים ונפח",
        question_text: "נתון גוף המורכב מגליל שרדיוסו 4 וגובהו 5, ועליו מורכב חרוט שרדיוסו זהה (4) וגובהו 3.&rlm;<br>א. מהו נפח הגליל?&rlm;<br>ב. מהו הנפח הכולל של הגוף המורכב?&rlm;\n<div dir='ltr' style='display:flex; justify-content:center; margin:20px 0;'><svg viewBox='0 0 200 250' style='max-width:200px; width:100%; border-radius:12px; background:#f8fafc; border:1px solid #e2e8f0;'><ellipse cx='100' cy='200' rx='50' ry='15' fill='#3b82f6' opacity='0.2' stroke='#3b82f6' stroke-width='2'/><ellipse cx='100' cy='120' rx='50' ry='15' fill='#3b82f6' opacity='0.3' stroke='#3b82f6' stroke-width='2'/><line x1='50' y1='120' x2='50' y2='200' stroke='#3b82f6' stroke-width='2'/><line x1='150' y1='120' x2='150' y2='200' stroke='#3b82f6' stroke-width='2'/><path d='M 50 120 L 100 40 L 150 120' fill='none' stroke='#f59e0b' stroke-width='2'/><line x1='100' y1='120' x2='100' y2='40' stroke='#64748b' stroke-dasharray='4,4' stroke-width='2'/><line x1='100' y1='120' x2='150' y2='120' stroke='#ef4444' stroke-width='2'/></svg></div>",
        options: ["א. 80\\pi | ב. 96\\pi", "א. 80\\pi | ב. 128\\pi", "א. 40\\pi | ב. 56\\pi", "א. 100\\pi | ב. 116\\pi"],
        correctAnswer: 0,
        hint: "חשבו את נפח הגליל בנפרד, ואז הוסיפו לו את נפח החרוט (שליש שטח בסיס כפול גובה).",
        solution_steps: [
            { verbal_explanation: "שלב 1: חישוב נפח החלק הגלילי התחתון (תשובה לא').", math_expression: "V_{1} = \\pi \\times 4^{2} \\times 5 = 16\\pi \\times 5 = 80\\pi" },
            { verbal_explanation: "שלב 2: חישוב נפח החלק החרוטי העליון.", math_expression: "V_{2} = \\dfrac{\\pi \\times 4^{2} \\times 3}{3} = 16\\pi" },
            { verbal_explanation: "שלב 3: סכימת שני הנפחים לקבלת נפח הגוף המורכב השלם.", math_expression: "V = V_{1} + V_{2}" },
            { verbal_explanation: "שלב 4: חיבור המקדמים של פאי (תשובה לב').", math_expression: "V = 80\\pi + 16\\pi = 96\\pi" }
        ],
        final_answer: "א. 80\\pi | ב. 96\\pi"
    },

    // שאלה מספר 22
    {
        topic: "solid_geometry_372",
        subTopic: "שטח פנים ונפח",
        question_text: "תיבה עשויה עץ שמידותיה הן 5 על 5 על 10 ס''מ. קדחו חור גלילי חלול לאורך התיבה כולה, מרצפה לתקרה (גובה 10). רדיוס החור הוא 2. מהו נפח העץ שנשאר בתיבה?&rlm;",
        options: ["250 - 40\\pi", "250 - 20\\pi", "250 - 10\\pi", "125 - 40\\pi"],
        correctAnswer: 0,
        hint: "חשבו את הנפח המקורי של התיבה השלמה, והחסירו ממנו את הנפח של הגליל שנקדח והוצא החוצה.",
        solution_steps: [
            { verbal_explanation: "שלב 1: חישוב נפח התיבה המלאה לפני הקידוח.", math_expression: "V_{1} = 5 \\times 5 \\times 10 = 250" },
            { verbal_explanation: "שלב 2: חישוב נפח הגליל הריק שיצרו הקידוח.", math_expression: "V_{2} = \\pi \\times 2^{2} \\times 10 = 40\\pi" },
            { verbal_explanation: "שלב 3: כתיבת ביטוי להפרש המייצג את החומר שנותר.", math_expression: "V = V_{1} - V_{2}" },
            { verbal_explanation: "שלב 4: הצבת הערכים במשוואת ההפרש.", math_expression: "V = 250 - 40\\pi" },
            { verbal_explanation: "שלב 5: התשובה הישירה בחלופות מכיוון שלא ניתן לצמצם יותר מבלי להמיר לעשרוני.", math_expression: "250 - 40\\pi" }
        ],
        final_answer: "250 - 40\\pi"
    },

    // שאלה מספר 23 (רב שלבית)
    {
        topic: "solid_geometry_372",
        subTopic: "שטח פנים ונפח",
        question_text: "מעל קובייה בעלת מקצוע 6 ס''מ, הוצבה פירמידה ישרה שבסיסה זהה לבסיס הקובייה וגובהה 4 ס''מ.&rlm;<br>א. מהו נפח הפירמידה העליונה בלבד?&rlm;<br>ב. מהו הנפח הכולל של הגוף המשולב?&rlm;",
        options: ["א. 48 | ב. 264", "א. 144 | ב. 360", "א. 48 | ב. 216", "א. 72 | ב. 288"],
        correctAnswer: 0,
        hint: "נפח הקובייה הוא 6 בשלישית. נפח הפירמידה הוא (6 כפול 6 כפול 4) לחלק ל-3.",
        solution_steps: [
            { verbal_explanation: "שלב 1: חישוב נפח הפירמידה העליונה (תשובה לא').", math_expression: "V_{1} = \\dfrac{6^{2} \\times 4}{3} = \\dfrac{36 \\times 4}{3} = 12 \\times 4 = 48" },
            { verbal_explanation: "שלב 2: חישוב נפח הקובייה התחתונה.", math_expression: "V_{2} = 6^{3} = 216" },
            { verbal_explanation: "שלב 3: סכימת שני החלקים ליצירת הגוף המלא.", math_expression: "V = V_{1} + V_{2}" },
            { verbal_explanation: "שלב 4: פעולת חיבור פשוטה.", math_expression: "V = 48 + 216" },
            { verbal_explanation: "שלב 5: קבלת הנפח הכולל (תשובה לב').", math_expression: "V = 264" }
        ],
        final_answer: "א. 48 | ב. 264"
    },

    // שאלה מספר 24
    {
        topic: "solid_geometry_372",
        subTopic: "שטח פנים ונפח",
        question_text: "נתונים שני גופים דומים תלת-ממדיים. יחס הצלעות (יחס הדמיון הקווי) ביניהם הוא 2. מה יהיה היחס בין שטחי הפנים שלהם, ומה יהיה היחס בין הנפחים שלהם?&rlm;",
        options: ["שטח: 4, נפח: 8", "שטח: 2, נפח: 4", "שטח: 4, נפח: 6", "שטח: 8, נפח: 4"],
        correctAnswer: 0,
        hint: "יחס השטחים שווה לריבוע יחס הצלעות. יחס הנפחים שווה לחזקה שלישית של יחס הצלעות.",
        solution_steps: [
            { verbal_explanation: "שלב 1: זיהוי הכלל לפיו יחס השטחים הוא ריבוע יחס הדמיון.", math_expression: "k_{S} = 2^{2}" },
            { verbal_explanation: "שלב 2: חישוב יחס השטחים.", math_expression: "k_{S} = 4" },
            { verbal_explanation: "שלב 3: זיהוי הכלל לפיו יחס הנפחים הוא חזקה שלישית של יחס הדמיון.", math_expression: "k_{V} = 2^{3}" },
            { verbal_explanation: "שלב 4: חישוב יחס הנפחים.", math_expression: "k_{V} = 8" },
            { verbal_explanation: "שלב 5: שילוב שתי התשובות.", math_expression: "4 \\quad , \\quad 8" }
        ],
        final_answer: "שטח: 4, נפח: 8"
    },

    // שאלה מספר 25
    {
        topic: "solid_geometry_372",
        subTopic: "שטח פנים ונפח",
        question_text: "אם מגדילים את כל ממדי התיבה (אורך, רוחב וגובה) פי 2, פי כמה יגדל הנפח הכולל שלה?&rlm;",
        options: ["פי 8", "פי 2", "פי 4", "פי 6"],
        correctAnswer: 0,
        hint: "מכיוון שהנפח מחושב על ידי הכפלת כל שלושת הממדים יחד (2 כפול 2 כפול 2).",
        solution_steps: [
            { verbal_explanation: "שלב 1: הגדרת הנפח המקורי עם ממדים אלגבריים.", math_expression: "V_{1} = x \\times y \\times z" },
            { verbal_explanation: "שלב 2: הגדרת הנפח החדש שבו כל ממד הוכפל בשניים.", math_expression: "V_{2} = (2x) \\times (2y) \\times (2z)" },
            { verbal_explanation: "שלב 3: סידור המכפלה והוצאת המקדמים החוצה.", math_expression: "V_{2} = 8 \\times (x \\times y \\times z)" },
            { verbal_explanation: "שלב 4: השוואת הנפח החדש לישן מציגה הכפלה פי שמונה.", math_expression: "V_{2} = 8 \\times V_{1}" },
            { verbal_explanation: "שלב 5: המסקנה.", math_expression: "8" }
        ],
        final_answer: "פי 8"
    },

    // שאלה מספר 26
    {
        topic: "solid_geometry_372",
        subTopic: "שטח פנים ונפח",
        question_text: "במנסרה משולשת, הבסיס הוא משולש ישר זווית שניצביו הם 3 ו-4. גובה המנסרה הוא 10. מהו נפח המנסרה?&rlm;",
        options: ["60", "120", "50", "30"],
        correctAnswer: 0,
        hint: "נפח מנסרה הוא שטח הבסיס כפול הגובה. חשבו את שטח המשולש שמהווה את הבסיס (ניצב כפול ניצב חלקי 2) והכפילו ב-10.",
        solution_steps: [
            { verbal_explanation: "שלב 1: חישוב שטח בסיס המנסרה שהוא משולש ישר זווית.", math_expression: "S_{base} = \\dfrac{3 \\times 4}{2}" },
            { verbal_explanation: "שלב 2: תוצאת שטח הבסיס.", math_expression: "S_{base} = 6" },
            { verbal_explanation: "שלב 3: הכפלת שטח הבסיס בגובה המנסרה.", math_expression: "V = 6 \\times 10" },
            { verbal_explanation: "שלב 4: תוצאת הכפל.", math_expression: "V = 60" },
            { verbal_explanation: "שלב 5: בחירת התשובה הנכונה.", math_expression: "60" }
        ],
        final_answer: "60"
    },

    // שאלה מספר 27
    {
        topic: "solid_geometry_372",
        subTopic: "שטח פנים ונפח",
        question_text: "בריכת שחייה מלבנית שמידותיה 20 מטר על 10 מטר אינה עמוקה בצורה שווה: עומקה גדל בהדרגה מ-1 מטר בצד אחד ל-3 מטרים בצד הנגדי. מהו נפח המים בבריכה זו (במטר מעוקב)?&rlm;",
        options: ["400", "600", "200", "300"],
        correctAnswer: 0,
        hint: "זהו גוף בצורת מנסרה שהבסיס שלה הוא טרפז. חשבו את שטח הטרפז (ממוצע הבסיסים 1 ו-3 כפול האורך 20), והכפילו ברוחב הבריכה (10). או פשוט חשבו נפח לפי ממוצע העומקים: (1+3)/2.",
        solution_steps: [
            { verbal_explanation: "שלב 1: חישוב העומק הממוצע של הבריכה.", math_expression: "h = \\dfrac{1 + 3}{2} = 2" },
            { verbal_explanation: "שלב 2: שילוב העומק הממוצע בנוסחת נפח רגילה של תיבה.", math_expression: "V = 20 \\times 10 \\times 2" },
            { verbal_explanation: "שלב 3: ביצוע כפל של הרוחב באורך.", math_expression: "V = 200 \\times 2" },
            { verbal_explanation: "שלב 4: הכפלה סופית למציאת הנפח הכולל.", math_expression: "V = 400" },
            { verbal_explanation: "שלב 5: התשובה הדרושה.", math_expression: "400" }
        ],
        final_answer: "400"
    },

    // שאלה מספר 28
    {
        topic: "solid_geometry_372",
        subTopic: "שטח פנים ונפח",
        question_text: "גליל מתכת ברדיוס 2 וגובה 9 מותך (מומס) כולו ונוצק מחדש לצורת תיבה בעלת בסיס מלבני שמידותיו 3 על 4. מה יהיה גובה התיבה החדשה שנוצרה?&rlm;",
        options: ["3\\pi", "6\\pi", "9\\pi", "12\\pi"],
        correctAnswer: 0,
        hint: "נפח החומר נשמר בעת ההתכה. חשבו את נפח הגליל, והשוו אותו לנוסחת נפח התיבה (3 כפול 4 כפול הגובה) כדי לחלץ את הגובה החדש.",
        solution_steps: [
            { verbal_explanation: "שלב 1: חישוב נפח הגליל ההתחלתי.", math_expression: "V = \\pi \\times 2^{2} \\times 9" },
            { verbal_explanation: "שלב 2: קבלת הנפח תוך שמירה על פאי.", math_expression: "V = 36\\pi" },
            { verbal_explanation: "שלב 3: בניית משוואת נפח לתיבה עם הנתון החדש.", math_expression: "3 \\times 4 \\times h = 36\\pi" },
            { verbal_explanation: "שלב 4: פישוט המשוואה לחלוקה.", math_expression: "12 \\times h = 36\\pi" },
            { verbal_explanation: "שלב 5: חלוקת שני האגפים בשתים עשרה לבידוד הגובה.", math_expression: "h = 3\\pi" }
        ],
        final_answer: "3\\pi"
    },

    // שאלה מספר 29
    {
        topic: "solid_geometry_372",
        subTopic: "שטח פנים ונפח",
        question_text: "צינור גלילי חלול פתוח משני קצותיו. רדיוסו הוא 5 וגובהו 20. רוצים לצבוע את מעטפת הצינור החיצונית. עלות הצבע היא 2 שקלים לכל יחידת שטח. מה תהיה העלות הכוללת?&rlm;",
        options: ["400\\pi", "200\\pi", "100\\pi", "800\\pi"],
        correctAnswer: 0,
        hint: "משום שהצינור פתוח, מחשבים רק את שטח המעטפת (2 כפול פאי כפול רדיוס כפול גובה), ולאחר מכן מכפילים בתעריף הצבע.",
        solution_steps: [
            { verbal_explanation: "שלב 1: חישוב שטח המעטפת של הצינור החלול (ללא בסיסים).", math_expression: "M = 2\\pi \\times 5 \\times 20" },
            { verbal_explanation: "שלב 2: ביצוע הכפלות של המספרים השלמים.", math_expression: "M = 200\\pi" },
            { verbal_explanation: "שלב 3: בניית פונקציית עלות באמצעות הכפלת השטח במחיר לכל יחידה.", math_expression: "C = 200\\pi \\times 2" },
            { verbal_explanation: "שלב 4: קבלת העלות הכוללת לצביעת המשטח.", math_expression: "C = 400\\pi" },
            { verbal_explanation: "שלב 5: התשובה הישירה להזנה.", math_expression: "400\\pi" }
        ],
        final_answer: "400\\pi"
    },

    // שאלה מספר 30
    {
        topic: "solid_geometry_372",
        subTopic: "שטח פנים ונפח",
        question_text: "חברת אריזות בונה גוף המורכב מתיבה שעליה מונח גליל קטן. ממדי התיבה: 10 ס''מ, 10 ס''מ, וגובה 5 ס''מ. רדיוס הגליל 3 ס''מ וגובהו 4 ס''מ. מהו הנפח הכולל של המארז?&rlm;",
        options: ["500 + 36\\pi", "500 + 12\\pi", "250 + 36\\pi", "200 + 36\\pi"],
        correctAnswer: 0,
        hint: "חשבו את הנפח של שני הגופים בנפרד וחברו אותם יחד.",
        solution_steps: [
            { verbal_explanation: "שלב 1: חישוב נפח התיבה המשמשת כבסיס המארז.", math_expression: "V_{1} = 10 \\times 10 \\times 5 = 500" },
            { verbal_explanation: "שלב 2: חישוב נפח הגליל המונח עליה.", math_expression: "V_{2} = \\pi \\times 3^{2} \\times 4" },
            { verbal_explanation: "שלב 3: פתרון למציאת נפח החלק העליון.", math_expression: "V_{2} = 9\\pi \\times 4 = 36\\pi" },
            { verbal_explanation: "שלב 4: הרכבת הנפח הכולל של הגוף על ידי חיבור הרכיבים.", math_expression: "V = 500 + 36\\pi" },
            { verbal_explanation: "שלב 5: מאחר שאי אפשר לחבר מספר חופשי עם פאי, הביטוי נשאר כפי שהוא.", math_expression: "500 + 36\\pi" }
        ],
        final_answer: "500 + 36\\pi"
    }
];