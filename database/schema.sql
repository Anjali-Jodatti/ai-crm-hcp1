CREATE TABLE hcp_interactions (
    id SERIAL PRIMARY KEY,
    hcp_name VARCHAR(255),
    specialty VARCHAR(255),
    interaction_type VARCHAR(50),
    notes TEXT,
    follow_up_date DATE,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);
