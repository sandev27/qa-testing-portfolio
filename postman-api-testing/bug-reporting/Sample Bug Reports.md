# Sample Bug Reports

## BUG-001

**Title:** Login button remains disabled after entering valid credentials

**Severity:** High

**Priority:** High

**Environment:** Chrome 137 / Windows 11

### Steps to Reproduce

1. Open login page
2. Enter valid username
3. Enter valid password
4. Observe Login button

### Expected Result

Login button should become enabled.

### Actual Result

Login button remains disabled.

### Status

Open

---

## BUG-002

**Title:** Search results display duplicate products

**Severity:** Medium

**Priority:** Medium

**Environment:** Chrome 137

### Steps to Reproduce

1. Open product search
2. Search for "phone"
3. Review results

### Expected Result

Each product should appear once.

### Actual Result

Several products appear multiple times.

### Status

Open

---

## BUG-003

**Title:** Profile image upload accepts unsupported file types

**Severity:** Medium

**Priority:** High

### Steps to Reproduce

1. Open Profile page
2. Upload .exe file
3. Submit

### Expected Result

Unsupported file should be rejected.

### Actual Result

File uploads successfully.

### Status

Open

---

## BUG-004

**Title:** Forgot Password link returns 404 page

**Severity:** High

**Priority:** High

### Steps to Reproduce

1. Open Login page
2. Click Forgot Password

### Expected Result

Password reset page opens.

### Actual Result

404 error displayed.

### Status

Open

---

## BUG-005

**Title:** Shopping cart total not updating after item removal

**Severity:** Critical

**Priority:** High

### Steps to Reproduce

1. Add product to cart
2. Remove product
3. Check total

### Expected Result

Total should update immediately.

### Actual Result

Old total remains displayed.

### Status

Open
