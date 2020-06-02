import pyodbc

def connDB():
    conn = pyodbc.connect('Driver={ODBC Driver 17 for SQL Server};'
                        'Server=DESKTOP-SOIP0TT\BHASKAR;'
                      'Database=AAMEYS;'
                      'Trusted_Connection=yes;')
    return conn