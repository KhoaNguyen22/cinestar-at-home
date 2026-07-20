package k.com.cinestar.repository;

import k.com.cinestar.entity.SnackAndDrink;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface SnackAndDrinkRepository extends JpaRepository<SnackAndDrink,Integer> {
}
