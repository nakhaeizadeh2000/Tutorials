# 3. مفاهیم پیشرفته (بهینه‌سازی همزمانی و عملکرد)

## فهرست مطالب

### بخش 1: مدیریت پیشرفته تسک‌ها (Advanced Task Management)
- [3.1.1 استفاده پیشرفته از Task.WhenAll() و Task.WhenAny()](#311-استفاده-پیشرفته-از-taskwhenall-و-taskwhenany)
  - [متد Task.WhenAll() پیشرفته](#3111-متد-taskwhenall-پیشرفته)
  - [متد Task.WhenAny() پیشرفته](#3112-متد-taskwhenany-پیشرفته)
  - [ترکیب Task.WhenAll() و Task.WhenAny()](#3113-ترکیب-taskwhenall-و-taskwhenany)
  - [بهینه‌سازی عملکرد](#3114-بهینهسازی-عملکرد)
  - [نکات مهم و بهترین روش‌ها](#3115-نکات-مهم-و-بهترین-روشها)
- [3.1.2 Task.Delay() در مقابل Task.Yield()](#312-taskdelay-در-مقابل-taskyield)
  - [Task.Delay() چیست؟](#3121-taskdelay-چیست)
  - [Task.Yield() چیست؟](#3122-taskyield-چیست)
  - [تفاوت‌های کلیدی](#3123-تفاوتهای-کلیدی)
  - [زمان استفاده از Task.Delay()](#3124-زمان-استفاده-از-taskdelay)
  - [زمان استفاده از Task.Yield()](#3125-زمان-استفاده-از-taskyield)
  - [مثال کاربردی: پردازش با به‌روزرسانی UI](#3126-مثال-کاربردی-پردازش-با-بهروزرسانی-ui)
  - [مثال کاربردی: تلاش مجدد با تاخیر](#3127-مثال-کاربردی-تلاش-مجدد-با-تاخیر)
  - [اشتباهات رایج](#3128-اشتباهات-رایج)
  - [بهترین روش‌ها](#3129-بهترین-روشها)
- [3.1.3 استفاده از لامبداهای ناهمزمان(async lambdas) و نمایندگان ناهمزمان(async delegates)](#313-استفاده-از-async-lambdas-و-async-delegates)
  - [لامبداهای ناهمزمان(async lambdas)](#3131-لامبداهای-ناهمزمان-async-lambdas)
  - [نمایندگان ناهمزمان(async delegates)](#3132-نمایندگان-ناهمزمان-async-delegates)
  - [مثال کاربردی: پردازش دسته‌ای](#3133-مثال-کاربردی-پردازش-دسته-ای)
  - [مثال کاربردی: فیلتر ناهمزمان](#3134-مثال-کاربردی-فیلتر-ناهمزمان)
  - [نکات مهم](#3135-نکات-مهم)
- [3.1.4 درک async و await در محیط چندنخی](#314-درک-async-و-await-در-محیط-چندنخی)
  - [نحوه کار async و await](#3141-نحوه-کار-async-await)
  - [اجرای موازی در محیط چندنخی](#3142-اجرای-موازی-در-محیط-چندنخی)
  - [SynchronizationContext](#3143-synchronizationcontext)
  - [مثال کاربردی: پردازش موازی](#3144-مثال-کاربردی-پردازش-موازی)
- [3.1.5 ValueTask برای بهینه‌سازی عملکرد](#315-valuetask-برای-بهینهسازی-عملکرد)
  - [تفاوت Task و ValueTask](#3151-تفاوت-task-و-valuetask)
  - [زمان استفاده از ValueTask](#3152-زمان-استفاده-از-valuetask)
  - [مثال کاربردی: کش ناهمزمان](#3153-مثال-کاربردی-کش-ناهمزمان)
  - [نکات مهم](#3154-نکات-مهم)

### بخش 2: مجموعه‌های Thread-Safe (Thread-Safe Collections)
- [3.2.1 درک مجموعه‌های Thread-Safe از System.Collections.Concurrent](#321-درک-مجموعههای-thread-safe-از-systemcollectionsconcurrent)
  - [چرا مجموعه‌های معمولی Thread-Safe نیستند؟](#3211-چرا-مجموعههای-معمولی-thread-safe-نیستند)
  - [مجموعه‌های Concurrent](#3212-مجموعههای-concurrent)
  - [مزایای مجموعه‌های Concurrent](#3213-مزایای-مجموعههای-concurrent)
  - [معایب و محدودیت‌ها](#3214-معایب-و-محدودیتها)
- [3.2.2 استفاده از ConcurrentQueue، ConcurrentDictionary، BlockingCollection، ConcurrentStack](#322-استفاده-از-concurrentqueue-concurrentdictionary-blockingcollection-concurrentstack)
  - [ConcurrentQueue](#3221-concurrentqueue)
  - [ConcurrentStack](#3222-concurrentstack)
  - [ConcurrentDictionary](#3223-concurrentdictionary)
  - [BlockingCollection](#3224-blockingcollection)
  - [ConcurrentBag](#3225-concurrentbag)
  - [مقایسه مجموعه‌ها](#3226-مقایسه-مجموعهها)
- [3.2.3 طراحی مجموعه‌های Thread-Safe سفارشی](#323-طراحی-مجموعههای-thread-safe-سفارشی)
  - [اصول طراحی](#3231-اصول-طراحی)
  - [مثال کاربردی: صف با اولویت](#3232-مثال-کاربردی-صف-با-اولویت)
  - [مثال کاربردی: کش با انقضا](#3233-مثال-کاربردی-کش-با-انقضا)
  - [بهترین روش‌ها](#3234-بهترین-روشها)

### بخش 3: جریان‌های ناهمزمان (Asynchronous Streams - IAsyncEnumerable)
- [3.3.1 درک جریان‌های ناهمزمان با IAsyncEnumerable<T>](#331-درک-جریانهای-ناهمزمان-با-iasyncenumerablet)
  - [مفهوم پایه](#3311-مفهوم-پایه)
  - [ساختار پایه](#3312-ساختار-پایه)
  - [مزایای جریان‌های ناهمزمان](#3313-مزایای-جریانهای-ناهمزمان)
  - [مثال کاربردی: خواندن فایل](#3314-مثال-کاربردی-خواندن-فایل)
  - [مثال کاربردی: دریافت داده از API](#3315-مثال-کاربردی-دریافت-داده-از-api)
- [3.3.2 استفاده از await foreach و جریان‌های async برای بهینه‌سازی عملکرد](#332-استفاده-از-await-foreach-و-جریانهای-async-برای-بهینهسازی-عملکرد)
  - [استفاده پایه از await foreach](#3321-استفاده-پایه-از-await-foreach)
  - [بهینه‌سازی عملکرد](#3322-بهینهسازی-عملکرد)
  - [مثال کاربردی: پردازش فایل بزرگ](#3323-مثال-کاربردی-پردازش-فایل-بزرگ)
  - [مثال کاربردی: دانلود تدریجی](#3324-مثال-کاربردی-دانلود-تدریجی)
- [3.3.3 سناریوهای پیشرفته با IAsyncEnumerable (جریان داده، صفحه‌بندی)](#333-سناریوهای-پیشرفته-با-iasyncenumerable-جریان-داده-صفحهبندی)
  - [جریان داده](#3331-جریان-داده-streaming-data)
  - [صفحه‌بندی](#3332-صفحهبندی-paging)
  - [مثال کاربردی: پردازش چند منبع](#3333-مثال-کاربردی-پردازش-چند-منبع)
  - [مثال کاربردی: فیلتر و تبدیل زنجیره‌ای](#3334-مثال-کاربردی-فیلتر-و-تبدیل-زنجیره-ای)
  - [مثال کاربردی: پردازش با کنترل جریان](#3335-مثال-کاربردی-پردازش-با-کنترل-جریان)
  - [نکات مهم](#3336-نکات-مهم)

### بخش 4: پیشگیری از قفل مرگ و شرایط مسابقه (Deadlock Prevention and Race Conditions)
- [3.4.1 درک و پیشگیری از قفل مرگ در برنامه‌های چندنخی](#341-درک-و-پیشگیری-از-قفل-مرگ-در-برنامههای-چندنخی)
  - [مفهوم قفل مرگ](#3411-مفهوم-قفل-مرگ)
  - [تشخیص قفل مرگ](#3412-تشخیص-قفل-مرگ)
  - [پیشگیری از قفل مرگ](#3413-پیشگیری-از-قفل-مرگ)
  - [مثال کاربردی: پیشگیری از قفل مرگ](#3414-مثال-کاربردی-پیشگیری-از-قفل-مرگ)
- [3.4.2 تشخیص و مدیریت شرایط مسابقه](#342-تشخیص-و-مدیریت-شرایط-مسابقه)
  - [مفهوم شرایط مسابقه](#3421-مفهوم-شرایط-مسابقه)
  - [تشخیص شرایط مسابقه](#3422-تشخیص-شرایط-مسابقه)
  - [مدیریت شرایط مسابقه](#3423-مدیریت-شرایط-مسابقه)
  - [مثال کاربردی: مدیریت شرایط مسابقه](#3424-مثال-کاربردی-مدیریت-شرایط-مسابقه)
- [3.4.3 طراحی الگوهای کد Thread-Safe (مثلاً double-check locking)](#343-طراحی-الگوهای-کد-thread-safe-مثلاً-double-check-locking)
  - [الگوی Singleton Thread-Safe](#3431-الگوی-singleton-thread-safe)
  - [الگوی Double-Check Locking](#3432-الگوی-double-check-locking)
  - [الگوی Initialization on Demand](#3433-الگوی-initialization-on-demand)
  - [الگوی Reader-Writer Lock](#3434-الگوی-reader-writer-lock)
  - [الگوی Immutable Builder](#3435-الگوی-immutable-builder)
  - [بهترین روش‌ها](#3436-بهترین-روشها)

### بخش 5: بهینه‌سازی استفاده از Thread و Task (Optimizing Thread and Task Usage)
- [3.5.1 کاهش تعداد Thread با استفاده از Task.WhenAny() و Task.WhenAll()](#351-کاهش-تعداد-thread-با-استفاده-از-taskwhenany-و-taskwhenall)
  - [مشکل استفاده از Threadهای زیاد](#3511-مشکل-استفاده-از-thread-های-زیاد)
  - [استفاده از Task.WhenAll() برای کاهش Thread](#3512-استفاده-از-taskwhenall-برای-کاهش-thread)
  - [استفاده از Task.WhenAny() برای اولین نتیجه](#3513-استفاده-از-taskwhenany-برای-اولین-نتیجه)
  - [محدود کردن تعداد همزمان](#3514-محدود-کردن-تعداد-همزمان)
  - [مثال کاربردی: پردازش دسته‌ای](#3515-مثال-کاربردی-پردازش-دسته-ای)
- [3.5.2 الگوهای لغو تسک با CancellationToken](#352-الگوهای-لغو-تسک-با-cancellationtoken)
  - [الگوی پایه لغو](#3521-الگوی-پایه-لغو)
  - [الگوی لغو چند تسک](#3522-الگوی-لغو-چند-تسک)
  - [الگوی لغو با اولین نتیجه](#3523-الگوی-لغو-با-اولین-نتیجه)
  - [الگوی لغو با Timeout](#3524-الگوی-لغو-با-timeout)
  - [مثال کاربردی: لغو پردازش فایل](#3525-مثال-کاربردی-لغو-پردازش-فایل)
- [3.5.3 تنظیم دقیق استفاده از Thread Pool برای عملکرد بهینه](#353-تنظیم-دقیق-استفاده-از-thread-pool-برای-عملکرد-بهینه)
  - [درک Thread Pool](#3531-درک-thread-pool)
  - [تنظیم حداقل و حداکثر Thread](#3532-تنظیم-حداقل-و-حداکثر-thread)
  - [مشاهده وضعیت Thread Pool](#3533-مشاهده-وضعیت-thread-pool)
  - [بهینه‌سازی برای عملیات I/O](#3534-بهینهسازی-برای-عملیات-io)
  - [بهینه‌سازی برای پردازش CPU](#3535-بهینهسازی-برای-پردازش-cpu)
- [3.5.4 استفاده از ConfigureAwait(false) برای کد کتابخانه برای جلوگیری از قفل مرگ](#354-استفاده-از-configureawaitfalse-برای-کد-کتابخانه-برای-جلوگیری-از-قفل-مرگ)
  - [مفهوم ConfigureAwait](#3541-مفهوم-configureawait)
  - [جلوگیری از قفل مرگ](#3542-جلوگیری-از-قفل-مرگ)
  - [قوانین استفاده](#3543-قوانین-استفاده)
  - [مثال کاربردی: کتابخانه](#3544-مثال-کاربردی-کتابخانه)
  - [بهترین روش‌ها](#3545-بهترین-روشها)

---

پس از تسلط بر مفاهیم میانی، زمان آن رسیده است که به سطح پیشرفته برسید. در این بخش، شما یاد خواهید گرفت که چگونه همزمانی(Concurrency) و عملکرد(Performance) را به صورت حرفه‌ای بهینه کنید و از تکنیک‌های پیشرفته برای مدیریت تسک‌ها، مجموعه‌های Thread-Safe، و جریان‌های ناهمزمان استفاده نمایید.

<a id="31-مدیریت-پیشرفته-تسکها"></a>
## 3.1 مدیریت پیشرفته تسک‌ها

در سطح پیشرفته، باید با تکنیک‌های پیشرفته‌تر مدیریت تسک‌ها آشنا شوید. این شامل استفاده پیشرفته از `Task.WhenAll()` و `Task.WhenAny()`، درک تفاوت بین `Task.Delay()` و `Task.Yield()`، استفاده از لامبداهای ناهمزمان(async lambdas) و نمایندگان ناهمزمان(async delegates)، و بهینه‌سازی عملکرد(Performance) با `ValueTask` است.

<a id="311-استفاده-پیشرفته-از-taskwhenall-و-taskwhenany"></a>
### 3.1.1 استفاده پیشرفته از Task.WhenAll() و Task.WhenAny()

در سطح پیشرفته، باید با استفاده‌های پیچیده‌تر از `Task.WhenAll()` و `Task.WhenAny()` آشنا شوید. این متدها برای مدیریت چندین تسک به صورت همزمان(Concurrent) و بهینه‌سازی عملکرد(Performance) بسیار مهم هستند.

<a id="3111-taskwhenall-پیشرفته"></a>
#### 3.1.1.1 متد Task.WhenAll() پیشرفته

عبارت `Task.WhenAll()` منتظر می‌ماند تا همه تسک‌ها به پایان برسند. در سطح پیشرفته، باید با بارگذاری‌های(overload) مختلف، مدیریت استثنا(Exception Handling)، و بهینه‌سازی عملکرد(Performance) آشنا شوید.

**مثال 1: استفاده پایه با آرایه تسک‌ها**

```csharp
var tasks = new Task[]
{
    Task.Run(() => DownloadFile("file1.txt")),
    Task.Run(() => DownloadFile("file2.txt")),
    Task.Run(() => DownloadFile("file3.txt"))
};

await Task.WhenAll(tasks);
Console.WriteLine("همه فایل‌ها دانلود شدند");
```

**مثال 2: استفاده با IEnumerable<Task>**

```csharp
var urls = new[] { "url1", "url2", "url3" };
var tasks = urls.Select(url => DownloadFileAsync(url));

await Task.WhenAll(tasks);
Console.WriteLine("همه دانلودها کامل شدند");
```

**مثال 3: استفاده با Task<T> و دریافت نتایج**

```csharp
var tasks = new Task<int>[]
{
    Task.Run(() => CalculateValue(1)),
    Task.Run(() => CalculateValue(2)),
    Task.Run(() => CalculateValue(3))
};

int[] results = await Task.WhenAll(tasks);
int sum = results.Sum();
Console.WriteLine($"مجموع: {sum}");
```

**مثال 4: مدیریت استثنا در Task.WhenAll()**

```csharp
var tasks = new Task[]
{
    Task.Run(() => ProcessItem(1)),
    Task.Run(() => ProcessItem(2)),
    Task.Run(() => throw new Exception("خطا در آیتم 3")),
    Task.Run(() => ProcessItem(4))
};

try
{
    await Task.WhenAll(tasks);
}
catch (AggregateException aggEx)
{
    // همه استثناها در InnerExceptions
    foreach (var ex in aggEx.InnerExceptions)
    {
        Console.WriteLine($"خطا: {ex.Message}");
    }
}
```

**مثال 5: مدیریت استثنا به صورت جداگانه**

```csharp
var tasks = new List<Task>();

for (int i = 0; i < 10; i++)
{
    int itemId = i;
    tasks.Add(Task.Run(async () =>
    {
        try
        {
            await ProcessItemAsync(itemId);
        }
        catch (Exception ex)
        {
            Console.WriteLine($"خطا در آیتم {itemId}: {ex.Message}");
        }
    }));
}

await Task.WhenAll(tasks);
Console.WriteLine("همه پردازش‌ها کامل شدند (با یا بدون خطا)");
```

**مثال 6: استفاده با CancellationToken**

```csharp
var cts = new CancellationTokenSource();
var tasks = new List<Task>();

for (int i = 0; i < 10; i++)
{
    int itemId = i;
    tasks.Add(Task.Run(async () =>
    {
        await ProcessItemAsync(itemId, cts.Token);
    }, cts.Token));
}

// بعد از 5 ثانیه لغو می‌کنیم
cts.CancelAfter(TimeSpan.FromSeconds(5));

try
{
    await Task.WhenAll(tasks);
}
catch (OperationCanceledException)
{
    Console.WriteLine("پردازش لغو شد");
}
```

**مثال 7: بهینه‌سازی با محدود کردن تعداد تسک‌های همزمان(Concurrent)**

```csharp
public async Task ProcessItemsWithLimitAsync(List<int> items, int maxConcurrency)
{
    var semaphore = new SemaphoreSlim(maxConcurrency);
    var tasks = items.Select(async item =>
    {
        await semaphore.WaitAsync();
        try
        {
            await ProcessItemAsync(item);
        }
        finally
        {
            semaphore.Release();
        }
    });

    await Task.WhenAll(tasks);
}
```

**مثال 8: استفاده با Timeout**

```csharp
public async Task<bool> ProcessWithTimeoutAsync(List<Task> tasks, TimeSpan timeout)
{
    var timeoutTask = Task.Delay(timeout);
    var completedTask = await Task.WhenAny(Task.WhenAll(tasks), timeoutTask);

    if (completedTask == timeoutTask)
    {
        Console.WriteLine("زمان تمام شد");
        return false;
    }

    Console.WriteLine("همه تسک‌ها کامل شدند");
    return true;
}
```

<a id="3112-taskwhenany-پیشرفته"></a>
#### 3.1.1.2 متد Task.WhenAny() پیشرفته

عبارت `Task.WhenAny()` منتظر می‌ماند تا اولین تسک به پایان برسد. این برای الگوهای مختلف مانند شرایط مسابقه(race condition)، زمان‌تمام‌شده(timeout)، و سقوط به گزینه بعدی(fallback) بسیار مفید است.

**مثال 1: استفاده پایه**

```csharp
var tasks = new Task[]
{
    Task.Run(() => DownloadFromServer1()),
    Task.Run(() => DownloadFromServer2()),
    Task.Run(() => DownloadFromServer3())
};

var completedTask = await Task.WhenAny(tasks);
var result = await completedTask;
Console.WriteLine($"اولین دانلود کامل شد: {result}");
```

**مثال 2: الگوی سقوط به گزینه بعدی(Fallback)**

```csharp
public async Task<string> DownloadWithFallbackAsync(string primaryUrl, string fallbackUrl)
{
    var primaryTask = DownloadFileAsync(primaryUrl);
    var fallbackTask = DownloadFileAsync(fallbackUrl);

    var completedTask = await Task.WhenAny(primaryTask, fallbackTask);

    if (completedTask == primaryTask && !primaryTask.IsFaulted)
    {
        return await primaryTask;
    }

    // اگر primary خطا داد یا fallback زودتر تمام شد
    return await fallbackTask;
}
```

**مثال 3: الگوی زمان‌تمام‌شده(Timeout)**

```csharp
public async Task<string> ProcessWithTimeoutAsync(Func<Task<string>> operation, TimeSpan timeout)
{
    var operationTask = operation();
    var timeoutTask = Task.Delay(timeout).ContinueWith(_ => (string)null);

    var completedTask = await Task.WhenAny(operationTask, timeoutTask);

    if (completedTask == timeoutTask)
    {
        throw new TimeoutException("زمان تمام شد");
    }

    return await operationTask;
}
```

**مثال 4: الگوی شرایط مسابقه(Race Condition) - اولین برنده**

```csharp
public async Task<string> GetFirstAvailableServerAsync(List<string> serverUrls)
{
    var tasks = serverUrls.Select(url => 
        CheckServerAvailabilityAsync(url).ContinueWith(t => 
            t.IsCompletedSuccessfully ? url : null
        )
    ).ToArray();

    while (tasks.Length > 0)
    {
        var completedTask = await Task.WhenAny(tasks);
        var result = await completedTask;

        if (result != null)
        {
            return result; // اولین سرور در دسترس
        }

        // حذف تسک کامل شده و ادامه
        tasks = tasks.Where(t => t != completedTask).ToArray();
    }

    throw new Exception("هیچ سروری در دسترس نیست");
}
```

**مثال 5: پردازش با اولویت**

```csharp
public async Task ProcessWithPriorityAsync(List<PriorityTask> tasks)
{
    var remainingTasks = tasks.ToList();

    while (remainingTasks.Count > 0)
    {
        // اولویت بالا
        var highPriorityTasks = remainingTasks
            .Where(t => t.Priority == Priority.High)
            .Select(t => t.Task)
            .ToArray();

        if (highPriorityTasks.Length > 0)
        {
            var completed = await Task.WhenAny(highPriorityTasks);
            await completed;
            remainingTasks.RemoveAll(t => t.Task == completed);
            continue;
        }

        // اولویت متوسط
        var mediumPriorityTasks = remainingTasks
            .Where(t => t.Priority == Priority.Medium)
            .Select(t => t.Task)
            .ToArray();

        if (mediumPriorityTasks.Length > 0)
        {
            var completed = await Task.WhenAny(mediumPriorityTasks);
            await completed;
            remainingTasks.RemoveAll(t => t.Task == completed);
            continue;
        }

        // اولویت پایین
        var lowPriorityTasks = remainingTasks
            .Select(t => t.Task)
            .ToArray();

        var completedLow = await Task.WhenAny(lowPriorityTasks);
        await completedLow;
        remainingTasks.RemoveAll(t => t.Task == completedLow);
    }
}
```

**مثال 6: الگوی شکستن مدار(Circuit Breaker)**

```csharp
public class CircuitBreaker
{
    private int _failureCount = 0;
    private const int MaxFailures = 5;
    private DateTime? _lastFailureTime;
    private readonly TimeSpan _timeout = TimeSpan.FromSeconds(30);

    public async Task<T> ExecuteAsync<T>(Func<Task<T>> operation, Func<Task<T>> fallback)
    {
        if (_failureCount >= MaxFailures)
        {
            if (_lastFailureTime.HasValue && 
                DateTime.UtcNow - _lastFailureTime.Value < _timeout)
            {
                // مدار(Circuit) باز است - استفاده از سقوط به گزینه بعدی(fallback)
                return await fallback();
            }
            else
            {
                // بازنشانی
                _failureCount = 0;
            }
        }

        try
        {
            var result = await operation();
            _failureCount = 0; // موفقیت - بازنشانی
            return result;
        }
        catch
        {
            _failureCount++;
            _lastFailureTime = DateTime.UtcNow;
            return await fallback();
        }
    }
}
```

<a id="3113-ترکیب-taskwhenall-و-taskwhenany"></a>
#### 3.1.1.3 ترکیب Task.WhenAll() و Task.WhenAny()

ترکیب این دو متد می‌تواند الگوهای پیچیده‌ای ایجاد کند.

**مثال 1: پردازش دسته‌ای با محدودیت**

```csharp
public async Task ProcessBatchAsync(List<int> items, int batchSize, int maxConcurrency)
{
    for (int i = 0; i < items.Count; i += batchSize)
    {
        var batch = items.Skip(i).Take(batchSize);
        
        var semaphore = new SemaphoreSlim(maxConcurrency);
        var batchTasks = batch.Select(async item =>
        {
            await semaphore.WaitAsync();
            try
            {
                await ProcessItemAsync(item);
            }
            finally
            {
                semaphore.Release();
            }
        });

        await Task.WhenAll(batchTasks);
        Console.WriteLine($"دسته {i / batchSize + 1} کامل شد");
    }
}
```

**مثال 2: الگوی پخش و جمع‌آوری(Fan-Out/Fan-In)**

```csharp
public async Task<List<TResult>> FanOutFanInAsync<TInput, TResult>(
    List<TInput> inputs,
    Func<TInput, Task<TResult>> processor,
    int maxConcurrency)
{
    var semaphore = new SemaphoreSlim(maxConcurrency);
    var allTasks = new List<Task<TResult>>();

    foreach (var input in inputs)
    {
        var task = Task.Run(async () =>
        {
            await semaphore.WaitAsync();
            try
            {
                return await processor(input);
            }
            finally
            {
                semaphore.Release();
            }
        });

        allTasks.Add(task);
    }

    // جمع‌آوری(Fan-In) همه نتایج
    return (await Task.WhenAll(allTasks)).ToList();
}
```

**مثال 3: الگوی خط لوله(Pipeline)**

```csharp
public async Task ProcessPipelineAsync(List<int> items)
{
    // مرحله 1: دانلود
    var downloadTasks = items.Select(item => DownloadAsync(item));
    var downloadedData = await Task.WhenAll(downloadTasks);

    // مرحله 2: پردازش
    var processTasks = downloadedData.Select(data => ProcessAsync(data));
    var processedData = await Task.WhenAll(processTasks);

    // مرحله 3: ذخیره
    var saveTasks = processedData.Select(data => SaveAsync(data));
    await Task.WhenAll(saveTasks);
}
```

**مثال 4: الگوی تلاش مجدد(Retry) با WhenAny**

```csharp
public async Task<T> RetryWithFastestAsync<T>(
    Func<Task<T>> operation,
    int maxRetries = 3)
{
    var tasks = new List<Task<T>>();

    for (int i = 0; i < maxRetries; i++)
    {
        tasks.Add(operation());
    }

    // منتظر اولین موفقیت می‌مانیم
    while (tasks.Count > 0)
    {
        var completedTask = await Task.WhenAny(tasks);

        if (completedTask.IsCompletedSuccessfully)
        {
            return await completedTask;
        }

        // اگر خطا داد، حذف می‌کنیم
        tasks.Remove(completedTask);
    }

    throw new Exception("همه تلاش‌ها ناموفق بودند");
}
```

<a id="3114-بهینهسازی-عملکرد"></a>
#### 3.1.1.4 بهینه‌سازی عملکرد(Performance)

**مثال 1: استفاده از TaskCompletionSource برای کنترل دقیق**

```csharp
public class TaskBatchProcessor<T>
{
    private readonly List<TaskCompletionSource<T>> _pendingTasks = new();
    private readonly int _batchSize;
    private readonly Func<List<T>, Task<List<T>>> _batchProcessor;

    public TaskBatchProcessor(int batchSize, Func<List<T>, Task<List<T>>> batchProcessor)
    {
        _batchSize = batchSize;
        _batchProcessor = batchProcessor;
    }

    public async Task<T> ProcessAsync(T item)
    {
        var tcs = new TaskCompletionSource<T>();
        lock (_pendingTasks)
        {
            _pendingTasks.Add(tcs);
        }

        // اگر به اندازه batch رسیدیم، پردازش می‌کنیم
        if (_pendingTasks.Count >= _batchSize)
        {
            await ProcessBatchAsync();
        }

        return await tcs.Task;
    }

    private async Task ProcessBatchAsync()
    {
        List<TaskCompletionSource<T>> batch;
        lock (_pendingTasks)
        {
            batch = _pendingTasks.Take(_batchSize).ToList();
            _pendingTasks.RemoveRange(0, Math.Min(_batchSize, _pendingTasks.Count));
        }

        var items = batch.Select(tcs => default(T)).ToList(); // باید items را از tcs بگیرید
        var results = await _batchProcessor(items);

        for (int i = 0; i < batch.Count && i < results.Count; i++)
        {
            batch[i].SetResult(results[i]);
        }
    }
}
```

**مثال 2: استفاده از ConfigureAwait(false)**

```csharp
public async Task ProcessItemsAsync(List<int> items)
{
    var tasks = items.Select(async item =>
    {
        // استفاده از ConfigureAwait(false) برای بهینه‌سازی
        await ProcessItemAsync(item).ConfigureAwait(false);
    });

    await Task.WhenAll(tasks).ConfigureAwait(false);
}
```

<a id="3115-نکات-مهم-و-بهترین-روشها"></a>
#### 3.1.1.5 نکات مهم و بهترین روش‌ها

**1. همیشه استثناها را مدیریت کنید:**

```csharp
// ✅ درست
try
{
    await Task.WhenAll(tasks);
}
catch (AggregateException aggEx)
{
    // مدیریت استثناها
}
```

**2. استفاده از ConfigureAwait(false) در کتابخانه‌ها:**

```csharp
// ✅ درست: در کتابخانه‌ها
await Task.WhenAll(tasks).ConfigureAwait(false);
```

**3. محدود کردن تعداد تسک‌های همزمان(Concurrent):**

```csharp
// ✅ درست: استفاده از SemaphoreSlim
var semaphore = new SemaphoreSlim(maxConcurrency);
var tasks = items.Select(async item =>
{
    await semaphore.WaitAsync();
    try
    {
        await ProcessItemAsync(item);
    }
    finally
    {
        semaphore.Release();
    }
});
```

**4. استفاده از CancellationToken:**

```csharp
// ✅ درست: پشتیبانی از لغو
var cts = new CancellationTokenSource();
var tasks = items.Select(item => ProcessItemAsync(item, cts.Token));
await Task.WhenAll(tasks);
```

**5. اجتناب از استفاده بیش از حد:**

```csharp
// ❌ نادرست: ایجاد تعداد زیادی تسک
var tasks = Enumerable.Range(0, 10000)
    .Select(i => Task.Run(() => ProcessItem(i)));

// ✅ بهتر: محدود کردن
var semaphore = new SemaphoreSlim(Environment.ProcessorCount);
var tasks = Enumerable.Range(0, 10000)
    .Select(async i =>
    {
        await semaphore.WaitAsync();
        try { await ProcessItemAsync(i); }
        finally { semaphore.Release(); }
    });
```

#### خلاصه

- **عبارت Task.WhenAll():** منتظر می‌ماند تا همه تسک‌ها کامل شوند
- **عبارت Task.WhenAny():** منتظر می‌ماند تا اولین تسک کامل شود
- **الگوهای رایج:** سقوط به گزینه بعدی(Fallback)، زمان‌تمام‌شده(Timeout)، شرایط مسابقه(Race Condition)، شکستن مدار(Circuit Breaker)
- **بهینه‌سازی:** استفاده از SemaphoreSlim، ConfigureAwait(false)، محدود کردن همزمانی(Concurrency)
- **مدیریت استثنا:** همیشه استثناها را مدیریت کنید

<a id="312-taskdelay-در-مقابل-taskyield"></a>
### 3.1.2 مقایسه Task.Delay() و Task.Yield()

در برنامه‌نویسی ناهمزمان(Asynchronous Programming) پیشرفته، درک تفاوت بین `Task.Delay()` و `Task.Yield()` بسیار مهم است. هر دو متد برای کنترل جریان اجرا استفاده می‌شوند، اما اهداف و رفتارهای متفاوتی دارند.

<a id="3121-taskdelay-چیست"></a>
#### 3.1.2.1 عبارت Task.Delay() چیست؟

عبارت `Task.Delay()` یک متد ناهمزمان(Asynchronous) است که یک تاخیر زمانی مشخص ایجاد می‌کند. این متد یک تسک(Task) برمی‌گرداند که پس از گذشت زمان مشخص شده کامل می‌شود.

**مثال پایه:**

```csharp
public async Task ExampleDelay()
{
    Console.WriteLine("شروع");
    await Task.Delay(1000); // منتظر 1 ثانیه می‌ماند
    Console.WriteLine("پس از 1 ثانیه");
}
```

**ویژگی‌های کلیدی عبارت Task.Delay():**

1. **تاخیر زمانی واقعی:** یک تاخیر زمانی واقعی ایجاد می‌کند
2. **غیر مسدود کننده(Non-blocking):** نخ فعلی را مسدود نمی‌کند
3. **قابل لغو:** می‌تواند با `CancellationToken` لغو شود
4. **استفاده از تایمر:** از تایمر سیستم استفاده می‌کند

**مثال با CancellationToken:**

```csharp
public async Task DelayWithCancellation(CancellationToken cancellationToken)
{
    try
    {
        Console.WriteLine("شروع تاخیر");
        await Task.Delay(5000, cancellationToken); // 5 ثانیه
        Console.WriteLine("تاخیر کامل شد");
    }
    catch (OperationCanceledException)
    {
        Console.WriteLine("تاخیر لغو شد");
    }
}
```

<a id="3122-taskyield-چیست"></a>
#### 3.1.2.2 عبارت Task.Yield() چیست؟

عبارت `Task.Yield()` یک متد ناهمزمان(Asynchronous) است که کنترل را به `SynchronizationContext` یا `TaskScheduler` برمی‌گرداند. این متد یک تاخیر زمانی ایجاد نمی‌کند، بلکه فقط اجازه می‌دهد سایر کارها اجرا شوند.

**مثال پایه:**

```csharp
public async Task ExampleYield()
{
    Console.WriteLine("قبل از Yield");
    await Task.Yield(); // کنترل را برمی‌گرداند
    Console.WriteLine("بعد از Yield");
}
```

**ویژگی‌های کلیدی عبارت Task.Yield():**

1. **بدون تاخیر زمانی:** هیچ تاخیر زمانی ایجاد نمی‌کند
2. **بازگشت کنترل:** کنترل را به `SynchronizationContext` برمی‌گرداند
3. **اجازه اجرای سایر کارها:** به سایر کارها اجازه اجرا می‌دهد
4. **مفید برای UI:** برای جلوگیری از فریز شدن UI مفید است

<a id="3123-تفاوتهای-کلیدی"></a>
#### 3.1.2.3 تفاوت‌های کلیدی

**جدول مقایسه:**

| ویژگی | Task.Delay() | Task.Yield() |
|-------|--------------|--------------|
| تاخیر زمانی | بله، تاخیر واقعی | خیر، بدون تاخیر |
| مسدود کردن نخ | خیر | خیر |
| استفاده از تایمر | بله | خیر |
| بازگشت به SynchronizationContext | بله | بله |
| زمان اجرا | حداقل زمان مشخص | فوری |
| کاربرد اصلی | تاخیر زمانی | بازگشت کنترل |

**مثال مقایسه:**

```csharp
public async Task CompareDelayAndYield()
{
    // Task.Delay - تاخیر واقعی
    var sw1 = System.Diagnostics.Stopwatch.StartNew();
    await Task.Delay(100);
    sw1.Stop();
    Console.WriteLine($"Task.Delay: {sw1.ElapsedMilliseconds} ms");

    // Task.Yield - بدون تاخیر
    var sw2 = System.Diagnostics.Stopwatch.StartNew();
    await Task.Yield();
    sw2.Stop();
    Console.WriteLine($"Task.Yield: {sw2.ElapsedMilliseconds} ms");
}
```

<a id="3124-زمان-استفاده-از-taskdelay"></a>
#### 3.1.2.4 زمان استفاده از Task.Delay()

**1. تاخیر زمانی واقعی:**

```csharp
public async Task RetryWithDelay(int maxRetries = 3)
{
    for (int i = 0; i < maxRetries; i++)
    {
        try
        {
            await ProcessAsync();
            return; // موفقیت
        }
        catch (Exception)
        {
            if (i < maxRetries - 1)
            {
                // تاخیر قبل از تلاش مجدد
                await Task.Delay(1000 * (i + 1)); // تاخیر افزایشی
            }
        }
    }
}
```

**2. شبیه‌سازی عملیات زمان‌بر:**

```csharp
public async Task SimulateLongOperation()
{
    Console.WriteLine("شروع عملیات");
    await Task.Delay(2000); // شبیه‌سازی 2 ثانیه کار
    Console.WriteLine("پایان عملیات");
}
```

**3. Rate Limiting (محدود کردن نرخ):**

```csharp
public async Task ProcessWithRateLimit(List<int> items, int delayMs)
{
    foreach (var item in items)
    {
        await ProcessItemAsync(item);
        await Task.Delay(delayMs); // تاخیر بین پردازش‌ها
    }
}
```

**4. Timeout (زمان تمام شده):**

```csharp
public async Task<string> ProcessWithTimeout(Func<Task<string>> operation, TimeSpan timeout)
{
    var delayTask = Task.Delay(timeout);
    var operationTask = operation();

    var completedTask = await Task.WhenAny(operationTask, delayTask);

    if (completedTask == delayTask)
    {
        throw new TimeoutException("زمان تمام شد");
    }

    return await operationTask;
}
```

<a id="3125-زمان-استفاده-از-taskyield"></a>
#### 3.1.2.5 زمان استفاده از Task.Yield()

**1. جلوگیری از فریز شدن UI:**

```csharp
public async Task ProcessLargeDataSet(List<int> data)
{
    for (int i = 0; i < data.Count; i++)
    {
        ProcessItem(data[i]);
        
        // هر 100 آیتم، کنترل را به UI برمی‌گردانیم
        if (i % 100 == 0)
        {
            await Task.Yield(); // UI را به‌روزرسانی می‌کند
        }
    }
}
```

**2. اجازه اجرای سایر کارها:**

```csharp
public async Task LongRunningOperation()
{
    for (int i = 0; i < 1000000; i++)
    {
        DoWork(i);
        
        // هر 10000 تکرار، به سایر کارها اجازه اجرا می‌دهیم
        if (i % 10000 == 0)
        {
            await Task.Yield();
        }
    }
}
```

**3. جلوگیری از انباشته شدن استک:**

```csharp
public async Task RecursiveOperation(int depth)
{
    if (depth <= 0) return;

    await DoWorkAsync();
    
    // در عمق‌های زیاد، کنترل را برمی‌گردانیم
    if (depth % 100 == 0)
    {
        await Task.Yield();
    }
    
    await RecursiveOperation(depth - 1);
}
```

**4. در حلقه‌های سنگین:**

```csharp
public async Task ProcessHeavyLoop()
{
    for (int i = 0; i < 1000000; i++)
    {
        HeavyCalculation(i);
        
        // هر 1000 تکرار، کنترل را برمی‌گردانیم
        if (i % 1000 == 0)
        {
            await Task.Yield();
        }
    }
}
```

<a id="3126-مثال-کاربردی-پردازش-با-بهروزرسانی-ui"></a>
#### 3.1.2.6 مثال کاربردی: پردازش با به‌روزرسانی UI

```csharp
public async Task ProcessDataWithUIUpdate(List<int> data, IProgress<int> progress)
{
    for (int i = 0; i < data.Count; i++)
    {
        // پردازش آیتم
        await ProcessItemAsync(data[i]);
        
        // به‌روزرسانی پیشرفت
        progress.Report((i + 1) * 100 / data.Count);
        
        // هر 10 آیتم، کنترل را به UI برمی‌گردانیم
        if (i % 10 == 0)
        {
            await Task.Yield(); // UI را به‌روزرسانی می‌کند
        }
    }
}
```

<a id="3127-مثال-کاربردی-تلاش-مجدد-با-تاخیر"></a>
#### 3.1.2.7 مثال کاربردی: تلاش مجدد(Retry) با تاخیر

```csharp
public async Task<T> RetryWithExponentialBackoff<T>(
    Func<Task<T>> operation,
    int maxRetries = 3)
{
    int delay = 100; // شروع با 100 میلی‌ثانیه
    
    for (int attempt = 0; attempt < maxRetries; attempt++)
    {
        try
        {
            return await operation();
        }
        catch (Exception ex) when (attempt < maxRetries - 1)
        {
            Console.WriteLine($"تلاش {attempt + 1} ناموفق. تاخیر {delay}ms");
            await Task.Delay(delay); // تاخیر واقعی
            delay *= 2; // تاخیر نمایی
        }
    }
    
    throw new Exception("همه تلاش‌ها ناموفق بودند");
}
```

<a id="3128-اشتباهات-رایج"></a>
#### 3.1.2.8 اشتباهات رایج

**1. استفاده از Task.Delay(0) به جای Task.Yield():**

```csharp
// ❌ نادرست: Task.Delay(0) ممکن است تاخیر داشته باشد
await Task.Delay(0);

// ✅ درست: برای بازگشت فوری کنترل
await Task.Yield();
```

**2. استفاده از Task.Yield() برای تاخیر زمانی:**

```csharp
// ❌ نادرست: Task.Yield() تاخیر ایجاد نمی‌کند
await Task.Yield(); // این تاخیر ایجاد نمی‌کند!

// ✅ درست: برای تاخیر واقعی
await Task.Delay(1000);
```

**3. استفاده بیش از حد از Task.Yield():**

```csharp
// ❌ نادرست: استفاده بیش از حد
for (int i = 0; i < 1000; i++)
{
    await Task.Yield(); // غیر ضروری و کند
    ProcessItem(i);
}

// ✅ بهتر: استفاده گاه‌به‌گاه
for (int i = 0; i < 1000; i++)
{
    ProcessItem(i);
    if (i % 100 == 0)
    {
        await Task.Yield();
    }
}
```

<a id="3129-بهترین-روشها"></a>
#### 3.1.2.9 بهترین روش‌ها

**1. برای تاخیر زمانی واقعی از عبارت Task.Delay() استفاده کنید:**

```csharp
// ✅ درست: تاخیر واقعی
await Task.Delay(1000);
```

**2. برای بازگشت کنترل به UI از عبارت Task.Yield() استفاده کنید:**

```csharp
// ✅ درست: بازگشت کنترل به UI
await Task.Yield();
```

**3. از عبارت Task.Delay() با CancellationToken استفاده کنید:**

```csharp
// ✅ درست: قابل لغو
await Task.Delay(1000, cancellationToken);
```

**4. از عبارت Task.Yield() در حلقه‌های سنگین استفاده کنید:**

```csharp
// ✅ درست: جلوگیری از فریز شدن
for (int i = 0; i < largeCount; i++)
{
    ProcessItem(i);
    if (i % 1000 == 0)
    {
        await Task.Yield();
    }
}
```

**5. از عبارت Task.Delay() برای محدود کردن نرخ(Rate Limiting) استفاده کنید:**

```csharp
// ✅ درست: محدود کردن نرخ
foreach (var item in items)
{
    await ProcessItemAsync(item);
    await Task.Delay(100); // تاخیر بین پردازش‌ها
}
```

#### خلاصه

- **عبارت Task.Delay():** تاخیر زمانی واقعی ایجاد می‌کند، برای تاخیر، تلاش مجدد(Retry)، و محدود کردن نرخ(Rate Limiting)
- **عبارت Task.Yield():** بدون تاخیر، کنترل را برمی‌گرداند، برای جلوگیری از فریز شدن UI و اجازه اجرای سایر کارها
- **تفاوت اصلی:** عبارت Task.Delay() تاخیر واقعی دارد، عبارت Task.Yield() فوری است
- **کاربرد عبارت Task.Delay():** تاخیر زمانی، تلاش مجدد(Retry)، محدود کردن نرخ(Rate Limiting)
- **کاربرد عبارت Task.Yield():** به‌روزرسانی UI، حلقه‌های سنگین، جلوگیری از انباشته شدن استک

<a id="313-استفاده-از-async-lambdas-و-async-delegates"></a>
### 3.1.3 استفاده از لامبداهای ناهمزمان(async lambdas) و نمایندگان ناهمزمان(async delegates)

در برنامه‌نویسی ناهمزمان(Asynchronous Programming) پیشرفته، استفاده از لامبداهای ناهمزمان(async lambdas) و نمایندگان ناهمزمان(async delegates) بسیار رایج است. این تکنیک‌ها به شما امکان می‌دهند که کد ناهمزمان را به صورت فشرده و قابل استفاده مجدد بنویسید.

<a id="3131-لامبداهای-ناهمزمان-async-lambdas"></a>
#### 3.1.3.1 لامبداهای ناهمزمان(async lambdas)

لامبداهای ناهمزمان(async lambdas) عبارات لامبدا هستند که از کلمه کلیدی `async` استفاده می‌کنند. این لامبداها می‌توانند عملیات ناهمزمان را انجام دهند.

**مثال پایه:**

```csharp
// لامبدای ناهمزمان(async lambda) ساده
Func<Task> asyncLambda = async () =>
{
    await Task.Delay(1000);
    Console.WriteLine("لامبدای ناهمزمان(async lambda) اجرا شد");
};

await asyncLambda();
```

**مثال با پارامتر:**

```csharp
// لامبدای ناهمزمان(async lambda) با پارامتر
Func<int, Task<int>> asyncLambdaWithParam = async (x) =>
{
    await Task.Delay(100);
    return x * 2;
};

int result = await asyncLambdaWithParam(5);
Console.WriteLine($"نتیجه: {result}");
```

**استفاده در LINQ:**

```csharp
var numbers = new[] { 1, 2, 3, 4, 5 };

// استفاده از لامبدای ناهمزمان(async lambda) در Select
var tasks = numbers.Select(async n =>
{
    await Task.Delay(100);
    return n * n;
});

var results = await Task.WhenAll(tasks);
Console.WriteLine($"نتایج: {string.Join(", ", results)}");
```

**استفاده در Task.Run:**

```csharp
// استفاده از لامبدای ناهمزمان(async lambda) در Task.Run
await Task.Run(async () =>
{
    await ProcessDataAsync();
    Console.WriteLine("پردازش کامل شد");
});
```

<a id="3132-نمایندگان-ناهمزمان-async-delegates"></a>
#### 3.1.3.2 نمایندگان ناهمزمان(async delegates)

نمایندگان ناهمزمان(async delegates) متدهای ناهمزمان هستند که می‌توانند به عنوان پارامتر یا متغیر استفاده شوند.

**مثال پایه:**

```csharp
// تعریف نماینده ناهمزمان(async delegate)
delegate Task<int> AsyncIntDelegate(int x);

// استفاده از نماینده ناهمزمان(async delegate)
AsyncIntDelegate asyncDelegate = async (x) =>
{
    await Task.Delay(100);
    return x * 3;
};

int result = await asyncDelegate(10);
Console.WriteLine($"نتیجه: {result}");
```

**استفاده با Func و Action:**

```csharp
// استفاده از Func برای نماینده ناهمزمان(async delegate)
Func<int, Task<string>> asyncFunc = async (id) =>
{
    await Task.Delay(200);
    return $"آیتم {id} پردازش شد";
};

string result = await asyncFunc(42);
Console.WriteLine(result);
```

**نماینده ناهمزمان(async delegate) به عنوان پارامتر:**

```csharp
public async Task ProcessWithDelegate(Func<int, Task<int>> processor, int value)
{
    int result = await processor(value);
    Console.WriteLine($"نتیجه پردازش: {result}");
}

// استفاده
await ProcessWithDelegate(async (x) =>
{
    await Task.Delay(100);
    return x * 2;
}, 5);
```

<a id="3133-مثال-کاربردی-پردازش-دسته-ای"></a>
#### 3.1.3.3 مثال کاربردی: پردازش دسته‌ای

```csharp
public async Task<List<TResult>> ProcessBatchAsync<TInput, TResult>(
    List<TInput> items,
    Func<TInput, Task<TResult>> processor)
{
    var tasks = items.Select(async item => await processor(item));
    return (await Task.WhenAll(tasks)).ToList();
}

// استفاده
var numbers = new List<int> { 1, 2, 3, 4, 5 };
var results = await ProcessBatchAsync(numbers, async n =>
{
    await Task.Delay(100);
    return n * n;
});
```

<a id="3134-مثال-کاربردی-فیلتر-ناهمزمان"></a>
#### 3.1.3.4 مثال کاربردی: فیلتر ناهمزمان

```csharp
public async Task<List<T>> FilterAsync<T>(
    List<T> items,
    Func<T, Task<bool>> predicate)
{
    var tasks = items.Select(async item =>
    {
        bool shouldInclude = await predicate(item);
        return shouldInclude ? item : default(T);
    });

    var results = await Task.WhenAll(tasks);
    return results.Where(r => r != null).ToList();
}

// استفاده
var numbers = new List<int> { 1, 2, 3, 4, 5, 6, 7, 8, 9, 10 };
var evenNumbers = await FilterAsync(numbers, async n =>
{
    await Task.Delay(10);
    return n % 2 == 0;
});
```

<a id="3135-نکات-مهم"></a>
#### 3.1.3.5 نکات مهم

**1. همیشه از await استفاده کنید:**

```csharp
// ❌ نادرست: فراموش کردن await
Func<Task> wrong = async () => Task.Delay(1000);

// ✅ درست: استفاده از await
Func<Task> correct = async () => await Task.Delay(1000);
```

**2. مدیریت استثنا:**

```csharp
// ✅ درست: مدیریت استثنا در لامبدای ناهمزمان(async lambda)
Func<Task> safeLambda = async () =>
{
    try
    {
        await ProcessAsync();
    }
    catch (Exception ex)
    {
        Console.WriteLine($"خطا: {ex.Message}");
    }
};
```

**3. استفاده از ConfigureAwait(false):**

```csharp
// ✅ درست: استفاده از ConfigureAwait(false) در کتابخانه‌ها
Func<Task> libraryLambda = async () =>
{
    await ProcessAsync().ConfigureAwait(false);
};
```

#### خلاصه

- **لامبداهای ناهمزمان(async lambdas):** عبارات لامبدا با کلمه کلیدی `async`
- **نمایندگان ناهمزمان(async delegates):** متدهای ناهمزمان که به عنوان پارامتر استفاده می‌شوند
- **کاربرد:** پردازش دسته‌ای، فیلتر ناهمزمان، استفاده در LINQ
- **نکات:** همیشه از await استفاده کنید، استثناها را مدیریت کنید

<a id="314-درک-async-و-await-در-محیط-چندنخی"></a>
### 3.1.4 درک async و await در محیط چندنخی

درک نحوه کار `async` و `await` در محیط چندنخی(Multi-threaded Environment) برای نوشتن کد ناهمزمان(Asynchronous) کارآمد و بدون باگ بسیار مهم است.

<a id="3141-نحوه-کار-async-await"></a>
#### 3.1.4.1 نحوه کار async و await

وقتی از `async` و `await` استفاده می‌کنید، کد شما به صورت ناهمزمان(Asynchronous) اجرا می‌شود اما این به معنای اجرای موازی(Parallel) نیست.

**مثال پایه:**

```csharp
public async Task ProcessAsync()
{
    Console.WriteLine($"شروع - نخ: {Thread.CurrentThread.ManagedThreadId}");
    await Task.Delay(1000);
    Console.WriteLine($"پایان - نخ: {Thread.CurrentThread.ManagedThreadId}");
}
```

**نکته مهم:** `await` نخ را مسدود نمی‌کند، بلکه کنترل را به فراخوانی‌کننده برمی‌گرداند.

<a id="3142-اجرای-موازی-در-محیط-چندنخی"></a>
#### 3.1.4.2 اجرای موازی(Parallel) در محیط چندنخی

برای اجرای موازی(Parallel) واقعی، باید از `Task.Run` یا `Parallel` استفاده کنید.

**مثال: اجرای موازی(Parallel):**

```csharp
public async Task ProcessParallelAsync()
{
    var tasks = new[]
    {
        Task.Run(async () => await ProcessItemAsync(1)),
        Task.Run(async () => await ProcessItemAsync(2)),
        Task.Run(async () => await ProcessItemAsync(3))
    };

    await Task.WhenAll(tasks);
}
```

<a id="3143-synchronizationcontext"></a>
#### 3.1.4.3 درک SynchronizationContext

عبارت `SynchronizationContext` تعیین می‌کند که کد بعد از `await` در کجا اجرا شود.

**مثال در UI:**

```csharp
// در WPF/WinForms
public async Task UpdateUIAsync()
{
    // این کد در UI thread اجرا می‌شود
    await LoadDataAsync();
    // این کد نیز در UI thread اجرا می‌شود (به دلیل SynchronizationContext)
    UpdateUI();
}
```

**استفاده از ConfigureAwait(false):**

```csharp
public async Task LibraryMethodAsync()
{
    // در کتابخانه‌ها، از ConfigureAwait(false) استفاده کنید
    await ProcessAsync().ConfigureAwait(false);
    // این کد ممکن است در نخ دیگری اجرا شود
}
```

<a id="3144-مثال-کاربردی-پردازش-موازی"></a>
#### 3.1.4.4 مثال کاربردی: پردازش موازی(Parallel)

```csharp
public async Task ProcessItemsParallelAsync(List<int> items)
{
    var semaphore = new SemaphoreSlim(Environment.ProcessorCount);
    var tasks = items.Select(async item =>
    {
        await semaphore.WaitAsync();
        try
        {
            await ProcessItemAsync(item);
        }
        finally
        {
            semaphore.Release();
        }
    });

    await Task.WhenAll(tasks);
}
```

#### خلاصه

- **async/await:** ناهمزمان(Asynchronous) است، نه موازی(Parallel)
- **اجرای موازی(Parallel):** از Task.Run یا Parallel استفاده کنید
- **SynchronizationContext:** تعیین می‌کند کد بعد از await کجا اجرا شود
- **ConfigureAwait(false):** در کتابخانه‌ها استفاده کنید

<a id="315-valuetask-برای-بهینهسازی-عملکرد"></a>
### 3.1.5 استفاده از ValueTask برای بهینه‌سازی عملکرد(Performance)

عبارت `ValueTask` و `ValueTask<T>` نسخه‌های بهینه‌شده `Task` و `Task<T>` هستند که برای کاهش تخصیص حافظه(Allocation) و بهبود عملکرد(Performance) طراحی شده‌اند.

<a id="3151-تفاوت-task-و-valuetask"></a>
#### 3.1.5.1 تفاوت Task و ValueTask

**Task:**
- یک کلاس است (reference type)
- همیشه در heap تخصیص می‌یابد
- برای عملیات ناهمزمان(Asynchronous) که معمولاً کامل می‌شوند

**ValueTask:**
- یک ساختار است (value type)
- ممکن است در stack تخصیص یابد
- برای عملیات ناهمزمان(Asynchronous) که معمولاً همزمان(Synchronous) کامل می‌شوند

<a id="3152-زمان-استفاده-از-valuetask"></a>
#### 3.1.5.2 زمان استفاده از ValueTask

**1. وقتی عملیات معمولاً همزمان(Synchronous) کامل می‌شود:**

```csharp
private Dictionary<int, string> _cache = new Dictionary<int, string>();

public ValueTask<string> GetValueAsync(int key)
{
    if (_cache.TryGetValue(key, out string value))
    {
        // معمولاً از کش برمی‌گردد - همزمان(Synchronous)
        return new ValueTask<string>(value);
    }

    // گاهی اوقات نیاز به عملیات ناهمزمان(Asynchronous) دارد
    return new ValueTask<string>(LoadValueAsync(key));
}
```

**2. برای کاهش تخصیص حافظه(Allocation):**

```csharp
public ValueTask<int> CalculateAsync(int x, int y)
{
    // اگر محاسبه سریع است، همزمان(Synchronous) برمی‌گردد
    if (x < 100 && y < 100)
    {
        return new ValueTask<int>(x + y);
    }

    // برای محاسبات سنگین، ناهمزمان(Asynchronous)
    return new ValueTask<int>(CalculateHeavyAsync(x, y));
}
```

<a id="3153-مثال-کاربردی-کش-ناهمزمان"></a>
#### 3.1.5.3 مثال کاربردی: کش ناهمزمان(Asynchronous Cache)

```csharp
public class AsyncCache<TKey, TValue>
{
    private readonly Dictionary<TKey, TValue> _cache = new();
    private readonly SemaphoreSlim _lock = new SemaphoreSlim(1);

    public async ValueTask<TValue> GetOrAddAsync(
        TKey key,
        Func<TKey, Task<TValue>> valueFactory)
    {
        // بررسی همزمان(Synchronous)
        _lock.Wait();
        try
        {
            if (_cache.TryGetValue(key, out TValue value))
            {
                return new ValueTask<TValue>(value);
            }
        }
        finally
        {
            _lock.Release();
        }

        // بارگذاری ناهمزمان(Asynchronous)
        TValue newValue = await valueFactory(key);

        _lock.Wait();
        try
        {
            if (!_cache.ContainsKey(key))
            {
                _cache[key] = newValue;
            }
            return new ValueTask<TValue>(_cache[key]);
        }
        finally
        {
            _lock.Release();
        }
    }
}
```

<a id="3154-نکات-مهم"></a>
#### 3.1.5.4 نکات مهم

**1. ValueTask را فقط یک بار await کنید:**

```csharp
// ❌ نادرست: await چندباره
ValueTask<int> vt = GetValueAsync();
int result1 = await vt;
int result2 = await vt; // خطا!

// ✅ درست: await یکباره
ValueTask<int> vt = GetValueAsync();
int result = await vt;
```

**2. برای عملیات معمولاً ناهمزمان(Asynchronous) از Task استفاده کنید:**

```csharp
// ✅ درست: برای عملیات معمولاً ناهمزمان(Asynchronous)
public async Task<string> DownloadAsync(string url)
{
    return await HttpClient.GetStringAsync(url);
}
```

**3. از ValueTask برای API های عمومی استفاده نکنید:**

```csharp
// ⚠️ احتیاط: ValueTask ممکن است در آینده تغییر کند
// برای API های عمومی، Task را ترجیح دهید
```

#### خلاصه

- **ValueTask:** برای عملیات معمولاً همزمان(Synchronous) که گاهی ناهمزمان(Asynchronous) می‌شوند
- **Task:** برای عملیات معمولاً ناهمزمان(Asynchronous)
- **مزیت ValueTask:** کاهش تخصیص حافظه(Allocation)
- **نکته:** ValueTask را فقط یک بار await کنید

<a id="32-مجموعههای-thread-safe"></a>
## 3.2 مجموعه‌های Thread-Safe

در برنامه‌نویسی چندنخی(Multi-threaded Programming)، استفاده از مجموعه‌های Thread-Safe برای مدیریت داده‌های مشترک بسیار مهم است. مجموعه‌های معمولی مانند `List<T>` و `Dictionary<TKey, TValue>` Thread-Safe نیستند و استفاده از آن‌ها در محیط چندنخی می‌تواند منجر به خطاهای جدی شود.

<a id="321-درک-مجموعههای-thread-safe-از-systemcollectionsconcurrent"></a>
### 3.2.1 درک مجموعه‌های Thread-Safe از System.Collections.Concurrent

فضای نام `System.Collections.Concurrent` شامل مجموعه‌های Thread-Safe است که برای استفاده در محیط چندنخی(Multi-threaded Environment) طراحی شده‌اند.

<a id="3211-چرا-مجموعههای-معمولی-thread-safe-نیستند"></a>
#### 3.2.1.1 چرا مجموعه‌های معمولی Thread-Safe نیستند؟

**مثال مشکل:**

```csharp
// ❌ نادرست: استفاده از List در محیط چندنخی
var list = new List<int>();

Parallel.For(0, 1000, i =>
{
    list.Add(i); // خطا: Race Condition!
});

// ممکن است خطاهای زیر رخ دهد:
// - ArgumentException
// - IndexOutOfRangeException
// - داده‌های از دست رفته
```

**مشکلات احتمالی:**

1. **Race Condition (شرایط مسابقه):** چندین نخ همزمان سعی می‌کنند داده اضافه کنند
2. **داده‌های از دست رفته:** برخی از داده‌ها ممکن است نوشته نشوند
3. **خطاهای غیرقابل پیش‌بینی:** خطاهای عجیب و غریب در زمان اجرا

<a id="3212-مجموعههای-concurrent"></a>
#### 3.2.1.2 مجموعه‌های Concurrent

فضای نام `System.Collections.Concurrent` شامل مجموعه‌های زیر است:

- **ConcurrentQueue<T>:** صف Thread-Safe
- **ConcurrentStack<T>:** پشته Thread-Safe
- **ConcurrentDictionary<TKey, TValue>:** دیکشنری Thread-Safe
- **ConcurrentBag<T>:** کیسه Thread-Safe (بدون ترتیب)
- **BlockingCollection<T>:** مجموعه مسدودکننده برای الگوی Producer-Consumer

**مثال استفاده صحیح:**

```csharp
// ✅ درست: استفاده از ConcurrentQueue
var queue = new ConcurrentQueue<int>();

Parallel.For(0, 1000, i =>
{
    queue.Enqueue(i); // Thread-Safe
});
```

<a id="3213-مزایای-مجموعههای-concurrent"></a>
#### 3.2.1.3 مزایای مجموعه‌های Concurrent

**1. Thread-Safety (ایمنی نخ):**
- همه عملیات Thread-Safe هستند
- نیاز به lock اضافی ندارند

**2. عملکرد(Performance):**
- بهینه‌سازی شده برای محیط چندنخی(Multi-threaded)
- استفاده از lock-free یا fine-grained locking

**3. سادگی استفاده:**
- API مشابه مجموعه‌های معمولی
- نیاز به مدیریت دستی lock ندارند

<a id="3214-معایب-و-محدودیت‌ها"></a>
#### 3.2.1.4 معایب و محدودیت‌ها

**1. عملکرد(Performance) در محیط تک‌نخی:**
- ممکن است کندتر از مجموعه‌های معمولی باشند
- برای محیط تک‌نخی(Single-threaded) مناسب نیستند

**2. محدودیت‌های API:**
- برخی عملیات موجود در مجموعه‌های معمولی را ندارند
- ممکن است ترتیب را حفظ نکنند

**3. استفاده از حافظه:**
- ممکن است حافظه بیشتری مصرف کنند

<a id="322-استفاده-از-concurrentqueue-concurrentdictionary-blockingcollection-concurrentstack"></a>
### 3.2.2 استفاده از ConcurrentQueue، ConcurrentDictionary، BlockingCollection، ConcurrentStack

در این بخش، نحوه استفاده از هر یک از این مجموعه‌های Thread-Safe را به تفصیل بررسی می‌کنیم.

<a id="3221-concurrentqueue"></a>
#### 3.2.2.1 استفاده از ConcurrentQueue<T>

عبارت `ConcurrentQueue<T>` یک صف Thread-Safe است که از الگوی FIFO (First In, First Out) پیروی می‌کند.

**متدهای اصلی:**

- `Enqueue(T item):` اضافه کردن به انتهای صف
- `TryDequeue(out T result):` حذف از ابتدای صف
- `TryPeek(out T result):` مشاهده بدون حذف
- `Count:` تعداد عناصر

**مثال پایه:**

```csharp
var queue = new ConcurrentQueue<int>();

// اضافه کردن
queue.Enqueue(1);
queue.Enqueue(2);
queue.Enqueue(3);

// حذف
if (queue.TryDequeue(out int item))
{
    Console.WriteLine($"حذف شد: {item}"); // 1
}

// مشاهده
if (queue.TryPeek(out int peeked))
{
    Console.WriteLine($"اولین عنصر: {peeked}"); // 2
}
```

**مثال کاربردی: Producer-Consumer:**

```csharp
public class ProducerConsumerQueue
{
    private readonly ConcurrentQueue<int> _queue = new();

    public void Produce(int item)
    {
        _queue.Enqueue(item);
        Console.WriteLine($"تولید شد: {item}");
    }

    public bool Consume(out int item)
    {
        return _queue.TryDequeue(out item);
    }
}

// استفاده
var pc = new ProducerConsumerQueue();

// Producer
Task.Run(() =>
{
    for (int i = 0; i < 10; i++)
    {
        pc.Produce(i);
        Thread.Sleep(100);
    }
});

// Consumer
Task.Run(() =>
{
    while (true)
    {
        if (pc.Consume(out int item))
        {
            Console.WriteLine($"مصرف شد: {item}");
        }
        Thread.Sleep(50);
    }
});
```

<a id="3222-concurrentstack"></a>
#### 3.2.2.2 استفاده از ConcurrentStack<T>

عبارت `ConcurrentStack<T>` یک پشته Thread-Safe است که از الگوی LIFO (Last In, First Out) پیروی می‌کند.

**متدهای اصلی:**

- `Push(T item):` اضافه کردن به بالای پشته
- `TryPop(out T result):` حذف از بالای پشته
- `TryPeek(out T result):` مشاهده بدون حذف
- `Count:` تعداد عناصر

**مثال پایه:**

```csharp
var stack = new ConcurrentStack<int>();

// اضافه کردن
stack.Push(1);
stack.Push(2);
stack.Push(3);

// حذف
if (stack.TryPop(out int item))
{
    Console.WriteLine($"حذف شد: {item}"); // 3
}

// مشاهده
if (stack.TryPeek(out int peeked))
{
    Console.WriteLine($"بالاترین عنصر: {peeked}"); // 2
}
```

**مثال کاربردی: Undo/Redo:**

```csharp
public class UndoRedoManager
{
    private readonly ConcurrentStack<string> _undoStack = new();
    private readonly ConcurrentStack<string> _redoStack = new();

    public void DoAction(string action)
    {
        _undoStack.Push(action);
        _redoStack.Clear(); // پاک کردن redo stack
        Console.WriteLine($"انجام شد: {action}");
    }

    public bool Undo(out string action)
    {
        if (_undoStack.TryPop(out action))
        {
            _redoStack.Push(action);
            Console.WriteLine($"Undo: {action}");
            return true;
        }
        return false;
    }

    public bool Redo(out string action)
    {
        if (_redoStack.TryPop(out action))
        {
            _undoStack.Push(action);
            Console.WriteLine($"Redo: {action}");
            return true;
        }
        return false;
    }
}
```

<a id="3223-concurrentdictionary"></a>
#### 3.2.2.3 استفاده از ConcurrentDictionary<TKey, TValue>

عبارت `ConcurrentDictionary<TKey, TValue>` یک دیکشنری Thread-Safe است که برای دسترسی همزمان(Concurrent) بهینه شده است.

**متدهای اصلی:**

- `TryAdd(TKey key, TValue value):` اضافه کردن
- `TryRemove(TKey key, out TValue value):` حذف
- `TryGetValue(TKey key, out TValue value):` دریافت مقدار
- `GetOrAdd(TKey key, TValue value):` دریافت یا اضافه کردن
- `AddOrUpdate(TKey key, TValue addValue, Func<TKey, TValue, TValue> updateValueFactory):` اضافه یا به‌روزرسانی

**مثال پایه:**

```csharp
var dict = new ConcurrentDictionary<string, int>();

// اضافه کردن
dict.TryAdd("key1", 1);
dict.TryAdd("key2", 2);

// دریافت
if (dict.TryGetValue("key1", out int value))
{
    Console.WriteLine($"مقدار: {value}");
}

// دریافت یا اضافه کردن
int result = dict.GetOrAdd("key3", 3);
Console.WriteLine($"نتیجه: {result}"); // 3
```

**مثال کاربردی: کش Thread-Safe:**

```csharp
public class ThreadSafeCache<TKey, TValue>
{
    private readonly ConcurrentDictionary<TKey, TValue> _cache = new();

    public TValue GetOrAdd(TKey key, Func<TKey, TValue> valueFactory)
    {
        return _cache.GetOrAdd(key, valueFactory);
    }

    public bool TryGet(TKey key, out TValue value)
    {
        return _cache.TryGetValue(key, out value);
    }

    public void Set(TKey key, TValue value)
    {
        _cache[key] = value;
    }

    public bool Remove(TKey key)
    {
        return _cache.TryRemove(key, out _);
    }
}
```

**مثال پیشرفته: شمارنده Thread-Safe:**

```csharp
var counters = new ConcurrentDictionary<string, int>();

Parallel.For(0, 1000, i =>
{
    counters.AddOrUpdate("counter", 1, (key, oldValue) => oldValue + 1);
});

Console.WriteLine($"شمارنده: {counters["counter"]}"); // 1000
```

<a id="3224-blockingcollection"></a>
#### 3.2.2.4 استفاده از BlockingCollection<T>

عبارت `BlockingCollection<T>` یک مجموعه مسدودکننده(Blocking) است که برای الگوی Producer-Consumer طراحی شده است.

**ویژگی‌های کلیدی:**

- مسدود کردن(Blocking) هنگام خالی بودن
- محدود کردن ظرفیت
- پشتیبانی از چندین Producer و Consumer

**مثال پایه:**

```csharp
var collection = new BlockingCollection<int>(boundedCapacity: 10);

// Producer
Task.Run(() =>
{
    for (int i = 0; i < 20; i++)
    {
        collection.Add(i); // اگر پر باشد، منتظر می‌ماند
        Console.WriteLine($"اضافه شد: {i}");
    }
    collection.CompleteAdding(); // اعلام پایان
});

// Consumer
Task.Run(() =>
{
    foreach (var item in collection.GetConsumingEnumerable())
    {
        Console.WriteLine($"مصرف شد: {item}");
    }
});
```

**مثال کاربردی: پردازش فایل:**

```csharp
public class FileProcessor
{
    private readonly BlockingCollection<string> _fileQueue = new(10);

    public void StartProcessing()
    {
        // Producer: خواندن فایل‌ها
        Task.Run(() =>
        {
            foreach (var file in Directory.GetFiles("."))
            {
                _fileQueue.Add(file);
            }
            _fileQueue.CompleteAdding();
        });

        // Consumers: پردازش فایل‌ها
        var consumers = Enumerable.Range(0, 4).Select(i =>
            Task.Run(() =>
            {
                foreach (var file in _fileQueue.GetConsumingEnumerable())
                {
                    ProcessFile(file);
                }
            })
        ).ToArray();

        Task.WaitAll(consumers);
    }

    private void ProcessFile(string file)
    {
        Console.WriteLine($"پردازش: {file}");
    }
}
```

<a id="3225-concurrentbag"></a>
#### 3.2.2.5 استفاده از ConcurrentBag<T>

عبارت `ConcurrentBag<T>` یک کیسه Thread-Safe است که ترتیب را حفظ نمی‌کند و برای هر نخ یک مجموعه محلی(Local) نگه می‌دارد.

**ویژگی‌های کلیدی:**

- ترتیب حفظ نمی‌شود
- بهینه برای سناریوهایی که هر نخ فقط عناصر خودش را اضافه/حذف می‌کند
- عملکرد(Performance) بهتر برای عملیات محلی

**مثال:**

```csharp
var bag = new ConcurrentBag<int>();

Parallel.For(0, 100, i =>
{
    bag.Add(i);
});

Console.WriteLine($"تعداد: {bag.Count}"); // 100
// ترتیب حفظ نمی‌شود
```

<a id="3226-مقایسه-مجموعه‌ها"></a>
#### 3.2.2.6 مقایسه مجموعه‌ها

| مجموعه | ترتیب | الگو | کاربرد اصلی |
|--------|-------|------|-------------|
| ConcurrentQueue | FIFO | صف | Producer-Consumer |
| ConcurrentStack | LIFO | پشته | Undo/Redo |
| ConcurrentDictionary | - | دیکشنری | کش، نگاشت‌ها |
| BlockingCollection | بستگی به پایه | مسدودکننده | Producer-Consumer با محدودیت |
| ConcurrentBag | ندارد | کیسه | جمع‌آوری نتایج |

<a id="323-طراحی-مجموعههای-thread-safe-سفارشی"></a>
### 3.2.3 طراحی مجموعه‌های Thread-Safe سفارشی

گاهی اوقات نیاز به طراحی مجموعه‌های Thread-Safe سفارشی دارید که نیازهای خاص شما را برآورده کنند.

<a id="3231-اصول-طراحی"></a>
#### 3.2.3.1 اصول طراحی

**1. استفاده از lock برای عملیات ترکیبی:**

```csharp
public class ThreadSafeList<T>
{
    private readonly List<T> _list = new();
    private readonly object _lock = new object();

    public void Add(T item)
    {
        lock (_lock)
        {
            _list.Add(item);
        }
    }

    public bool Remove(T item)
    {
        lock (_lock)
        {
            return _list.Remove(item);
        }
    }

    public T[] ToArray()
    {
        lock (_lock)
        {
            return _list.ToArray();
        }
    }
}
```

**2. استفاده از ReaderWriterLockSlim برای خواندن/نوشتن:**

```csharp
public class ThreadSafeDictionary<TKey, TValue>
{
    private readonly Dictionary<TKey, TValue> _dict = new();
    private readonly ReaderWriterLockSlim _lock = new ReaderWriterLockSlim();

    public TValue Get(TKey key)
    {
        _lock.EnterReadLock();
        try
        {
            return _dict[key];
        }
        finally
        {
            _lock.ExitReadLock();
        }
    }

    public void Set(TKey key, TValue value)
    {
        _lock.EnterWriteLock();
        try
        {
            _dict[key] = value;
        }
        finally
        {
            _lock.ExitWriteLock();
        }
    }
}
```

<a id="3232-مثال-کاربردی-صف-با-اولویت"></a>
#### 3.2.3.2 مثال کاربردی: صف با اولویت

```csharp
public class PriorityQueue<T>
{
    private readonly SortedDictionary<int, Queue<T>> _queues = new();
    private readonly object _lock = new object();

    public void Enqueue(T item, int priority)
    {
        lock (_lock)
        {
            if (!_queues.ContainsKey(priority))
            {
                _queues[priority] = new Queue<T>();
            }
            _queues[priority].Enqueue(item);
        }
    }

    public bool TryDequeue(out T item)
    {
        lock (_lock)
        {
            if (_queues.Count == 0)
            {
                item = default(T);
                return false;
            }

            var highestPriority = _queues.Keys.Max();
            var queue = _queues[highestPriority];
            
            item = queue.Dequeue();
            
            if (queue.Count == 0)
            {
                _queues.Remove(highestPriority);
            }
            
            return true;
        }
    }
}
```

<a id="3233-مثال-کاربردی-کش-با-انقضا"></a>
#### 3.2.3.3 مثال کاربردی: کش با انقضا

```csharp
public class ExpiringCache<TKey, TValue>
{
    private readonly ConcurrentDictionary<TKey, CacheItem<TValue>> _cache = new();
    private readonly TimeSpan _expiration;

    public ExpiringCache(TimeSpan expiration)
    {
        _expiration = expiration;
    }

    public void Set(TKey key, TValue value)
    {
        _cache[key] = new CacheItem<TValue>
        {
            Value = value,
            ExpiresAt = DateTime.UtcNow + _expiration
        };
    }

    public bool TryGet(TKey key, out TValue value)
    {
        if (_cache.TryGetValue(key, out var item))
        {
            if (DateTime.UtcNow < item.ExpiresAt)
            {
                value = item.Value;
                return true;
            }
            else
            {
                _cache.TryRemove(key, out _);
            }
        }
        
        value = default(TValue);
        return false;
    }

    private class CacheItem<T>
    {
        public T Value { get; set; }
        public DateTime ExpiresAt { get; set; }
    }
}
```

<a id="3234-بهترین-روشها"></a>
#### 3.2.3.4 بهترین روش‌ها

**1. استفاده از مجموعه‌های Concurrent موجود:**

```csharp
// ✅ درست: استفاده از ConcurrentDictionary
var dict = new ConcurrentDictionary<string, int>();
```

**2. استفاده از lock برای عملیات ترکیبی:**

```csharp
// ✅ درست: lock برای عملیات چندگانه
lock (_lock)
{
    if (!_dict.ContainsKey(key))
    {
        _dict[key] = value;
    }
}
```

**3. استفاده از ReaderWriterLockSlim برای خواندن/نوشتن:**

```csharp
// ✅ درست: ReaderWriterLockSlim برای خواندن زیاد
_lock.EnterReadLock();
try { /* خواندن */ }
finally { _lock.ExitReadLock(); }
```

**4. اجتناب از lock در عملیات زمان‌بر:**

```csharp
// ❌ نادرست: lock در عملیات I/O
lock (_lock)
{
    await DownloadFileAsync(); // مسدود کردن سایر نخ‌ها
}

// ✅ بهتر: lock فقط برای دسترسی به داده
string url;
lock (_lock)
{
    url = _urlQueue.Dequeue();
}
await DownloadFileAsync(url);
```

#### خلاصه

- **مجموعه‌های Concurrent:** Thread-Safe و بهینه برای محیط چندنخی(Multi-threaded)
- **ConcurrentQueue:** برای الگوی Producer-Consumer
- **ConcurrentDictionary:** برای کش و نگاشت‌های Thread-Safe
- **BlockingCollection:** برای Producer-Consumer با محدودیت ظرفیت
- **طراحی سفارشی:** استفاده از lock، ReaderWriterLockSlim، و اصول Thread-Safety

<a id="33-جریانهای-ناهمزمان-iasyncenumerable"></a>
## 3.3 جریان‌های ناهمزمان (IAsyncEnumerable)

جریان‌های ناهمزمان(Asynchronous Streams) با استفاده از `IAsyncEnumerable<T>` به شما امکان می‌دهند که داده‌ها را به صورت ناهمزمان(Asynchronous) و تدریجی تولید و مصرف کنید. این برای سناریوهایی که داده‌ها به صورت جریانی(Streaming) می‌آیند بسیار مفید است.

<a id="331-درک-جریانهای-ناهمزمان-با-iasyncenumerablet"></a>
### 3.3.1 درک جریان‌های ناهمزمان با IAsyncEnumerable<T>

عبارت `IAsyncEnumerable<T>` یک رابط(Interface) است که به شما امکان می‌دهد یک دنباله از مقادیر را به صورت ناهمزمان(Asynchronous) تولید کنید.

<a id="3311-مفهوم-پایه"></a>
#### 3.3.1.1 مفهوم پایه

**تفاوت با IEnumerable:**

- **IEnumerable:** داده‌ها به صورت همزمان(Synchronous) تولید می‌شوند
- **IAsyncEnumerable:** داده‌ها به صورت ناهمزمان(Asynchronous) تولید می‌شوند

**مثال مقایسه:**

```csharp
// IEnumerable - همزمان(Synchronous)
public IEnumerable<int> GetNumbers()
{
    for (int i = 0; i < 10; i++)
    {
        Thread.Sleep(100); // مسدود کننده
        yield return i;
    }
}

// IAsyncEnumerable - ناهمزمان(Asynchronous)
public async IAsyncEnumerable<int> GetNumbersAsync()
{
    for (int i = 0; i < 10; i++)
    {
        await Task.Delay(100); // غیر مسدود کننده
        yield return i;
    }
}
```

<a id="3312-ساختار-پایه"></a>
#### 3.3.1.2 ساختار پایه

**مثال ساده:**

```csharp
public async IAsyncEnumerable<int> GenerateNumbersAsync()
{
    for (int i = 0; i < 10; i++)
    {
        await Task.Delay(100);
        yield return i;
    }
}

// استفاده
await foreach (var number in GenerateNumbersAsync())
{
    Console.WriteLine(number);
}
```

<a id="3313-مزایای-جریانهای-ناهمزمان"></a>
#### 3.3.1.3 مزایای جریان‌های ناهمزمان(Asynchronous Streams)

**1. کاهش مصرف حافظه:**

```csharp
// ❌ نادرست: بارگذاری همه داده‌ها در حافظه
public async Task<List<string>> GetAllLinesAsync()
{
    var lines = new List<string>();
    using var reader = new StreamReader("file.txt");
    string line;
    while ((line = await reader.ReadLineAsync()) != null)
    {
        lines.Add(line); // همه خطوط در حافظه
    }
    return lines;
}

// ✅ درست: جریان ناهمزمان(Asynchronous Stream)
public async IAsyncEnumerable<string> ReadLinesAsync()
{
    using var reader = new StreamReader("file.txt");
    string line;
    while ((line = await reader.ReadLineAsync()) != null)
    {
        yield return line; // یک خط در هر زمان
    }
}
```

**2. شروع پردازش زودتر:**

```csharp
// با IAsyncEnumerable، می‌توانید به محض دریافت اولین داده، پردازش را شروع کنید
await foreach (var item in GetDataStreamAsync())
{
    ProcessItem(item); // پردازش فوری
}
```

**3. کارایی بهتر برای I/O:**

```csharp
// مناسب برای عملیات I/O که داده‌ها به صورت تدریجی می‌آیند
public async IAsyncEnumerable<byte[]> ReadChunksAsync(string filePath)
{
    using var stream = File.OpenRead(filePath);
    var buffer = new byte[4096];
    int bytesRead;
    
    while ((bytesRead = await stream.ReadAsync(buffer, 0, buffer.Length)) > 0)
    {
        yield return buffer[..bytesRead];
    }
}
```

<a id="3314-مثال-کاربردی-خواندن-فایل"></a>
#### 3.3.1.4 مثال کاربردی: خواندن فایل

```csharp
public async IAsyncEnumerable<string> ReadFileLinesAsync(string filePath)
{
    using var reader = new StreamReader(filePath);
    string line;
    
    while ((line = await reader.ReadLineAsync()) != null)
    {
        yield return line;
    }
}

// استفاده
await foreach (var line in ReadFileLinesAsync("data.txt"))
{
    Console.WriteLine(line);
    // پردازش هر خط به محض خواندن
}
```

<a id="3315-مثال-کاربردی-دریافت-داده-از-api"></a>
#### 3.3.1.5 مثال کاربردی: دریافت داده از API

```csharp
public async IAsyncEnumerable<DataItem> FetchDataStreamAsync(string apiUrl)
{
    using var client = new HttpClient();
    using var stream = await client.GetStreamAsync(apiUrl);
    using var reader = new StreamReader(stream);
    
    string line;
    while ((line = await reader.ReadLineAsync()) != null)
    {
        if (!string.IsNullOrWhiteSpace(line))
        {
            var item = JsonSerializer.Deserialize<DataItem>(line);
            if (item != null)
            {
                yield return item;
            }
        }
    }
}
```

<a id="332-استفاده-از-await-foreach-و-جریانهای-async-برای-بهینهسازی-عملکرد"></a>
### 3.3.2 استفاده از await foreach و جریان‌های async برای بهینه‌سازی عملکرد(Performance)

`await foreach` برای تکرار روی جریان‌های ناهمزمان(Asynchronous Streams) استفاده می‌شود و به شما امکان می‌دهد که داده‌ها را به صورت تدریجی و کارآمد پردازش کنید.

<a id="3321-استفاده-پایه-از-await-foreach"></a>
#### 3.3.2.1 استفاده پایه از await foreach

**مثال ساده:**

```csharp
public async IAsyncEnumerable<int> GetNumbersAsync()
{
    for (int i = 0; i < 100; i++)
    {
        await Task.Delay(10);
        yield return i;
    }
}

// استفاده
await foreach (var number in GetNumbersAsync())
{
    Console.WriteLine(number);
}
```

<a id="3322-بهینهسازی-عملکرد"></a>
#### 3.3.2.2 بهینه‌سازی عملکرد(Performance)

**1. پردازش موازی(Parallel) با محدودیت:**

```csharp
public async Task ProcessStreamParallelAsync(IAsyncEnumerable<Item> stream, int maxConcurrency)
{
    var semaphore = new SemaphoreSlim(maxConcurrency);
    var tasks = new List<Task>();

    await foreach (var item in stream)
    {
        await semaphore.WaitAsync();
        var task = Task.Run(async () =>
        {
            try
            {
                await ProcessItemAsync(item);
            }
            finally
            {
                semaphore.Release();
            }
        });
        tasks.Add(task);
    }

    await Task.WhenAll(tasks);
}
```

**2. پردازش دسته‌ای:**

```csharp
public async Task ProcessBatchAsync(IAsyncEnumerable<Item> stream, int batchSize)
{
    var batch = new List<Item>();

    await foreach (var item in stream)
    {
        batch.Add(item);

        if (batch.Count >= batchSize)
        {
            await ProcessBatchAsync(batch);
            batch.Clear();
        }
    }

    // پردازش باقی‌مانده
    if (batch.Count > 0)
    {
        await ProcessBatchAsync(batch);
    }
}
```

**3. فیلتر و تبدیل:**

```csharp
public async IAsyncEnumerable<ProcessedItem> ProcessStreamAsync(
    IAsyncEnumerable<RawItem> stream)
{
    await foreach (var item in stream)
    {
        if (IsValid(item))
        {
            var processed = await TransformAsync(item);
            yield return processed;
        }
    }
}
```

<a id="3323-مثال-کاربردی-پردازش-فایل-بزرگ"></a>
#### 3.3.2.3 مثال کاربردی: پردازش فایل بزرگ

```csharp
public async Task ProcessLargeFileAsync(string filePath)
{
    long totalBytes = 0;
    int lineCount = 0;

    await foreach (var line in ReadFileLinesAsync(filePath))
    {
        lineCount++;
        totalBytes += line.Length;
        
        // پردازش خط
        await ProcessLineAsync(line);
        
        // گزارش پیشرفت
        if (lineCount % 1000 == 0)
        {
            Console.WriteLine($"پردازش شد: {lineCount} خط");
        }
    }

    Console.WriteLine($"کل: {lineCount} خط، {totalBytes} بایت");
}
```

<a id="3324-مثال-کاربردی-دانلود-تدریجی"></a>
#### 3.3.2.4 مثال کاربردی: دانلود تدریجی

```csharp
public async Task DownloadAndProcessAsync(string url)
{
    using var client = new HttpClient();
    using var stream = await client.GetStreamAsync(url);
    using var reader = new StreamReader(stream);

    string line;
    while ((line = await reader.ReadLineAsync()) != null)
    {
        var data = ParseLine(line);
        await ProcessDataAsync(data);
        // پردازش به محض دریافت
    }
}
```

<a id="333-سناریوهای-پیشرفته-با-iasyncenumerable-جریان-داده-صفحهبندی"></a>
### 3.3.3 سناریوهای پیشرفته با IAsyncEnumerable (جریان داده، صفحه‌بندی)

در سناریوهای پیشرفته، می‌توانید از `IAsyncEnumerable` برای جریان داده(Streaming Data) و صفحه‌بندی(Paging) استفاده کنید.

<a id="3331-جریان-داده-streaming-data"></a>
#### 3.3.3.1 جریان داده(Streaming Data)

**مثال: جریان داده از API:**

```csharp
public async IAsyncEnumerable<DataItem> StreamDataFromApiAsync(string apiUrl)
{
    using var client = new HttpClient();
    using var response = await client.GetAsync(apiUrl, HttpCompletionOption.ResponseHeadersRead);
    using var stream = await response.Content.ReadAsStreamAsync();
    using var reader = new StreamReader(stream);

    string line;
    while ((line = await reader.ReadLineAsync()) != null)
    {
        if (line.StartsWith("data:"))
        {
            var json = line.Substring(5);
            var item = JsonSerializer.Deserialize<DataItem>(json);
            if (item != null)
            {
                yield return item;
            }
        }
    }
}
```

<a id="3332-صفحهبندی-paging"></a>
#### 3.3.3.2 صفحه‌بندی(Paging)

**مثال: صفحه‌بندی از API:**

```csharp
public async IAsyncEnumerable<T> GetAllPagesAsync(string baseUrl)
{
    int page = 1;
    bool hasMore = true;

    while (hasMore)
    {
        var url = $"{baseUrl}?page={page}&pageSize=100";
        var pageData = await FetchPageAsync(url);

        foreach (var item in pageData.Items)
        {
            yield return item;
        }

        hasMore = pageData.HasMore;
        page++;
    }
}

// استفاده
await foreach (var item in GetAllPagesAsync("https://api.example.com/data"))
{
    await ProcessItemAsync(item);
}
```

<a id="3333-مثال-کاربردی-پردازش-چند-منبع"></a>
#### 3.3.3.3 مثال کاربردی: پردازش چند منبع

```csharp
public async IAsyncEnumerable<T> MergeStreamsAsync(
    IAsyncEnumerable<T> stream1,
    IAsyncEnumerable<T> stream2)
{
    var enumerator1 = stream1.GetAsyncEnumerator();
    var enumerator2 = stream2.GetAsyncEnumerator();

    bool hasNext1 = await enumerator1.MoveNextAsync();
    bool hasNext2 = await enumerator2.MoveNextAsync();

    while (hasNext1 || hasNext2)
    {
        if (hasNext1 && (!hasNext2 || enumerator1.Current.CompareTo(enumerator2.Current) <= 0))
        {
            yield return enumerator1.Current;
            hasNext1 = await enumerator1.MoveNextAsync();
        }
        else if (hasNext2)
        {
            yield return enumerator2.Current;
            hasNext2 = await enumerator2.MoveNextAsync();
        }
    }
}
```

<a id="3334-مثال-کاربردی-فیلتر-و-تبدیل-زنجیره‌ای"></a>
#### 3.3.3.4 مثال کاربردی: فیلتر و تبدیل زنجیره‌ای

```csharp
public static async IAsyncEnumerable<TResult> SelectAsync<TSource, TResult>(
    this IAsyncEnumerable<TSource> source,
    Func<TSource, Task<TResult>> selector)
{
    await foreach (var item in source)
    {
        yield return await selector(item);
    }
}

public static async IAsyncEnumerable<T> WhereAsync<T>(
    this IAsyncEnumerable<T> source,
    Func<T, Task<bool>> predicate)
{
    await foreach (var item in source)
    {
        if (await predicate(item))
        {
            yield return item;
        }
    }
}

// استفاده
await foreach (var result in dataStream
    .WhereAsync(async x => await IsValidAsync(x))
    .SelectAsync(async x => await TransformAsync(x)))
{
    await ProcessAsync(result);
}
```

<a id="3335-مثال-کاربردی-پردازش-با-کنترل-جریان"></a>
#### 3.3.3.5 مثال کاربردی: پردازش با کنترل جریان

```csharp
public async Task ProcessWithBackpressureAsync(
    IAsyncEnumerable<Item> stream,
    int maxPendingItems)
{
    var semaphore = new SemaphoreSlim(maxPendingItems);
    var processingTasks = new List<Task>();

    await foreach (var item in stream)
    {
        await semaphore.WaitAsync();
        
        var task = Task.Run(async () =>
        {
            try
            {
                await ProcessItemAsync(item);
            }
            finally
            {
                semaphore.Release();
            }
        });
        
        processingTasks.Add(task);
    }

    await Task.WhenAll(processingTasks);
}
```

<a id="3336-نکات-مهم"></a>
#### 3.3.3.6 نکات مهم

**1. مدیریت منابع:**

```csharp
// ✅ درست: استفاده از using
public async IAsyncEnumerable<string> ReadLinesAsync(string filePath)
{
    using var reader = new StreamReader(filePath);
    string line;
    while ((line = await reader.ReadLineAsync()) != null)
    {
        yield return line;
    }
}
```

**2. مدیریت استثنا:**

```csharp
public async IAsyncEnumerable<T> SafeStreamAsync(IAsyncEnumerable<T> source)
{
    await foreach (var item in source)
    {
        try
        {
            yield return item;
        }
        catch (Exception ex)
        {
            Console.WriteLine($"خطا: {ex.Message}");
            // ادامه می‌دهد
        }
    }
}
```

**3. استفاده از ConfigureAwait(false):**

```csharp
// ✅ درست: در کتابخانه‌ها
public async IAsyncEnumerable<T> LibraryStreamAsync()
{
    await foreach (var item in GetItemsAsync().ConfigureAwait(false))
    {
        yield return item;
    }
}
```

#### خلاصه

- **IAsyncEnumerable:** برای تولید داده به صورت ناهمزمان(Asynchronous) و تدریجی
- **await foreach:** برای تکرار روی جریان‌های ناهمزمان(Asynchronous Streams)
- **مزایا:** کاهش مصرف حافظه، شروع پردازش زودتر، کارایی بهتر برای I/O
- **کاربردها:** جریان داده(Streaming Data)، صفحه‌بندی(Paging)، پردازش فایل‌های بزرگ
- **بهینه‌سازی:** پردازش موازی(Parallel)، پردازش دسته‌ای، کنترل جریان(Backpressure)

<a id="34-پیشگیری-از-قفل-مرگ-و-شرایط-مسابقه"></a>
## 3.4 پیشگیری از قفل مرگ و شرایط مسابقه (Deadlock Prevention and Race Conditions)

در برنامه‌نویسی چندنخی(Multi-threaded Programming)، دو مشکل اصلی وجود دارد: قفل مرگ(Deadlock) و شرایط مسابقه(Race Conditions). درک و پیشگیری از این مشکلات برای نوشتن کد Thread-Safe ضروری است.

<a id="341-درک-و-پیشگیری-از-قفل-مرگ-در-برنامههای-چندنخی"></a>
### 3.4.1 درک و پیشگیری از قفل مرگ در برنامه‌های چندنخی

قفل مرگ(Deadlock) زمانی رخ می‌دهد که دو یا چند نخ منتظر یکدیگر می‌مانند و هیچ‌کدام نمی‌تواند ادامه دهد.

<a id="3411-مفهوم-قفل-مرگ"></a>
#### 3.4.1.1 مفهوم قفل مرگ(Deadlock)

**شرایط لازم برای قفل مرگ:**

1. **Mutual Exclusion (انحصار متقابل):** منابع باید به صورت انحصاری استفاده شوند
2. **Hold and Wait (نگه‌داری و انتظار):** نخ‌ها منابع را نگه می‌دارند و منتظر منابع دیگر می‌مانند
3. **No Preemption (عدم پیش‌دستی):** منابع نمی‌توانند از نخ‌ها گرفته شوند
4. **Circular Wait (انتظار دایره‌ای):** زنجیره‌ای از نخ‌ها منتظر یکدیگر می‌مانند

**مثال کلاسیک قفل مرگ:**

```csharp
// ❌ نادرست: قفل مرگ
object lock1 = new object();
object lock2 = new object();

// نخ 1
Task.Run(() =>
{
    lock (lock1)
    {
        Thread.Sleep(100);
        lock (lock2) // منتظر lock2 می‌ماند
        {
            Console.WriteLine("نخ 1");
        }
    }
});

// نخ 2
Task.Run(() =>
{
    lock (lock2)
    {
        Thread.Sleep(100);
        lock (lock1) // منتظر lock1 می‌ماند
        {
            Console.WriteLine("نخ 2");
        }
    }
});
```

<a id="3412-تشخیص-قفل-مرگ"></a>
#### 3.4.1.2 تشخیص قفل مرگ(Deadlock)

**علائم قفل مرگ:**

- برنامه متوقف می‌شود و پاسخ نمی‌دهد
- CPU استفاده نمی‌شود (نخ‌ها منتظر هستند)
- در Debugger، نخ‌ها در حالت "Waiting" هستند

**ابزارهای تشخیص:**

```csharp
// استفاده از timeout برای تشخیص
if (Monitor.TryEnter(lockObject, TimeSpan.FromSeconds(5)))
{
    try
    {
        // کار
    }
    finally
    {
        Monitor.Exit(lockObject);
    }
}
else
{
    // احتمال قفل مرگ
    throw new TimeoutException("نمی‌توان قفل را گرفت - احتمال قفل مرگ");
}
```

<a id="3413-پیشگیری-از-قفل-مرگ"></a>
#### 3.4.1.3 پیشگیری از قفل مرگ(Deadlock)

**1. ترتیب یکسان قفل‌ها:**

```csharp
// ✅ درست: همیشه ترتیب یکسان
object lock1 = new object();
object lock2 = new object();

void Method1()
{
    lock (lock1)
    {
        lock (lock2)
        {
            // کار
        }
    }
}

void Method2()
{
    lock (lock1) // همان ترتیب
    {
        lock (lock2)
        {
            // کار
        }
    }
}
```

**2. استفاده از TryEnter با timeout:**

```csharp
// ✅ درست: استفاده از TryEnter
object lock1 = new object();
object lock2 = new object();

void SafeMethod()
{
    if (Monitor.TryEnter(lock1, TimeSpan.FromSeconds(1)))
    {
        try
        {
            if (Monitor.TryEnter(lock2, TimeSpan.FromSeconds(1)))
            {
                try
                {
                    // کار
                }
                finally
                {
                    Monitor.Exit(lock2);
                }
            }
        }
        finally
        {
            Monitor.Exit(lock1);
        }
    }
}
```

**3. کاهش تعداد قفل‌ها:**

```csharp
// ❌ نادرست: قفل‌های زیاد
lock (lock1)
{
    lock (lock2)
    {
        lock (lock3)
        {
            // کار
        }
    }
}

// ✅ بهتر: استفاده از یک قفل
lock (singleLock)
{
    // کار
}
```

**4. استفاده از SemaphoreSlim:**

```csharp
// ✅ درست: SemaphoreSlim با timeout
var semaphore = new SemaphoreSlim(1, 1);

if (await semaphore.WaitAsync(TimeSpan.FromSeconds(5)))
{
    try
    {
        // کار
    }
    finally
    {
        semaphore.Release();
    }
}
```

<a id="3414-مثال-کاربردی-پیشگیری-از-قفل-مرگ"></a>
#### 3.4.1.4 مثال کاربردی: پیشگیری از قفل مرگ

```csharp
public class DeadlockFreeBankAccount
{
    private readonly object _balanceLock = new object();
    private decimal _balance;

    public void Transfer(DeadlockFreeBankAccount target, decimal amount)
    {
        // ترتیب یکسان: همیشه از کوچک به بزرگ
        var lock1 = _balanceLock;
        var lock2 = target._balanceLock;

        if (ReferenceEquals(lock1, lock2))
        {
            // همان حساب
            lock (lock1)
            {
                _balance -= amount;
                target._balance += amount;
            }
        }
        else
        {
            // ترتیب بر اساس hash code
            if (lock1.GetHashCode() < lock2.GetHashCode())
            {
                lock (lock1)
                {
                    lock (lock2)
                    {
                        _balance -= amount;
                        target._balance += amount;
                    }
                }
            }
            else
            {
                lock (lock2)
                {
                    lock (lock1)
                    {
                        _balance -= amount;
                        target._balance += amount;
                    }
                }
            }
        }
    }
}
```

<a id="342-تشخیص-و-مدیریت-شرایط-مسابقه"></a>
### 3.4.2 تشخیص و مدیریت شرایط مسابقه

شرایط مسابقه(Race Condition) زمانی رخ می‌دهد که نتیجه عملیات به ترتیب اجرای نخ‌ها بستگی دارد.

<a id="3421-مفهوم-شرایط-مسابقه"></a>
#### 3.4.2.1 مفهوم شرایط مسابقه(Race Condition)

**مثال کلاسیک:**

```csharp
// ❌ نادرست: شرایط مسابقه
int counter = 0;

Parallel.For(0, 1000, i =>
{
    counter++; // Race Condition!
});

Console.WriteLine(counter); // ممکن است کمتر از 1000 باشد
```

**چرا رخ می‌دهد:**

1. نخ 1 مقدار `counter` را می‌خواند (مثلاً 5)
2. نخ 2 مقدار `counter` را می‌خواند (همچنان 5)
3. نخ 1 مقدار را افزایش می‌دهد (6)
4. نخ 2 مقدار را افزایش می‌دهد (6)
5. نتیجه: یک افزایش از دست رفته

<a id="3422-تشخیص-شرایط-مسابقه"></a>
#### 3.4.2.2 تشخیص شرایط مسابقه(Race Condition)

**علائم:**

- نتایج غیرقابل پیش‌بینی
- داده‌های از دست رفته
- خطاهای عجیب و غریب
- نتایج متفاوت در اجراهای مختلف

**ابزارهای تشخیص:**

```csharp
// استفاده از Interlocked برای عملیات اتمی
int counter = 0;

Parallel.For(0, 1000, i =>
{
    Interlocked.Increment(ref counter); // Thread-Safe
});

Console.WriteLine(counter); // همیشه 1000
```

<a id="3423-مدیریت-شرایط-مسابقه"></a>
#### 3.4.2.3 مدیریت شرایط مسابقه(Race Condition)

**1. استفاده از lock:**

```csharp
// ✅ درست: استفاده از lock
int counter = 0;
object lockObject = new object();

Parallel.For(0, 1000, i =>
{
    lock (lockObject)
    {
        counter++;
    }
});
```

**2. استفاده از Interlocked:**

```csharp
// ✅ درست: استفاده از Interlocked
int counter = 0;

Parallel.For(0, 1000, i =>
{
    Interlocked.Increment(ref counter);
});

// عملیات دیگر
Interlocked.Add(ref counter, 10);
Interlocked.Exchange(ref counter, 100);
```

**3. استفاده از Concurrent Collections:**

```csharp
// ✅ درست: استفاده از ConcurrentDictionary
var dict = new ConcurrentDictionary<string, int>();

Parallel.For(0, 1000, i =>
{
    dict.AddOrUpdate("key", 1, (key, oldValue) => oldValue + 1);
});
```

**4. Immutable Data Structures:**

```csharp
// ✅ درست: استفاده از Immutable
var list = ImmutableList<int>.Empty;

Parallel.For(0, 1000, i =>
{
    list = list.Add(i); // Thread-Safe
});
```

<a id="3424-مثال-کاربردی-مدیریت-شرایط-مسابقه"></a>
#### 3.4.2.4 مثال کاربردی: مدیریت شرایط مسابقه

```csharp
public class ThreadSafeCounter
{
    private int _count = 0;
    private readonly object _lock = new object();

    // روش 1: استفاده از lock
    public void IncrementLock()
    {
        lock (_lock)
        {
            _count++;
        }
    }

    // روش 2: استفاده از Interlocked
    public void IncrementInterlocked()
    {
        Interlocked.Increment(ref _count);
    }

    // روش 3: استفاده از Volatile
    private volatile int _volatileCount = 0;
    public void IncrementVolatile()
    {
        _volatileCount++;
    }

    public int GetCount()
    {
        return Interlocked.Read(ref _count);
    }
}
```

<a id="343-طراحی-الگوهای-کد-thread-safe-مثلاً-double-check-locking"></a>
### 3.4.3 طراحی الگوهای کد Thread-Safe (مثلاً double-check locking)

الگوهای Thread-Safe برای نوشتن کد ایمن در محیط چندنخی(Multi-threaded) ضروری هستند.

<a id="3431-الگوی-singleton-thread-safe"></a>
#### 3.4.3.1 الگوی Singleton Thread-Safe

**روش 1: Lazy Initialization با lock:**

```csharp
public class ThreadSafeSingleton
{
    private static ThreadSafeSingleton _instance;
    private static readonly object _lock = new object();

    private ThreadSafeSingleton() { }

    public static ThreadSafeSingleton Instance
    {
        get
        {
            if (_instance == null)
            {
                lock (_lock)
                {
                    if (_instance == null) // Double-check
                    {
                        _instance = new ThreadSafeSingleton();
                    }
                }
            }
            return _instance;
        }
    }
}
```

**روش 2: استفاده از Lazy<T>:**

```csharp
// ✅ بهتر: استفاده از Lazy<T>
public class ThreadSafeSingleton
{
    private static readonly Lazy<ThreadSafeSingleton> _instance =
        new Lazy<ThreadSafeSingleton>(() => new ThreadSafeSingleton());

    private ThreadSafeSingleton() { }

    public static ThreadSafeSingleton Instance => _instance.Value;
}
```

<a id="3432-الگوی-double-check-locking"></a>
#### 3.4.3.2 الگوی Double-Check Locking

**مثال کلاسیک:**

```csharp
public class ResourceManager
{
    private static ResourceManager _instance;
    private static readonly object _lock = new object();
    private bool _initialized = false;

    public static ResourceManager Instance
    {
        get
        {
            if (_instance == null) // Check 1: بدون lock
            {
                lock (_lock)
                {
                    if (_instance == null) // Check 2: با lock
                    {
                        _instance = new ResourceManager();
                        _instance._initialized = true;
                    }
                }
            }
            return _instance;
        }
    }
}
```

**نکات مهم:**

- Check اول برای جلوگیری از lock غیرضروری
- Check دوم برای اطمینان از یکتایی
- استفاده از volatile برای جلوگیری از بهینه‌سازی کامپایلر

<a id="3433-الگوی-initialization-on-demand"></a>
#### 3.4.3.3 الگوی Initialization on Demand

```csharp
public class LazyInitializedResource
{
    private Lazy<ExpensiveResource> _resource;

    public ExpensiveResource Resource
    {
        get
        {
            if (_resource == null)
            {
                _resource = new Lazy<ExpensiveResource>(
                    () => new ExpensiveResource(),
                    LazyThreadSafetyMode.ExecutionAndPublication);
            }
            return _resource.Value;
        }
    }
}
```

<a id="3434-الگوی-reader-writer-lock"></a>
#### 3.4.3.4 الگوی Reader-Writer Lock

```csharp
public class ThreadSafeCache<TKey, TValue>
{
    private readonly Dictionary<TKey, TValue> _cache = new();
    private readonly ReaderWriterLockSlim _lock = new ReaderWriterLockSlim();

    public TValue GetOrAdd(TKey key, Func<TKey, TValue> valueFactory)
    {
        // خواندن
        _lock.EnterReadLock();
        try
        {
            if (_cache.TryGetValue(key, out var value))
            {
                return value;
            }
        }
        finally
        {
            _lock.ExitReadLock();
        }

        // نوشتن
        _lock.EnterWriteLock();
        try
        {
            // Double-check
            if (_cache.TryGetValue(key, out var value))
            {
                return value;
            }

            var newValue = valueFactory(key);
            _cache[key] = newValue;
            return newValue;
        }
        finally
        {
            _lock.ExitWriteLock();
        }
    }
}
```

<a id="3435-الگوی-immutable-builder"></a>
#### 3.4.3.5 الگوی Immutable Builder

```csharp
public class ImmutableConfig
{
    public string Name { get; }
    public int Value { get; }

    private ImmutableConfig(string name, int value)
    {
        Name = name;
        Value = value;
    }

    public class Builder
    {
        private string _name;
        private int _value;

        public Builder WithName(string name)
        {
            _name = name;
            return this;
        }

        public Builder WithValue(int value)
        {
            _value = value;
            return this;
        }

        public ImmutableConfig Build()
        {
            return new ImmutableConfig(_name, _value);
        }
    }
}
```

<a id="3436-بهترین-روشها"></a>
#### 3.4.3.6 بهترین روش‌ها

**1. استفاده از Lazy<T> به جای Double-Check Locking:**

```csharp
// ✅ بهتر
private static readonly Lazy<Resource> _resource = 
    new Lazy<Resource>(() => new Resource());
```

**2. استفاده از Concurrent Collections:**

```csharp
// ✅ بهتر
var dict = new ConcurrentDictionary<string, int>();
```

**3. استفاده از Immutable Collections:**

```csharp
// ✅ بهتر
var list = ImmutableList<int>.Empty;
```

**4. اجتناب از mutable shared state:**

```csharp
// ❌ نادرست
public static int Counter = 0;

// ✅ بهتر
public static readonly ImmutableList<int> Items = ImmutableList<int>.Empty;
```

#### خلاصه

- **قفل مرگ:** زمانی که نخ‌ها منتظر یکدیگر می‌مانند
- **پیشگیری:** ترتیب یکسان قفل‌ها، استفاده از timeout، کاهش تعداد قفل‌ها
- **شرایط مسابقه:** زمانی که نتیجه به ترتیب اجرا بستگی دارد
- **مدیریت:** استفاده از lock، Interlocked، Concurrent Collections
- **الگوها:** Singleton، Double-Check Locking، Reader-Writer Lock
- **بهترین روش‌ها:** استفاده از Lazy<T>، Immutable Collections، اجتناب از mutable shared state

<a id="35-بهینهسازی-استفاده-از-thread-و-task"></a>
## 3.5 بهینه‌سازی استفاده از Thread و Task (Optimizing Thread and Task Usage)

بهینه‌سازی استفاده از Thread و Task برای بهبود عملکرد(Performance) و کاهش مصرف منابع ضروری است. در این بخش، روش‌های مختلف بهینه‌سازی را بررسی می‌کنیم.

<a id="351-کاهش-تعداد-thread-با-استفاده-از-taskwhenany-و-taskwhenall"></a>
### 3.5.1 کاهش تعداد Thread با استفاده از Task.WhenAny() و Task.WhenAll()

استفاده صحیح از `Task.WhenAny()` و `Task.WhenAll()` می‌تواند تعداد Threadهای مورد نیاز را کاهش دهد و عملکرد(Performance) را بهبود بخشد.

<a id="3511-مشکل-استفاده-از-thread-های-زیاد"></a>
#### 3.5.1.1 مشکل استفاده از Threadهای زیاد

**مثال نادرست:**

```csharp
// ❌ نادرست: ایجاد Thread برای هر عملیات
var threads = new List<Thread>();
for (int i = 0; i < 1000; i++)
{
    var thread = new Thread(() => ProcessItem(i));
    thread.Start();
    threads.Add(thread);
}

// منتظر ماندن برای همه
foreach (var thread in threads)
{
    thread.Join();
}
```

**مشکلات:**

- مصرف زیاد حافظه
- سربار(S overhead) ایجاد Thread
- مدیریت پیچیده

<a id="3512-استفاده-از-taskwhenall-برای-کاهش-thread"></a>
#### 3.5.1.2 استفاده از Task.WhenAll() برای کاهش Thread

**مثال درست:**

```csharp
// ✅ درست: استفاده از Task.WhenAll()
var tasks = new List<Task>();
for (int i = 0; i < 1000; i++)
{
    int item = i; // Capture
    tasks.Add(Task.Run(() => ProcessItem(item)));
}

await Task.WhenAll(tasks);
```

**مزایا:**

- استفاده از Thread Pool
- مدیریت خودکار Threadها
- کاهش مصرف حافظه

<a id="3513-استفاده-از-taskwhenany-برای-اولین-نتیجه"></a>
#### 3.5.1.3 استفاده از Task.WhenAny() برای اولین نتیجه

**مثال: دریافت اولین نتیجه:**

```csharp
// ✅ درست: استفاده از Task.WhenAny()
var tasks = new List<Task<string>>();
for (int i = 0; i < 10; i++)
{
    tasks.Add(FetchDataAsync(i));
}

var completedTask = await Task.WhenAny(tasks);
var result = await completedTask;
Console.WriteLine($"اولین نتیجه: {result}");

// لغو سایر تسک‌ها (اختیاری)
var cts = new CancellationTokenSource();
// ...
```

<a id="3514-محدود-کردن-تعداد-همزمان"></a>
#### 3.5.1.4 محدود کردن تعداد همزمان(Concurrent)

**مثال: SemaphoreSlim برای محدود کردن:**

```csharp
// ✅ درست: محدود کردن تعداد همزمان
var semaphore = new SemaphoreSlim(10); // حداکثر 10 همزمان
var tasks = new List<Task>();

for (int i = 0; i < 1000; i++)
{
    int item = i;
    tasks.Add(Task.Run(async () =>
    {
        await semaphore.WaitAsync();
        try
        {
            await ProcessItemAsync(item);
        }
        finally
        {
            semaphore.Release();
        }
    }));
}

await Task.WhenAll(tasks);
```

<a id="3515-مثال-کاربردی-پردازش-دسته-ای"></a>
#### 3.5.1.5 مثال کاربردی: پردازش دسته‌ای

```csharp
public async Task ProcessBatchAsync<T>(IEnumerable<T> items, int batchSize)
{
    var batches = items
        .Select((item, index) => new { item, index })
        .GroupBy(x => x.index / batchSize)
        .Select(g => g.Select(x => x.item).ToList())
        .ToList();

    var tasks = batches.Select(batch => ProcessBatchAsync(batch));
    await Task.WhenAll(tasks);
}

private async Task ProcessBatchAsync<T>(List<T> batch)
{
    foreach (var item in batch)
    {
        await ProcessItemAsync(item);
    }
}
```

<a id="352-الگوهای-لغو-تسک-با-cancellationtoken"></a>
### 3.5.2 الگوهای لغو تسک با CancellationToken

استفاده صحیح از `CancellationToken` برای لغو تسک‌ها(Tasks) ضروری است و می‌تواند از هدر رفتن منابع جلوگیری کند.

<a id="3521-الگوی-پایه-لغو"></a>
#### 3.5.2.1 الگوی پایه لغو

**مثال ساده:**

```csharp
public async Task ProcessWithCancellationAsync(CancellationToken cancellationToken)
{
    for (int i = 0; i < 1000; i++)
    {
        cancellationToken.ThrowIfCancellationRequested();
        await ProcessItemAsync(i);
    }
}

// استفاده
var cts = new CancellationTokenSource();
var task = ProcessWithCancellationAsync(cts.Token);

// لغو بعد از 5 ثانیه
cts.CancelAfter(TimeSpan.FromSeconds(5));

try
{
    await task;
}
catch (OperationCanceledException)
{
    Console.WriteLine("عملیات لغو شد");
}
```

<a id="3522-الگوی-لغو-چند-تسک"></a>
#### 3.5.2.2 الگوی لغو چند تسک

**مثال: لغو همه تسک‌ها:**

```csharp
public async Task ProcessMultipleWithCancellationAsync(
    IEnumerable<int> items,
    CancellationToken cancellationToken)
{
    var tasks = items.Select(item =>
        ProcessItemAsync(item, cancellationToken)
    ).ToArray();

    try
    {
        await Task.WhenAll(tasks);
    }
    catch (OperationCanceledException)
    {
        // همه تسک‌ها لغو می‌شوند
        Console.WriteLine("همه عملیات لغو شدند");
    }
}
```

<a id="3523-الگوی-لغو-با-اولین-نتیجه"></a>
#### 3.5.2.3 الگوی لغو با اولین نتیجه

**مثال: لغو سایر تسک‌ها پس از اولین نتیجه:**

```csharp
public async Task<string> GetFirstResultAsync(
    IEnumerable<Func<Task<string>>> operations,
    CancellationToken cancellationToken)
{
    var cts = CancellationTokenSource.CreateLinkedTokenSource(cancellationToken);
    var tasks = operations.Select(op => op()).ToArray();

    try
    {
        var completedTask = await Task.WhenAny(tasks);
        var result = await completedTask;

        // لغو سایر تسک‌ها
        cts.Cancel();

        return result;
    }
    catch (OperationCanceledException)
    {
        throw;
    }
}
```

<a id="3524-الگوی-لغو-با-timeout"></a>
#### 3.5.2.4 الگوی لغو با Timeout

**مثال: لغو خودکار با timeout:**

```csharp
public async Task ProcessWithTimeoutAsync(
    TimeSpan timeout,
    CancellationToken cancellationToken)
{
    using var cts = CancellationTokenSource.CreateLinkedTokenSource(cancellationToken);
    cts.CancelAfter(timeout);

    try
    {
        await LongRunningOperationAsync(cts.Token);
    }
    catch (OperationCanceledException) when (cts.IsCancellationRequested)
    {
        if (cancellationToken.IsCancellationRequested)
        {
            Console.WriteLine("لغو توسط کاربر");
        }
        else
        {
            Console.WriteLine("لغو به دلیل timeout");
        }
    }
}
```

<a id="3525-مثال-کاربردی-لغو-پردازش-فایل"></a>
#### 3.5.2.5 مثال کاربردی: لغو پردازش فایل

```csharp
public async Task ProcessFilesAsync(
    IEnumerable<string> filePaths,
    CancellationToken cancellationToken)
{
    var tasks = filePaths.Select(async filePath =>
    {
        cancellationToken.ThrowIfCancellationRequested();

        using var stream = File.OpenRead(filePath);
        var buffer = new byte[4096];
        int bytesRead;

        while ((bytesRead = await stream.ReadAsync(
            buffer, 0, buffer.Length, cancellationToken)) > 0)
        {
            cancellationToken.ThrowIfCancellationRequested();
            await ProcessChunkAsync(buffer, bytesRead);
        }
    });

    await Task.WhenAll(tasks);
}
```

<a id="353-تنظیم-دقیق-استفاده-از-thread-pool-برای-عملکرد-بهینه"></a>
### 3.5.3 تنظیم دقیق استفاده از Thread Pool برای عملکرد بهینه

تنظیم دقیق Thread Pool می‌تواند عملکرد(Performance) را به طور قابل توجهی بهبود بخشد.

<a id="3531-درک-thread-pool"></a>
#### 3.5.3.1 درک Thread Pool

**ویژگی‌های Thread Pool:**

- مجموعه‌ای از Threadهای از پیش ایجاد شده
- استفاده مجدد Threadها
- مدیریت خودکار تعداد Threadها

**مثال: استفاده از Thread Pool:**

```csharp
// ✅ درست: استفاده از Thread Pool
ThreadPool.QueueUserWorkItem(state =>
{
    ProcessItem((int)state);
}, itemId);

// یا با Task
Task.Run(() => ProcessItem(itemId));
```

<a id="3532-تنظیم-حداقل-و-حداکثر-thread"></a>
#### 3.5.3.2 تنظیم حداقل و حداکثر Thread

**مثال: تنظیم Thread Pool:**

```csharp
// تنظیم حداقل و حداکثر Thread
ThreadPool.SetMinThreads(10, 10); // Worker threads, I/O threads
ThreadPool.SetMaxThreads(100, 100);

// دریافت تنظیمات فعلی
ThreadPool.GetMinThreads(out int minWorker, out int minIO);
ThreadPool.GetMaxThreads(out int maxWorker, out int maxIO);

Console.WriteLine($"Worker: {minWorker}-{maxWorker}");
Console.WriteLine($"I/O: {minIO}-{maxIO}");
```

**نکات مهم:**

- تنظیمات بر کل برنامه تاثیر می‌گذارد
- باید با دقت انجام شود
- برای برنامه‌های خاص مناسب است

<a id="3533-مشاهده-وضعیت-thread-pool"></a>
#### 3.5.3.3 مشاهده وضعیت Thread Pool

**مثال: مشاهده وضعیت:**

```csharp
public void MonitorThreadPool()
{
    ThreadPool.GetAvailableThreads(out int availableWorker, out int availableIO);
    ThreadPool.GetMaxThreads(out int maxWorker, out int maxIO);

    int usedWorker = maxWorker - availableWorker;
    int usedIO = maxIO - availableIO;

    Console.WriteLine($"Worker Threads: {usedWorker}/{maxWorker}");
    Console.WriteLine($"I/O Threads: {usedIO}/{maxIO}");
}
```

<a id="3534-بهینهسازی-برای-عملیات-io"></a>
#### 3.5.3.4 بهینه‌سازی برای عملیات I/O

**مثال: استفاده از async/await برای I/O:**

```csharp
// ✅ درست: استفاده از async/await برای I/O
public async Task ReadFileAsync(string filePath)
{
    using var reader = new StreamReader(filePath);
    string line;
    while ((line = await reader.ReadLineAsync()) != null)
    {
        await ProcessLineAsync(line);
    }
}

// ❌ نادرست: استفاده از Thread Pool برای I/O
public void ReadFile(string filePath)
{
    ThreadPool.QueueUserWorkItem(_ =>
    {
        using var reader = new StreamReader(filePath);
        string line;
        while ((line = reader.ReadLine()) != null)
        {
            ProcessLine(line); // مسدود کننده
        }
    });
}
```

<a id="3535-بهینهسازی-برای-پردازش-cpu"></a>
#### 3.5.3.5 بهینه‌سازی برای پردازش CPU

**مثال: استفاده از Parallel برای CPU:**

```csharp
// ✅ درست: استفاده از Parallel برای CPU
Parallel.For(0, 1000, i =>
{
    ProcessCpuIntensiveTask(i);
});

// یا با Task
var tasks = Enumerable.Range(0, 1000)
    .Select(i => Task.Run(() => ProcessCpuIntensiveTask(i)))
    .ToArray();

await Task.WhenAll(tasks);
```

<a id="354-استفاده-از-configureawaitfalse-برای-کد-کتابخانه-برای-جلوگیری-از-قفل-مرگ"></a>
### 3.5.4 استفاده از ConfigureAwait(false) برای کد کتابخانه برای جلوگیری از قفل مرگ

استفاده از `ConfigureAwait(false)` در کد کتابخانه(Library Code) می‌تواند از قفل مرگ(Deadlock) جلوگیری کند و عملکرد(Performance) را بهبود بخشد.

<a id="3541-مفهوم-configureawait"></a>
#### 3.5.4.1 مفهوم ConfigureAwait

**تفاوت ConfigureAwait(true) و ConfigureAwait(false):**

- **ConfigureAwait(true):** ادامه اجرا در SynchronizationContext اصلی
- **ConfigureAwait(false):** ادامه اجرا در Thread Pool

**مثال پایه:**

```csharp
// بدون ConfigureAwait(false)
public async Task<string> GetDataAsync()
{
    await SomeOperationAsync(); // ادامه در SynchronizationContext اصلی
    return "data";
}

// با ConfigureAwait(false)
public async Task<string> GetDataAsync()
{
    await SomeOperationAsync().ConfigureAwait(false); // ادامه در Thread Pool
    return "data";
}
```

<a id="3542-جلوگیری-از-قفل-مرگ"></a>
#### 3.5.4.2 جلوگیری از قفل مرگ(Deadlock)

**مثال قفل مرگ:**

```csharp
// ❌ نادرست: قفل مرگ احتمالی
public async Task<string> GetDataAsync()
{
    // در UI Thread
    await SomeOperationAsync(); // منتظر می‌ماند
    return "data";
}

// در UI Thread
var result = GetDataAsync().Result; // مسدود می‌کند
// قفل مرگ!
```

**راه حل:**

```csharp
// ✅ درست: استفاده از ConfigureAwait(false)
public async Task<string> GetDataAsync()
{
    await SomeOperationAsync().ConfigureAwait(false);
    return "data";
}
```

<a id="3543-قوانین-استفاده"></a>
#### 3.5.4.3 قوانین استفاده

**زمان استفاده از ConfigureAwait(false):**

1. **در کد کتابخانه(Library Code):**
   ```csharp
   // ✅ درست: در کتابخانه
   public async Task<string> LibraryMethodAsync()
   {
       await SomeOperationAsync().ConfigureAwait(false);
       return "result";
   }
   ```

2. **زمانی که نیاز به SynchronizationContext ندارید:**
   ```csharp
   // ✅ درست: زمانی که نیاز به UI Thread ندارید
   public async Task ProcessDataAsync()
   {
       await FetchDataAsync().ConfigureAwait(false);
       await SaveDataAsync().ConfigureAwait(false);
   }
   ```

**زمان عدم استفاده:**

```csharp
// ❌ نادرست: در UI Code
public async Task UpdateUIAsync()
{
    await LoadDataAsync().ConfigureAwait(false);
    // خطا: نمی‌توانید UI را به‌روزرسانی کنید
    textBox.Text = "Updated"; // ممکن است در Thread اشتباه باشد
}
```

<a id="3544-مثال-کاربردی-کتابخانه"></a>
#### 3.5.4.4 مثال کاربردی: کتابخانه

```csharp
public class DataService
{
    public async Task<string> GetDataAsync(int id)
    {
        // استفاده از ConfigureAwait(false) در همه جا
        var data = await FetchFromDatabaseAsync(id).ConfigureAwait(false);
        var processed = await ProcessDataAsync(data).ConfigureAwait(false);
        return processed;
    }

    private async Task<string> FetchFromDatabaseAsync(int id)
    {
        await Task.Delay(100).ConfigureAwait(false);
        return $"Data {id}";
    }

    private async Task<string> ProcessDataAsync(string data)
    {
        await Task.Delay(50).ConfigureAwait(false);
        return data.ToUpper();
    }
}
```

<a id="3545-بهترین-روشها"></a>
#### 3.5.4.5 بهترین روش‌ها

**1. استفاده در همه await در کتابخانه:**

```csharp
// ✅ درست: استفاده در همه جا
public async Task<string> LibraryMethodAsync()
{
    await Operation1Async().ConfigureAwait(false);
    await Operation2Async().ConfigureAwait(false);
    return await Operation3Async().ConfigureAwait(false);
}
```

**2. عدم استفاده در UI Code:**

```csharp
// ❌ نادرست: در UI Code
public async Task UpdateUIAsync()
{
    await LoadDataAsync().ConfigureAwait(false);
    textBox.Text = "Updated"; // ممکن است خطا دهد
}

// ✅ درست: در UI Code
public async Task UpdateUIAsync()
{
    var data = await LoadDataAsync(); // بدون ConfigureAwait(false)
    textBox.Text = data; // در UI Thread
}
```

**3. استفاده در Extension Methods:**

```csharp
public static class AsyncExtensions
{
    public static async Task<T> WithTimeoutAsync<T>(
        this Task<T> task,
        TimeSpan timeout)
    {
        var delayTask = Task.Delay(timeout).ConfigureAwait(false);
        var completedTask = await Task.WhenAny(task, delayTask).ConfigureAwait(false);

        if (completedTask == delayTask)
        {
            throw new TimeoutException();
        }

        return await task.ConfigureAwait(false);
    }
}
```

#### خلاصه

- **کاهش Thread:** استفاده از Task.WhenAll() و Task.WhenAny() به جای Threadهای مستقیم
- **لغو تسک:** استفاده از CancellationToken برای لغو تسک‌ها
- **Thread Pool:** تنظیم دقیق برای عملکرد بهینه
- **ConfigureAwait(false):** استفاده در کد کتابخانه برای جلوگیری از قفل مرگ
- **بهترین روش‌ها:** استفاده صحیح از هر الگو در موقعیت مناسب

