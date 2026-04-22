# Deploy Raavi Spice to Hostinger

## Step-by-Step Guide

### Step 1: Build the Website

Open Command Prompt or PowerShell and run:

```bash
cd D:\Projects\raavi-nextjs
npm install
npm run build
```

This will:
1. Install all dependencies
2. Build the website
3. Create a folder called `out/` with all the files

### Step 2: Locate the Output Files

After the build completes, you'll find all your website files in:

```
D:\Projects\raavi-nextjs\out\
```

This folder contains:
- `index.html` (homepage)
- `our-story/index.html`
- `menu/index.html`
- `reservations/index.html`
- `contact/index.html`
- `_next/` folder (CSS, JS, images)
- Other assets

### Step 3: Upload to Hostinger

#### Method A: File Manager (Easiest)

1. **Log in to Hostinger**
   - Go to [hostinger.com](https://hostinger.com)
   - Log in to your account

2. **Open File Manager**
   - Click on your hosting plan
   - Go to **Files → File Manager**

3. **Navigate to public_html**
   - Click on `public_html` folder
   - This is your website's root directory

4. **Clear existing files (if any)**
   - Select all files
   - Delete them (make a backup first if needed)

5. **Upload the `out` folder contents**
   - Click **Upload** button
   - Select all files and folders from `D:\Projects\raavi-nextjs\out\`
   - Upload them to `public_html`

6. **Verify structure**
   Your `public_html` should look like:
   ```
   public_html/
   ├── index.html
   ├── our-story/
   ├── menu/
   ├── reservations/
   ├── contact/
   ├── _next/
   └── ...
   ```

#### Method B: FTP Upload

1. **Get FTP credentials from Hostinger**
   - Go to **Files → FTP Accounts**
   - Note your FTP host, username, password

2. **Use FileZilla or similar FTP client**
   - Host: your FTP host
   - Username: your FTP username
   - Password: your FTP password
   - Port: 21

3. **Upload files**
   - Connect to the server
   - Navigate to `public_html`
   - Upload all contents from `out/` folder

### Step 4: Connect Your Domain

1. **In Hostinger hPanel:**
   - Go to **Domains**
   - Click **Add Domain** or manage existing

2. **For raavispice.com:**
   - If domain is registered elsewhere, update nameservers to Hostinger's:
     - `ns1.dns-parking.com`
     - `ns2.dns-parking.com`
   - Or use Hostinger's DNS management

3. **Wait for propagation**
   - DNS changes can take up to 48 hours
   - Usually much faster (15-30 minutes)

### Step 5: Enable HTTPS (SSL)

1. **In Hostinger hPanel:**
   - Go to **Security → SSL**
   - Click **Install SSL**
   - Select your domain
   - Install the free Let's Encrypt certificate

2. **Force HTTPS:**
   - Go to **Security → SSL**
   - Enable "Force HTTPS"

### Step 6: Verify Your Site

1. Visit your domain: `https://raavispice.com`
2. Check all pages load correctly
3. Test on mobile
4. Verify animations work
5. Test the reservation form

## Troubleshooting

### "Page Not Found" on subpages

Make sure your `.htaccess` file in `public_html` contains:

```apache
<IfModule mod_rewrite.c>
  RewriteEngine On
  RewriteBase /
  RewriteRule ^index\.html$ - [L]
  RewriteCond %{REQUEST_FILENAME} !-f
  RewriteCond %{REQUEST_FILENAME} !-d
  RewriteCond %{REQUEST_FILENAME} !-l
  RewriteRule . /index.html [L]
</IfModule>
```

### Images not loading

- Check that the `_next/` folder was uploaded completely
- Verify file permissions (should be 644 for files, 755 for folders)

### Slow loading

- Enable **LiteSpeed Cache** in Hostinger
- Go to **Performance → Cache Manager**
- Enable caching

## Updating the Website

When you make changes:

1. Edit files in `D:\Projects\raavi-nextjs\src\`
2. Run `npm run build`
3. Upload the new `out/` folder contents to `public_html`
   - Or just upload the changed files

## Need Help?

- Hostinger Support: Available 24/7 via live chat
- Check Hostinger Knowledge Base for specific issues
