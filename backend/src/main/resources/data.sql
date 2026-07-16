INSERT INTO cinema (name, location, address) VALUES
                                                 ('Cinestar Hue', 'Hue', '25 Hai Ba Trung, Hue'),
                                                 ('CGV Vincom', 'Hue', 'Vincom Plaza Hue, Hung Vuong'),
                                                 ('Lotte Cinema', 'Da Nang', 'Lotte Mart, Da Nang'),
                                                 ('Galaxy Cinema', 'Ho Chi Minh', 'Nguyen Du, District 1'),
                                                 ('BHD Star Cineplex', 'Ha Noi', 'Pham Ngoc Thach, Dong Da');
INSERT INTO movie (poster_url, title, duration, country,subtitle, age_rating, description, content) VALUES
                                                                                                         ('poster1.jpg', 'PHIM ĐIỆN ẢNH DORAEMON: NOBITA VÀ LÂU ĐÀI DƯỚI ĐÁY BIỂN (PHIÊN BẢN MỚI) LT (P)', 181, 'USA', 'Vietnamese', 'PG-13', 'Final battle of Avengers', 'Superhero action'),
                                                                                                          ('poster2.jpg', 'Parasite', 132, 'Korea', 'Vietnamese', 'R', 'Class divide story', 'Thriller drama'),
                                                                                                          ('poster3.jpg', 'Your Name', 106, 'Japan', 'Vietnamese', 'PG', 'Body swap love story', 'Romance fantasy'),
                                                                                                          ('poster4.jpg', 'The Dark Knight', 152, 'USA', 'Vietnamese', 'PG-13', 'Batman vs Joker', 'Action crime'),
                                                                                                          ('poster5.jpg', 'Dune', 155, 'USA', 'Vietnamese', 'PG-13', 'Desert planet war', 'Sci-fi epic');
INSERT INTO genre (name) VALUES
                             ('ACTION'),
                             ('DRAMA'),
                             ('ROMANCE'),
                             ('SCI_FI'),
                             ('THRILLER');
INSERT INTO movie_genre (movie_id, genre_id) VALUES
-- Avengers
(1, 1),
(1, 4),

-- Parasite
(2, 2),
(2, 5),

-- Your Name
(3, 3),

-- Dark Knight
(4, 1),
(4, 2),

-- Dune
(5, 4),
(5, 1);

INSERT INTO screen (name,cinema_id) VALUES
                                        ('R1',1),
                                        ('R2',2);

    INSERT INTO seat (seat_number, seat_type, screen_id) VALUES
    ('A1','SINGLE',1),
    ('A2','SINGLE',1),
    ('B1','DOUBLE',1),
    ('A1','SINGLE',2),
    ('B1','DOUBLE',2);
INSERT INTO `show` (movie_id, screen_id, start_time, end_time) VALUES
                                                                  (1, 1, NOW(), DATE_ADD(NOW(), INTERVAL 90 MINUTE)),
                                                                  (1, 2, DATE_ADD(NOW(), INTERVAL 2 DAY ), DATE_ADD(NOW(), INTERVAL 90 MINUTE)),
                                                                  (
                                                                      1,
                                                                      2,
                                                                      DATE_ADD(NOW(), INTERVAL 10 MINUTE ),
                                                                      DATE_ADD(DATE_ADD(NOW(), INTERVAL 2 DAY), INTERVAL 120 MINUTE)
                                                                  ),
                                                                  (2, 1, NOW(), DATE_ADD(NOW(), INTERVAL 90 MINUTE)),
                                                                  (2, 2, NOW(), DATE_ADD(NOW(), INTERVAL 90 MINUTE)),
                                                                  (1, 1, NOW(), DATE_ADD(NOW(), INTERVAL 90 MINUTE)),
                                                                  (3, 1, NOW(), DATE_ADD(NOW(), INTERVAL 90 MINUTE)),
                                                                  (4, 1, NOW(), DATE_ADD(NOW(), INTERVAL 90 MINUTE)),
                                                                  (5, 1, NOW(), DATE_ADD(NOW(), INTERVAL 90 MINUTE));

