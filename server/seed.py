from datetime import datetime
from app import app
from models import db, Customer, CustomerProfile, Car, Rental

if __name__ == '__main__':
    with app.app_context():
        print("Starting seed...")

        # Drop and create all tables
        db.drop_all()
        db.create_all()

        # Insert your own customer profiles
        customer_profiles = [
            CustomerProfile(
                bio="Avid car enthusiast and traveler.",
                social_links="https://twitter.com/example",
                created_at=datetime.strptime('2024-01-15', '%Y-%m-%d')  # Convert string to datetime
            ),
            CustomerProfile(
                bio="Tech-savvy individual who loves road trips.",
                social_links="https://linkedin.com/in/example",
                created_at=datetime.strptime('2024-02-10', '%Y-%m-%d')  # Convert string to datetime
            )
        ]
        db.session.add_all(customer_profiles)
        db.session.commit()

        # Insert your own customers
        customers = [
            Customer(
                name="John Doe",
                email="john.doe@example.com",
                phone_number="555-1234",
                address="123 Main St, Anytown, USA",
                date_of_birth=datetime.strptime('1985-06-15', '%Y-%m-%d').date(),  # Convert string to date
                profile_id=customer_profiles[0].id
            ),
            Customer(
                name="Jane Smith",
                email="jane.smith@example.com",
                phone_number="555-5678",
                address="456 Oak St, Othertown, USA",
                date_of_birth=datetime.strptime('1990-09-23', '%Y-%m-%d').date(),  # Convert string to date
                profile_id=customer_profiles[1].id
            )
        ]
        db.session.add_all(customers)
        db.session.commit()

        # Insert your own cars
        cars = [
            Car(
                model="Corolla",
                brand="Toyota",
                year=2020,
                price_per_day=50.00,
                availability_status=True,
                color="Blue"
            ),
            Car(
                model="Civic",
                brand="Honda",
                year=2019,
                price_per_day=45.00,
                availability_status=False,
                color="Red"
            )
        ]
        db.session.add_all(cars)
        db.session.commit()

        # Insert your own rentals
        rentals = [
            Rental(
                start_date=datetime.strptime('2024-08-01', '%Y-%m-%d'),  # Use datetime for start_date
                end_date=datetime.strptime('2024-08-05', '%Y-%m-%d'),    # Use datetime for end_date
                total_price=200.00,
                status="completed",
                booking_date=datetime.strptime('2024-07-25', '%Y-%m-%d'),  # Use datetime for booking_date
                customer_id=customers[0].id,
                car_id=cars[0].id
            ),
            Rental(
                start_date=datetime.strptime('2024-09-10', '%Y-%m-%d'),  # Use datetime for start_date
                end_date=datetime.strptime('2024-09-15', '%Y-%m-%d'),    # Use datetime for end_date
                total_price=225.00,
                status="booked",
                booking_date=datetime.strptime('2024-09-01', '%Y-%m-%d'),  # Use datetime for booking_date
                customer_id=customers[1].id,
                car_id=cars[1].id
            )
        ]
        db.session.add_all(rentals)
        db.session.commit()

        print("Seeding with custom data completed!")
