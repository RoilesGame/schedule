from pydantic.color import Color
from sqlalchemy import types
from sqlalchemy_utils.types.color import python_colour_type
from sqlalchemy_utils.types.scalar_coercible import ScalarCoercible


class ColorType(ScalarCoercible, types.TypeDecorator):
    """
    ColorType provides a way for saving Color (from colour_ package) objects
    into database. ColorType saves Color objects as strings on the way in and
    converts them back to objects when querying the database.

    ::


        from colour import Color
        from sqlalchemy_utils import ColorType


        class Document(Base):
            __tablename__ = 'document'
            id = sa.Column(sa.Integer, autoincrement=True)
            name = sa.Column(sa.Unicode(50))
            background_color = sa.Column(ColorType)


        document = Document()
        document.background_color = Color('#F5F5F5')
        session.commit()


    Querying the database returns Color objects:

    ::

        document = session.query(Document).first()

        document.background_color.hex
        # '#f5f5f5'


    .. _colour: https://github.com/vaab/colour
    """
    impl = types.Unicode(20)
    python_type = python_colour_type
    cache_ok = True

    def __init__(self, max_length=20, *args, **kwargs):
        super().__init__(*args, **kwargs)
        self.impl = types.Unicode(max_length)

    def process_bind_param(self, value, dialect):
        if value and isinstance(value, Color):
            return value.as_hex()
        return value

    def process_result_value(self, value, dialect):
        if value:
            return Color(value)
        return value

    def _coerce(self, value):
        if value is not None and not isinstance(value, Color):
            return Color(value)
        return value
