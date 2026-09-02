# AGENTS — قوانين هميشگی پروژه (PROMPT.md اجباری)

> اين فايل توسط `opencode.json:3` به عنوان instruction هميشگی لود می‌شود.
> هر agent، هر skill، هر command موظف است اين قوانين را قبل هر کاری رعايت کند.
> اگر درخواستی با `PROMPT.md` تناقض داشت، طبق `PROMPT.md:7` درخواست اجرا می‌شود ولی انحراف در `LOG.md` ثبت می‌گردد.

---

## ۰. قانون صفر — PROMPT.md قانون اساسی است

1. **قبل هر اقدامی** فايل `PROMPT.md` را کامل بخوان و مو به مو اجرا کن. اين فايل binding است (§1 تا §8).
2. **هرگز `PROMPT.md` را حين اجرای task ويرايش نکن** — پيشنهاد تغيير فقط در `LOG.md` ثبت شود (`PROMPT.md:2`).
3. تمام کارها بايد با **آخرين نسخه stable** موضوع و best practice روز (تا 2026) همسو باشد و ادعاهای نسخه‌ای برچسب بخورد (مثلاً "as of ECMAScript 2026 era") — `PROMPT.md:1`.
4. هر آموزش بايد هر ۵ سطح junior → mid → senior → expert → mentor را پوشش دهد و good/bad practice را با دليل توضيح دهد (`PROMPT.md:1`).

## ۱. قرارداد ساختار مخزن (§2)

ساختار دقيقا بايد مطابق `PROMPT.md:21` باشد:
```
README.md
PROMPT.md
README/<Track>/README.md      (Template A — جدول ماژول‌ها)
README/<Track>/LOG.md         (الزامی برای هر ترک)
README/<Track>/NN Domain Name/README.md  (Template B)
README/<Track>/NN Domain Name/sections/M. Section name/M.k. Leaf topic name.md
```
- پيشوند `NN ` دو رقمی، ترتيب روی ديسک = ترتيب آموزشی.
- لينک‌ها حتما به شکل `[text](<path>)` با angle-bracket (چون پوشه‌ها فاصله دارند) — `PROMPT.md:88`.
- نام فايل leaf بدون `: , ? & ( )` و با پيشوند `M.k. `.
- بخش‌های پايانی هر دامنه (Important points / Common pitfalls → production bugs / Interview Q&A / Overlaps to avoid) حتما بايد leaf واقعی داشته باشند، نه فقط bullet در README — `PROMPT.md:86`.

## ۲. قانون ضد تکرار (DRY — §5)

1. هر مفهوم فقط **يک بار** به طور کامل آموزش داده شود؛ بقيه جاها فقط يک خط + لينک.
2. **قبل نوشتن هر سکشن** کل ريپو را grep کن؛ اگر پوشش قبلی يافت شد، لينک بده و فقط نکته جديد را اضافه کن.
3. هر دامنه با `## N. Overlaps to avoid` تمام شود و مرزش را مشخص کند.

## ۳. گردش کار جلسه (§6) — ترتيب غيرقابل تغيير

اين ترتيب را هرگز جابجا نکن (`PROMPT.md:132`):

1. **Load context:** `README.md` ريشه، `README/<Track>/README.md`، `README/<Track>/LOG.md` کامل، و `README.md` دامنه هدف را بخوان. هرگز skip نکن.
2. **Open log FIRST:** قبل از هر `write/edit` ديگر، يک entry جديد در `README/<Track>/LOG.md` با `Status: IN PROGRESS` و `Plan:` کامل بساز. اين write بايد اولين تغيير روی ديسک باشد.
3. **Research:** حقايق را با منابع رسمی/معتبر و https://roadmap.sh چک کن؛ منابع غيربديهی را در همان log باز ثبت کن.
4. **Implement incrementally, logging after every unit:** هر leaf يا batch کوچک را جدا بساز. **بعد از تکميل هر واحد** (يک فايل، يک آپديت index، يک سري لينک) فورا همان entry باز را آپديت کن (`Done:` + `Files touched:` + `Links fixed:`) و **قبل شروع واحد بعدی** آن را روی ديسک ذخيره کن. هرگز logging را به آخر جلسه موکول نکن. ancestor index ها را در همان واحد آپديت کن.
5. **Verify:** چک‌ليست DoD (`PROMPT.md:112`) + تست لينک‌ها + عدم تکرار محتوا + اجرای مثال‌ها؛ نتيجه را در log ثبت کن.
6. **Close session:** وضعيت همان entry را به `DONE`/`PARTIAL`/`BLOCKED` ببر (هرگز در خروج عادی `IN PROGRESS` رها نکن) و `Next steps` دقيق برای ادامه جلسه بعدی بنويس.

> اگر entry ناتمام `IN PROGRESS` از جلسه قبلی يافتی، آن را recovery point بدان: هر `Done:` را با ديسک تطبيق بده، سپس يا در همان block ادامه بده يا آن را `PARTIAL` ببند و block جديد باز کن — `PROMPT.md:165`.

## ۴. قرارداد لاگ (§7)

- هر ترک يک `LOG.md` دارد؛ هر جلسه يک block با فرمت دقيق `PROMPT.md:146`.
- block های بسته (DONE/PARTIAL/BLOCKED) تاريخچه تغييرناپذيرند — هرگز ويرايش/حذف نشوند.
- فقط block باز جلسه جاری حين اجرا in-place آپديت می‌شود (بعد هر واحد).

## ۵. قرارداد Git — يک واحد = يک کاميت

اين قانون مکمل §6.4 است و برای هارنس حلقه‌ای تو الزامی‌ست:

1. **بعد از هر آپديت LOG.md** (يعنی بعد هر واحد)، فورا کاميت بزن:
   ```bash
   git add <leaf path> <domain README> <track README> <LOG.md>
   git commit -m "feat(<track>): add <NN Domain / M.k leaf> - <short why>"
   # مثال: feat(typescript): add 01 Fundamentals / 1.1 What is TypeScript
   ```
2. هرگز چند leaf را در يک کاميت batch نکن (مگر اينکه Skill صراحتا batch کوچک مجاز بداند).
3. اگر جلسه کرش کرد، تاريخچه git + LOG.md بايد دقيقا نشان دهد چه چيزی روی ديسک است — حداکثر يک واحد از دست می‌رود.
4. قبل هر کاميت `git status` را چک کن که فقط فايل‌های همان واحد stage شده باشند.

## ۶. چک‌ليست کيفيت هر leaf (§4 — Definition of Done)

قبل بستن هر leaf چک کن:

- [ ] دقيق برای latest stable، نسخه‌بندی برچسب‌خورده
- [ ] نيمه اول برای junior قابل فهم، نيمه دوم برای expert آموزنده
- [ ] هر best practice با دليل trade-off، هر anti-pattern با پيامد
- [ ] مثال‌ها کامل و runnable (import/usings صحيح)
- [ ] صفر تکرار — هر مفهوم تکراری فقط لينک شده (grep شده)
- [ ] نام‌گذاری، لحن، فرمت مثل همسايه‌ها (bold label + parenthetical، `—` em-dash)
- [ ] index دامنه و ترک آپديت شده، root README اگر ترک جديد است
- [ ] LOG.md append شده

## ۷. آناتومی leaf (§2)

هر leaf بايد promise های index را با بخش‌های `### k) **Label**` پوشش دهد:
Definition → What problem it solves/history → Modern guidance → Runnable example (good + bad) → Common confusion → Performance note → Mentor note → Cross-links. عمق از ساده به expert/mentor.

## ۸. استايل (§8)

- Heading ها شماره‌دار (`## 3.` / `### 3.2.` / `### 2)`)، بدون orphan.
- Bullet با bold label + parenthetical، جدول برای شمارش، `---` بين بخش‌ها.
- Code fence با زبان واقعی (`typescript`, `javascript`).
- لحن: مستقيم، فنی، opinionated-with-justification، بدون fluff.

---

## نحوه استفاده (برای انسان)

- ترک جديد: `Read PROMPT.md and follow it exactly. Task: lets add a new tutorial for TypeScript`
- ادامه ترک: `Read PROMPT.md and follow it exactly. Task: extend TypeScript domain 03 with section 4 about ...`
- يا ميانبر هارنس: `/tutorial lets deep dive into TypeScript track`
- يا: `/tutorial-continue` برای ادامه از `Next steps` آخرين LOG

همه اين‌ها همين قوانين بالا را اجرا می‌کنند — PROMPT.md هميشه لحاظ می‌شود.
