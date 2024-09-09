<p>
  <a href="https://github.com/jerlendds/osintbuddy">
    <img src="./ob/_assets/watermark.svg" height="130px" alt="OSINTBuddy Logo">
  </a>
  
-------

  **Notice** - This is a custom fork of OSINTBuddy prior to the migration to Go. This has been tailored for use with Ubuntu in WSL.

  🚧  <ins>Work in progress</ins>  🚧
<br/>

  [2023-12-12_19-07.webm](https://github.com/jerlendds/osintbuddy/assets/29207058/307ddc96-251d-4830-9fdc-c2a3719de369)
    
  ---
</p>

<details open="open">
<summary> 
<b>Table of Contents</b>
</summary>
  <ol>
    <li>
      <a href="#getting-started">Getting Started</a>
      <ul>
        <li><a href="#installation">Installation</a></li>
      </ul>
    </li>
    <li>
      <a href="#usage">Usage</a>
    </li>
  </ol>
</details>


## Getting Started

To start using OSINTBuddy, follow the installation steps. Maybe pray too.

These notes are from the original project. They have not yet not been tested yet. If they aren't required they will be removed.
**Note** - If you're on windows and want this project to work you need unix line endings [(context)](https://stackoverflow.com/a/13154031). Before cloning, run: `git config --global core.autocrlf false`.

**Note** - If you're running on an Apple device you will need to open your Docker app, select the `features in development` tab on the left hand side of the docker app, and enable/checkmark the `Use Rosetta for x86/64 emulation on Apple Silicon` option if you want this application to work.


## Installation

1. Clone the repo and submodules
   ```sh
   git clone --recurse-submodules https://github.com/0xdreadnaught/osintbuddy.git
   ```

2. Ensure WSL/Docker-Engine access
   ```sh
   wsl -l -v                  # check if Ubuntu is running WSLv2
   wsl --set-version ubuntu 2 # set to 2 if needed
   wsl --set-default ubuntu   # make ubuntu the default distro
   # check "Use the WSL 2 based engine" option in Docker-Engine
   ```

3. Start the stack with Docker:
   ```sh
   cd osintbuddy
   # ./launcher               # display usage information.
   # ./launcher bootstrap     # run for the first time to deploy.
   ./launcher start           # start the osintbuddy app.
   # ./launcher stop          # stop the osintbuddy app.
   ```
   - **Note:** the stack will take a few minutes to startup while Solr and ScyllaDB configure themselves for JanusGraph.
               If you try to connect before all the databases are ready you will encounter errors.

## Usage

- **URLs**
  - Frontend: http://localhost:3000
  - Casdoor: http://localhost:45910
  - Backend: http://localhost:48997/api
  - Documentation: http://localhost:48997/docs
- Access OSINTBuddy through the URLs provided for the frontend, backend, and documentation.
  - Default login:
    - *username:* osintbuddy
    - *password:* osintbuddy
