import os

print("--- Running test_import.py ---")
try:
    print(f"Successfully imported 'os' module.")
    cwd = os.getcwd()
    print(f"Current working directory: {cwd}")
    print("✅ Test complete.")
except Exception as e:
    print(f"❌ An error occurred: {e}")
