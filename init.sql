CREATE TABLE IF NOT EXISTS Users (
	Uid SERIAL PRIMARY KEY,
	Username VARCHAR(255) NOT NULL,
	City VARCHAR(255) NOT NULL,
	Friend INT,
	FOREIGN KEY (Friend) REFERENCES Users(Uid)
);
